const express = require('express')

// This package automatically parses JSON requests.
const bodyParser = require('body-parser')

// This package will handle GraphQL server requests and responses
// for you, based on your schema.
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express')

const cors = require('cors')

const schema = require('./schema')

var app = express()
app.use(cors())

// this is the one endpoint your react will send request to
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}))
app.use('/playground', graphiqlExpress({
  endpointURL: '/graphql',
}));

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Proddiez GraphQL server running on port ${PORT}.`)
})
