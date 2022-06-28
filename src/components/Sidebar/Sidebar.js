import React, { useEffect } from 'react';
import { AuthUse } from '../../providers/auth';
import './Sidebar.css';
import SpecificDate from './SideComponents/SpecificDate/SpecificDate';

const Sidebar = () => {
  const {dropdown: {option}, setDropdown} = AuthUse();

  useEffect(() => 
    console.log(option)
  ,[option])

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
        return <h1>Per period Option</h1>
      case 'oi':
        return <h1>Willian Butcher</h1>
      default:
        break;
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