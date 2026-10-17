import React from 'react'

const Props = ({ prop1, prop2, children }) => {
  return (
    <div className='border border-gray-300 p-4'>
      <h1>{prop1}</h1>
      <h1>{prop2}</h1>
      <h1>{children}</h1>
    </div>
  )
}


export default Props