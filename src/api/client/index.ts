import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('http://localhost:3000/graphql');

export default client;