import "./Random.css"
import React, { useState, useEffect } from 'react';

const Random = () =>{
    const [randomNumber, setRandomNumber] = useState(0);


    useEffect(() => {
const generatedNumber = Math.round(Math.random() * 10);
setRandomNumber(generatedNumber);
    },
    []);

  return (
    <div >
        <button onClick={()=> setRandomNumber(Math.round(Math.random() * 100))}> Click here</button>
      <p >Your number is: <span className="randomNumber">{randomNumber}</span></p>
          </div>
  );
  }
  export default Random