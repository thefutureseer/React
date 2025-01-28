import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import CounterWithReducer from "../CountWithReducer"; // Adjust path if using __tests__


describe("CounterWithReducer Component", () => {

  test("increments the count when Plus One is clicked", () => {
    render(<CounterWithReducer />);
    const incrementButton = screen.getByText(/Plus one/i);
    fireEvent.click(incrementButton);
    expect(screen.getByText(/my current number is 223/i)).toBeInTheDocument();
  });

  test("decrements the count when Minus One is clicked", () => {
    render(<CounterWithReducer />);
    const decrementButton = screen.getByText(/Minus one/i);
    fireEvent.click(decrementButton);
    expect(screen.getByText(/my current number is 221/i)).toBeInTheDocument();
  });

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