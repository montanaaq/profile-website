import Header from "./Header";
import Footer from "./Footer";
import { ProjectsList } from "../data/Projects/ProjectsList";

const InfoPage = () => {
    return ( 
    <div>
        <Header />
        <div className="main-post">
            <header style={{margin:'40px 0px 40px 0px'}}>
                <h1 style={{fontSize:'38px', }}>Мои <span style={{color: 'var(--secondary)'}}>проекты</span></h1>
                <div>
                    <span>December 18, 2023</span>
                </div>
            </header>
            <div className="post-content">
                <h2 style={{textAlign: 'left', marginBottom:'15px'}}>Содержание</h2>
                <ul style={{textAlign: 'left', marginLeft:'20px', marginBottom: '35px'}}>
                    {ProjectsList.map((el) => (
                        <li style={{marginBottom: '15px'}}>
                            <a href={`#${el.url}`} style={{color: 'var(--text-color)'}}>{el.name}</a>
                        </li>
                    ))}
                </ul>
                {ProjectsList.map((el) => (
                    <div className="container">
                        <h2 style={{marginBottom: '20px'}} id={el.url}>{el.name}</h2>
                        <p style={{marginBottom: '30px'}}>{el.p}</p>
                        <img src={el.img} alt="not downloaded" className={el.url === 'sneaknews' ? 'sneaknews-img': '' || el.url === 'uni-finder-website' ? 'uni-finder-website-img' : ''}/>
                    </div>
                ))}
            </div>
            <Footer />
        </div>

    </div>
    );
}

    export default InfoPage