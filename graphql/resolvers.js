const CloudG = {
  name: "GY",
  age: 5,
  gender: "Male",
};

const resolvers = {
  Query: {
    person: () => CloudG,
  },
};

export default resolvers;
