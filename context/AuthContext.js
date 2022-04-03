import { createContext, useState, useContext } from "react";

const Context = createContext({
  isLogged: false,
  setisLogged: async (theme) => null,
});

export const useContextUser = () => useContext(Context);

export const ContextAuthProvider = ({ children }) => {
  const [isLogged, setisLogged] = useState(false);
  return (
    <Context.Provider value={{ isLogged, setisLogged }}>
      {children}
    </Context.Provider>
  );
};
