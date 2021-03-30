export default {
  namespace: 'demo',
  state: {
    name: 'demo',
  },
  // subscriptions: {
  //   setup({ dispatch, history }) {
  //     history.listen(({ pathname }) => {
  //       if (pathname === '/home') {
  //         console.log('hello world');
  //       }
  //     });
  //   },
  // },
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
