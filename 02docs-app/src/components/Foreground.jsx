import React from 'react'
import Card from './Card'

function Foreground() {
  // blueprint
  // const data = [
  //   icon, desc, filesize, closeOrDownload, tagDetails
  // ]

  const data = [
    {
      desc: 'This is the first card. Lorem ipsum dolor sit amet consectetur adipisicing.',
      filesize: '0.9mb',
      close: false,
      tag: { isOpen: false, tagTitle: 'Download Now', tagColor: 'green' }
    }
  ]


  return (
    <div className='fixed top-0 left-0 z-[3] w-full h-full'>
      {data.map((item, index) => (
        <Card data={item} />
      ))}
    </div>
  )
}

export default Foreground