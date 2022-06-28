import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [dropdown, setDropdown] = useState({
    option: ''
  })

  return (
    <AuthContext.Provider value={{dropdown, setDropdown}}>
    {props.children}
    </ AuthContext.Provider>
  )
}

export const AuthUse = () => React.useContext(AuthContext);