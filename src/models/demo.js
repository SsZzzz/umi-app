export default {
  namespace: 'demo',
  state: {
    number: 1,
  },
  effects: {},
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
