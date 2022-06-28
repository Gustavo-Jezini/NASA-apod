import React from 'react'
import Card from '../components/Card/Card';
import Header from '../components/Header/Header';
import Siderbar from '../components/Sidebar/Sidebar';

const Landing = () => {
  return (
    <main>
      {/* Aqui vai o Header */}
      <Header />
      {/* SideBar com inputs */}
      <Siderbar />
      {/* Componente principal, com os cards */}
      <Card />
    </main>
  )
}

export default Landing;