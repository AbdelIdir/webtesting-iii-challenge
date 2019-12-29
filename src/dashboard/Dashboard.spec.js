// Test away
import React from "react";
import ReactDOM from "react-dom";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";

afterEach(rtl.cleanup);

let wrapper;

let Unlocked = () => wrapper.queryByText("Unlocked");
let Open = () => wrapper.queryByText("Open");
let Lock = () => wrapper.queryByText("Lock Gate");
let Close = () => wrapper.queryByText("Close Gate");

beforeEach(() => {
  wrapper = rtl.render(<Dashboard />);
});

it("renders without crashing", () => {
  //   const div = document.createElement("div");
  //   ReactDOM.render(<Dashboard />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  expect(wrapper.container).toMatchSnapshot();
});

it("renders a 'Unlocked' text node ", () => {
  //   expect(wrapper.queryByText("Unlocked")).toBeInTheDocument();
  //   expect(wrapper.queryByText("Unlocked")).toBeVisible();
  expect(Unlocked()).toBeInTheDocument();
  expect(Unlocked()).toBeVisible();
});
