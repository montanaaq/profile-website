import React, { useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

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
        {lightMode ? <LightModeIcon fontSize='small' /> : <DarkModeIcon fontSize='small' />}
      </button>
    </div>
 );
};

export default LightModeToggle;