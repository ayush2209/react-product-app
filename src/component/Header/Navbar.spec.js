import { fireEvent, render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import "@testing-library/jest-dom";
import { Provider, useSelector } from 'react-redux';
import appStore from '../../store/appStore';
import { BrowserRouter, Link } from 'react-router-dom';


beforeEach(() => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Navbar />
            </Provider>
        </BrowserRouter>
    );
});

it('should render correctly', () => {


    // const heading = screen.getAllByAltText();
    // console.log(heading);

    const cartItem = screen.getByText(/cart/i);
    expect(cartItem).toBeInTheDocument();
});


it("should change the login button to logout and vice-versa on click", () => {


    const loginButton = screen.getByText('Login');
    fireEvent.click(loginButton);

    const logoutButton = screen.getByText('Logout');
    expect(logoutButton).toBeInTheDocument();
});