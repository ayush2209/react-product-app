import { render, screen } from "@testing-library/react";
import About from "../component/Profile/About";
import "@testing-library/jest-dom";

beforeEach(() => {
    render(<About />);
});

test('About component should render', () => {
    const heading = screen.getByRole('heading');
    // Assertion
    expect(heading).toBeInTheDocument();
});

test('Should load button inside About component', () => {
    const button = screen.getByRole('button');
    // Assertion
    expect(button).toBeInTheDocument();
});
