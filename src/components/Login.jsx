import Icono from "../assets/image/aguaN.png";
import "../assets/css/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email != "" && password != "") {
      const form = JSON.stringify({
        email: email,
        password: password,
      });

      let  myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: form,
        redirect: "follow",
      };

      fetch("http://localhost:8080/login", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }
  };

  const handleRegisterClick = (e) => {
    navigate("/register");
  };

  return (
    <>
      <img className="aguaN" src={Icono}></img>
      <div className="po">
        <h2>I2P_URI</h2>
        <div className="box">
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="Email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input"
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" className="button" value="sing up"></input>
          </form>
          <button className="button2" onClick={handleRegisterClick}>
            {" "}
            Register{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
