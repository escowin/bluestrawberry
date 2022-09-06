import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

const categories = [{ name: "volume-one", description: "original run" }];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

describe("Nav compnent", () => {
  // baseline test
  it("renders", () => {
    render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />
    );
  });

  // snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />
    );
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("a element is visible", () => {
  it("is nested within h2", () => {
    // arrange
    const { getByLabelText } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />
    );
    // assert
    expect(getByLabelText("title")).toHaveTextContent("Bluestrawberry");
  });
});

describe("nav links are visible", () => {
  it("inserts text into nav links", () => {
    // arrange
    const { getByTestId } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />
    );
    // expect
    expect(getByTestId("link")).toHaveTextContent("Bluestrawberry");
    expect(getByTestId("about")).toHaveTextContent("About");
  });
});

afterEach(cleanup);
