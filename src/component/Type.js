import { faker } from '@faker-js/faker'
import React from 'react'
import { useState } from 'react'

import RestartButton from './RestartButton'
import { motion } from 'framer-motion';
import Engine from './Engine';
const Type = () => {

const {state, words} = Engine();


  
  return (
    <>
     
    <div className='min-h-screen grid place-items-center font-mono  px-60 md:px-20 sm:px-4'>
 
      <div className='relative max-w-xl mt-3  leading-relaxed break-all'>

        <GeneratedWords words = {words} />
        
        <UserTypings className='absolute inset-0' userInput = {"words"} />
      </div>
   
     
      
     
    
  </div>
  </>

  )
}
const GeneratedWords = ({words}) => {
  return (
    
  <div className=' text-secondary'>
   
    {words}
 
   
  </div>
  )
}

const CountdownTimer = ({ timeLeft}) =>{
  return <h2 className='text-zinc-400 font-large'>Time: {timeLeft}</h2>
}

const UserTypings = (
  {
    userInput,
    className,
  }
) =>{
  const typedCharacters = userInput.split("");

  return (
    <div className='absolute inset-0'>

   
{typedCharacters.map((char, index) => (
        <Character
          key={`${char}_${index}`}
          char ={char}
        />
      ))}
   <Cursor />
 

    </div>
  );


};

const Character = (
  {char}
)=>{
  return <span className='text-primary'>{char}</span>
}

const Cursor = () =>{
  return (

    <motion.div 
    aria-hidden = {true}
    className = "inline-block bg-primary w-0.5 h-7"
    initial = {{ opacity: 1}}
    animate = {{ opacity: 0}}
    exit = {{ opacity:1 }}
    transition = {{ repeat: Infinity, duration: 0.8, erase: "eraseInOut"}}



    />

  );
};


export default Type