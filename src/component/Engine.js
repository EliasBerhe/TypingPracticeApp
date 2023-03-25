import React from 'react'
import { useState } from 'react';
import useWords from './useWords';
const numWords = 100;
const Engine = () => {

  const [state, setState] = useState("start");
  const {words, updateWords} = useWords(numWords);
  return (
    { state, words }
  )
}

export default Engine