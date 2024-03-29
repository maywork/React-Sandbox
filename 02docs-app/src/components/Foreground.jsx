import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
  // blueprint
  // const data = [
  //   icon, desc, filesize, closeOrDownload, tagDetails
  // ]

  const ref = useRef(null);

  const data = [
    {
      desc: 'This is the first card. Lorem ipsum dolor sit amet consectetur adipisicing.',
      filesize: '1.9mb',
      close: false,
      tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'green' }
    },
    {
      desc: 'This is the second card. Lorem ipsum dolor sit amet consectetur adipisicing.',
      filesize: '2.0mb',
      close: false,
      tag: { isOpen: false, tagTitle: 'Download Now', tagColor: 'green' }
    },
    {
      desc: 'This is the third card. Lorem ipsum dolor sit amet consectetur adipisicing.',
      filesize: '3.9mb',
      close: false,
      tag: { isOpen: true, tagTitle: 'Upload', tagColor: 'purple' }
    }
  ]


  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-4'>
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  )
}

export default Foreground