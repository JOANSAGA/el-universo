import { useContext, createContext, useState, useMemo } from "react";

export const Context = createContext(null);

export const ContextAuthProvider = ({ children }) => {
  const [isLogged, setisLogged] = useState(false);

  const values = useMemo(
    () => ({
      isLogged,
      setisLogged,
    }),
    [isLogged]
  );

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export function useContextUser() {
  const context = useContext(Context);
  if (!context) {
    console.error("Error deploying App Context!!!");
  }
  return context;
}

export default useContextUser;
