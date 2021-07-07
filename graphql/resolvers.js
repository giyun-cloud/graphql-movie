const resolvers = {
  Query: {
    name: () => "Cloud-G",
    age() {
      return 6;
    },
  },
};

export default resolvers;
