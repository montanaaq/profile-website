import { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className="footer">
      <span style={{ opacity: '.6' }}>
        © 2024&nbsp;
        <a href="https://montaanaq.netlify.app" className='footer-span'>Montana</a>
        &nbsp;Powered by&nbsp;
        <a href="https://react.com" target="_blank" rel="noreferrer" className='footer-span'>
          React
        </a>
      </span>
    </footer>
  )
}

export default Footer
