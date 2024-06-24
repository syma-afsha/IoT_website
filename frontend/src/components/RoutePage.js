import React, { Component } from "react";
import HomePage from "./HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import AboutPage from "./about";
import SolutionsPage from "./solutions";
import ContactPage from "./contact";
import CareerPage from "./career";
import NotPage from "./notify-Not_page";

import ConstructionPage from "./notify-underconstructionpage";

export default class RoutePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solutions" element={<ConstructionPage />} />
          <Route path="/contact" element={<ConstructionPage />} />
          <Route path="/career" element={<ConstructionPage />} />
          {/* <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/career" element={<CareerPage />} /> */}
          <Route path="*" element={<NotPage />} />
          {/* <Route path="/construction" element={<ConstructionPage />} /> */}

          {/* <Route path="/join" element={<RoomJoinPage />} />
          <Route path="/create" element={<CreateRoomPage />} />
          <Route path="/room/:roomCode" element={<Room/>} /> */}
        </Routes>
      </Router>
    );
  }
}
