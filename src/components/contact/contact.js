import React from "react";

class Contact extends React.Component {
  state = {
    userName: "",
    number: "",
    details: "",
    email: "vaibhavagar@gmail.com",
    submitSuccess: false,
  };

  handleSubmit = () => {
    alert("dobne");
    const templateId = "template_id";
    this.sendFeedback(templateId, {
      message_html: this.state.details,
      from_name: this.state.userName,
      reply_to: this.state.email,
    });
  };

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

  render() {
    return (
      <div className="cp-contact">
        <h3>Contact</h3>
        <p>Get in touch if you are looking for a website/app/SEO</p>
        <form>
          <div>
            <label for="name">Name</label>
            <input
              type="text"
              name="text"
              placeholder="name"
              required
              id="name"
              onChange={(event) =>
                this.setState({ userName: event.target.value })
              }
            />
          </div>
          <div>
            <label for="tel">contact details</label>
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="contact number"
              onChange={(event) =>
                this.setState({ number: event.target.value })
              }
            />
          </div>
          <div>
            <label for="details">What you are looking for?</label>
            <input
              type="text"
              id="details"
              name="details"
              placeholder="Enter more details"
              required
              onChange={(event) =>
                this.setState({ details: event.target.value })
              }
            />
          </div>
          <span class="cp-button">
            <span class="cp-button__ctaBorder"></span>
            <button
              className="cp-button__link"
              type="submit"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </span>
        </form>
      </div>
    );
  }
}

export default Contact;
