import React, { useEffect } from "react";
import AOS from "aos";
// import "aos/dist/aos.css";
function Body2() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: "ease",
    });
  }, []);
  return (
    <div className="wrapperbody">
      <div className="row">
        <div className="col-md-6 col-s-6 col-12">
          <div className="main-text" data-aos="fade-left">
            <h1>
              <b>GET EARLY ACCESS AS A iBUG PILOT PARTNER.</b>
            </h1>

            <p>
              iBUG is currently piloting both its spectral <br /> measurement
              device and project data platform. We're <br /> providing exclusive
              early access to a limited number of <br />
              leading soil carbon organizations, including commercial <br />{" "}
              firms and researchers alike.
            </p>
            <h2>
              <b> ARE YOU MEASURING SOIL CARBON THIS YEAR?</b>
            </h2>
            <p>
              If so, we’d love to hear from you. Apply now to be considered for
              our Pilot Partner program.
            </p>
            <a className="learn1" href="/contact" alt="">
              <b>APPLY NOW</b>
            </a>
          </div>
        </div>
        <div className="col-md-6 col-s-6 col-12">
          <img className="img" src="/static/images/cover(1).jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Body2;
