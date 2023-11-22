import { useDispatch, useSelector } from "react-redux"
import TablePage from "./pages/tablePage/TablePage"
import { useEffect } from "react"
import { fetchDetail } from "./store/slices/detailSlice"
import Header from "./components/header/Header"
import LoginPage from "./pages/loginPage/LoginPage"
import RegisterPage from "./pages/registerPage/RegisterPage"
import { Route, Routes } from "react-router-dom"






function App() {

  const dispatch = useDispatch()

  const {isLoading, error, details} = useSelector(state => state.detailReducer)

  useEffect(()=>{
    dispatch(fetchDetail())
  },[dispatch])
  

  
  return (
    <>
    <Routes>
      <Route path={'/login'} element={<LoginPage />} />
      <Route path={'/register'} element={<RegisterPage />} />
      <Route path={'/'} index element={<TablePage data={details}/>}/>
    </Routes>
      {/* <TablePage data={details}/> */}
    </>
  )
}
export default App
