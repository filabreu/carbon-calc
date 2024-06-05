import express from 'express';
import cors from 'cors';
import gql from "graphql-tag";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { readFileSync } from "fs";

import resolvers from "./resolvers";

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const typeDefs = gql(
  readFileSync("apps/carbon-calc-api/src/schema.graphql", {
    encoding: "utf-8",
  })
);

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(cors());
app.use(express.json());

apolloServer.start().then(() => {
  app.use(
    '/graphql',
    cors(),
    express.json(),
    expressMiddleware(apolloServer),
  );
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
