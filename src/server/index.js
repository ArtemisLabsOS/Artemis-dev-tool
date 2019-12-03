const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const server = new ApolloServer({ typeDefs });
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });

const { gql } = require('apollo-server');

const typeDefs = gql`
  # Your schema will go here
  type Query {
    launches: [Launch]!
    launch(id: ID!): Launch
    # Queries for the current user
    me: User
  }

  type Launch {
  id: ID!
  site: String
  mission: Mission
  rocket: Rocket
  isBooked: Boolean!
}

type Rocket {
  id: ID!
  name: String
  type: String
}

type User {
  id: ID!
  email: String!
  trips: [Launch]!
}

type Mission {
  name: String
  missionPatch(size: PatchSize): String
}

type Mutation {
  # if false, booking trips failed -- check errors
  bookTrips(launchIds: [ID]!): TripUpdateResponse!

  # if false, cancellation failed -- check errors
  cancelTrip(launchId: ID!): TripUpdateResponse!

  login(email: String): String # login token
}
type TripUpdateResponse {
  success: Boolean!
  message: String
  launches: [Launch]
}
enum PatchSize {
  SMALL
  LARGE
}
`;




module.exports = typeDefs;