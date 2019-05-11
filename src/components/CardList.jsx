import React, { Component } from "react";
import Card from './Card';

class CardList extends Component {
   render() {
      const { items } = this.props;
      return (
         {
            items.map( item => (
               <Card key={item.id} image={item.image} name={item.name} email={item.email} />
            ))
         }
      );
   }
}

export default CardList;
