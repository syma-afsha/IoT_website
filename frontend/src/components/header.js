import React from "react";
import Carousel from "react-bootstrap/Carousel";
function Header() {
  const titleText = "iBUG: REALTIME ENVIRONMENT SENSING";
  // const subtitleText = "Measure soil carbon accurately, instantly, and affordably with Yard Stick technologies."
  const subtitleText = "";
  const slideDelay = 2500;
  return (
    <div className="carousel-inner">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-s-12 col-lg-12">
          <Carousel slide className="slide">
            <Carousel.Item interval={slideDelay}>
              <img
                className="img-responsive"
                src="/static/images/slide1.jpeg"
                alt="First slide"
              />

              <Carousel.Caption>
                {/* <h1 className="div-desktop ">
                  <b>{titleText}</b>
                </h1> */}

                {/* <h1 className="home-hero-heading-only _60" id="div-mobile">
                  <b>{titleText}</b>
                </h1>
                <p
                  className="div-des"
                  style={{
                    fontSize: 22,
                    fontFamily: "Source Sans Pro",
                    lineHeight: 1.5,
                  }}
                >
                  {subtitleText}
                </p>

                <p
                  id="div-mob"
                  style={{
                    fontSize: 20,
                    fontFamily: "Source Sans Pro",
                    lineHeight: 1.6,
                  }}
                >
                  {subtitleText}
                </p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={slideDelay}>
              <img
                className="img-responsive"
                src="/static/images/slide2.jpeg"
                alt="Second slide"
              />

              <Carousel.Caption>
                {/* <h1 className="div-desktop ">
                  <b>{titleText}</b>
                </h1> */}
                {/* <h1 className="home-hero-heading-only _60" id="div-mobile">
                  <b>{titleText}</b>
                </h1>
                <p
                  className="div-des"
                  style={{
                    fontSize: 22,
                    fontFamily: "Source Sans Pro",
                    lineHeight: 1.5,
                  }}
                >
                  {subtitleText}
                </p>

                <p
                  id="div-mob"
                  style={{
                    fontSize: 20,
                    fontFamily: "Source Sans Pro",
                    lineHeight: 1.6,
                  }}
                >
                  {subtitleText}
                </p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <h1 className="div-desktop ">
            <b>{titleText}</b>
          </h1>
          <h1 className="div-mobile">
            <b>{titleText}</b>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
