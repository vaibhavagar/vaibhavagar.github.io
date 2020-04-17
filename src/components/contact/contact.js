import React from "react";
// import axios from "axios";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      number: "",
      details: "",
      email: "vaibhavagar@gmail.com",
      submitSuccess: false,
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // sendFeedback(templateId, variables) {
  //   window.emailjs
  //     .send("gmail", templateId, variables)
  //     .then((res) => {
  //       console.log("Email successfully sent!");
  //     })
  //     // Handle errors here however you like, or use a React error boundary
  //     .catch((err) =>
  //       console.error(
  //         "Oh well, you failed. Here some thoughts on the error that occured:",
  //         err
  //       )
  //     );
  // }

  handleSubmit = (e) => {
    // console.log(this.state);
    alert(
      "Backend is not set yet to submit form, please drop an email to vaibhavagar@gmail.com"
    );
    // const { email, userName, number, details } = this.state;

    // // create a new XMLHttpRequest
    // var xhr = new XMLHttpRequest();

    // // get a callback when the server responds
    // xhr.addEventListener("load", () => {
    //   // update the response state and the step

    //   this.setState({
    //     emailStatus: xhr.responseText,
    //   });
    // });
    // // open the request with the verb and the url
    // xhr.open(
    //   "GET",
    //   "../../../index.php?sendto=" +
    //     email +
    //     "&name=" +
    //     userName +
    //     "number" +
    //     number +
    //     "&message=" +
    //     details
    // );
    // // send the request
    // xhr.send();

    // // reset the fields
    // this.setState({
    //   name: "",
    //   email: "",
    //   message: "",
    // });

    e.preventDefault();
  };

  render() {
    const { userName, number, details } = this.state;
    return (
      <div className="cp-contact">
        <h3>Contact</h3>
        <p>Get in touch if you are looking for a website/app/SEO</p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              required
              id="name"
              value={userName}
              onChange={(event) =>
                this.setState({ userName: event.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="tel">contact details</label>
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="contact number"
              value={number}
              onChange={(event) =>
                this.setState({ number: event.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="details">What you are looking for?</label>
            {/* <input
              type="text"
              id="details"
              name="details"
              placeholder="Enter more details"
              required
              onChange={(event) =>
                this.setState({ details: event.target.value })
              }
            /> */}
            <textarea
              className="text-input"
              id="details"
              name="details"
              value={details}
              onChange={(event) =>
                this.setState({ details: event.target.value })
              }
              placeholder="Enter more details"
              required
            />
          </div>
          <span class="cp-button">
            <span class="cp-button__ctaBorder"></span>
            <button className="cp-button__link" type="submit">
              Submit
            </button>
          </span>
        </form>
      </div>
    );
  }
}

export default Contact;
