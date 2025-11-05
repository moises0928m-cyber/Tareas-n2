import React from 'react'

export default function Header() {
  return (
    <>
    <header className='md:flex md:justify-between md:items-start'>
      <h1 className='text-4xl font-bold'>The creative crew</h1>
     <div className='mt-8 px-15 md:px-0 md:w-100 flex flex-col items-start md:mt-0'>
      <h2 className='font-bold text-xl'>Who we are</h2>
      <p className='font-medium'>We are team of creatively diverse. driven. innovative individuals working in various locations from the world</p>
     </div>
     </header>
    </>
  )
}
