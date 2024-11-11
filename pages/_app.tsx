import * as React from "react";
import "normalize.css"
import "../src/styles/styles.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  );
};

export default MyApp;