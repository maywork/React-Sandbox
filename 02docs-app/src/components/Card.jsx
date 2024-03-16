import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

function Card() {
  return (
    <div className='relative w-60 h-72 rounded-[20px] bg-zinc-900/90 text-purple-200 p-5 overflow-hidden'>
      <FaRegFileAlt />
      <p className='text-sm leading-tight mt-5 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <footer className='absolute bottom-0 w-full py-3 px-8 left-0'>
        <div className='flex items-center justify-between mb-5'>
          <h5>0.4mb</h5>
          <span className='w-5 h-5 bg-[#8a2be2] rounded-full flex items-center justify-center'>
            <LuDownload size='.8em' color='#18181b' />
          </span>
        </div>
      </footer>

    </div>
  )
}

export default Card