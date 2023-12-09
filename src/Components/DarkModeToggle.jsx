import React, { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

 const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');

    setDarkMode(newDarkMode);
 }

 return (
    <div>
      <button onClick={toggleDarkMode} className='toggle-dark-mode'>
        {darkMode ? <FiSun size={24}/> : <FiMoon size={24}/>}
      </button>
    </div>
 );
};

export default DarkModeToggle;