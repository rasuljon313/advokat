import { Route, Routes } from 'react-router-dom';
import HeaderP from '../pages/header/HeaderP';
import Login from '../pages/login/Login';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<HeaderP />} />
      </Routes>
    </>
  );
};

export default App;
