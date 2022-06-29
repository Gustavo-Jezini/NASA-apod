import './App.css';
import React, { useEffect } from 'react';
// import { AuthContext } from './providers/auth';
import axios from 'axios';
import service from './service/config';
import Rotas from './routes';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
          const { data } = await axios.get
        (`${service.apiUrl}date=2001-04-02&api_key=gZzjJhflbq1i2Twhexw9PJCTT4v3Z57CbcTDhbh9`)
        return (data) ;
      } catch (error) {
        // console.log(error)
      }
    };

    fetchData()

  }, [])
  

  return (
      <Rotas />
  );
}

export default App;
