const { find, filter } = require('lodash')
const products = [
  {
    id: 1,
    title: 'Product Hunt Project X',
    subtitle: 'Something different from the Product Hunt team',
    subCount: 0
  },
  {
    id: 2,
    title: 'MeetPro',
    subtitle: 'Meet with investors, no warm introduction needed ✨',
    subCount: 0
  },
  {
    id: 3,
    title: 'Plutio',
    subtitle: '🚨 One place for everything to run your freelance business 👌',
    subCount: 0
  }
]
const categories = [
  {
    id: 1,
    name: 'Tech'
  },
  {
    id: 2,
    name: 'Games'
  },
  {
    id: 3,
    name: 'Books'
  }
]

module.exports = {
  Query: {
    allProducts: () => products,
    allCategories: () => categories
  },
}
