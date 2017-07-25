export const addTodo = (list, element) => [...list, element];

export const toggleTodo = element => ({ ...element, isComplete: !element.isComplete });

export const updateTodo = (list, element) => {
  const editedList = [...list];
  const elementIndex = list.findIndex(listElement => listElement.id === element.id);
  editedList[elementIndex] = element;
  return editedList;
};

export const checkForDuplicates = (list, elementToAdd) =>
  list.findIndex(listElement => listElement.name === elementToAdd) === -1 ? '' : 'Duplicated entry';
