import { faker } from '@faker-js/faker'
import React from 'react'
import { useState, useEffect } from 'react'

import userTypings from './userTyping'
import { motion } from 'framer-motion';
import useTyping from './userTyping';
const Type = () => {

const[userType, setUserType] = useState(false);
const[cursorOn, setCursor]  = useState(false);


const[words, setWords] = useState('');
const[timeLeft, setTimeLeft] = useState(30)
const[state, setState] = useState('start');
const {typed, cursor, clearTyped, resetTotalTyped, totalTyped} = useTyping(userType);
const handleInputChange = (event) =>{
  setUserType(event.target.value);
}


useEffect(()=>{
  setWords(faker.random.words(100));
},[])



const handleClick = () => {
  
setUserType(true)
setCursor(true)
}

const handleClick2 = () => {
  
  setUserType(false)
  setWords(faker.random.words(100));
  clearTyped();
  setCursor(false)
  resetTotalTyped();
  }
  
const GeneratedWords = ({words}) => {
  return (
    
  <div className=' text-black font-bold text-xl '>
   
    {words}
 
    
   
  </div>
  )
}
  
  return (
    <>
    

    <div className='min-h-[80vh] grid place-items-center font-mono '>
    
    <div className='grid grid-cols-2 gap-[400px] justify-items-start justify-content-center'>
      <div className="text-center text-white">
      Total-Typed: {totalTyped}

      </div>
      <div className=" text-center text-white">
      <p>{cursorOn? "Goo":"Press Start" }</p>
      </div>
     
    </div>
      <div className='relative max-w-xl mt-3  leading-relaxed break-all'>
      
        <GeneratedWords words ={words} />
        
        <UserTypings paragraph={words} userInput = {typed}  cursor = {cursorOn}/>
      


      
      </div>
    
      
      <div className="grid grid-cols-2 gap-10 justify-items-center justify-content-center">
  <div className="text-center text-white">
  <button
            onClick = {handleClick}
            className= {`block rounded px-8 py-2 hover:bg-red-700/50  `}
            


    >
      
    Start
    

    </button>

  </div>
  <div className=" text-center text-white">

  <button
            onClick = {handleClick2}
            className= {`block rounded px-8 py-2 hover:bg-red-700/50  `}


    >
      
    Re-Start
    

    </button>
  </div>

</div>
  
      
     
    
  </div>
  
   
  </>

  )
}


const CountdownTimer = ({ timeLeft}) =>{
  return <h2 className='text-zinc-400 font-large'>Time: {timeLeft}</h2>
}

const UserTypings = (
  {
    userInput,
    paragraph,
    cursor,
  }
) =>{
  const typedCharacters = userInput.split("");
  const par = paragraph.split("");

  return (
    <div className='absolute inset-0  '>


{typedCharacters.map((char, index) => (
  
        <Character
          key={`${char}_${index}`}
          char ={char}
          array = {par}
          index = {index}
        />
      ))}
   
   
      <Cursor  valid = {cursor}/>

    </div>
  );


};

const Character = (
  {char, array, index}
)=>{
  return (

  <span className= {`text-${array[index]===char?"primary":"secondary"} text-xl`}>{char}</span>
 
 
  )
}

const Cursor = (valid) =>{
  
 
 
  return (

    <motion.div 
    aria-hidden = {true}
    className = "inline-block bg-primary w-0.5 h-4"
    initial = {{ opacity: 1}}
    animate = {{ opacity: 0}}
    exit = {{ opacity:1 }}
 
    transition = {{ repeat: Infinity, duration: 0.8, erase: "eraseInOut"}}



    />
   



  );
};



export default Type