import React, { useState } from "react";
function Solution_body() {
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
    <div className="solutions_body">
      <div className="row">
        <div className="col-sm-12 col-s-6 col-md-6">
          <div className={img1 ? "card2 active" : "card2"} data-aos="fade-left">
            <div className="card__image">
              <img className="imagess" src="/static/images/locate.png" alt="" />
            </div>
            {/* <div className="card__copy">
                <h1>Browse Sensors</h1>
              </div> */}
          </div>
        </div>
        <div className="col-sm-12 col-s-6 col-md-6">
          <div className="card_solutionstext">
            <h1>
              <b>Browse Sensors</b>
            </h1>
            <p>
              The measurement standards for environment sensing projects around
              the world are a shifting mosaic of often-conflicting requirements.
              iBUG manages this complexity for you via a convenient web-based
              planning dashboard. <br /> {}Upload farm and field boundaries,
              select your project methodology (e.g. CAR SEP, Verra VM0042), and
              Plan by iBUG takes care of the rest.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="mobile_solutions">
          <div className="col-sm-12 col-12">
            <div className={img1 ? "card2 active" : "card2"}>
              <div className="card__image">
                <img
                  className="imagess"
                  src="/static/images/measure.png"
                  alt=""
                />
              </div>
              {/* <div className="card__copy">
                            <h1>Browse Sensors</h1>
                          </div> */}
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-s-6 col-md-6">
          <div className="card_solutionstext1">
            <h1>
              <b>Collect Data</b>
            </h1>
            <p>
              A plan will only get you so far - it’s time to get into the soil.
              Put away your split coring rig and slide hammer, and let iBUG’s
              spectral hardware eliminate the backache and headache of cores,
              bags, and labs. <br /> {} Our sampling team’s cloud-enabled
              handheld device instantly collects SOC and bulk density
              measurements to a 45 cm depth, and can even be used with crops
              standing in the field.
            </p>
          </div>
        </div>
        <div className="col-s-6 col-md-6">
          <div className="desktop_solution">
            <div
              className={img1 ? "card2 active" : "card2"}
              data-aos="fade-left"
            >
              <div className="card__image">
                <img
                  className="imagess"
                  src="/static/images/measure.png"
                  alt=""
                />
              </div>
            </div>
            {/* <div className="card__copy">
                            <h1>Browse Sensors</h1>
                          </div> */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-s-6 col-md-6">
          <div className={img1 ? "card2 active" : "card2"} data-aos="fade-left">
            <div className="card__image">
              <img
                className="imagess"
                src="/static/images/analyse.png"
                alt=""
              />
            </div>
            {/* <div className="card__copy">
                            <h1>Browse Sensors</h1>
                          </div> */}
          </div>
        </div>

        <div className="col-sm-12 col-s-6 col-md-6">
          <div className="card_solutionstext3">
            <h1>
              <b>Visualize</b>
            </h1>
            <p>
              Measurement data is no good unless it means something. Analyze by
              iBUG collects measurement data in real time, ensuring your data
              are secure, auditable, and interpreted consistent with your
              project methodology. <br /> {} Access a live dashboard of project
              measurement data to rapidly understand project progress, quantify
              stocks and changes, and share this information with a variety of
              key stakeholders, including participating growers, 3rd party
              verifiers, and offset end customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Solution_body;
