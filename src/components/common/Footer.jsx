import React from 'react'
import { FaLeaf } from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-green-700 py-3 w-full gap-3 text-black mx-auto'>
        <div className='max-w-[1200px] mx-auto flex justify-between pt-4 pb-4'>
        <div className='text-white font-bold text-2xl flex items-center gap-2'>
            <FaLeaf />
            <div>Agro Cultive</div>
        </div>

        <div className='text-white'>
            © 2024 Agro Cultivate. All rights reserved.
        </div>
        </div>
    </div> 
  )
}

export default Footer