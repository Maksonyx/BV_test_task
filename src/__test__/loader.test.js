import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Sports from '../pages/Sports';
import Loader from '../components/UI/Loader/Loader';

test('Loader on Sports page', () => {
    render(
        <Provider store={store}>
            <Sports>
                <Loader />
            </Sports>
        </Provider>
    );

    const appEment = screen.getByTestId('loader');

    expect(appEment).toBeInTheDocument();
})