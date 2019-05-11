import React, { Component } from "react";

class Card extends Component {
   render() {
      return (
         <div className="bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5">
            <img alt="" src="https://robohash.org/test?200x200" />
            <div>
               <h2>Name</h2>
               <p>email</p>
            </div>
         </div>
      );
   }
}

export default Card;
