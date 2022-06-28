import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <main className='main-sidebar'>
      <section className='section-btn-sidebar'>
        <button 
          className="btn btn-outline-dark btn-sm" 
          type="button" data-bs-toggle="offcanvas" 
          data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasScrolling">
           Research some Day
        </button>
      </section>
      <section className='section-sidebar'>
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
      </section>
    </main>
  )
}

export default Sidebar;