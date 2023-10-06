import React from 'react'

const Footer = () => {
  return (
    <section>
        <img
            src='./assets/logo.svg'
            alt='logo'
            className='fill-blue-950'
        />
        <p>
            Copyright - Suite
        </p>
        <div>
            <img
                src='./assets/icon-facebook.svg'
                alt='facebook icon'
            />  
            <img
                src='./assets/icon-twitter.svg'
                alt='twitter icon'
            />
            <img
                src='./assets/icon-instagram.svg'
                alt='instagram icon'
            />
        </div>
    </section>
  )
}

export default Footer