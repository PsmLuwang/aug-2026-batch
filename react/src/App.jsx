import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import PropsPage from './pages/PropsPage'
import HooksPage from './pages/HooksPage'

const App = () => {
  return (
    <Routes>

      <Route path='/' element={<HomePage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/hooks' element={<HooksPage />} />
      <Route path='/props' element={<PropsPage />} />

    </Routes>
  )
}

export default App