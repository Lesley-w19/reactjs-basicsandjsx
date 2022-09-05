import React from "react";
import Welcome from "./components/Welcome.jsx";
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <h1>React Webpack Implementation</h1>
          <Welcome date={new Date()} />
        </div>
      </div>
    );
  }
  return;
}

export default App;
