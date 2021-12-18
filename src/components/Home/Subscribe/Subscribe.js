import { Container, Grid } from "@mui/material";
import React, { useRef } from "react";
import "./Subscribe.css";

const Subscribe = () => {
  const emailref = useRef();

  const formSubmit = (e) => {
    e.preventDefault();
    const email = emailref.current.value;
    const disCountUser = { email };

    fetch(`https://stormy-bayou-66113.herokuapp.com/discount`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(disCountUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert(`your Application successfully accepted`);
          e.target.reset();
        }
      });
  };

  return (
    <div className="subscribe">
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <div className="subscribe-box">
              <div className="subscribe-content">
                <h3>GET MORE DISCOUNT</h3>
                <h1>SUBSCRIBE & GET 10% OFF</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="subscribe-form">
                <form onSubmit={formSubmit}>
                  <input ref={emailref} type="email" placeholder="Your Email" />
                  <button type="submit" className="subscribe-btn">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Subscribe;
