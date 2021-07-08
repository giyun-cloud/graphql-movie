export const people = [
  { id: 0, name: "GY", age: 5, gender: "Male" },
  { id: 1, name: "MA", age: 8, gender: "Male" },
  { id: 2, name: "SA", age: 10, gender: "Male" },
  { id: 3, name: "AW", age: 15, gender: "Female" },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
