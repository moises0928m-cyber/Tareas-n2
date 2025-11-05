import React from 'react'
import Cards from './components/Cards'
import Header from './components/header'
import Modo from './components/Modo'
export default function App() {
  return (
    <div className='h-screen p-10 '>
     <Header/>
     <div className='place-items-center grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4 mt-5' >
      <Cards/>
      </div>
    </div>
  )
}
 