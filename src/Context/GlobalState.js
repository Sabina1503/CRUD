import React, { createContext, useReducer } from "react";
import { Reducer } from "./Reducer";

const initialState = {
  users: [
    { id: 1, name: "murad", age: 21, position: "teacher" },
    { id: 2, name: "aygun", age: 22, position: "programmer" },
  ],
  selectedUser: null,
  selectedPosition: null,
  positions: [
    { id: 1, position: "teacher" },
    { id: 2, position: "programer" },
  ],
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
