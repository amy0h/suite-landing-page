import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between'>
        <img
            src='./assets/logo.svg'
            alt='logo'
            className='fill-blue-950'
            />
        <button
            className='bg-white border border-blue-950 rounded-md
            text-blue-950 font-bold tracking-[-0.14px] text-sm py-3 px-4'>
                Request Beta Access
        </button>
    </header>
  )
}

export default Header