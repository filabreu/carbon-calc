import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './app/app';

const GRAPHQL_API_URL = process.env.GRAPHQL_API_URL ?? 'http://localhost:4000/graphql';

const httpLink = new HttpLink({
  uri: GRAPHQL_API_URL,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>
);
