import React, { useState } from "react";
import Menu from "./menu";
function Footer3() {
  const [name, setName] = useState(" ");

  return (
    <div className="desktop">
      <div class="row">
        <div class="col-md-3">
        <a href="/">
          <img src="/static/images/10_1.png" className="logo_img" alt=" "></img> </a>
        </div>

        <div className="col-md-4">
          <form>
            <input
              type="text"
              className="form_footer"
              name="Work Email"
              placeholder="Work Email"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </form>
        </div>
        <div className="col-md-3">
          <div className="submit" st>
            <a href="/contact" alt=" ">
              <b>SUBMIT</b>
            </a>
          </div>
        </div>

        <div className="col-md">
          <ul className="footer_ul">
            {Menu.map((item, index) => {
              return (
                <li>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="footer_p">
            <div className="images">
            <a href="https://twitter.com/" target='_blank'><img src="/static/images/twitter.png" alt="" /></a>
            <a href="https://www.linkedin.com/" target='_blank'><img src="/static/images/linkedin.png" alt="" /></a>
            </div>
            <br />
            <p>
              <b>
                PUBLIC BENEFIT CORPORATION <br />
                CONTACT@iBUG.COM
              </b>
            </p>
            {/* <br /> */}
            <b>© 2022 iBug. ALL RIGHTS RESERVED.</b>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer3;
