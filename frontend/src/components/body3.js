import React from "react";

class Body3 extends React.Component {
  // fetch('https://litipsum.com/')
  render() {
    return (
      <div className="c">
        <div className="row">
          <div className="col-sm-12 col-s-4 col-md-4">
            <a href="/solutions" style={{ textDecoration: "none" }}>
              <div className="card">
                <div className="card__image">
                  <img
                    className="imagess"
                    src="/static/images/locate.png"
                    alt=""
                  />
                </div>
                <div className="card__copy">
                  <h1>Browse Sensors</h1>
                </div>
              </div>
            </a>
          </div>

          <div className="col-sm-12 col-s-4 col-md-4">
            <a href="/solutions" style={{ textDecoration: "none" }}>
              <div className="card">
                <div className="card__image">
                  <img
                    className="imagess"
                    src="/static/images/measure.png"
                    alt=""
                  />
                </div>
                <div className="card__copy">
                  <h1>Collect Data</h1>
                </div>
              </div>
            </a>
          </div>

          <div className="col-sm-12 col-s-4 col-md-4">
            <a href="/solutions" style={{ textDecoration: "none" }}>
              <div className="card">
                <div className="card__image">
                  <img
                    className="imagess"
                    src="/static/images/analyse.png"
                    alt=""
                  />
                </div>
                <div className="card__copy">
                  <h1>Visualise</h1>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Body3;
