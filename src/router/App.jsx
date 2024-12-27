import { Route, Routes } from "react-router-dom"
import ForinP from "../pages/ForinP/ForinP"
import HeaderP from "../pages/header/HeaderP"

const App = () => {
  return (
    <>

     <Routes>
        <Route path="/" element={<ForinP/>}/>
        <Route path="/home" element={<HeaderP/>}/>
     </Routes>

    </>
  )
}

export default App