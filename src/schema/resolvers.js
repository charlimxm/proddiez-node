const { find, filter } = require('lodash')
const products = [
  {
    id: 1,
    title: 'Product Hunt Project X',
    subtitle: 'Something different from the Product Hunt team',
    subCount: 0,
  },
  {
    id: 2,
    title: 'MeetPro',
    subtitle: 'Meet with investors, no warm introduction needed ✨',
    subCount: 0,
  },
  {
    id: 3,
    title: 'Plutio',
    subtitle: '🚨 One place for everything to run your freelance business 👌',
    subCount: 0,
  },
  {
    id: 4,
    title: 'Tesla Powerbank',
    subtitle: 'A Tesla supercharger for your phone!',
    subCount: 0,
  },
  {
    id: 5,
    title: 'Briefcase by AppSumo',
    subtitle: 'Netflix for software',
    subCount: 0,
  },
  {
    id: 6,
    title: 'Product Reviews',
    subtitle: 'Concise and unbiased software product reviews',
    subCount: 0,
  },
  {
    id: 7,
    title: 'Ello 3.0',
    subtitle: 'A social network for artists',
    subCount: 0,
  },
  {
    id: 8,
    title: 'Orbitkey Ring',
    subtitle: 'The keyring, reinvented',
    subCount: 0,
  },
  {
    id: 9,
    title: 'Who is mining?',
    subtitle: 'A simple tool to see which sites are mining cryptocurrency',
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
