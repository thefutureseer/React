import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import CounterWithReducer from "../CountWithReducer"; // Adjust path if using __tests__


describe("CounterWithReducer Component", () => {

  test("sets the count when a valid number is input", () => {
    render(<CounterWithReducer />);
    const input = screen.getByPlaceholderText(/set your fav #/i);
    fireEvent.change(input, { target: { value: "1000" } });
    expect(screen.getByText(/my current number is 1000/i)).toBeInTheDocument();
  });

  test("resets the count when Reset is clicked", () => {
    render(<CounterWithReducer />);
    const resetButton = screen.getByText(/reset/i);
    fireEvent.click(resetButton);
    expect(screen.getByText(/my current number is 222/i)).toBeInTheDocument();
  });
});