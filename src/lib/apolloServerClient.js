// src/lib/apolloServerClient.js
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";
import fetch from "cross-fetch";

export function getServerClient() {
  return new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_API_URL, // or your GraphQL endpoint
      fetch,
    }),
    cache: new InMemoryCache(),
  });
}