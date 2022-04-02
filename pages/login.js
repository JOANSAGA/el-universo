import { useState } from "react";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

import styles from "../styles/Login.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faVk,
} from "@fortawesome/free-brands-svg-icons";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [Credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { push } = useRouter();

  const changeUser = (e) => {
    setCredentials({
      ...Credentials,
      [e.target.name]: e.target.value,
    });
    // console.log(Credentials);
  };

  const loginUser = async () => {
    try {
      console.log(Credentials);
      await signInWithEmailAndPassword(
        auth,
        Credentials.email,
        Credentials.password
      );
      push("/");
    } catch (error) {
      // const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error", errorMessage);
      window.alert(errorMessage);
    }
  };

  return (
    <div className={styles.bglogin + " flex justify-center items-center"}>
      <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
        <div className="space-y-10">
          <div className="flex justify-end gap-x-4">
            <Link href="/login">
              <a className="text-cyan-500">Login</a>
            </Link>
            <Link href="/register">
              <a className="text-cyan-500">Register</a>
            </Link>
          </div>
          <div className="space-y-7">
            <div className="flex border-b border-cyan-500 space-x-4 items-center">
              <FontAwesomeIcon icon={faUser} className="text-cyan-500" />
              <input
                className="w-full h-full text-cyan-500 border-0 focus:ring-0"
                type="text"
                placeholder="Email"
                name="email"
                onChange={changeUser}
              />
            </div>
            <div className="flex border-b border-cyan-500 space-x-4 items-center">
              <FontAwesomeIcon icon={faLock} className="text-cyan-500" />
              <input
                className="w-full h-full text-cyan-500 border-0 focus:ring-0"
                type="password"
                placeholder="Password"
                name="password"
                onChange={changeUser}
              />
            </div>
          </div>

          <button
            className="w-full bg-sky-600 text-white py-2 rounded-full tracking-wide font-semibold"
            onClick={loginUser}
          >
            Login
          </button>
          <div className="flex justify-between">
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="rounded-full text-sky-600 border-sky-600 focus:ring-0"
                />
                <span className="ml-2 text-gray-500/75 font-normal ">
                  Remember me
                </span>
              </label>
            </div>
            <div>
              <Link href="/register">
                <a className="text-cyan-500 text-sm underline text-semibold">
                  Recover your password
                </a>
              </Link>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-gray-500/75 font-normal">Login with:</div>
            <div className="flex space-x-3 text-gray-500">
              <FontAwesomeIcon icon={faFacebookF} className="text-4xl" />
              <FontAwesomeIcon icon={faVk} className="text-4xl" />
              <FontAwesomeIcon icon={faTwitter} className="text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
