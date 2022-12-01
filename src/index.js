import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";

import AOS from "aos";
import "aos/dist/aos.css";

import App from "./App";
import "./index.css";

import { Helmet } from "react-helmet";

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  const [loaderDisplay, setLoaderDisplay] = useState("");
  const [contentDisplay, setContentDisplay] = useState("d-none");

  setTimeout(() => {
    setLoaderDisplay("d-none");
    setContentDisplay("");
  }, 5000);

  return (
    <React.Fragment>
      <div className={loaderDisplay}>
        <div className="artboard">
          <div className="domino">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className={contentDisplay}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>GDSC - PCCOER</title>
          <meta name="title" content="GDSC - PCCOER" />
          <meta
            name="description"
            content="Google Developer Student Clubs (GDSC), PCCOER  is ambitious towards building a community that aims to change the world with technology. We do this by organizing insightful events, hands-on workshops, interactive sessions, hackathons, study-jams and more. We believe in creating a peer-to-peer learning environment to grow together as a community."
          />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="gdsc, gdsc PCCOER, gdsc PCCOER, dsc, dsc PCCOER, dsc PCCOER, gdsc, dsc, dsc, PCCOER dsc, PCCOER dsc, PCCOER gdsc, gdsc-PCCOER, gdsc, dsc-PCCOER, dsc"
          />
          <meta
            name="author"
            content="Google Developer Student Club | PCCOER Ravet- Pune"
          />
          <meta
            name="publisher"
            content="Google Developer Student Club | PCCOER Ravet- Pune"
          />
          <meta
            name="copyright"
            content="Google Developer Student Club | PCCOER Ravet- Pune"
          />
          <meta name="audience" content="Everyone" />
          <meta name="google-site-verification" content="" />
          <meta
            property="og:url"
            content="https://vedantaz.github.io/web_gdsc/#/"
          />
          <meta
            property="og:title"
            content="PCCOER Ravet- Pune | Google Developer Student Clubs"
          />
          <meta property="og:description" content="" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://vedantaz.github.io/web_gdsc/#/" />
        </Helmet>
        <HashRouter>
          <Navbar />
          <App />
          <Footer />
        </HashRouter>
      </div>
    </React.Fragment>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
