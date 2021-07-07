import { GraphQLServer } from "graphql-yoga";

const server = GraphQLServer({});
server.state(() => console.log());
