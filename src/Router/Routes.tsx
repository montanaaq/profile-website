import App from '../Components/Screens/Homepage/App'
import InfoPage from '../Components/Screens/InfoPage/Info'
import IdePage from '../Components/Screens/IDEPage/IdePage'

interface IRoute {
  path: string
  element: JSX.Element
}

export const routes: IRoute[] = [
  { path: '/', element: <App /> },
  { path: '/info', element: <InfoPage /> },
  { path: '/ide', element: <IdePage /> }
]
