import React, { useState } from "react";
import { Button, CircularProgress, Container, Grid } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";

const Register = () => {
  const [data, setData] = useState({});
  const { registerFunction, isloading } = UseAuth();
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
    registerFunction(data.email, data.password, data.name, history);
    e.target.reset();
  };

  return (
    <div className="loginOrRegister-section">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {!isloading && (
              <div className="loginform">
                <h2>Register form</h2>
                <form onSubmit={formSubmit}>
                  <input
                    placeholder="Name"
                    type="name"
                    name="name"
                    onBlur={handleBlur}
                  />

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
                    value="Register"
                  />
                </form>
                <Link to="/login">
                  <Button variant="text">Already Registered? login now</Button>
                </Link>
              </div>
            )}
            {isloading && <CircularProgress color="secondary" />}
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="loginform-image">
              <img
                style={{ borderRadius: "5px" }}
                src="https://wallpaperaccess.com/full/35813.jpg"
                alt=""
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Register;
