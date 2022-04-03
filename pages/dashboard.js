import { useToasts } from "react-toast-notifications";
import styles from "../styles/Home.module.css";

const Dashboard = () => {
  const { addToast } = useToasts();

  function RenderToast() {
    return <div>{addToast("message")}</div>;
  }

  return (
    <div className={styles.container}>
      <button onClick={RenderToast}>toast</button>
    </div>
  );
};
export default Dashboard;
