import { Route, Routes } from 'react-router-dom'
import App from './Components/Screens/Homepage/App';
import InfoPage from './Components/Screens/InfoPage/Info';

const Router = () => {
    return ( 
        <Routes>
            <Route path="/" element={<App />} />
            <Route path='/info' element={<InfoPage />} />
        </Routes>
     );
}
export default Router
