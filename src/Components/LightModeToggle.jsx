import React, { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const LightModeToggle = () => {
    const [lightMode, setLightMode] = useState(false);

   const toggleLightMode = () => {
    const isLightMode = document.documentElement.getAttribute('data-theme') === 'light';
    document.documentElement.setAttribute('data-theme', isLightMode ? 'dark' : 'light');
    setLightMode(!lightMode);
 }

 return (
    <div>
      <button onClick={toggleLightMode} className='toggle-light-mode'>
        {lightMode ? <FiSun size={24}/> : <FiMoon size={24}/>}
      </button>
    </div>
 );
};

export default LightModeToggle;