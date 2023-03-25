import React from 'react'
import {faker} from '@faker-js/faker'

export const generate = () => {
    
  return new Array(10) 
    .fill()
    .map(_ => faker.random.word())
    .join(' ');
  
};

