import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [dropdown, setDropdown] = useState({
    option: ''
  })

  const [day, setDay] = useState({
    specificDay: '',
    startDate: '',
    endDate: ''
  })

  return (
    <AuthContext.Provider value={{
      dropdown, setDropdown,
      day, setDay
      }}>
    {props.children}
    </ AuthContext.Provider>
  )
}

export const AuthUse = () => React.useContext(AuthContext);