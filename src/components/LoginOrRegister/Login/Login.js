import React, { useState } from "react";
import { Box, Button, CircularProgress, Container, Grid } from "@mui/material";
import "./Login.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
const Login = () => {
  const { loginFunction, isloading, signInGoogle } = UseAuth();
  const [data, setData] = useState({});
  const location = useLocation();
  const history = useHistory();

  const handleBlur = (e) => {
    const filed = e.target.name;
    const value = e.target.value;
    const newData = { ...data };
    newData[filed] = value;
    setData(newData);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    loginFunction(data.email, data.password, location, history);
    e.target.reset();
  };

  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogIn = () => {
    signInGoogle()
      .then((result) => {
        history.push(redirect_uri);
        // setUser(result.user);
      })
      .catch((error) => {
        // setError(error.message);
      });
  };

  return (
    <div className="loginOrRegister-section">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {!isloading && (
              <div className="loginform">
                <h2>Login form</h2>
                <form onSubmit={formSubmit}>
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    onBlur={handleBlur}
                  />
                  <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    onBlur={handleBlur}
                  />
                  <input
                    className="loginfotmSubmitBtbn"
                    type="submit"
                    value="Login"
                  />
                </form>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <button type="button" onClick={handleGoogleLogIn}>
                    <img
                      style={{ width: "150px" }}
                      src="https://i.ibb.co/Jv9Gv9y/btn-google-signin-dark-focus-web-2x.png"
                      alt=""
                    />
                  </button>
                </Box>
                <Link to="/register">
                  <Button variant="text">New User? Register Now</Button>
                </Link>
              </div>
            )}
            {isloading && <CircularProgress color="secondary" />}
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="loginform-image">
              <img
                style={{ borderRadius: "5px" }}
                src="https://i.pinimg.com/originals/7a/0c/ca/7a0ccabdf546706980ca94beb82ce6da.jpg"
                alt=""
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
