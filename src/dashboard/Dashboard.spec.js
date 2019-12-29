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
let OpenGate = () => wrapper.queryByText("Open Gate");
let LockGate = () => wrapper.queryByText("Lock Gate");
let CloseGate = () => wrapper.queryByText("Close Gate");
let Closed = () => wrapper.queryByText("Closed");
let Locked = () => wrapper.queryByText("Locked");
let UnlockGate = () => wrapper.queryByText("Unlock Gate");

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
    rtl.fireEvent.click(CloseGate());
    expect(OpenGate()).toBeInTheDocument();

    rtl.fireEvent.click(LockGate());
    expect(UnlockGate()).toBeInTheDocument();

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

  it(' shows that "Open" disappears when "Close Gate" is clicked ,shows relevant "red-led" classes when closed and locked', () => {
    rtl.fireEvent.click(CloseGate());
    expect(Open()).toBe(null);
    expect(Closed()).toBeInTheDocument();
    expect(Closed()).toHaveClass("red-led");
    rtl.fireEvent.click(LockGate());
    expect(Locked()).toHaveClass("red-led");
  });

  it("-when `unlocked` or `open` use the `green-led` class", () => {
    expect(Open()).toHaveClass("green-led");
    expect(Unlocked()).toHaveClass("green-led");
  });

  it("matches snapshot after closing the gate", () => {
    rtl.fireEvent.click(CloseGate());
    // rtl.fireEvent.click(LockGate());
    expect(wrapper.container).toMatchSnapshot();
  });
});

describe("Testing for controls", () => {
  it('provide buttons to toggle the "closed" and "locked" states', () => {
    expect(CloseGate()).toHaveClass("toggle-btn");
    rtl.fireEvent.click(CloseGate());
    rtl.fireEvent.click(LockGate());
    expect(UnlockGate()).toHaveClass("toggle-btn");
  });

  it("buttons text changes to reflect the state the door will be in if clicked ", () => {
    rtl.fireEvent.click(CloseGate());
    expect(OpenGate()).toBeInTheDocument();
    expect(LockGate()).toBeInTheDocument();
  });

  it("the closed toggle button is disabled if the gate is locked", () => {
    rtl.fireEvent.click(CloseGate());
    rtl.fireEvent.click(LockGate());

    expect(LockGate()).not.toBeInTheDocument();
  });

  it("the locked toggle button is disabled if the gate is open", () => {
    expect(LockGate()).toBeDisabled();
  });
});
