import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';
const url = process.env.REACT_APP_URL;
const httpLink = new HttpLink({ uri: url });

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = localStorage.getItem('jwtToken');

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      "x-auth-token": token ? token : ''
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache()
});
export default client;
