let emperors = [
  { id: 0, name: "흰수염", prize: 50 },
  { id: 1, name: "샹크스", prize: 40 },
  { id: 2, name: "카이도우", prize: 46 },
  { id: 3, name: "빅맘", prize: 44 },
];

export const getByEmperors = () => emperors;
export const getById = (id) => {
  const filteredEmperors = emperors.filter((emperor) => emperor.id === id);
  return filteredEmperors[0];
};
export const deleteEmperor = () => {
  const filteredEmperors = emperors.filter((emperor) => emperor.id !== id);
  if (emperors.length > filteredEmperors) {
    emperors = filteredEmperors;
    return true;
  } else {
    return false;
  }
};
