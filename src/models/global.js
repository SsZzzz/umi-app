import { getRoutes } from '../.umi/core/routes';

const routes = dfs(getRoutes(), []);

export default {
  namespace: 'global',
  state: {
    routes,
    tabs: [],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      const { pathname } = history.location;
      const route = routes.find((obj) => obj.path === pathname);
      if (route) dispatch({ type: 'save', payload: { tabs: [route] } });
    },
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

function dfs(routes, res = []) {
  if (!routes) return;
  for (let route of routes) {
    if (!route.routes) res.push(route);
    else dfs(route.routes, res);
  }
  return res;
}
