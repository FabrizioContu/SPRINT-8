import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { ContextProvider } from "../../context/Context";
import DailyExpenses from "./DailyExpenses";

describe("DailyExpenses", () => {
  test("should render DailyExpenses component", () => {
    render(
      <ContextProvider>
        <DailyExpenses />
      </ContextProvider>
    );

    expect(screen.getByText("Today's expenses")).toBeDefined;
  });
});
