import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [dropdown, setDropdown] = useState({
    option: 'Specific date'
  })

  const [day, setDay] = useState({
    specificDay: '',
    startDate: '',
    endDate: ''
  })

  const [nasaInfo, setNasaInfo] = useState(null)

  return (
    <AuthContext.Provider value={{
      dropdown, setDropdown,
      day, setDay,
      nasaInfo, setNasaInfo
      }}>
    {props.children}
    </ AuthContext.Provider>
  )
}

export const AuthUse = () => React.useContext(AuthContext);