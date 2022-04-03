import { useEffect, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
import { useRouter } from "next/router";
import { useContextUser } from "../context/AuthContext";

// HOOK FOR VALIDATE IF USER IS LOGGED

export const useAuthUser = () => {
  const { push, pathname } = useRouter();
  const { setisLogged } = useContextUser();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      let userLogged = user === null ? false : true;

      if (!userLogged) {
        push("/login");
        setisLogged(false);
      } else {
        setisLogged(true);
        // IF THE USER IS LOGGED IN AND WANTS TO VISIT THE ROUTES
        if (pathname === "/login" || pathname === "/register") {
          push("/");
        }
      }
    });
  }, []);
};
