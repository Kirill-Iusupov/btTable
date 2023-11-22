import { FC, ReactNode } from 'react'

const TableCell:FC<{item?:string|number, children?:ReactNode}> = ({item, children}) => {

  return (
    <div className="border border-[1px] border-[black] text-center w-[100%]">
      {children 
      ? children 
      : <input
        className='text-center'
        value={item}
        type='text' disabled/>}
    </div>
  )
}

export default TableCell