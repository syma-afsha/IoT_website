// import './App.css';
// import './header.css';

// import './footer.css';
// import './navbar.css';
import React, { Component } from "react";
import Navbar_overlay from "./navbar_overlay";

// import 'bootstrap/dist/css/bootstrap.min.css';
import Body2 from "./body2";
import Header from "./header";
import Body1 from "./body1";
import Footer3 from "./footer";
import Footer1 from "./footer2";
import Footer3mob from "./footer_mob";
import Body3 from "./body3";
// import Body4 from './body4';
// function App() {
//   return (
//     <div className="App">
//       <Navbars />
//       <Navbarsmob/>
//       <Header />
//       <Body1/>
//       <Body3/>
//       <Body2/>
//       {/* <Body4/> */}
//       <Footer1/>
//       <Footer3/>
//       <Footer3mob/>

//     </div>
//   );
// }

// export default App;

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <html>
        <head>
          <title>Home</title>
        </head>
        <div style={{display: "block"}}>
          
        <Navbar_overlay />

        <Header />
        <Body1 />
        <Body3 />
        <Body2 />
        {/* <Body4/> */}
        <Footer1 />
        <Footer3 />
        <Footer3mob />
        
      </div>
      </html>
    );
  }
}
