import { Route, Routes } from 'react-router-dom'
import App from './Components/App'
import InfoPage from './Components/Info';

export default function Router() {
    return ( 
        <Routes>
            <Route path="/" element={<App />} />
            <Route path='/info' element={<InfoPage />} />
        </Routes>
     );
}