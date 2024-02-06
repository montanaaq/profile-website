import App from '../Components/Screens/Homepage/App'
import InfoPage from '../Components/Screens/InfoPage/Info'
import IdePage from '../Components/Screens/IDEPage/IdePage'
import { ReactElement } from 'react'

interface IRoute {
  path: string
  element: ReactElement
}

export const routes: IRoute[] = [
  { path: '/', element: <App /> },
  { path: '/info', element: <InfoPage /> },
  { path: '/ide', element: <IdePage /> }
]
