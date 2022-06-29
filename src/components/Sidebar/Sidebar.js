import axios from 'axios';
import React, { useEffect } from 'react';
import { AuthUse } from '../../providers/auth';
import service from '../../service/config';
import './Sidebar.css';
import PerPeriod from './SideComponents/PerPeriod/PerPeriod';
import SpecificDate from './SideComponents/SpecificDate/SpecificDate';

const Sidebar = () => {
  const {dropdown: {option}, setDropdown} = AuthUse();
  const {nasaInfo, setNasaInfo} = AuthUse();

  useEffect(() => {
    // refFunc.current()
    console.log(nasaInfo);
  }, [nasaInfo])

  const handleChange = (e) => {
    setDropdown({option: e.target.value})
  }

  const chooseForm = () => {
    switch (option) {
      case '':
        return null;
      case 'Specific date':
        return <SpecificDate />
      case 'Per period':
        return <PerPeriod />
      case 'oi':
        return <h1>Willian Butcher</h1>
      default:
        break;
    }
  }

  const handleClick = async () => {
    const randomNumber = parseInt(Math.random() * 8) + 1;

    const initialString = service.apiUrl;
    const urlToFetch = `${initialString}count=${randomNumber}&api_key=gZzjJhflbq1i2Twhexw9PJCTT4v3Z57CbcTDhbh9`;

    try {
      const { data } = await axios.get(urlToFetch);
      setNasaInfo(data);
    } catch (error) {
      alert(error.response.data.msg)
    }
  }

  return (
    <main className='main-sidebar'>
      <section className='section-btn-sidebar'>
        <button 
          className="btn btn-dark btn-sm btn-sidebar" 
          type="button" data-bs-toggle="offcanvas" 
          data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasScrolling">
           Research some date
        </button>
        <button 
          className="btn btn-dark btn-sidebar" 
          type="button"
          onClick={() => handleClick()}
        >
           Random date
        </button>
      </section>
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <section className='section-1-sidebar'>
          {/* Close X button */}
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </section>
        <section className='section-2-sidebar'>
          {/* Dropdown Button */}
          <select onChange={(e) => handleChange(e)} value={option} className="form-select select-sidebar" aria-label="Default select example">
            <option value="Specific date">Specific date</option>
            <option value="Per period">Per period</option>
            <option value="oi">oi</option>
          </select>
        </section>
        <section className='section-3-sidebar'>
          {chooseForm()}
        </section>
      </div>
    </main>
  )
}

export default Sidebar;