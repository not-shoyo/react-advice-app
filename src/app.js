import React, { Component } from "react";
import "./app.css";
import axios from "axios";

class App extends Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((request) => {
        const { advice } = request.data.slip;
        console.log(advice);
        this.setState({ advice });
        this.setState({
          button: (
            <button className="button" onClick={this.fetchAdvice}>
              <span>Give me advice!</span>
            </button>
          ),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          {this.state.button}
        </div>
      </div>
    );
  }
}

export default App;
