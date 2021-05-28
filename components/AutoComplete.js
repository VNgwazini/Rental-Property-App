// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import { useState, useEffect, useContext } from "react";
import fetch from "cross-fetch";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function MAutocomplete(props) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedObject, setSelectedObject] = useState({});

  var url = `http://localhost:1337/property-overviews?street_address_contains=${selectedLocation}&_limit=10`;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch(url);
      const properties = await response.json();

      const arr = properties.map((p) => p);
      if (active) {
        setOptions(arr);
      }
    })();

    return () => {
      active = false;
    };
  }, [selectedLocation, loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  function handleChange(event, value) {
    const convertedLocation = value.toString();
    setSelectedLocation(convertedLocation);
    const obj = options.filter((o) => {
      return o.street_address === convertedLocation;
    })[0];
    setSelectedObject(obj);
    parent(obj);
  }

  function parent(obj) {
    props.setSelectedObject(obj);
  }

  return (
    <Autocomplete
      onInputChange={handleChange}
      id="asynchronous-demo"
      style={{ width: "100%" }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) =>
        option.street_address === value.street_address
      }
      getOptionLabel={(option) => option.street_address}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Enter Address"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
