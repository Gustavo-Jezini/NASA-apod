import axios from "axios";
import React, { useState } from "react";
import service from "../service/config";

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

  const fetchToday = async () => {
    const initialString = service.apiUrl;
    const urlToFetch = `${initialString}date=&api_key=gZzjJhflbq1i2Twhexw9PJCTT4v3Z57CbcTDhbh9`;
    
    try {
      const { data } = await axios.get(urlToFetch);
      setNasaInfo(data);
      } catch (error) {
        alert(error.response.data.msg)
      }
    }

  const [nasaInfo, setNasaInfo] = useState(() => {
    const initialState = fetchToday();
    return initialState;
  });

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