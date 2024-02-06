import TelegramIcon from '@mui/icons-material/Telegram'
import GitHubIcon from '@mui/icons-material/GitHub'
import { FC } from 'react'

const SocialLinks: FC = () => {
  return (
    <div className="social-links">
      <a
        href="https://github.com/montanaaq"
        target="_blank"
        rel="noreferrer"
        className="fa-github"
      >
        <GitHubIcon
          fontSize="medium"
          style={{
            marginRight: '20px',
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'var(--text-color)'
          }}
        />
      </a>
      <a
        href="https://t.me/montaanaq"
        target="_blank"
        rel="noreferrer"
        className="fa-telegram"
      >
        <TelegramIcon
          fontSize="medium"
          style={{
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'var(--text-color)'
          }}
        />
      </a>
    </div>
  )
}

export default SocialLinks
