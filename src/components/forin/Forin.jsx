// // import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom"; 
// import axiosLogin from "../../api/axios";

// const Forin = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const token = localStorage.getItem("tokenxon")
//   const navigate = useNavigate(); 

//   // const login = (e) => {
//   //   e.preventDefault();
//   //   setLoading(true);
    
//   //   const formdata = new FormData();
//   //   formdata.append("phone_number", username);
//   //   formdata.append("password", password);

//   //   axios({
//   //     method: "POST",
//   //     url: "https://realauto.limsa.uz/api/auth/signin",
//   //     data: formdata,
//   //   })
//   //     .then(() => {
//   //       alert("Login Successful");
//   //       navigate("/home"); 
//   //     })
//   //     .catch((err) => {
//   //       setLoading(false);
//   //       setErrorMessage("Login Failed. Please check your credentials.");
//   //       console.error("Login error:", err); 
//   //     });
//   // };
//   const login = (e) => {
//     e.preventDefault();
//     setLoading(true);
  
//     const formdata = new FormData();
//     formdata.append("phone_number", username);
//     formdata.append("password", password);
  
//     axiosLogin({
//       method: "POST",       
//       url: "auth/signin", 
//       data: formdata,     
//     })
//       .then(() => {
//         alert("Login Successful");
//         navigate("/home");
//       })
//       .catch((err) => {
//         setLoading(false);
//         setErrorMessage("Login Failed. Please check your credentials.");
//         console.error("Login error:", err);
//       });
//   };
//   useEffect(() => {
//     if(token) {
//       navigate('/home')
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   },[])

//   return (
//     <div>
//       <div className="forin">
//         <div className="container">
//           <div className="forin_box">
//             <form className="forin_card" onSubmit={login}>
//               <input
//                 className="forin_input"
//                 type="text"
//                 placeholder="Username"
//                 required
//                 onChange={(e) => setUsername(e.target.value)}
//                 value={username}
//               />
//               <input
//                 className="forin_input"
//                 type="password"
//                 placeholder="Password"
//                 required
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//               />
//               {errorMessage && (
//                 <div className="error-message" style={{ color: 'red' }}>
//                   {errorMessage}
//                 </div>
//               )}
//               <button className="forin_btn" type="submit" disabled={loading}>
//                 {loading ? "Logging in..." : "Login"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Forin;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axiosLogin from "../../api/axios";

const Forin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); 

  const login = (e) => {
    e.preventDefault();
    setLoading(true);
  
    const formdata = new FormData();
    formdata.append("phone_number", username);
    formdata.append("password", password);
  
    axiosLogin({
      method: "POST",       
      url: "auth/signin", 
      data: formdata,     
    })
      .then((response) => {
        const { token } = response.data; // Assuming the token is returned from API
        localStorage.setItem("tokenxon", token);
        setLoading(false); // Hide loading state
        navigate("/home"); // Navigate to home after successful login
      })
      .catch((err) => {
        setLoading(false); // Hide loading state in case of an error
        setErrorMessage("Login Failed. Please check your credentials.");
        console.error("Login error:", err);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("tokenxon");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div>
      <div className="forin">
        <div className="container">
          <div className="forin_box">
            <form className="forin_card" onSubmit={login}>
              <input
                className="forin_input"
                type="text"
                placeholder="Username"
                required
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <input
                className="forin_input"
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {errorMessage && (
                <div className="error-message" style={{ color: 'red' }}>
                  {errorMessage}
                </div>
              )}
              <button className="forin_btn" type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forin;

