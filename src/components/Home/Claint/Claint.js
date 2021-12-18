import { Container, Grid } from "@mui/material";
import React from "react";
import "./Claint.css";
const Claint = () => {
  return (
    <div className="clints">
      <Container>
        <Grid container spacing={12}>
          <Grid item md={2}>
            <div id="grayscale-img" className="clint-box">
              <img src="https://i.ibb.co/sQqC12v/1.png" alt="" />
            </div>
          </Grid>
          <Grid item md={2}>
            <div id="grayscale-img" className="clint-box">
              <img src="https://i.ibb.co/5hqQyJt/2.png" alt="" />
            </div>
          </Grid>
          <Grid item md={2}>
            <div id="grayscale-img" className="clint-box">
              <img src="https://i.ibb.co/4FnHKDZ/ferarri.jpg" alt="" />
            </div>
          </Grid>
          <Grid item md={2}>
            <div id="grayscale-img" className="clint-box">
              <img
                src="https://i.ibb.co/C2xG2G0/honda-logo-png-44825.png"
                alt=""
              />
            </div>
          </Grid>
          <Grid item md={2}>
            <div id="grayscale-img" className="clint-box">
              <img src="https://i.ibb.co/YQkW4z1/Nissan-logo.png" alt="" />
            </div>
          </Grid>
          <Grid item md={2}>
            <div id="grayscale-img" className="clint-box">
              <img src="https://i.ibb.co/HnswQKK/toyota.png" alt="" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Claint;
