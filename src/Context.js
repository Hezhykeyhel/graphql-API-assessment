import { createContext, useReducer, useEffect } from "react";

export const themeContext = createContext();

const initialState = { darkMode: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState, () => {
    const localData = localStorage.getItem("darkMode");
    return localData ? JSON.parse(localData) : initialState;
  });
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(state));
  }, [state]);

  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};
