import { getByEmperors, getById, addEmperor, deleteEmperor } from "./db";

const resolvers = {
  Query: {
    emperors: () => getByEmperors(),
    emperor: (_, { id }) => getById(id),
  },
  Mutation: {
    addEmperor: (_, { name, prize }) => addEmperor(name, prize),
    deleteEmperor: (_, { id }) => deleteEmperor(id),
  },
};

export default resolvers;
