import React, { FC, ReactNode } from 'react'

const Wrapper:FC<{children:ReactNode}> = ( {children} ) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default Wrapper