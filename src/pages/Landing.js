import React from 'react'
import Header from '../components/Header/Header';
import Siderbar from '../components/Sidebar/Sidebar';

const Landing = () => {
  return (
    <main style={{height: '200vh'}}>
      {/* Aqui vai o Header */}
      <Header />
      {/* SideBar com inputs */}
      <Siderbar />
    </main>
  )
}

export default Landing;