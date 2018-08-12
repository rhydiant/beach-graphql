class Beach {
  constructor(id, { name, long, lat }) {
    this.id = id;
    this.name = name;
    this.long = long;
    this.lat = lat;
  }
}

const beachDatabase = {};

// resolver map

export const resolvers = {
  Query: {
    beaches: () => {
      return Object.values(beachDatabase);
    },
    beach: ({ id }) => {
      return new Beach(id, beachDatabase[id]);
    }
  },
  Mutation: {
    createBeach: ({ input }) => {
      let id = require("crypto")
        .randomBytes(10)
        .toString("hex");
      beachDatabase[id] = input;
      return new Beach(id, input);
    }
  }
};
