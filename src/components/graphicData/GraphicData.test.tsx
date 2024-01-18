import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { ContextProvider } from "../../context/Context";
import GraphicData from "./GraphicData";

describe("GraphicData", () => {
  test("should render GraphicData component", () => {
    render(
      <ContextProvider>
        <GraphicData />
      </ContextProvider>
    );

    expect(screen.getByText("Expenses: Last Week")).toBeDefined;
  });
});
