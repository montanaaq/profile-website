import { FaGithub, FaTelegram } from "react-icons/fa";


function SocialLinks() {
    return ( 
        <div className="social-links">
            <a href="https://github.com/montanaaq">
                <FaGithub size={25} style={
                    {
                        marginRight: "20px",
                        cursor: "pointer",
                        textDecoration: "none",
                        color: "black"
                    }
                }/>
            </a>
            <a href="https://t.me/montaanaq">
            <FaTelegram size={25} style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "black"
            }} />
            </a>
        </div>
     );
}

export default SocialLinks;