// import layoutData from './layout.data.json'
const layoutData = require('./layout.data.json')

module.exports = {
  // Environment
  isDev: process.env.NODE_ENV === 'development',

  // Common
  lang: 'en',
  title: 'Xsell.Money',
  description:
    'Webpack + Nunjucks boilerplate for static websites that has all the necessary modern tools and optimizations built-in',
  author: 'janeRivas <solovyev.a@icloud.com>',
  theme: '#82AAFF',
  ogImage: '/images/OG-xsellmoney.png',
  ...layoutData
}
