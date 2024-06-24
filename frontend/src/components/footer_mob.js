import React, { useState } from "react";
import Menu from "./menu";
function Footer3mob() {
  const [name, setName] = useState(" ");
  return (
    <div className="mobile">
      <form>
        <input
          type="text"
          className="form_footer"
          name="Work Email"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </form>
      <div className="submit">
        <a href="#8" alt=" ">
          <b>SUBMIT</b>
        </a>
      </div>
      <ul className="footer_ul">
        {Menu.map((item, index) => {
          return (
            <li>
              <a className={item.cName} href={item.url}>
                {" "}
                {item.title}{" "}
              </a>
            </li>
          );
        })}
      </ul>
      <a href="/">
      <img src="/static/images/10_1.png" className="logo_img" alt=" "></img></a>

      <div className="footer_img">
      <a href="https://twitter.com/" target='_blank'> <img className="image1" src="/static/images/twitter.png" alt=" "></img></a>

      <a href="https://www.linkedin.com/" target='_blank'><img className="image2" src="/static/images/linkedin.png" alt=" "></img></a>
      </div>
      <br />
      <div className="footer_p">
        <p>
          <b>
          PUBLIC BENEFIT CORPORATION <br />
                CONTACT@iBUG.COM
          </b>
        </p>

        <br />
        <b>© 2022 iBug. ALL RIGHTS RESERVED.</b>
      </div>
    </div>
  );
}
export default Footer3mob;
