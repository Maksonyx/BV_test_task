import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/UI/Navbar/Navbar';
import { Provider } from 'react-redux';
import { store } from '../store';
import { BrowserRouter } from 'react-router-dom';

test('Render ABOUT in Navbar', () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </Provider>
    )
    const appEment = screen.getByText(/about/i);
    expect(appEment).toBeInTheDocument();
})