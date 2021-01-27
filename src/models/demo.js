export default {
  namespace: 'demo',
  state: {
    name: 'demo',
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
