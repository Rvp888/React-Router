import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>About Us</h1>
        <p>
          This page was created by a team of passionate coders from Google’s
          workshop for experimental products, Area 120. Coding is becoming such
          an essential skill, and we want to make it possible for everyone to
          learn even when life gets busy. We made this page to help folks like
          you get into coding in a fun and easy way. And we put this on a phone
          so you can turn your commute or waiting in line into a learning
          moment. We hope you like it and that it helps you embark or continue
          your journey in learning to code.
        </p>
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/e80434394ca08796a7fb9303a331720a.png?auto=format%2Ccompress&dpr=1&w=476&h=429" />
      </div>
    );
  }
}
