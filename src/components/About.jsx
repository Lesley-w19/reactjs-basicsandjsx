import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }
  todos = [
    {
      id: 23,
      todo: "Plan a trip to another country",
      completed: true,
      userId: 37,
    },
    { id: 24, todo: "Improve touch typing", completed: false, userId: 45 },
    { id: 25, todo: "Learn Express.js", completed: false, userId: 49 },
    { id: 26, todo: "Learn calligraphy", completed: false, userId: 50 },
    {
      id: 27,
      todo: "Have a photo session with some friends",
      completed: false,
      userId: 14,
    },
  ];

  componentDidMount() {
    this.setState({ tasks: this.todos });
  }

  render() {
    // console.log(this.state);
    // const { tasks } = this.state;
    return (
      <div>
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit
          magni eveniet consequuntur neque corrupti, quaerat, magnam harum,
          culpa repellendus dicta inventore illum quasi facilis! Delectus hic
          quisquam nulla consequuntur.
        </p>

        <div className="task-wrapper">
          <h6>Tasks</h6>
          {/* {tasks?.map((task) => task.name)} */}
        </div>
      </div>
    );
  }
}

export default About;
