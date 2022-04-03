import { Fragment, useContext } from "react";
import Link from "next/link";
import AuthContext from "../context/AuthContext";
import { useAuthUser } from "../hooks/useAuthUser";
import { useRouter } from "next/router";
import { getAuth, signOut } from "firebase/auth";
import { useContextUser } from "../context/AuthContext";

const Navbar = () => {
  useAuthUser();

  const auth = getAuth();
  const { push } = useRouter();
  const logout = () => {
    signOut(auth)
      .then(() => {
        push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const { isLogged, setisLogged } = useContextUser();

  return (
    <div>
      <nav className="flex space-x-5 bg-gray-100">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/dashboard">
          <a>Dashboard</a>
        </Link>
        {isLogged === true && (
          <Fragment>
            <button onClick={logout}>logout</button>
          </Fragment>
        )}

        {isLogged === false && (
          <Fragment>
            <Link href="/register">Registrar</Link>
            <Link href="/login">Login</Link>
          </Fragment>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
