import { createUploadLink } from "apollo-upload-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
const apolloCache = new InMemoryCache();
const token = localStorage.getItem("jwtToken");
const uploadLink = createUploadLink({
  uri: process.env.REACT_APP_URL, // Apollo Server is served from port 3000
  headers: {
    "x-auth-token": token ? token : "",
  },
});
const uploadClient = new ApolloClient({
  cache: apolloCache,
  link: uploadLink,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});
export default uploadClient;