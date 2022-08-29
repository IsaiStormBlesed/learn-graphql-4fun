import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Clients from "./components/Clients";
import Header from "./components/Header";

const apolloClient = new ApolloClient({
  uri: "https://5000-isaistormbl-learngraphq-5l1rc88t499.ws-us63.gitpod.io/graphql",
  cache: new InMemoryCache(),
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
