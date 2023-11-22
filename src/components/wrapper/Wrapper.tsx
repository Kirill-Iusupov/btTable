import React, { FC, ReactNode } from 'react'

const Wrapper:FC<{children:ReactNode}> = ( {children} ) => {
  return (
    <div className='w-[1200px] m-auto'>
        {children}
    </div>
  )
}

export default Wrapper