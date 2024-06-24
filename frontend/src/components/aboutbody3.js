import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import "animate.css/animate.min.css";
// import { ScrollAnimation } from 'react-animate-on-scroll';
function Aboutbody3() {
  const [img1, setImg1] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setImg1(true);
    } else {
      setImg1(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className="aboutbody2">
      <div className="row">
        <div className="col-md-6 col-s-6 col-12">
          {/* <ScrollAnimation animateIn='fadeIn'
                  animateOut='fadeOut'> */}
          {/* <AnimationOnScroll animateIn="animate__bounceIn"> */}
          <img className="img1" src="/static/images/home6.jpeg" alt="" />
          {/* </AnimationOnScroll> */}
          {/* </ScrollAnimation> */}
        </div>
        <div className="col-md-6 col-s-6 col-12">
          <div className="text1">
            <h1>
              <b>
                OUR MISSION IS CLIMATE IMPACT VIA ENVIRONMENT SENSING
                TECHNOLOGIES.
              </b>
            </h1>

            <p>
              Soil carbon sequestration efforts to date have been significantly
              hampered by the complexity and cost of measuring soil organic
              carbon (SOC) authoritatively and affordably. <br /> iBUG’s mission
              is to fix that problem. By reducing the cost of high-quality SOC
              measurement by 90%+,
              <br /> we can dramatically expand the opportunities for
              evidence-based climate-positive agriculture and ranching practices
              to simultaneously improve ecosystem health, increase
              farmer/rancher livelihoods, and combat climate change.
            </p>

            <a href="/solutions">
              <Button className="button">
                <b>More</b>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Aboutbody3;
