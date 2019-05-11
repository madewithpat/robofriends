import React from "react";
import Card from "./Card";
import { shallow } from "enzyme";

describe("Card", () => {
   let mountedCard;

   beforeAll(() => {
      mountedCard = shallow(<Card />);
   });

   it("renders without crashing", () => {
      let mountedCard = shallow(<Card />);
   });

   it("contains an image", () => {
      const image = mountedCard.find("img");

      expect(image.length).toBe(1);
   });
});
