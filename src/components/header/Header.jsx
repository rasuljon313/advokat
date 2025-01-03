import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../zustand"; 
import Modal from "../modal/Modal";

const Header = () => {
  const navigate = useNavigate();
  const { open, setOpen } = useStore();  

  useEffect(() => {
    const token = localStorage.getItem("tokenxon");
    if (!token) {
      navigate("/");
    } else {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <>
      <div className="container">Header Content</div>
      <button onClick={setOpen}>Toggle Modal</button> 
      {
        open && <Modal /> 
      }
    </>
  );
};

export default Header;
