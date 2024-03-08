/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Sayan Karmakar",
  title: "Game Developer & Competitive Coder",
  email: "sayan.karmakar@studentambassadors.com",
  gitHub: "Sayan-dev731",
  instagram: "code_it884/",
  linkedIn: "sayan-karmakar-01239a242",
  medium: "",
  twitter: "Code_It884",
  youTube: "Code",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  const nameStyle = { color: 'white' };
  const titleStyle = { color: 'white' };

  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} nameStyle={nameStyle} titleStyle={titleStyle} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};


export default App;
