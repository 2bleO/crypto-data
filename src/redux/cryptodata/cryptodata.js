import axios from 'axios';

const GET_COINS = 'cryptodata/GET_COINS';

const initialState = [];
const BASE_URL = 'https://api.nomics.com/v1';
const apikey = '86a1af1b00710a8fa4d946e7527551eb085de2e6';

export const getCoins = () => async (dispatch) => {
  const coins = await axios.get(`${BASE_URL}/currencies/ticker?key=${apikey}&interval=1d,30d&convert=EUR&per-page=100&page=1`);
  const coinsArr = await coins.data;
  const list = [...coinsArr];

  dispatch({
    type: GET_COINS,
    payload: list,
  });
};

const reducer = (state = initialState, action) => {
  // let newState;
  switch (action.type) {
    case GET_COINS:
      return [...action.payload];

    default:
      return state;
  }
};

export default reducer;
