import React from 'react'

const MarqueeText = ({text}:{text:string}) => {
  return (
    <div className='p-2 flex items-center justify-center gap-2'>
        <div className='rounded-full w-2 h-2 bg-[#0033ff]'></div>
        <p className='text-sm tracking-tighter font-medium text-gray-400 upperacse'>{text}</p>
    </div>
  )
}

export default React.memo(MarqueeText);