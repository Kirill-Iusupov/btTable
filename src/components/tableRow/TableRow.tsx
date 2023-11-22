import { FC, useRef, useState } from "react";
import { Info } from "../../types/types";
import TableCell from "../tableCell/TableCell";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchDetail } from "../../store/slices/detailSlice";
import { DeleteFilled, EditOutlined, FileAddOutlined } from "@ant-design/icons";
import AddModal from "../addModal/AddModal";

const TableRow:FC<{info:Info}> = ({info}) => {

  const filePicker = useRef(null)
  const dispatch = useDispatch()


  const [visible, setVisible] = useState(false)
  const [selected, setSelected] = useState([])

  const {name, id, start, finish, role} = info

  const deleteRow:(id:any)=>any = async(id) =>{
    await axios.delete(`http://localhost:8800/users/${id}`)
    dispatch(fetchDetail())
  }

  const hidden = "opacity-0 w-0 h-0"

  const handleFile = () =>{
    filePicker.current.click()
    
  }

  const formData = new FormData()


  const handleChange = async (event) =>{

    formData.append("file", "Kirill")

    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", formData)

    console.log(res);
  }
  
  const handleVis = () =>{
    setVisible(!visible)
  }
  
  
  return (
    <>
    <div className={visible ? "" : "hidden"}>
      <AddModal set={handleVis}/>
    </div>
    <div className="flex">
      <TableCell item={id}/>
      <TableCell item={name}/>
      <TableCell item={start}/>
      <TableCell item={finish}/>
      {role === "admin" 
      ? 
        <TableCell>
          <button onClick={()=>deleteRow(id)}>
            <DeleteFilled className="hover:text-[25px]"/>
          </button>
          <button
            onClick={handleVis}
            >
              <EditOutlined className="hover:text-[25px]" />
            </button>
            
          <input 
                type="file" 
                ref={filePicker}
                onChange={handleChange} 
                className={hidden}
                accept=".doc,.docx,.pdf"
                />
          <button onClick={handleFile}>
            <FileAddOutlined className="hover:text-[25px]"/>
          </button>
        </TableCell> 
      :
        role === "employer"
        ?
        <TableCell>
          <input 
                type="file" 
                ref={filePicker}
                onChange={handleChange} 
                className={hidden}
                />
          <button onClick={handleFile}>
            <FileAddOutlined className="hover:text-[25px]"/>
          </button>
          
        </TableCell> 
        : null
      }
    </div>
    </>
  )
}

export default TableRow