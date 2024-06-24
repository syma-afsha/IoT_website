import React from "react";
import { Form } from "react-bootstrap";

import ShowAlertComponent from "./close";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    // const [click, setClick] = useState(false)

    //  handleClick = () => setClick(!click)
    // state = {
    //     clicked: false,
    //   };
    //   handleClick = () => {
    //     this.setState({ clicked: !this.state.clicked });
    //   };
    // this.state = {
    // const navigate = useNavigate();

    //  navigateToContacts = () => {
    //   // 👇️ navigate to /contacts
    //   navigate('/');
    // };

    //  navigateHome = () => {
    //   // 👇️ navigate to /
    //   navigate('/contact');
    // };
    this.state = {
      //the display property on state allows me to toggle the view of the form vs. the view of the user's data
      display: false,
      firstName: "",
      lastName: "",
      phone: 0,
      email: "",
      subject: "",
      company: "",
      message: "",
      how: "",
    };
  }
  inputCheck = (e) => {
    let filter = e.target.getAttribute("filter");
    e.target.value = e.target.value.replace(new RegExp(filter, "g"), "");
    this.setState({ [e.target.name]: e.target.value });
  };
  submitCheck = () => {
    if (
      !this.state.firstName ||
      !this.state.lastName ||
      !this.state.company ||
      !this.state.subject ||
      !this.state.how ||
      !this.state.message
    ) {
      alert("A field is empty! Please fill up all these information.");
    } else if (this.state.phone.length < 10 || !this.state.phone) {
      alert("Phone number is not long enough.");
    } else if (!this.state.email.match(/@./g)) {
      alert("Email is in the wrong format.");
    } else {
      this.setState({ display: true });
    }
  };
  resetForm = () => {
    this.setState({
      display: !this.state.display,
      firstName: "",
      lastName: "",
      phone: 0,
      email: "",
      subject: "",
      company: "",
      message: "",
      how: "",
    });
  };

  displayForm() {
    return (
      <div className="contactContainer">
        <Form className="form2">
          <div className="row">
            <div className=" col-md-6  col-s-6">
              <input
                className="name"
                filter="[^a-zA-Z ]"
                name="firstName"
                placeholder="First Name"
                onChange={this.inputCheck}
              />
            </div>
            <div className="col-md-6 col-s-6 ">
              <input
                className="name"
                filter="[^a-zA-Z ]"
                name="lastName"
                placeholder="Last Name"
                onChange={this.inputCheck}
              />
            </div>
          </div>
        </Form>
        <Form className="form2">
          <div className="row">
            <div className=" col-md-6 col-s-6">
              <input
                className="name"
                filter="[^a-zA-Z ]"
                name="subject"
                placeholder="Subject"
                onChange={this.inputCheck}
              />
            </div>
            <div className="col-md-6 col-s-6">
              <input
                className="name"
                filter="[^a-zA-Z ]"
                name="company"
                placeholder="Company"
                onChange={this.inputCheck}
              />
            </div>
          </div>
        </Form>
        <Form className="form4">
          <div className="row">
            <div className="col-md-6 col-s-6">
              <input
                className="email"
                maxLength="100"
                name="how"
                placeholder="How did you hear about us?"
                onChange={this.inputCheck}
              />
            </div>
            <div className=" col-md-6  col-s-6">
              <input
                className="email"
                filter="[^0-9]"
                maxLength="10"
                name="phone"
                placeholder="Phone"
                onChange={this.inputCheck}
              />
            </div>
          </div>
        </Form>
        <Form className="form6">
          <input
            className="mesg"
            filter={"[^a-zA-Z ]" && "[^0-9]"}
            placeholder="Message"
            maxLength="1000"
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
          {/* <label>Enter your name:
                            <input type="text" />
                          </label> */}
        </Form>
        <button className="contactbutton" onClick={this.submitCheck}>
          <b>Submit</b>
        </button>
      </div>
    );
  }
  displayData() {
    return (
      <Form>
        {/*Below is the JSX that displays the user's info in the specified format*/}
        <p>
          {this.state.lastName}, {this.state.firstName}, {this.state.subject},
          {this.state.company},{this.state.message}
        </p>
        <p>
          {this.state.phone} | {this.state.email} | {this.state.message}{" "}
        </p>
        <button onClick={this.resetForm}>Reset</button>
      </Form>
    );
  }
  render() {
    {
      /* Here in the render method, I'm returning a ternary operator that displays either the form, or the user's data, depending on the boolean value that is currently set to this.state.display*/
    }
    return (
      <div className="contact">
        <div className="box1">
          {/* <div>
           */}

          <ShowAlertComponent />
          {/* {clicked?(< Navbar_overlay/>): (<Contact/>)}</div> */}
          <div className="row">
            <img src="/static/images/10_1.png" className="logo responsive4" />

            <div className="col-sm-6 col-md-12 col-lg-12 col-s-12">
              <h1 className="send">
                {" "}
                <b>Send Us a Message</b>
              </h1>
            </div>
            <hr className="hr" />
            <div className="col-6 col-sm-6 col-md-12 col-s-12">
              <Form className="formContact">
                {this.state.display ? this.displayData() : this.displayForm()}
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
