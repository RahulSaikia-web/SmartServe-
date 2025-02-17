import React from "react";
import "./Service.css";
function Service() {
  return (
    <>
      <div className="container">
        <div className="service-heading">
          <h1>New and noteworthy</h1>
        </div>
        <div className="services">
          <div className="service-box">
            <div className="service-top">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1681371120474-301f47.jpeg"
                alt=""
              />
            </div>
            <div className="service-bottom">
              <h2>Bathroom & Kitchen Cleaning</h2>
            </div>
          </div>

          {/* Repeat Demo Service Box */}
          <div className="service-box">
            <div className="service-top">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1681371120474-301f47.jpeg"
                alt=""
              />
            </div>
            <div className="service-bottom">
              <h2>Bathroom & Kitchen Cleaning</h2>
            </div>
          </div>
          <div className="service-box">
            <div className="service-top">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1681371120474-301f47.jpeg"
                alt=""
              />
            </div>
            <div className="service-bottom">
              <h2>Bathroom & Kitchen Cleaning</h2>
            </div>
          </div>
          <div className="service-box">
            <div className="service-top">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1681371120474-301f47.jpeg"
                alt=""
              />
            </div>
            <div className="service-bottom">
              <h2>Bathroom & Kitchen Cleaning</h2>
            </div>
          </div>

          {/* Demo Box End Here  */}
        </div>
      </div>
    </>
  );
}

export default Service;
