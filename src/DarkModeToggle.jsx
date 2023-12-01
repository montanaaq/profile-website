import React, { useState, useEffect } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const DarkModeToggle = () => {
 const [darkMode, setDarkMode] = useState(false);
 const [bodyStyles, setBodyStyles] = useState({});

 useEffect(() => {
    setBodyStyles(document.body.style);
 }, []);

 const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    const newBodyStyles = {
      ...bodyStyles,
      backgroundColor: newDarkMode ? 'rgb(22, 23, 22)' : '#ffffff',
      color: newDarkMode ? '#ffffff' : 'rgb(22, 23, 22)',
    };

    setDarkMode(newDarkMode);
    setBodyStyles(newBodyStyles);
    Object.assign(document.body.style, newBodyStyles);
 };

 return (
    <div>
      <button onClick={toggleDarkMode} className='toggle-dark-mode'>
        {darkMode ? <FiSun size={18}/> : <FiMoon size={18}/>}
      </button>
    </div>
 );
};

export default DarkModeToggle;