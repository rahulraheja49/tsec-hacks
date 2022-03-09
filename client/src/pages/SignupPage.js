import { useState, useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

import { Box, Button, TextField, Switch } from "@material-ui/core";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import logo from "../assets/images/discuss.jpeg";
import '../styles/login\.css'


export default function SignUpPage() {
  // const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [loginData, setLoginData] = useState({ email: "", pass: "" ,  cpass: "" });
  const [togglePass, setTogglePass] = useState(true);

  useEffect(() => {}, [togglePass]);

  let name, val;
  const handleInput = (e) => {
    name = e.target.name;
    val = e.target.value;
    setLoginData({ ...loginData, [name]: val });
    // console.log(loginData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loginData.email === "" || loginData.pass === "") {
      alert("Fields can't be empty!!");
    } 

    alert("Login Clicked!");

  };



  return (
    <>
      <div className="loginBox">
        <div className="signinBox">
          <h1>
            <span>Sign Up</span> Synergy
          </h1>
          <form>
            <div className="rows">
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <PersonOutlineOutlinedIcon
                  sx={{ color: "rgb(187, 187, 187)", mr: 1, my: 0.5 }}
                />
                <TextField
                  name="email"
                  label="Email"
                  variant="standard"
                  onChange={handleInput}
                  InputLabelProps={{ className: "textfield__label" }}
                />
              </Box>
            </div>

            <div className="rows">
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <LockOutlinedIcon
                  sx={{ color: "rgb(187, 187, 187)", mr: 1, my: 0.5 }}
                />
                <TextField
                  name="pass"
                  label="Password"
                  variant="standard"
                  onChange={handleInput}
                  type={togglePass ? "password" : "text"}
                  InputLabelProps={{ className: "textfield__label" }}
                />
              </Box>
            </div>

             <div className="rows">
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <LockOutlinedIcon
                  sx={{ color: "rgb(187, 187, 187)", mr: 1, my: 0.5 }}
                />
                <TextField
                  name="cpass"
                  label="Confirm Password"
                  variant="standard"
                  onChange={handleInput}
                  type={togglePass ? "password" : "text"}
                  InputLabelProps={{ className: "textfield__label" }}
                />
              </Box>
            </div>

            <div className="rows rows_last">
              <div className="rows_switch">
                <Switch
                  color="primary"
                  onChange={() => setTogglePass(!togglePass)}
                />
              </div>

              <div className="rows_btn">
                <Button
                  type="submit"
                  className="submit_btn"
                  variant="contained"
                  onClick={handleSubmit}
                >
                  SIGN UP
                </Button>
              </div>
            </div>
          </form>
        </div>

        <div className="Banner">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </>
  );

}