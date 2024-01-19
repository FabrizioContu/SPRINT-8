import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { ContextProvider } from "../../context/Context";

import DailyVariation from "./DailyVariation";

describe("DailyVariation", () => {
  test("should render DailyVariation component", () => {
    render(
      <ContextProvider>
        <DailyVariation />
      </ContextProvider>
    );

    expect(screen.getByText("from yesterday")).toBeDefined;
  });
});
