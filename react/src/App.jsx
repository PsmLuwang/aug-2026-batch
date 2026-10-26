import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import PropsPage from './pages/PropsPage'
import HooksPage from './pages/HooksPage'
import CardsPage from './pages/CardsPage'
import FormPage from './pages/FormPage'
import AxiosPage from './pages/AxiosPage'

const App = () => {
  return (
    <Routes>

      <Route path='/' element={<HomePage />} />
      <Route path='/cards' element={<CardsPage />} />
      <Route path='/hooks' element={<HooksPage />} />
      <Route path='/props' element={<PropsPage />} />
      <Route path='/form' element={<FormPage />} />
      <Route path='/axios' element={<AxiosPage />} />

    </Routes>
  )
}

export default App