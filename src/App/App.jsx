import React, { Component } from "react";
import "./App.css";

class App extends Component {
   state = {
      robots: []
   };
   render() {
      return (
         <div>
            <h1 className="f1 sega">RoboFriends</h1>
            <input type="text" onChange={this.filterRobots} />
            <RobotList robots={robots} />
         </div>
      );
   }
}

export default App;
