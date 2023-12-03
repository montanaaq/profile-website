import { FaGithub, FaTelegram } from "react-icons/fa";


function SocialLinks() {
    return ( 
        <div className="social-links">
            <a href="https://github.com/montanaaq" target="_blank" rel="noreferrer" className="fa-github">
                <FaGithub size={25} style={
                    {
                        marginRight: "20px",
                        cursor: "pointer",
                        textDecoration: "none",
                        color: "var(--text-color)",
                    }
                }/>
            </a>
            <a href="https://t.me/montaanaq" target="_blank" rel="noreferrer" className="fa-telegram">
            <FaTelegram size={25} style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "var(--text-color)",
            }} />
            </a>
        </div>
     );
}

export default SocialLinks;