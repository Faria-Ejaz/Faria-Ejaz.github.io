import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Talks from "../../containers/talks/Talks";
import Blogs from "../../containers/blogs/Blogs";
import Footer from "../../components/footer/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <Blogs/>
        <Talks/>
        <Footer />
      </div>
    );
  }
}

export default Home;
