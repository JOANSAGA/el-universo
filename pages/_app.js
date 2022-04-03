import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { ToastProvider } from "react-toast-notifications";
import { ContextAuthProvider } from "../context/AuthContext";

import { Fragment } from "react";
import { useAuthUser } from "../hooks/useAuthUser";

function MyApp({ Component, pageProps }) {
  useAuthUser();

  return (
    <Fragment>
      <ToastProvider
        autoDismiss
        autoDismissTimeout={3000}
        placement="top-right"
      >
        <Component {...pageProps} />
      </ToastProvider>
    </Fragment>
  );
}

export default MyApp;
