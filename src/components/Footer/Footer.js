import { Container, Grid } from "@mui/material";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer-top">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <div className="main-footer-topic">
                <div className="main-footer-topic-img">
                  <img
                    src="https://i.ibb.co/pWmpQKV/logo-2-removebg-preview.png"
                    alt=""
                  />
                  <p>
                    American Lance Armstrong holds the record of most victories
                    in Tour de and with his 7 consecutive wins. Armstrong
                    alsoArmstrong also won in the 2001
                  </p>
                </div>
                <div className="social-media-main">
                  <h3>SOCIAL MEDIA</h3>
                  <div className="social-media-icons">
                    <div className="media-icon-box">
                      <i class="fab fa-facebook-f"></i>
                    </div>
                    <div className="media-icon-box">
                      <i class="fab fa-instagram"></i>
                    </div>
                    <div className="media-icon-box">
                      <i class="fab fa-whatsapp"></i>
                    </div>
                    <div className="media-icon-box">
                      <i class="fab fa-youtube"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={3}>
              <div className="single-colum">
                <div className="top-info">
                  <h3>WANT TO CALL WITH US?</h3>
                  <div className="icon-and-info">
                    <div className="link-icon">
                      <i class="fas fa-phone-alt"></i>
                    </div>

                    <div className="info-text">
                      <h5>Phone</h5>
                      <p>(+000)000 00 000</p>
                    </div>
                  </div>
                </div>
                <div className="QUICK-LINKS">
                  <h3>QUICK LINKS</h3>
                  <div className="QUICK-LINKS-info">
                    <div>
                      <i class="fas fa-chevron-right"></i>
                    </div>
                    <div>
                      <h6>About</h6>
                    </div>
                  </div>
                  <div className="QUICK-LINKS-info">
                    <div>
                      <i class="fas fa-chevron-right"></i>
                    </div>
                    <div>
                      <h6>Sitemap</h6>
                    </div>
                  </div>
                  <div className="QUICK-LINKS-info">
                    <div>
                      <i class="fas fa-chevron-right"></i>
                    </div>
                    <div>
                      <h6>Blog</h6>
                    </div>
                  </div>
                  <div className="QUICK-LINKS-info">
                    <div>
                      <i class="fas fa-chevron-right"></i>
                    </div>
                    <div>
                      <h6>Contact</h6>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="single-colum">
                <div className="top-info">
                  <h3>WANT TO EMAIL WITH US?</h3>
                  <div className="icon-and-info">
                    <div className="link-icon">
                      <i class="far fa-envelope"></i>
                    </div>

                    <div className="info-text">
                      <h5>Email</h5>
                      <p>carhunt@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="QUICK-LINKS">
                  <h3>CUSTOMER SERVICE</h3>
                  <div className="QUICK-LINKS-info">
                    <div>
                      <i class="fas fa-chevron-right"></i>
                    </div>
                    <div>
                      <h6>Privacy Policy</h6>
                    </div>
                  </div>
                  <div className="QUICK-LINKS-info">
                    <div>
                      <i class="fas fa-chevron-right"></i>
                    </div>
                    <div>
                      <h6>Terms & Conditions</h6>
                    </div>
                  </div>
                  <div className="QUICK-LINKS-info">
                    <div>
                      <i class="fas fa-chevron-right"></i>
                    </div>
                    <div>
                      <h6>Support</h6>
                    </div>
                  </div>
                  <div className="QUICK-LINKS-info">
                    <div>
                      <i class="fas fa-chevron-right"></i>
                    </div>
                    <div>
                      <h6>Disclaimer</h6>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="single-colum">
                <div className="top-info">
                  <h3>WANT TO VISIT US?</h3>
                  <div className="icon-and-info">
                    <div className="link-icon">
                      <i class="fas fa-map-marked-alt"></i>
                    </div>

                    <div className="info-text">
                      <h5>Location</h5>
                      <p>2059 Valley View Drive Somerville, MA 02143</p>
                    </div>
                  </div>
                </div>
                <div className="QUICK-LINKS">
                  <h3>OUR SHOP</h3>
                  <div className="QUICK-LINKS-info">
                    <div>
                      <i class="fas fa-chevron-right"></i>
                    </div>
                    <div>
                      <h6>Cars & Parts</h6>
                    </div>
                  </div>
                  <div className="QUICK-LINKS-info">
                    <div>
                      <i class="fas fa-chevron-right"></i>
                    </div>
                    <div>
                      <h6>All Cars</h6>
                    </div>
                  </div>
                  <div className="QUICK-LINKS-info">
                    <div>
                      <i class="fas fa-chevron-right"></i>
                    </div>
                    <div>
                      <h6>Car For Rent</h6>
                    </div>
                  </div>
                  <div className="QUICK-LINKS-info">
                    <div>
                      <i class="fas fa-chevron-right"></i>
                    </div>
                    <div>
                      <h6>Booking Form </h6>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div class="footer-bottom">
        <Container>
          <div className="footer-bottom-text">
            <div>
              <p>Copyright © 2021. All rights reserved.</p>
            </div>
            <div>
              <p>
                Designed by <span>Mamun Ahmed</span>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
