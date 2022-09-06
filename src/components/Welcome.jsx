import React, { Component } from "react";
import About from "./About.jsx";
import Navbar from "./Navbar.jsx";
import LifeCycle from "./LifeCycle.jsx";


class Welcome extends Component {
  constructor(props) {
    super(props);

    const { date } = this.props;
    this.state = {
      date,
      show: false,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);

    this.setState({
      showAbout: false,
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  //   show = () => {
  //     this.setState({ showAbout: true });
  //   };
  render() {
    // console.log(this.state.date);
    const { date } = this.state;
    return (
      <div className="wrapper">
        <Navbar />
        <h1>Welcome to our page...</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore et,
          veniam adipisci perferendis dolore repudiandae pariatur quisquam quas
          quidem temporibus!
        </p>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ipsum
          dolore perspiciatis corrupti mollitia quisquam similique, eos nostrum
          exercitationem quibusdam est voluptates dolorum tenetur, facilis
          tempore laborum voluptatem sed cumque! Modi aspernatur aut
          reprehenderit, repellendus deleniti suscipit culpa ipsam ullam harum.
          Quia quibusdam voluptate nisi dolor ullam laborum odio! Voluptate.
        </p> */}

        <div className="clock-div">
          <h1>{date?.toLocaleTimeString()}</h1>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            console.log(this.state.show)
            this.setState({ show: !this.state.show });
          }}
        >
          About us
        </button>
        {this.state.show ? <About /> : ""}

        {/* <LifeCycle /> */}
      </div>
    );
  }
}

export default Welcome;
