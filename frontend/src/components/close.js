import React from "react";

import { FaTimes } from "react-icons/fa";
// import Navbar_overlay from "./navbar_overlay";
// // import Navbar_overlay from "./navbar_overlay";
// import Contact from "./contact_nav";

const ShowAlertComponent = () => {
  // const [click, setClick] = useState(false)
  // // const navigate = useNavigate();
  // const handleClick = () => setClick(!click)
  // const navigateHome = () => {
  //     // 👇️ navigate to /
  //     navigate(<Navbar_overlay/>);
  //   };

  return (
    <div className="close">
      <a href="/">
        <FaTimes></FaTimes>
      </a>

      {/* {click ? <Navbar_overlay/> : <Contact/>} */}
    </div>
  );
};
export default ShowAlertComponent;
