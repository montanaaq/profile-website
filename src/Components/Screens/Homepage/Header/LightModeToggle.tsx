import { useState, FC } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { enqueueSnackbar } from 'notistack';


const LightModeToggle: FC = () => {
   const [lightMode, setLightMode] = useState(false);

   const toggleLightMode = () => {
    const isLightMode = document.documentElement.getAttribute('data-theme') === 'light';
    document.documentElement.setAttribute('data-theme', isLightMode ? 'dark' : 'light');
    setLightMode(!lightMode);
    !lightMode ? enqueueSnackbar('Light mode activated!', { variant: 'info' }) : enqueueSnackbar('Light mode deactivated!', { variant: 'info' } );
 }

 return (
    <div>
      <button onClick={toggleLightMode} className='toggle-light-mode'>
        {!lightMode ? <LightModeIcon fontSize='small' /> : <DarkModeIcon fontSize='small' />}
      </button>
    </div>
 );
};

export default LightModeToggle;