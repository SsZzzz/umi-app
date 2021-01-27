import { defineConfig } from 'umi';

export default defineConfig({
  base: '/base',
  title: 'title',
  // favicon: '/images/favicon.png',
  hash: true,
  dva: {
    hmr: true,
    immer: true,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  routes: [
    {
      path: '/',
      component: '@/layouts',
      routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: '@/pages/home' },
      ],
    },
  ],
});
