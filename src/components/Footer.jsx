import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-500 p-4'>
      <div>
        <p>© {new Date().getFullYear()} Copyright: Kalvium</p>
      </div>
    </div>
  )
}

export default Footer