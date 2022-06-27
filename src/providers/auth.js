import React from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const user = {
    name: 'Jez',
    color: 'blue',
  }

  return (
    <AuthContext.Provider value={{user}}>
    {props.children}
    </ AuthContext.Provider>
  )
}