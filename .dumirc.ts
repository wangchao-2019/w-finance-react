import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base:'/w-finance-react/',
  publicPath:'/w-finance-react/',
  themeConfig: {
    name: 'w-finance-react',
    nav: [
      { title: '首页', link: '/' },
      { title: '介绍', link: '/guide' },
      { title: '组件', link: '/components/w-fbank-card-input' },
    ],
  },
});
