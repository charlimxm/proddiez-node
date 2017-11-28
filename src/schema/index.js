const {makeExecutableSchema} = require('graphql-tools')
const resolvers = require('./resolvers')

// Define your types here.
const typeDefs = `
  type Product {
    id: ID!
    title: String!
    subtitle: String
    subCount: Int
  }

  type Category {
    id: ID!
    name: String!
  }

  type Query {
    allProducts: [Product!]!
    allCategories: [Category!]!
  }
`

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({typeDefs, resolvers})
