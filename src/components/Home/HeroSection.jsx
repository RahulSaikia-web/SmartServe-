import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./HeroSection.css";
import Service from "../../pages/Service";
function HeroSection() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="hero-body">
          <div className="left">
            <div className="heading">
              <h1>Home services at your doorstep</h1>
            </div>
            <div className="offer-box">
              <h2>What are you looking for?</h2>
              <div className="offer-box-details">
                <div className="box">
                  <div className="top">
                    <img
                      src={
                        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg"
                      }
                      alt=""
                    />
                  </div>
                  <div className="bottom">
                    <h2>Women's Salon</h2>
                  </div>
                </div>
                {/* Example Box for test  */}
                <div className="box">
                  <div className="top">
                    <img
                      src={
                        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg"
                      }
                      alt=""
                    />
                  </div>
                  <div className="bottom">
                    <h2>Women's Salon</h2>
                  </div>
                </div>
                <div className="box">
                  <div className="top">
                    <img
                      src={
                        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg"
                      }
                      alt=""
                    />
                  </div>
                  <div className="bottom">
                    <h2>Women's Salon</h2>
                  </div>
                </div>
                <div className="box">
                  <div className="top">
                    <img
                      src={
                        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg"
                      }
                      alt=""
                    />
                  </div>
                  <div className="bottom">
                    <h2>Women's Salon</h2>
                  </div>
                </div>
                <div className="box">
                  <div className="top">
                    <img
                      src={
                        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg"
                      }
                      alt=""
                    />
                  </div>
                  <div className="bottom">
                    <h2>Women's Salon</h2>
                  </div>
                </div>
                <div className="box">
                  <div className="top">
                    <img
                      src={
                        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg"
                      }
                      alt=""
                    />
                  </div>
                  <div className="bottom">
                    <h2>Women's Salon</h2>
                  </div>
                </div>
                {/* Test Box End Here  */}
              </div>
            </div>
            <div className="rating">
              <div className="service-rating">
                <div className="service-right">
                  <i class="fa-regular fa-star"></i>
                </div>
                <div className="service-left">
                  <h3>4.5</h3>
                  <p>Service Rating</p>
                </div>
              </div>
              <div className="customer-count">
               <div className="service-right">
               <i class="fa-solid fa-users"></i>
               </div>
                <div className="service-left">
                <h3>10,000</h3>
                <p>Customers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <img
              src={
                "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696852847761-574450.jpeg"
              }
              alt=""
            />
          </div>
        </div>
      </div>
      <Service />
      {/* <Footer /> */}
    </>
  );
}

export default HeroSection;
