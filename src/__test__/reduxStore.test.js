import {render, screen} from '@testing-library/react'
import { Provider } from 'react-redux';
import App from '../App';
import { store } from '../store';
 
 it('shows the NOTE', async () => {   
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )
    const note = screen.getByText(/NOTE:/);
    expect(note).toBeInTheDocument();
 });