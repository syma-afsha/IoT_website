import React, { Component } from "react";
import Navbar_overlay from "./navbar_overlay";
import Doesnotexist from "./notify-doesnot_exist";
import Footer3 from "./footer";
import Footer3mob from "./footer_mob";
import SubpageHeader from "./SubpageHeader";

export default class NotPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar_overlay />
        <SubpageHeader/>
        <Doesnotexist />
        <Footer3 />
        <Footer3mob />
      </div>
    );
  }
}
