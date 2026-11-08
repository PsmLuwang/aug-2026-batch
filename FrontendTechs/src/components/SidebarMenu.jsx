import { SidebarClose } from "lucide-react"
import { Link } from "react-router-dom"

const SidebarMenu = ({ isSidebarMenuOpen, toggleSidebarMenu }) => {
  return (
    <nav className={`${isSidebarMenuOpen ? "" : "translate-x-full"} sm:hidden fixed right-0 top-0 h-dvh bg-red-300 w-64 p-4 transition-all duration-300`}>
      
      <button onClick={() => toggleSidebarMenu(prev => !prev)}>
        <SidebarClose />
      </button>
      
      <div className='grid gap-3'>
        <Link to={'/html'}>HTML</Link>
        <Link to={'/css'}>CSS</Link>
        <Link to={'/javascript'}>JavaScript</Link>
        <Link to={'/react'}>React</Link>
        <Link to={'/reviews'}>Reviews</Link>
      </div>


      <a href={'/html/#test60'}>30</a>

    </nav>
  )
}

export default SidebarMenu