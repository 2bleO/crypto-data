import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import { store } from '../redux/configureStore';
import Home from './Home';
import '@testing-library/jest-dom/extend-expect';

const store = createStore(() => [{
  currency: 'BTC',
  id: 'BTC',
  price: '8451.36516421',
  circulating_supply: '17758462',
  max_supply: '21000000',
  name: 'Bitcoin',
  logo_url: 'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg',
  market_cap: '150083247116.70',
}], applyMiddleware());

describe('Home', () => {
  test('renders Home', () => {
    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    );
    expect(screen.getByText(/COINS/)).toBeInTheDocument();
  });

  test('render coin', () => {
    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    );
    expect(screen.getByText(/BITCOIN/)).toBeInTheDocument();
  });
});
