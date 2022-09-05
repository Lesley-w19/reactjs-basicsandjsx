import React from "react";
import Navbar from "./Navbar";
class Welcome extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <h1>Welcome to our page...</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore et,
          veniam adipisci perferendis dolore repudiandae pariatur quisquam quas
          quidem temporibus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ipsum
          dolore perspiciatis corrupti mollitia quisquam similique, eos nostrum
          exercitationem quibusdam est voluptates dolorum tenetur, facilis
          tempore laborum voluptatem sed cumque! Modi aspernatur aut
          reprehenderit, repellendus deleniti suscipit culpa ipsam ullam harum.
          Quia quibusdam voluptate nisi dolor ullam laborum odio! Voluptate.
        </p>

        <button>About us</button>
      </div>
    );
  }
}

export default Welcome;
