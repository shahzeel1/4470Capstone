import React from "react";
import Home from "../src/screens/SignInScreen/SignInScreen";
import renderer from "react-test-renderer";

test("Renders snapshot as expected", () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
