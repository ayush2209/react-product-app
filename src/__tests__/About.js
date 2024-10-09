import { render, screen } from "@testing-library/react";
import About from "../component/Profile/About";
import "@testing-library/jest-dom";

test('About compoennt should redner ', () => {
    render(<About />);
    const heading = screen.getByRole('heading');
    // Assertion
    expect(heading).toBeInTheDocument();
});

test('Should load button inside About component', () => {
    render(<About />);
    const button = screen.getByRole('button');
    // Assertion
    expect(button).toBeInTheDocument();
});
