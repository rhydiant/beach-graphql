import express from "express";
import graphqlHTTP from "express-graphql";

import { schema } from "./lib/schema";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(8080, () => console.log("Running server on localhost:8080/graphql"));
