import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Login from '../pages/Login';
import { BrowserRouter } from 'react-router-dom';
import MyButton from '../components/UI/Button/MyButton';

describe('test_login_form', () => {
    test('Render ABOUT in Navbar', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login/>
                </BrowserRouter>
            </Provider>
        )
        
        const loginPageTitle = screen.getByText(/login page/i);
        const loginBtn = screen.getByRole('button');
        const loginInput = screen.getByPlaceholderText(/input login/i);
        const passwordInput = screen.getByPlaceholderText(/input password/i);
    
        expect(loginPageTitle).toBeInTheDocument();
        expect(loginBtn).toBeInTheDocument();
        expect(loginInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    })
})
