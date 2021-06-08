const express = require("express");
const port = process.env.PORT || 4000;
const app = express();

const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./schema");
const resolvers = require("./resolver");

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(port, () => console.log(`server is up and running at ${port}`));
