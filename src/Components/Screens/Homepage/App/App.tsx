import { FC } from 'react'
import Snowfall from 'react-snowfall'
// import Circles from '../../../Circles.tsx'
import ViewPage from './ViewPage.tsx'

const App: FC = () => {
  return (
    <div className="App">
      <Snowfall />
      {/* <Circles> */}
        <ViewPage />
      {/* </Circles> */}
    </div>
  )
}
export default App
