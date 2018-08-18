import { queryUsers, queryCurrent } from '../services/user';
import { odooResponse } from '../utils/odooUtils';

export default {
  namespace: 'user',

  state: {
    list: [],
    currentUser: {},
  },

  effects: {
    *fetch(_, { call, put }) {
      // const response = odooResponse(yield call(queryUsers));
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchCurrent(_, { call, put }) {
      const response = odooResponse(yield call(queryCurrent));
      // const response = yield call(queryCurrent);
      const res = {
        name: response[0].name,
        userid: '0002323',
        notifyCount: '5',
        avatar: '',
      };
      yield put({
        type: 'saveCurrentUser',
        payload: res,
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
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
    changeNotifyCount(state, action) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload,
        },
      };
    },
  },
};
