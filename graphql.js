import { GraphQLServer } from 'graphql-yoga'

import resolvers from './graphql/resolvers'

const options = { port: 4000, playground: "/" }
const server = new GraphQLServer({ typeDefs: "./graphql/datamodel/schema.graphql", resolvers, playground: true })

server.start(options, () => {
  console.log(`server running in ${options.port}`)
})