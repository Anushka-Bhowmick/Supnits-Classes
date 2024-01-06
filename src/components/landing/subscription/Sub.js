import React, { useEffect } from "react";
import "./Sub.css";
import sub_img from "../../../images/sub/sub.svg";
import Shery from "sheryjs";

const Sub = () => {
  useEffect(() => {
    Shery.makeMagnet("#imgs", {
      debug: true,
      ease: "cubic-bezier(0.23, 2, 0.320, 1)",
      duration: 1,
    });
  }, []);

  return (
    <div className="sub py-5 mb-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="left-side text-lg-start text-center mb-lg-0 mb-5">
              <img id="imgs" className="img-fluid w-75" src={sub_img} alt="sub" />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="right-side text-lg-start text-center">
              <h3 className="big-title text-capitalize mb-4" style={{ color: "#008080" }}>
                get weekly courses and news are sent to your inbox
              </h3>
              <p className="text text-capitalize mb-4">
                <span className="sub-word">Supnits Classes</span> offers new
                courses and lessons weekly in all fields. If you are
                interested, you might desire to register via your email to get
                our offers directly in your inbox.
              </p>
              <div className="row">
                <div className="col-lg-8 col-12">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control py-2 px-3 border border-primary rounded-3 shadow-lg text-lg-start text-center"
                      placeholder="Your Email"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  <button className="btn btn-primary shadow-lg w-100" style={{ backgroundColor: "#008080" }}>
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sub;
