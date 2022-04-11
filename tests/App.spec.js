import React from "react";
import SignInScreen from "../src/screens/SignInScreen/SignInScreen";
import renderer from "react-test-renderer";

test("Renders snapshot as expected", () => {
  const tree = renderer.create(<SignInScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
