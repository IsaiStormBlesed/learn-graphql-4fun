import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Clients from "./components/Clients";
import Header from "./components/Header";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const apolloClient = new ApolloClient({
  uri: "https://5000-isaistormbl-learngraphq-kffzoqp0alw.ws-us63.gitpod.io/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Header />
        <div className="border-pink-600 border-2">
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
