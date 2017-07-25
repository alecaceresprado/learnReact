import { addTodo, updateTodo } from './todoHelpers';


test('addTodo should add the given todo to the list', () => {
  const initialList = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
  ];
  const newTodo = { id: 3, name: 'three', isComplete: false };
  const expectedList = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
    { id: 3, name: 'three', isComplete: false },
  ];
  const result = addTodo(initialList, newTodo);

  expect(result).toEqual(expectedList);
});

test('addTodo should NOT mutate the existing list', () => {
  const initialList = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
  ];
  const newTodo = { id: 3, name: 'three', isComplete: false };
  const result = addTodo(initialList, newTodo);

  expect(result).not.toBe(initialList);
});

test('updateTodo should update a given todo', () => {
  const initialList = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
  ];
  const newTodo = { id: 2, name: 'updatedTwo', isComplete: false };
  const expectedList = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'updatedTwo', isComplete: false },
  ];
  const result = updateTodo(initialList, newTodo);

  expect(result).toEqual(expectedList);
});

test('updateTodo should update a given todo', () => {
  const initialList = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
  ];
  const newTodo = {id: 2, name: 'updatedTwo', isComplete: false};
  const result = updateTodo(initialList, newTodo);

  expect(result).not.toBe(initialList);
});
