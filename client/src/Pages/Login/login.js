import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./login.css";
import { useState } from "react";
import { login } from "../../Component/ReduxContainer/apiCall";

import { CircularProgress, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import axios from "axios"; //edit shiv
import { loginStart, loginSuccess, loginFailure, logout } from "../../Component/ReduxContainer/userReducer"; //edit shiv
//
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";
import { Button, FormControl, Grid, TextField } from "@mui/material";
export default function Login() {
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleClick = async (e) => {
    console.log("Hii this ");
    e.preventDefault();
    if (!email && !password) {
      enqueueSnackbar("All fields are required !!", {
        variant: "warning",
        autoHideDuration: 3000,
      });
    } else if (!email) {
      enqueueSnackbar("Email is required !!", {
        variant: "warning",
        autoHideDuration: 3000,
      });
    } else if (!password) {
      enqueueSnackbar("Password is required !!", {
        variant: "warning",
        autoHideDuration: 3000,
      });
    } else {
      login(dispatch, { email, password });
      // const user = { email, password };
      // dispatch(loginStart());
      // try {
      //   const res = await axios.post(
      //     "http://localhost:5000/api/user/login",
      //     user
      //   );
      //   const response = await res.json();
      //   console.log(response);
      //   // return 1;
      //   console.log(res.data);
      //   // if (res) {
      //     dispatch(loginSuccess(res.data));
      //   // } else {
      //     // console.log("sdfsd");
      //   // }
      // } catch (error) {
      //   // console.log(error);  
      //   dispatch(loginFailure());
      // }
    }
  };

  return (
    <div className="mainContainerForsignup">
      <Grid item container className="submainContainer">
        <Grid
          sm={4}
          style={{ flex: 1, marginLeft: 150, marginBottom: "170px" }}
        >
          <p className="logoText">
            Soc<span className="part">ial</span>
          </p>
          <p className="introtext">
            Connect with your <span className="part">family and friends </span>
          </p>
        </Grid>
        <Grid sm={6} style={{ flex: 3 }}>
          <Grid
            item
            sm={8}
            style={{ background: "azure", padding: "40px" }}
            container
          >
            <Grid item sm={12}>
              <Typography
                variant="h4"
                style={{ textAlign: "center", fontWeight: "bold" }}
                className="createaccountTxt"
              >
                Login Account
              </Typography>
            </Grid>
            <Grid item sm={12}>
              <FormControl
                fullWidth
                style={{ margin: "16px" }}
                variant="outlined"
              >
                <TextField
                  className="login-textfield"
                  id="email"
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  // value={email}
                  style={{ borderRadius: "12px" }}
                  onChange={(e) => setemail(e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item sm={12}>
              <FormControl
                fullWidth
                style={{ margin: "16px" }}
                variant="outlined"
              >
                <TextField
                  className="login-textfield"
                  id="password"
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  style={{ borderRadius: "12px" }}
                  onChange={(e) => setPassword(e.target.value)}
                  // onKeyPress={loginUserEnterBtn}
                />
              </FormControl>
            </Grid>
            {/* <Grid item sm={12}>
              <input
                type="password"
                placeholder="******"
                name=""
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                className="inputText"
              />
            </Grid> */}
            <Grid item sm={12}>
              <Button
                style={{
                  borderRadius: 50,
                }}
                fullWidth
                color="secondary"
                variant="contained"
                // disabled={isButtonDisabled}
                className="login-button"
                onClick={handleClick}
              >
                {isButtonDisabled ? <CircularProgress size={38} /> : "Log In"}
              </Button>
            </Grid>
            <Grid
              item
              sm={6}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Link to={"/forgot/password"}>
                <p
                  style={{
                    textAlign: "start",
                    //  marginLeft: "30.6%"
                  }}
                >
                  Forgot password
                </p>
              </Link>
            </Grid>
            <Grid
              item
              sm={6}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Link to={"/signup"}>
                <p
                  style={{
                    textAlign: "start",
                    //  marginLeft: "30.6%"
                  }}
                >
                  Create New Account
                </p>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
