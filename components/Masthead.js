import style from "./Masthead.module.css"
import Link from "next/link"
import { Button } from "react-bootstrap"
export default function Masthead() {
  return (
    <>
      <header
        className="masthead"
        style={{
          backgroundImage: "url('/img/houses.jpg')"
        }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-10 mx-auto">
              <div className="page-heading">
                <h1>The deal of the day, the Fake way.</h1>

                <span className="mt-5">
                  <Link href="tenant/top_preferences" passHref>
                    <Button variant="primary" className="mt-5" size="lg">
                      Start Faking
                    </Button>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
