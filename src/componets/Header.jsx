import React from 'react'

import Rocket from '../assets/rocket.svg'

const Header = () => {
  return (
    <div className='h-[20vh] flex items-center justify-center gap-4 bg-zinc-950' >

      <img src={Rocket} alt="foguete" />

      <h1 className='font-bold text-primaryBlueLight text-[32px]' >To
        <span className='text-secondaryPurpleLight' >do</span>
      </h1>

    </div>
  )
}

export default Header
