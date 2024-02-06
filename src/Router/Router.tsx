import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './Routes'

const Router: FC = () => {
  const renderRoutes = () => {
    return routes.map((route, index) => {
      return <Route key={index} path={route.path} element={route.element} />
    })
  }

  return <Routes>{renderRoutes()}</Routes>
}
export default Router
