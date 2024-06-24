import React, { Component } from "react";
import Navbar_overlay from "./navbar_overlay";
import Footer3 from "./footer";
import Footer3mob from "./footer_mob";
import SubpageHeader from "./SubpageHeader";
import Underconstruction from "./notify-page_under_construction";

export default class ConstructionPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <html>
        <head>
          <title>Under Construction</title>
        </head>
        <div>
          <Navbar_overlay />
          <SubpageHeader />
          <center>
            <Underconstruction />
          </center>
          <Footer3 />
          <Footer3mob />
        </div>
      </html>
    );
  }
}
