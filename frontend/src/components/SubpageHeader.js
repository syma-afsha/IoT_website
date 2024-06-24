import React from "react";
function SubpageHeader({ caption = "", align = "left" }) {
  return (
    <div className="row">
      <div className="carousel">
        <img
          className="img-responsive1"
          src="/static/images/home5.jpeg"
          alt="Second slide"
        />
        <h1 className="about" style={{ textAlign: align }}>
          <b>{caption}</b>
        </h1>
      </div>
    </div>
  );
}
export default SubpageHeader;
