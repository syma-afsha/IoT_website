import React, { useState } from "react";

function About_body1() {
  // fetch('https://litipsum.com/')

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
    <div className="body1">
      <h1 className="text">
        <b>ABOUT US</b>
      </h1>
      <div className="row">
        <div className="col-sm-12 col-s-4 col-md-4">
          <div className="card1">
            <div className="img_card">
              <img
                className="body_image"
                src="/static/images/about02.avif"
                alt=" "
              />
            </div>
            <div className={img1 ? "card_text  active" : "card_text"}>
              <h1>
                iBUG is proud to attract world-class founders, scientific
                advisors, and team members. In 2020 we were awarded a generous
                R&D grant from the US Department of Energy’s ARPA-E Smartfarm
                program, and our outside financing also includes some of the
                most prestigious climatetech investors in the world.
              </h1>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-s-4 col-md-4">
          <div className="card1">
            <div className="img_card">
              <img
                className="body_image1"
                src="/static/images/about03.avif"
                alt=""
              />
            </div>

            <div className={img1 ? "card_text  active" : "card_text"}>
              <h1>
                Our Environmental Protection Agency, the lead agency for
                environmental management and stewardship, is one of the more
                diverse agencies in state government - protecting our air, water
                and land.
              </h1>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-s-4 col-md-4">
          <div className="card1">
            <div className="img_card">
              <img
                className="body_image2"
                src="/static/images/about04.avif"
                alt=" "
              />
            </div>
            <div className={img1 ? "card_text  active" : "card_text"}>
              <h1>
                Our environmental priorities include achieving regulatory
                certainty, consistency and protection, getting the water quality
                and quantity, and ensuring our residents and visitors have more
                opportunities to enjoy our award-winning state parks.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_body1;
