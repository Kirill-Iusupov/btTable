import { useDispatch, useSelector } from "react-redux"
import TablePage from "./pages/tablePage/TablePage"
import { useEffect } from "react"
import { fetchDetail } from "./store/slices/detailSlice"
import AddModal from "./components/addModal/AddModal"






function App() {

  const dispatch = useDispatch()

  const {isLoading, error, details} = useSelector(state => state.detailReducer)

  useEffect(()=>{
    dispatch(fetchDetail())
  },[dispatch])
  

  
  return (
    <>
      {/* <AddModal/> */}
      <TablePage data={details}/>
    </>
  )
}
export default App
