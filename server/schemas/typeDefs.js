const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    friends: [User]
  }

  type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type MlbThought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type MlsThought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type NbaThought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type NflThought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type NhlThought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type MlbReaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type MlsReaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type NbaReaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type NflReaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type NhlReaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    mlbThoughts(username: String): [MlbThought]
    mlsThoughts(username: String): [MlsThought]
    nbaThoughts(username: String): [NbaThought]
    nflThoughts(username: String): [NflThought]
    nhlThoughts(username: String): [NhlThought]
    thought(_id: ID!): Thought
    mlbThought(_id: ID!): MlbThought
    mlsThought(_id: ID!): MlsThought
    nbaThought(_id: ID!): NbaThought
    nhlThought(_id: ID!): NhlThought
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addMlbThought(thoughtText: String!): MlbThought
    addMlsThought(thoughtText: String!): MlsThought
    addNbaThought(thoughtText: String!): NbaThought
    addNflThought(thoughtText: String!): NflThought
    addNhlThought(thoughtText: String!): NhlThought
    addReaction(thoughtId: ID!, reactionBody: String!): Thought
    addMlbReaction(thoughtId: ID!, reactionBody: String!): MlbThought
    addMlsReaction(thoughtId: ID!, reactionBody: String!): MlsThought
    addNbaReaction(thoughtId: ID!, reactionBody: String!): NbaThought
    addNflReaction(thoughtId: ID!, reactionBody: String!): NflThought
    addNhlReaction(thoughtId: ID!, reactionBody: String!): NhlThought
    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
