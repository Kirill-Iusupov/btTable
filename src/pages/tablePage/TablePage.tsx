import { FC } from "react"
import TableRow from "../../components/tableRow/TableRow";
import FirstRow from "../../components/firstRow/FirstRow";

const TablePage:FC<{data:any[]}> = ( {data} ) => {
  
  const firstRow = {
    id: "№",
    name: "Имя",
    start: "Дата начала",
    finish:"Дата окончания",
    role:'Роль',
    actions:"Действия"
  }

  return (

    data
      ? <div className="table">
        <FirstRow  info = {firstRow}/>
        {data.map((info, idx) => <TableRow key={idx} info={info} />)}
      </div>
      : <div>loading...</div>
  )
  
}

export default TablePage