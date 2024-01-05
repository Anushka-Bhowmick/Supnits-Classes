import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import hero from "../../../images/sections/hero.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Shery from 'sheryjs'
import { Helmet } from "react-helmet";


const Hero = () => {
  const app=useRef(null);
  useGSAP(()=>{
    gsap.from(".word",{
      duration:1,
      delay:.5,
      y:10,
      stagger:0.2,
    })
  },{scope:app})

  useEffect(()=>{
    Shery.makeMagnet("#img" /* Element to target.*/, {
      //Parameters are optional.
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  })
  
  return (
    <div ref={app} className="hero py-5 mb-5">
      <Helmet>
        {/* Gsap */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
        {/* Scroll Trigger */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
        {/* Three.js */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.155.0/three.min.js"></script>
        {/* ControlKit */}
        <script src="https://cdn.jsdelivr.net/gh/automat/controlkit.js@master/bin/controlKit.min.js"></script>
      </Helmet>
      <div className="container">
        <div className="row align-items-center">
          <div className="c col-lg-6 col-12">
            <div className="left-side mb-lg-0 mb-5 text-lg-start text-center" >
              <h3 className="title text-capitalize" style={{display:"flex"}}>
                welcome to &nbsp;{`Supnits Classes`.split('').map((word, idx) => {
                  return word === ' ' ? <div key={idx} className="word">&nbsp;</div> : <div style={{color:"green"}} key={idx} className="word">{word}</div>
                })}
              </h3>
              <p className="sub-title text-muted text-capitalize">
                we always would be nascent
              </p>
              <p className="desc pb-3">
                Discover excellence in education with Supnits Classes, where
                we redefine learning as a family. Our unparalleled courses
                cater to all ICSE and CBSE students, JEE and NEET aspirants
              </p>

              <div className="buttons">
                <Link
                  className="btn btn-primary text-capitalize me-3 shadow"
                  to="/about"
                >
                  read more<i className="ms-2 fas fa-chevron-right"></i>
                </Link>
                <Link
                  className="btn btn-outline-primary text-capitalize shadow"
                  to="/contact"
                >
                  get in touch<i className="ms-2 fas fa-envelope"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="c col-lg-6 col-12">
            <div className="right-side text-lg-end text-center">
              <img id="img" className="w-75 img-fluid" src={hero} alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
