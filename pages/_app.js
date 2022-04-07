import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { ToastProvider } from "react-toast-notifications";
import { ContextAuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <ContextAuthProvider>
      <ToastProvider
        autoDismiss
        autoDismissTimeout={3000}
        placement="top-right"
      >
        <Component {...pageProps} />
      </ToastProvider>
    </ContextAuthProvider>
  );
}

export default MyApp;
