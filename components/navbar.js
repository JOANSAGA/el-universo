import Link from "next/link";
import { useRouter } from "next/router";
import { getAuth, signOut } from "firebase/auth";
import { useContextUser } from "../context/AuthContext";

const Navbar = () => {
  const { isLogged, setisLogged } = useContextUser();
  const auth = getAuth();
  const { push } = useRouter();

  const logout = () => {
    signOut(auth)
      .then(() => {
        setisLogged(false);
        push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <nav className="flex space-x-5 bg-gray-100">
        <Link href="/">
          <a>Home</a>
        </Link>
        <button onClick={logout}>logout</button>
      </nav>
    </div>
  );
};
// {isLogged === true && <Fragment></Fragment>}
export default Navbar;
