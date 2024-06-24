import React, { useState } from "react";

function Solutions() {
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
    <div className="solutions">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-s-12">
          <div className="solutions1">
            <h1 className="solutions_header">
              <b>iBUG IS YOUR COMPLETE ENVIRONMENT MEASUREMENT SOLUTION.</b>
            </h1>
            <p className={img1 ? "solutions_text active" : "solutions_text"}>
              From project concepting to credit transaction, our technologies
              ensure your environmental program has both climate and commercial
              impact.
            </p>
          </div>
        </div>
        {/* <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-s-12'>
        <img src="/static/images/solutions1.jpg" alt=""></img>
            </div> */}
      </div>
    </div>
  );
}

export default Solutions;
