// Test away
import React from "react";
import ReactDOM from "react-dom";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(<Dashboard />);
});

it("renders without crashing", () => {
  //   const div = document.createElement("div");
  //   ReactDOM.render(<Dashboard />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  expect(wrapper.container).toMatchSnapshot();
});
