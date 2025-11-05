import React from 'react'
import team from './Equipo'
export default function Cards() {
  return (
    <>
        {team.map(({ nombre, cargo, img , id }) => (
       <div key={id} className={`flex  ${id % 2 === 0 ?"mt-40":"" } ${[2,5].includes(id) ?"md:mt-40":"md:mt-0" } `}>
         
       <div className='flex flex-col'> 
        <img src={img} alt={nombre} className='w-90 h-120'/>
        <h2 className='text-2xl font-bold'>{nombre} </h2>
       </div>
        <span class=" tracking-widest [writing-mode:vertical-rl] [text-orientation:mixed]">
         {cargo}
        </span>
       </div>
      ))}
    </>
  )
}
