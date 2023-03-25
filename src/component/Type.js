import { faker } from '@faker-js/faker'
import React from 'react'
import { useState } from 'react'

const Type = () => {

const words = faker.random.words(100);


  
  return (
    <>
     
    <div className='min-h-screen grid place-items-center font-mono  px-60 md:px-20 sm:px-4'>
 
    
      <GeneratedWords words = {words} />
      
     
    
  </div>
  </>

  )
}
const GeneratedWords = ({words}) => {
  return (
    
  <div className='text-2xl  text-secondary md:text-lg sm:text-lg'>
    <CountdownTimer timeLeft={30} />
    <br />
    {words}
  
    
  </div>
  )
}

const CountdownTimer = ({ timeLeft}) =>{
  return <h2 className='text-zinc-400 font-large'>Time: {timeLeft}</h2>
}

export default Type