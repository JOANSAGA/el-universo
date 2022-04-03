import { useToasts } from "react-toast-notifications";
import { Fragment } from "react";
import Navbar from "../components/Navbar";

const Index = () => {
  const { addToast } = useToasts();
  function RenderToast() {
    return <div>{addToast("message")}</div>;
  }
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
};
export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
    },
  };
}
export default Index;
