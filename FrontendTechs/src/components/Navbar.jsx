import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between h-16 px-5 items-center border-b border-gray-300'>
      <Link to={'/'} className='text-lg font-semibold'>Frontend Technologies</Link>

      <div className='flex gap-3 max-sm:hidden'>
        <Link to={'/html'}>HTML</Link>
        <Link to={'/css'}>CSS</Link>
        <Link to={'/javascript'}>JavaScript</Link>
        <Link to={'/react'}>React</Link>
        <Link to={'/reviews'}>Reviews</Link>
      </div>

      <button className='sm:hidden'>
        <Menu />
      </button>
    </nav>
  )
}

export default Navbar