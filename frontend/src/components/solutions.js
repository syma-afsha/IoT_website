import React, { Component } from "react";

import Solutions from "./solutions_nav";
import SubpageHeader from "./SubpageHeader";
import Navbar_overlay from "./navbar_overlay";
import Footer3 from "./footer";
import Footer3mob from "./footer_mob";
import Solution_body from "./solutionsbody";
import Last from "./solutionsbodylast";
class SolutionsPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <html>
        <head>
          <title>Solutions</title>
        </head>
        <div>
          <Navbar_overlay />
          <SubpageHeader caption={"iBug Solutions"} />
          <Solutions />
          <Solution_body />
          <Last />
          <Footer3 />
          <Footer3mob />
        </div>
      </html>
    );
  }
}
export default SolutionsPage;
