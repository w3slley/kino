import { Component } from "react";

class Footer extends Component {
  currentYear = new Date().getFullYear();

  render() {
    return (
      <footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 50,
          margin: "20px 0 0 0",
          backgroundColor: "#262626",
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <p style={{ margin: 0, color: "white" }}>
          Made by{" "}
          <a target="_blank" rel="noreferrer" href="https://weslleyvieira.me">
            w3slley
          </a>
          . © {this.currentYear}
        </p>
      </footer>
    );
  }
}

export default Footer;

