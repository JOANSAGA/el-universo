import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { ToastProvider } from "react-toast-notifications";
import { ContextAuthProvider } from "../context/AuthContext";

import { Fragment } from "react";
import { useAuthUser } from "../hooks/useAuthUser";
import { useContextUser } from "../context/AuthContext";
import Loading from "../components/loading";

function MyApp({ Component, pageProps }) {
  const { isLogged } = useContextUser();
  useAuthUser();

  if (pageProps.protected && isLogged) {
    return <Loading />;
  }

  return (
    <Fragment>
      <ContextAuthProvider>
        <ToastProvider
          autoDismiss
          autoDismissTimeout={3000}
          placement="top-right"
        >
          <Component {...pageProps} />
        </ToastProvider>
      </ContextAuthProvider>
    </Fragment>
  );
}

export default MyApp;
