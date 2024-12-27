import { Route, Routes } from "react-router-dom"
import HeaderP from "../pages/header/HeaderP"
import ForinPage from "../pages/ForinP/ForinPage"


const App = () => {
  return (
    <>

     <Routes>
        <Route path="/" element={<ForinPage/>}/>
        <Route path="/home" element={<HeaderP/>}/>
     </Routes>

    </>
  )
}

export default App