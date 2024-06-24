import React, { useState } from "react";

function Last() {
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
    <div className="last">
      <div className="row">
        <div className="col-12 col-sm-12 col-s-6 col-md-6">
          <div className="last_text">
            <h1 className={img1 ? "last_text active" : "last_text"}>
              <b>LET iBUG ENABLE YOUR ENVIRONMENT SENSING IMPACT.</b>
            </h1>
            <p>
              Reach out today to learn how our Pilot Partner development program
              may be a good fit for your current soil carbon measurement work.
            </p>
            <a className="learn2" href="#5" alt="">
              <b>LEARN MORE</b>
            </a>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-s-6 col-md-6">
          <img
            className="image_solutions"
            src="/static/images/about4.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Last;
