import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HtmlPage from './pages/HtmlPage'
import CssPage from './pages/CssPage'
import JavaScriptPage from './pages/JavaScriptPage'
import ReactPage from './pages/ReactPage'
import ReviewsPage from './pages/ReviewsPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/html' element={<HtmlPage />} />
      <Route path='/css' element={<CssPage />} />
      <Route path='/javascript' element={<JavaScriptPage />} />
      <Route path='/react' element={<ReactPage />} />
      <Route path='/reviews' element={<ReviewsPage />} />
    </Routes>
  )
}

export default App