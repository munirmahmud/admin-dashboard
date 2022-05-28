import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setClicked] = useState(initialState);

  const handleClick = (clicked) => {
    setClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{ activeMenu, setActiveMenu, isClicked, setClicked, handleClick }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
