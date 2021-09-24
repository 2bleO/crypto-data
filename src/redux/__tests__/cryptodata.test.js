import reducer from '../cryptodata/cryptodata';

test('should return the initial state', () => {
  const initialState = [];

  const newState = reducer(undefined, {});

  expect(newState).toEqual(initialState);
});

test('should handle adding coins', () => {
  const GET_COINS = 'cryptodata/GET_COINS';
  const prevState = [];
  const coins = [{
    currency: 'BTC',
    id: 'BTC',
    price: '8451.36516421',
    circulating_supply: '17758462',
    max_supply: '21000000',
    name: 'Bitcoin',
    logo_url: 'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg',
    market_cap: '150083247116.70',
  },
  ];

  const newState = reducer(prevState, {
    type: GET_COINS,
    payload: coins,
  });

  expect(newState).toEqual([{
    currency: 'BTC',
    id: 'BTC',
    price: '8451.36516421',
    circulating_supply: '17758462',
    max_supply: '21000000',
    name: 'Bitcoin',
    logo_url: 'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg',
    market_cap: '150083247116.70',
  }]);
});
