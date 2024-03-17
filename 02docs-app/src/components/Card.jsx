import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

function Card() {
  return (
    <div className='relative w-60 h-72 rounded-[20px] bg-zinc-900/90 text-purple-200 p-5 overflow-hidden'>
      <FaRegFileAlt />
      <p className='text-sm leading-tight mt-5 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <footer className='absolute bottom-0 w-full left-0'>
        <div className='flex items-center justify-between py-2 px-8 mb-5'>
          <h5>0.4mb</h5>
          <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
            <LuDownload size='.8em' color='#18181b' />
          </span>
        </div>
        <div className='tag w-full py-4 bg-green-600 flex items-center justify-center'>
          <h3 className='text-md font-semibold'>Download Now</h3>
        </div>
      </footer>

    </div>
  )
}

export default Card