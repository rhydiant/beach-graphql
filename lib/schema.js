import { resolvers } from "./resolvers";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
    type Query {
        beaches: [Beach]
        beach(id: ID!): Beach
    }

    type Beach {
        id: ID
        name: String
        long: Float
        lat: Float
    }

    input BeachInput {
        id: ID
        name: String
        long: Float
        lat: Float
    }

    type Mutation {
        createBeach(input: BeachInput): Beach
        updateBeach(input: BeachInput): Beach
        deleteBeach(id: ID!): String
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
