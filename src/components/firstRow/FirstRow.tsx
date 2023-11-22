import { FC } from "react";
import { Info } from "../../types/types";
import TableCell from "../tableCell/TableCell";

const FirstRow:FC<{info:Info}> = ({info}) => {

  const {name, id, start, finish, actions} = info
  
  return (
    <div className="flex">
      <TableCell item={id}/>
      <TableCell item={name}/>
      <TableCell item={start}/>
      <TableCell item={finish}/>
      <TableCell item={actions} />
    </div>
  )
}

export default FirstRow