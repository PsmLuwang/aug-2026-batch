import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import TermsPage from './pages/TermsPage'
import PropsPage from './pages/PropsPage'

const App = () => {
  return (
    <Routes>

      <Route path='/' element={<HomePage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/terms' element={<TermsPage />} />
      <Route path='/props' element={<PropsPage />} />

    </Routes>
  )
}

export default App