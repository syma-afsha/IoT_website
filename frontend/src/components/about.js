import React, { Component } from "react";
import Navbar_overlay from "./navbar_overlay";
import About_body1 from "./about_body1";
import Footer3 from "./footer";
import Aboutbody_header from "./aboutbody2";
import Aboutbody3 from "./aboutbody3";
import Footer3mob from "./footer_mob";
import SubpageHeader from "./SubpageHeader";
import Aboutbody4 from "./slide_imagebody";
import Aboutbodylast from "./aboutbodylast";
class AboutPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <html>
        <head>
          <title>About</title>
        </head>

        <div>
          <Navbar_overlay />
          <SubpageHeader caption={"Welcome to iBug LLC"}/>
          {/* <Aboutbody_header/> */}
          <About_body1 />
          <Aboutbody3 />

          <Aboutbody4 />
          <Aboutbodylast />
          <Footer3 />
          <Footer3mob />
        </div>
      </html>
    );
  }
}
export default AboutPage;
