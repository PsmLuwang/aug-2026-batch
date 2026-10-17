import React from 'react'
import NavBar from '../components/NavBar'
import Props from '../components/Props'

const PropsPage = () => {
  return (
    <>
      <NavBar />
      <section className='p-5'>

        <Props prop1="prop1" prop2="prop2">
          <h1>This is children</h1>
          <button className='bg-blue-400'>Click Me</button>
        </Props>

      </section>
    </>
  )
}

export default PropsPage