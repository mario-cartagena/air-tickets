import React from 'react'
import './styleMain.scss'
import MainPayMethods from './mainPayMethods/MainPayMethods';
import MainServices from './mainServices/MainServices';
import Search from './search/Search';

const Main = () => {
  return (
    <main className='main'>
      <Search/>
      <MainPayMethods/>
      <MainServices />
    </main>
  )
}

export default Main
