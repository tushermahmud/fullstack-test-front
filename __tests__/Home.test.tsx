import {getByLabelText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/pages";

it("should have a welcome message", ()=> {
    render(<Home />);
    const headerMessage = screen.getByText(/Financial Health Score Finding/i);
    expect(headerMessage).toBeInTheDocument();
});