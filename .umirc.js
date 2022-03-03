import { defineConfig } from 'umi';

export default defineConfig({
  base: '/base',
  title: 'title',
  // favicon: '/rocket.png',
  hash: true,
  locale: {
    default: 'zh-CN',
    antd: true,
    title: true,
    baseNavigator: true,
    baseSeparator: '-',
  },
  dva: {
    hmr: true,
    immer: true,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  // mfsu: {},
  fastRefresh: {},
  routes: [
    {
      path: '/dp',
      component: '@/pages/dp',
    },
    {
      path: '/',
      component: '@/layouts/basicLayout',
      routes: [
        { path: '/', redirect: '/home' }, // tabLayout时无效
        { path: '/home', component: '@/pages/home', title: '首页' },
        { path: '/list1', component: '@/pages/list1', title: '列表1' },
        { path: '/list2', component: '@/pages/list2', title: '列表2' },
        { path: '/404', component: '@/pages/404', title: '页面不存在' },
      ],
    },
  ],
});
