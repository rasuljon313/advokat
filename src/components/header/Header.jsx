import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

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
      <div className="container">Header Content</div>;
    </>
  );
};

export default Header;
