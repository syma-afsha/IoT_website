import React, { useState } from "react";

import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";

function Aboutbody4() {
  const slideDelay = 3000;
  // const [isHovering, setIsHovering] = useState(false);
  // const handleMouseOver = () => {
  //     setIsHovering(true);
  //   };

  //   const handleMouseOut = () => {
  //     setIsHovering(false);
  //   };
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);


  return (
    <div className="slides-name">
      <div className="slide-container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12">
            <div className="text2">
              <h1>
                <b>iBUG TECHNOLOGIES INFO</b>
              </h1>
            </div>
          </div>
        </div>
        <Carousel slide className="slides">
          <Carousel.Item interval={slideDelay}>
            <div className="row">
              <div className="col-12 col-md-4 col-s-4 col-xs-12 col-sm-12 col-lg-4">
                <div
                  className="con"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                >
                  <img
                    className="img-responsive2"
                    src="/static/images/slide_1.jpg"
                    alt=" "
                  />
                  {/* <div className="overlay">
                <a href="#" className="icon" >
                <FaFacebook/>
                </a>
              </div> */}
                  {isShown && (
                    <div className="icon-social">
                      <Button
                        class="social-icon-button"
                        style={{
                          color: "rgb(34, 34, 88)",
                          backgroundColor: "wheat",
                          borderColor: "wheat",
                          fontSize: 25,
                        }}
                      > <a href="https://www.facebook.com/" target="_blank">
                        {" "}
                        <FaFacebook /></a>
                      </Button>
                      <Button
                        class="social-icon-button"
                        style={{
                          color: "rgb(34, 34, 88)",
                          backgroundColor: "wheat",
                          borderColor: "wheat",
                          fontSize: 25,
                        }}
                      > <a href="https://twitter.com/" target='_blank'>
                        {" "}
                        <FaTwitter /></a>
                      </Button>
                      <Button
                        class="social-icon-button"
                        style={{
                          color: "rgb(34, 34, 88)",
                          backgroundColor: "wheat",
                          borderColor: "wheat",
                          fontSize: 25,
                        }}
                      ><a href="https://www.youtube.com/" target="_blank">
                        {" "}
                        <FaYoutube /></a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-s-4 col-lg-4">
                <div
                  className="con"
                  onMouseEnter={() => setIsShown1(true)}
                  onMouseLeave={() => setIsShown1(false)}
                >
                  <img
                    className="img-responsive2"
                    src="/static/images/about0.avif"
                    alt=" "
                  />
                  {isShown1 && (
                    <div className="icon-social">
                      <Button
                        class="social-icon-button"
                        style={{
                          color: "rgb(34, 34, 88)",
                          backgroundColor: "wheat",
                          borderColor: "wheat",
                          fontSize: 25,
                        }}
                      ><a href="https://www.facebook.com/" target="_blank">
                        {" "}
                        <FaFacebook />{" "}</a>
                      </Button>
                      <Button
                        class="social-icon-button"
                        style={{
                          color: "rgb(34, 34, 88)",
                          backgroundColor: "wheat",
                          borderColor: "wheat",
                          fontSize: 25,
                        }}
                      > <a href="https://twitter.com/" target='_blank'>
                        {" "}
                        <FaTwitter /></a>
                      </Button>
                      <Button
                        class="social-icon-button"
                        style={{
                          color: "rgb(34, 34, 88)",
                          backgroundColor: "wheat",
                          borderColor: "wheat",
                          fontSize: 25,
                        }}
                      ><a href="https://www.youtube.com/" target="_blank">
                        {" "}
                        <FaYoutube /></a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-s-4 col-lg-4">
                <div
                  className="con"
                  onMouseEnter={() => setIsShown2(true)}
                  onMouseLeave={() => setIsShown2(false)}
                >
                  <img
                    className="img-responsive2"
                    src="/static/images/slide3.jpg"
                    alt=" "
                  />
                  {isShown2 && (
                    <div className="icon-social">
                      <Button
                        class="social-icon-button"
                        style={{
                          color: "rgb(34, 34, 88)",
                          backgroundColor: "wheat",
                          borderColor: "wheat",
                          fontSize: 25,
                        }}
                      ><a href="https://www.facebook.com/" target="_blank">
                        {" "}
                        <FaFacebook /></a>
                      </Button>
                      <Button
                        class="social-icon-button"
                        style={{
                          color: "rgb(34, 34, 88)",
                          backgroundColor: "wheat",
                          borderColor: "wheat",
                          fontSize: 25,
                        }}
                      > <a href="https://twitter.com/" target='_blank'>
                        {" "}
                        <FaTwitter /></a>
                      </Button>
                      <Button
                        class="social-icon-button"
                        style={{
                          color: "rgb(34, 34, 88)",
                          backgroundColor: "wheat",
                          borderColor: "wheat",
                          fontSize: 25,
                        }}
                      ><a href="https://www.youtube.com/" target="_blank">
                        {" "}
                        <FaYoutube /></a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={slideDelay}>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-4 col-s-4 col-lg-4">
                <div
                  className="con"
                  onMouseEnter={() => setIsShown3(true)}
                  onMouseLeave={() => setIsShown3(false)}
                >
                  <img
                    className="img-responsive2"
                    src="/static/images/slide_4.jpg"
                    alt=" "
                  />
                  {isShown3 && (
                    <div className="icon-social">
                      <Button
                        class="social-icon-button"
                        style={{
                          color: "rgb(34, 34, 88)",
                          backgroundColor: "wheat",
                          borderColor: "wheat",
                          fontSize: 25,
                        }}
                      ><a href="https://www.facebook.com/" target="_blank">
                        {" "}
                        <FaFacebook /></a>
                      </Button>
                      <Button
                        class="social-icon-button"
                        style={{
                          color: "rgb(34, 34, 88)",
                          backgroundColor: "wheat",
                          borderColor: "wheat",
                          fontSize: 25,
                        }}
                      > <a href="https://twitter.com/" target='_blank'>
                        {" "}
                        <FaTwitter /></a>
                      </Button>
                      <Button
                        class="social-icon-button"
                        style={{
                          color: "rgb(34, 34, 88)",
                          backgroundColor: "wheat",
                          borderColor: "wheat",
                          fontSize: 25,
                        }}
                      ><a href="https://www.youtube.com/" target="_blank">
                        {" "}
                        <FaYoutube /></a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-s-4 col-lg-4">
                <div
                  className="con"
                  onMouseEnter={() => setIsShown4(true)}
                  onMouseLeave={() => setIsShown4(false)}
                >
                  <img
                    className="img-responsive2"
                    src="/static/images/slide_5.jpg"
                    alt=" "
                  />
                  {isShown4 && (
                    <div className="icon-social">
                      <Button
                        class="social-icon-button"
                        style={{
                          color: "rgb(34, 34, 88)",
                          backgroundColor: "wheat",
                          borderColor: "wheat",
                          fontSize: 25,
                        }}
                      ><a href="https://www.facebook.com/" target="_blank">
                        {" "}
                        <FaFacebook /></a>
                      </Button>
                      <Button
                        class="social-icon-button"
                        style={{
                          color: "rgb(34, 34, 88)",
                          backgroundColor: "wheat",
                          borderColor: "wheat",
                          fontSize: 25,
                        }}
                      > <a href="https://twitter.com/" target='_blank'>
                        {" "}
                        <FaTwitter /></a>
                      </Button>
                      <Button
                        class="social-icon-button"
                        style={{
                          color: "rgb(34, 34, 88)",
                          backgroundColor: "wheat",
                          borderColor: "wheat",
                          fontSize: 25,
                        }}
                      ><a href="https://www.youtube.com/" target="_blank">
                        {" "}
                        <FaYoutube /></a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-s-4 col-lg-4">
                <div
                  className="con"
                  onMouseEnter={() => setIsShown5(true)}
                  onMouseLeave={() => setIsShown5(false)}
                >
                  <img
                    className="img-responsive2"
                    src="/static/images/slide_6.jpg"
                    alt=" "
                  />
                  {isShown5 && (
                    <div className="icon-social">
                      <Button
                        class="social-icon-button"
                        style={{
                          color: "rgb(34, 34, 88)",
                          backgroundColor: "wheat",
                          borderColor: "wheat",
                          fontSize: 25,
                        }}
                      ><a href="https://www.facebook.com/" target="_blank">
                        {" "}
                        <FaFacebook /></a>
                      </Button>
                      <Button
                        class="social-icon-button"
                        style={{
                          color: "rgb(34, 34, 88)",
                          backgroundColor: "wheat",
                          borderColor: "wheat",
                          fontSize: 25,
                        }}
                      > <a href="https://twitter.com/" target='_blank'>
                        {" "}
                        <FaTwitter />{" "}</a>
                      </Button>
                      <Button
                        class="social-icon-button"
                        style={{
                          color: "rgb(34, 34, 88)",
                          backgroundColor: "wheat",
                          borderColor: "wheat",
                          fontSize: 25,
                        }}
                      > <a href="https://www.youtube.com/" target="_blank">
                        {" "}
                        <FaYoutube />{" "}</a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* <div className='skills'>
<img src="/static/images/twitter.png" alt="" />
      <img src="/static/images/linkedin.png" alt="" />
</div> */}

      {/* <div className='skills'>
    <div className="images">
    <img src="/static/images/twitter.png" alt="" />
          <img src="/static/images/linkedin.png" alt="" />
    </div>
    // </div> */}
      {/* // <div className='skills'>
    
    //         <FaYoutube style={{ color: '#f8f8f8'  }} />
    //         <FaFacebook style={{ color: '#f8f8f8'  }} />
    //         <FaTwitter style={{ color: '#f8f8f8'  }} />

    //         </div> */}
    </div>
  );
}
export default Aboutbody4;
