import { Fragment } from "react";
import { useToasts } from "react-toast-notifications";
import Navbar from "../components/Navbar";
import useContextUser from "../context/AuthContext";
import Loading from "../components/loading";
import { useAuthUser } from "../hooks/useAuthUser";

const Index = () => {
  useAuthUser();

  const { addToast } = useToasts();
  const { isLogged } = useContextUser();

  const RenderToast = () => {
    return <div>{addToast("message")}</div>;
  };

  if (!isLogged) {
    return <Loading />;
  } else {
    return (
      <Fragment>
        <Navbar />
        <div>
          index
          <br></br>
          <button onClick={RenderToast}>toast</button>
        </div>
      </Fragment>
    );
  }
};

export default Index;
