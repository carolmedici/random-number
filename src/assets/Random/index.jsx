
import React, { useState, useEffect } from 'react';
const Random = () =>{
    const [randomNumber, setRandomNumber] = useState(0);


    useEffect(() => {
const generatedNumber = Math.round(Math.random() * 10);
setRandomNumber(generatedNumber);
    },
    []);

  return (
    <div>
        <button onClick={()=> setRandomNumber(Math.round(Math.random() * 100))}></button>
      <p>Your number is: {randomNumber}</p>
          </div>
  );
  }
  export default Random