import React from 'react'

const Topic = ({ topic }) => {
  return (
    <div className='p-3 border border-gray-300'>
      <h1 className='font-bold'><span>{topic.index+1}.</span> {topic.name}</h1>
      <p className='text-sm text-gray-600'>{topic.description}</p>
    </div>
  )
}

export default Topic