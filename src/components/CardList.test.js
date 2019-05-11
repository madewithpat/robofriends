import React from "react";
import CardList from "./CardList";
import { shallow } from "enzyme";
import robots from "../robots";

describe("CardList", () => {
   let mountedCardList;

   it("should render the correct number of cards", () => {
      let testData = robots.slice(3);
      mountedCardList = shallow(<CardList items={testData} />);

      expect(mountedCardList.find(<Card />)).to.have.lengthOf(3);
   });
});
