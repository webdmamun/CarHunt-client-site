import React from "react";
import { Container, Grid } from "@mui/material";
import Rating from "react-rating";
import { Link } from "react-router-dom";
const HomeTopBenner = () => {
  return (
    <div className="home-Top-Banner">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <div className="home-banner-text">
              <div style={{ marginTop: "50px" }} className="price-rating">
                <div>
                  <h2>$226,000</h2>
                </div>
                <div className="rating-starts">
                  <Rating
                    initialRating={4.3}
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                    readonly
                  />
                </div>
              </div>
              <div className="banner-main-text">
                <h1>2021 Ferrari Portofino M</h1>
                <p>
                  With irresistible looks and thrilling performance, the
                  Portofino is a stunning grand-touring masterpiece.
                </p>
              </div>
              <div className="banner-models-area">
                <div className="banner-models">
                  <h4>Model :</h4>
                  <h3>M 611-horsepower</h3>
                </div>
                <div className="banner-models">
                  <h4>Color :</h4>
                  <h3>GREY RUST</h3>
                </div>
              </div>
              <div className="home-banner-btn">
                <Link to="/explore">
                  <button>explore</button>
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={7}></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomeTopBenner;
