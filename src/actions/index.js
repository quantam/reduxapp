export const addTodo = (data) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const updateTodo = (id, data) => {
  return {
    type: 'UPDATE_TODO',
    payload: {
      id: id,
      data: data,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id: id,
  };
};

export const deleteAllTodo = () => {
  return {
    type: 'DELETE_ALL_TODO',
  };
};
