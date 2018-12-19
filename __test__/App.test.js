import React from "react";
import { shallow } from "enzyme";
import App from "../src/js/App";

describe("Render the App", () => {
  const app = shallow(<App />);

  it("renders the main App container in the header", () => {
    expect(app.find(".app-container").exists()).toBe(true);
  });
  it("renders the title in the header", () => {
    expect(app.find(".app-container").text()).toBe("Hello World");
  });
});
