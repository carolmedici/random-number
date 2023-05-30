# Random Number
 
Random Number created based on [Jean Meira's](https://github.com/JCDMeira/challenge-FR-004-winning-choice) React challenge .
 

 ## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- When opening the page, a number from 1 to 100 is drawn.
- When clicking on the button, a new number is drawn..
- By clicking on the "change theme" button, the user will be able to view the page with other colors.


### Screenshot

![](https://github.com/carolmedici/random-number/blob/main/public/print.jpg)
![](https://github.com/carolmedici/random-number/blob/main/public/print2.jpg)


### Links

- Solution URL: [https://github.com/carolmedici/random-number](https://github.com/carolmedici/random-number)
- Live Site URL: [https://random-number-blue.vercel.app/](https://random-number-blue.vercel.app/)

## My process

### Built with

- React:
 -- useState
 -- useEffect
 -- Functions
 -- Components


### What I learned

I keep learning how to better utilize React.js tools.

Check it out:
```js
const Random = () =>{
    const [randomNumber, setRandomNumber] = useState(0);


    useEffect(() => {
const generatedNumber = Math.round(Math.random() * 10);
setRandomNumber(generatedNumber);
    },
    []);

  return (
    <div className="random" >
        <h1 className="h1">Random Number Generator</h1>
        <button className="button" onClick={()=> setRandomNumber(Math.round(Math.random() * 100))}> Click here</button>
      <p >Your number is: <span className="randomNumber">{randomNumber}</span></p>
          </div>
```


### Continued development

The next challenge is rendering of an iterable, which will be a list of products: https://github.com/JCDMeira/challenge-FR-005-display-case

## Author

- LinkedIn - [Carolina Médici](https://www.linkedin.com/in/carolina-medici/)
- Frontend Mentor - [@carolmedici](https://www.frontendmentor.io/profile/carolmedici)
