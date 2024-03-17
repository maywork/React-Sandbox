import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data, reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragElastic={0.1} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className='relative flex-shrink-0 w-60 h-72 rounded-[20px] bg-zinc-900/90 text-purple-200 p-5 overflow-hidden'>
      <FaRegFileAlt />
      <p className='text-sm leading-tight mt-5 font-medium'>{data.desc}</p>
      <footer className='absolute bottom-0 w-full left-0'>
        <div className='flex items-center justify-between py-2 px-8 mb-4'>
          <h5>{data.filesize}</h5>
          <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close ? <IoClose /> : <LuDownload size='.8em' color='white' />}
          </span>
        </div>
        {
          data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor === 'purple' ? 'bg-[#8a2be2]' : 'bg-green-600'} flex items-center justify-center`}>
              <h3 className='text-md font-semibold'>{data.tag.tagTitle}</h3>
            </div>
          )
        }

      </footer>

    </motion.div>
  )
}

export default Card