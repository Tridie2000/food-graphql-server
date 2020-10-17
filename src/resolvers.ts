const data = require("./data");

export const resolvers = {
  Query: {
    stores: () => data.getStores(),
  },
};
