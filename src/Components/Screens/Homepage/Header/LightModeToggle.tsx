import { useState, FC } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { Toaster, toast } from 'sonner'


const LightModeToggle: FC = () => {
  const [lightMode, setLightMode] = useState(false)

  const toggleLightMode = () => {
    const isLightMode =
      document.documentElement.getAttribute('data-theme') === 'light'
    document.documentElement.setAttribute(
      'data-theme',
      isLightMode ? 'dark' : 'light'
    )
    setLightMode(!lightMode)
    !lightMode
      ? toast.info('Light theme activated!')
      : toast.info('Dark theme activated!')
  }

  return (
    <div>
      <Toaster richColors position='bottom-left' expand />
      <button onClick={toggleLightMode} className="toggle-light-mode">
        {!lightMode ? (
          <LightModeIcon fontSize="small" />
        ) : (
          <DarkModeIcon fontSize="small" />
        )}
      </button>
    </div>
  )
}

export default LightModeToggle
