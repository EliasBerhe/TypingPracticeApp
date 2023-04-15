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
const[typing, setIsTyping] = useState(false)
const[doneTyping, setDone] = useState(false)
const {typed, cursor, clearTyped, resetTotalTyped, totalTyped} = useTyping(userType);

const [seconds, setSeconds] = useState(0);

useEffect(() => {
  const timer = setTimeout(() => {
    if(typing&&userType){
      setSeconds(seconds+1);
    }
    
    
    
   
    
  },1000);
  return () => clearTimeout(timer);
 
});



useEffect(()=>{
  setWords(faker.random.words(100));
},[])

useEffect(()=>{

  if(totalTyped===words.length){
    setDone(true)
    
    clearTyped();

  }
  else{
    setDone(false)
    
  }

})





const handleClick = () => {
setIsTyping(true)
setUserType(true)
setCursor(true)
}

const handleClick2 = () => {
  
  setUserType(false)
  setWords(faker.random.words(100));
  clearTyped();
  setCursor(false)
  resetTotalTyped();
  setSeconds(0);
  setIsTyping(false)
  }
  
const GeneratedWords = ({words}) => {
  return (
    
  <div className=' text-slate-700 font-bold text-2xl'>
   
    {words}
 
    
   
  </div>
  )
}
const Result = () => (

  <div className='text-white border-2 rounded-[20px] min-w-[200px] min-h-[200px] flex items-center px-16'>
    <h1 className='text-2xl'> WPM: <span>{(totalTyped/seconds)*60}</span></h1>
  </div>
)
  
  return (
    <>
    

    <div className='min-h-[80vh] grid place-items-center font-mono rounded-[20px]  '>
    
    <div className='grid grid-cols-2 gap-[400px] justify-items-start justify-content-center'>
      <div className="text-center text-white">
      Total-Typed: {totalTyped} <br />
      Time: {seconds}

      </div>
      
      <div className=" text-center text-white">
      <p>{cursorOn? "Goo":"Press Start" }</p>
      </div>
     
    </div>
      <div className='relative max-w-xl mt-3  leading-relaxed break-all'>


        {!doneTyping?<GeneratedWords words ={words} />:<Result />} 
        
        <UserTypings paragraph={words} userInput = {typed}  cursor = {cursorOn}/>
      

       
      
      </div>
     
      
      <div className="grid grid-cols-2 gap-10 justify-items-center justify-content-center">
  <div className="text-center text-white">
  <button
            onClick = {handleClick}
            className= {`block rounded border-[1px] px-8 py-2 hover:bg-red-700/50  `}
            


    >
      
    Start
    

    </button>

  </div>
  <div className="text-center text-white">

  <button
            onClick = {handleClick2}
            className= {`block rounded border-[1px] px-8 py-2 hover:bg-red-700/50  `}


    >
      
    Re-Start
    

    </button>
  </div>

</div>
  
      
     
    
  </div>
  
   
  </>

  )
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
  const x=array[index]===char?"white":"secondary"
 
  return (


  <span className= {`text-${x} text-2xl`}>{char}</span>
 
 
  )
}

const Cursor = (valid) =>{
  
 
 
  return (

    <motion.div 
    aria-hidden = {true}
    className = "inline-block bg-primary w-0.5 h-5"
    initial = {{ opacity: 1}}
    animate = {{ opacity: 0}}
    exit = {{ opacity:1 }}
 
    transition = {{ repeat: Infinity, duration: 0.8, erase: "eraseInOut"}}



    />
   



  );
};





export default Type