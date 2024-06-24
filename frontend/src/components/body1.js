import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Body1() {
  const navigate= useNavigate();
  const navigateToAbout=()=>{
    navigate('/about');
  };
  const navigateToHome=()=>{
    navigate('/')
  }
  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-s-12 col-12">
          <div className="box">
            <h1 className="soil" data-aos="fade-left">
              <b>iBUG IS AN AI-DRIVEN REMOTE ENVIRONMENT SENSING TECHNOLOGY.</b>
            </h1>
            <p className="material">
              The advancement in wireless sensor network and micro fabrication
              techniques have created a great opportunity for using miniaturized
              wireless microelectronic devices in a variety of agriculture and
              environmental data collection applications. It has been made
              possible via iBUG!
            </p>
            <a href="/about">
            {/* <Link to={"/about"}> */}
            <Button className="body-button" >
              <b>Learn More</b>
            </Button>
            {/* </Link> */}
            </a>
           
          </div>
        </div>
        {/* <div className="col-md-6 col-s-6 col-12">
          <img className="img" src="/static/images/soil.avif" alt="" />
        </div> */}
      </div>
    </div>
  );
}
export default Body1;
