import React from "react";
import ReactDOM from "react-dom";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { language: "NodeJS" };
  }

  componentWillMount() {
    console.log("componentWillMount()");
  }

  componentDidMount() {
    console.log("componentDidMount()");
  }

  changeState() {
    this.setState({ language: "ReactJS!" });
  }

  render() {
    return (
      <div>
        <h1>Lifecycle for {this.state.language} Components!!</h1>
        <h2>
          <button onClick={this.changeState.bind(this)}>Press Here!</button>
        </h2>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate()");
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate()");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }
}

export default LifeCycle;
// ReactDOM.render(<LifeCycle />, document.getElementById("root"));
