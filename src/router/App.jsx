import { Route, Routes } from "react-router-dom"
import HeaderP from "../pages/header/HeaderP"


const App = () => {
  return (
    <>

     <Routes>
        <Route path="/home" element={<HeaderP/>}/>
     </Routes>

    </>
  )
}

export default App