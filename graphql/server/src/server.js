const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone')
const bodyParser = require('body-parser');
const cors = require('cors')
const typeDefs = require('./typedefs.js')
const resolvers = require('./resolvers.js')

const startServer = async () => {const server = new ApolloServer({
    typeDefs,
    resolvers
})


const { url } = await startStandaloneServer(server, {
    listen: {
        port: 8000  
    },
})

console.log('Server running at: ', url)}

startServer();