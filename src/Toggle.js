import React, { useState, useContext } from "react";
import { UserContext } from "./App";
import DishForm from "./DishForm";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  const userInfo = useContext(UserContext);
  // console.log("userInfo", userInfo);
  if (!userInfo.user) return <h2>Please change user: true! (mean: Login)</h2>;

  return (
    <div>
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
      {isToggled && <DishForm />}
    </div>
  );
};

export default Toggle;

// import React, { Component } from "react";

// export default class Refactor extends Component {
//   state = {
//     isToggled: false,
//   };

//   toggle = () => {
//     this.setState((state) => {
//       return { isToggled: !state.isToggled };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.toggle}>Toggle</button>
//         {this.state.isToggled && <h2>Hello</h2>}
//       </div>
//     );
//   }
// }
