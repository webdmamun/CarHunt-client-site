import { Container, Grid } from "@mui/material";
import React from "react";
import "./OurWorks.css";
const OurWorks = () => {
  return (
    <div className="ourWorks">
      <Container>
        <div className="ourworks-title">
          <h3>HOW IT WORKS</h3>
          <h1>WE CREATED THE MOST ADVANCED SUPER-CAR TECHNOLOGY</h1>
        </div>
        <div className="all-work-content">
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <div className="work-box">
                <div className="work-box-icon a">
                  <i class="fas fa-car-crash"></i>
                </div>
                <div className="work-box-text">
                  <h3>POWER YOUR RIDE</h3>
                  <p>
                    Give A Little Thought To How You Expect To Use This Super
                    Car.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className="work-box">
                <div className="work-box-icon">
                  <i class="fas fa-street-view"></i>
                </div>
                <div className="work-box-text">
                  <h3>EMERGENCY BRAKING</h3>
                  <p>
                    Give A Little Thought To How You Expect To Use This Super
                    Car.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className="work-box">
                <div className="work-box-icon">
                  <i class="fas fa-chart-bar"></i>
                </div>
                <div className="work-box-text">
                  <h3>SPEED MONITORING</h3>
                  <p>
                    Give A Little Thought To How You Expect To Use This Super
                    Car.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className="work-box">
                <div className="work-box-icon">
                  <i class="fas fa-tachometer-alt"></i>
                </div>
                <div className="work-box-text">
                  <h3>Head-Up Displays</h3>
                  <p>
                    Give A Little Thought To How You Expect To Use This Super
                    Car.
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default OurWorks;
