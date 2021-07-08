import { getByEmperors, getById } from "./db";

const resolvers = {
  Query: {
    emperors: () => getByEmperors(),
    emperor: (_, { id }) => getById(id),
  },
};

export default resolvers;
