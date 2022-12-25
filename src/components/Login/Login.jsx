import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/user";
import "./Login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.login);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const alert = () => {
    if (error) {
      toast.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  };

  return (
    <>
      <div className="login">
        <div className="loginContainer">
          <form className="loginForm" onSubmit={submitHandler} onClick={alert}>
            <Typography variant="h4">
              <p>A</p>
              <p>D</p>
              <p>M</p>
              <p>I</p>
              <p style={{ marginRight: "1vmax" }}>N</p>

              <p>P</p>
              <p>A</p>
              <p>N</p>
              <p>E</p>
              <p>L</p>
            </Typography>

            <div>
              <input
                type="email"
                placeholder="Admin Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Admin Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" variant="contained" disabled={loading}>
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
