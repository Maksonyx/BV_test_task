import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

import {MemoryRouter} from "react-router-dom";
import App from '../App';
import AppRouter from '../components/AppRouter';
import { AuthContext } from '../context';
import { store } from '../store';

describe('TEST ROUTES', () => {
    test('Router test_logged_OUT clicks', () => {
        render(
            <Provider store={store}>
                <App/>
            </Provider>
        );
        const loginLink = screen.getByTestId('login')
        const aboutLink = screen.getByTestId('about')

        userEvent.click(aboutLink)
        expect(screen.getByText(/the applicaiton\./i)).toBeInTheDocument();
        userEvent.click(loginLink)
        expect(screen.getByTestId('login-form')).toBeInTheDocument();
    });

    test('Redirect to login page for loged_OUT from not existing page', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/asfasfafasf']}>
                    <AppRouter/>
                </MemoryRouter>
            </Provider>
        );
        expect(screen.getByTestId('login-form')).toBeInTheDocument();
    });

    function renderPrivateRoutes(isAuth) {
        return render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/sports']}>
                    <AuthContext.Provider value={isAuth}>
                        <AppRouter/>
                    </AuthContext.Provider>
                </MemoryRouter>
            </Provider>
        );
    }

    test("Router test_logged_OUT", () => {
        const valObj = {
            isAuth: false
        };
        renderPrivateRoutes(valObj);
        expect(screen.getByTestId('login-form')).toBeInTheDocument();
    });

    test("Router test_logged_IN", () => {
        const valObj = {
            isAuth: true
        };
        renderPrivateRoutes(valObj);
        expect(screen.getByTestId('sports-comp')).toBeInTheDocument();
        expect(screen.getByTestId('loader')).toBeInTheDocument();
    });

})