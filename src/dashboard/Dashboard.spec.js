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
let LockGate = () => wrapper.queryByText("Lock Gate");
let CloseGate = () => wrapper.queryByText("Close Gate");
let Closed = () => wrapper.queryByText("Closed");
let Locked = () => wrapper.queryByText("Locked");

beforeEach(() => {
  wrapper = rtl.render(<Dashboard />);
});

describe("Dashboard component renders properly", () => {
  it("renders without crashing", () => {
    //   const div = document.createElement("div");
    //   ReactDOM.render(<Dashboard />, div);
    //   ReactDOM.unmountComponentAtNode(div);
    expect(wrapper.container).toMatchSnapshot();
  });

  it("renders a 'Unlocked,Open,Lock Gate,Close Gate' text nodes ", () => {
    //   expect(wrapper.queryByText("Unlocked")).toBeInTheDocument();
    //   expect(wrapper.queryByText("Unlocked")).toBeVisible();
    expect(Unlocked()).toBeInTheDocument();
    expect(Unlocked()).toBeVisible();

    expect(Open()).toBeInTheDocument();
    expect(Open()).toBeVisible();

    expect(LockGate()).toBeInTheDocument();
    expect(LockGate()).toBeVisible();
    expect(LockGate()).toBeDisabled();

    expect(CloseGate()).toBeInTheDocument();
    expect(CloseGate()).toBeVisible();

    //   expect(Closed()).toBeInTheDocument();
    //   expect(Closed()).toBeVisible();

    //   expect(Locked()).toBeInTheDocument();
    //   expect(Locked()).toBeVisible();
  });
});

describe("Dashboard component,when we close the gate", () => {
  it("renders Closed Gate text node properly when we click the button", () => {
    rtl.fireEvent.click(CloseGate());
    expect(CloseGate()).toBe(null);
  });

  it(' shows that "Open" disappears when "Close Gate" is clicked ', () => {
    rtl.fireEvent.click(CloseGate());
    expect(Open()).toBe(null);
    expect(Closed()).toBeInTheDocument();
  });
});
