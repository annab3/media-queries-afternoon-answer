import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuSatus: ""
    };
  }
  clickHandler() {
    if (this.state.menuSatus != "open") {
      this.setState({ menuSatus: "open" });
    } else {
      this.setState({ menuSatus: "close" });
    }
  }
  render() {
    return (
      <div className="App">
        <div className="top_container">
          <nav>
            <div className="nav_container">
              <h2 className="nav_h2">Start Bootstrap</h2>
              <ul>
                <li>SERVICES</li>
                <li>PORTFOLIO</li>
                <li>ABOUT</li>
                <li>TEAM</li>
                <li>CONTACT</li>
              </ul>
              <div className="hamburger" onClick={() => this.clickHandler()}>
                Menu
                <img
                  className="hamburger_button"
                  src="http://chittagongit.com/images/white-hamburger-menu-icon/white-hamburger-menu-icon-24.jpg"
                  alt="stying"
                />
              </div>
            </div>
          </nav>
          <div className={`menu_${this.state.menuSatus}`}>
            <div>SERVICES</div>
            <div>PORTFOLIO</div>
            <div>ABOUT</div>
            <div>TEAM</div>
            <div>CONTACT</div>
          </div>
          <header>
            <div className="container">
              <div className="header_text_line_1">Welcome To Out Studio!</div>
              <div className="header_text_line_2">IT'S NICE TO MEET YOU</div>
              <div className="header_text_line_3">TELL ME MORE</div>
            </div>
          </header>
        </div>
        <div className="service_container">
          <h2 className="services_h2">Services</h2>
          <h3 className="services_h3">
            Lorem ipsum dolor sit amet consectetur
          </h3>
          <div className="sub_service_container">
            <div className="service_discription">
              <div className="service_display_circle">Cart</div>
              <h2>E-Commerce</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam erchitecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className="service_discription">
              <div className="service_display_circle">Computer</div>
              <h2>Responsive Design</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam erchitecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className="service_discription">
              <div className="service_display_circle">Lock</div>
              <h2>Web Security</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam erchitecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
