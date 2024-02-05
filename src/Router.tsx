import { FC } from 'react';
import { Route, Routes } from 'react-router-dom'
import App from './Components/Screens/Homepage/App';
import InfoPage from './Components/Screens/InfoPage/Info';
import IdePage from "./Components/Screens/IDEPage/IdePage";

const Router: FC = () => {
    return ( 
        <Routes>
            <Route index element={<App />} />
            <Route path='/info' element={<InfoPage />} />
            <Route path='/ide' element={<IdePage />} />
        </Routes>
     );
}
export default Router
