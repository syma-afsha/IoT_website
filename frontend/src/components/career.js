import React, { Component } from "react";

import Navbar_overlay from "./navbar_overlay";

import Career from "./career_footer";
import Footer3 from "./footer";
import Footer3mob from "./footer_mob";

class CareerPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar_overlay />
        <Career />
        <Footer3 />
        <Footer3mob />
      </div>
    );
  }
}
export default CareerPage;
