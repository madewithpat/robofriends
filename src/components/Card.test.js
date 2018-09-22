import React from "react";
import Card from "./Card";
import { shallow } from "enzyme";

describe("Card", () => {
   it("renders without crashing", () => {
      shallow(<Card />);
   });
});
