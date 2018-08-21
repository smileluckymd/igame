import { queryGame } from '../services/game';
import { odooResponse } from '../utils/odooUtils';

export default {
  namespace: 'game',

  state: {
    list: [],
  },

  effects: {
    *queryGame(_, { call, put }) {
      const response = odooResponse(yield call(queryGame));
      if (response && response.length > 0)
        // const response = yield call(queryUsers);
        yield put({
          type: 'save',
          payload: response,
        });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
};
