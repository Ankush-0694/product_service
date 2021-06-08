const express = require("express");
const app = express();
const cors = require("cors");
const { ApolloServer, gql } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");
const { graphqlHTTP } = require("express-graphql");
// const { typeDefs, resolvers } = require("./schema/Schema");
const { ProductSchema } = require("./src/product/api/schema");
const { resolvers } = require("./src/GraphQL");

app.use(cors());

const connectDB = require("./config/db");
connectDB();

const apolloServer = new ApolloServer({
  schema: buildFederatedSchema([
    { typeDefs: ProductSchema, resolvers: resolvers },
  ]),
});

const port = 5000;

apolloServer.listen({ port }).then(({ url }) => {
  console.log(`Apollo Server ready at url ${url}`);
});

app.get("/product", (req, res) => {
  res.send("product service in your service");
});

app.listen(4001, () => {
  console.log("server listening to port 4001");
});
