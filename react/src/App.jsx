import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import TermsPage from './pages/TermsPage'

const App = () => {
  return (
    <Routes>

      <Route path='/' element={<HomePage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/terms' element={<TermsPage />} />

    </Routes>
  )
}

export default App