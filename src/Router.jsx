import { Route, Routes } from 'react-router-dom'
import App from './App'
import InfoPage from './Info';

export default function Router() {
    return ( 
        <Routes>
            <Route path="/" element={<App />} />
            <Route path='/info' element={<InfoPage />} />
        </Routes>
     );
}