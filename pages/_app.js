import React, { useState, useReducer, useEffect } from "react";
import { useImmerReducer } from "use-immer";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "lato-font/css/lato-font.min.css";
import "../styles/main.css";

axios.defaults.baseURL = process.env.BACKENDURL || "http://localhost:1337/";

function MyApp({ Component, pageProps }) {
  const [storageItem, setStorageItem] = useState("");
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    setStorageItem(isLoggedIn);
  }, []);
  const initialState = {
    loggedIn: storageItem,
    isSearchOpen: false,
    isChatOpen: false,
    unreadChatCount: 0,
    serverStateID: null,
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true;
        localStorage.setItem("loggedIn", draft.loggedIn);
        draft.user = action.data;
        localStorage.setItem("user", draft.user);
        draft.token = action.token;
        localStorage.setItem("token", draft.token);
        draft.userID = action.userID;
        localStorage.setItem("userID", draft.userID);
        return;
      case "logout":
        draft.loggedIn = false;
        localStorage.removeItem("loggedIn");
        return;
      case "serverStateID":
        draft.serverStateID = action.serverStateID;
        return;
      case "tenantPreferencesID":
        draft.tenantPreferencesID = action.tenantPreferencesID;
        return;
      case "savePageState":
        const response = axios
          .put("onboarding-states/" + action.userID, {
            data: {
              user: action.userID,
              route: action.route,
            },

            headers: {
              Authorization: "Bearer " + action.token,
            },
          })
          .then((response) => {})
          .catch((error) => {
            console.log("An error occurred:", error.response);
          });
        return;
    }
  }
  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;