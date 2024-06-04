import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers});

const app = express();
apolloServer.applyMiddleware({ app });

app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.post('/housing/electricity', (req, res) => {
  const { consumption, householdPeople } = req.body;

  const carbonEmissions = parseInt(consumption) * 0.8523 * 12 / parseInt(householdPeople);

  res.send({ carbonEmissions, metric: 'lbs' });
});

app.post('/housing/heating', (req, res) => {
  const { consumption, householdPeople } = req.body;

  const carbonEmissions = parseInt(consumption) * 0.8523 * 12 / parseInt(householdPeople);

  res.send({ carbonEmissions, metric: 'lbs' });
});

app.post('/housing/natural-gas', (req, res) => {
  const { consumption, householdPeople } = req.body;

  const carbonEmissions = parseInt(consumption) * 0.8523 * 12 / parseInt(householdPeople);

  res.send({ carbonEmissions, metric: 'lbs' });
});

app.post('/housing/propane', (req, res) => {
  const { consumption, householdPeople } = req.body;

  const carbonEmissions = parseInt(consumption) * 0.8523 * 12 / parseInt(householdPeople);

  res.send({ carbonEmissions, metric: 'lbs' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
