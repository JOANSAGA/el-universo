import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
import { useRouter } from "next/router";
import { useContextUser } from "../context/AuthContext";

export const useAuthUser = () => {
  const { push, pathname } = useRouter();
  const { setisLogged } = useContextUser();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      let userLogged = user === null ? false : true;
      if (!userLogged) {
        switch (pathname) {
          case "/":
            push("/login");
            break;
          case "/login":
            push("/login");
            break;
          case "/register":
            push("/register");
            break;

          default:
            push("/login");
            break;
        }
        setisLogged(false);
      } else {
        setisLogged(true);
        // window.alert(pathname);
        if (pathname === "/login" || pathname === "/register") {
          push("/");
        }
      }
    });
  }, []);
};
