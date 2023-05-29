import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css'
import './App.css'
import Random from './assets/Random';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <>
      <label className='theme'>
        <input className='input'
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Change theme
      </label>

      <Random />
    </>
  )
}

export default App;




 