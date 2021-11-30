const initialState = {
  list: [],
};

const todoreducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const { id, data } = action.payload; // object destructing es6 feature {id: 123, data: 'name'}
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case 'DELETE_TODO':
      const filterData = state.list.filter((item) => item.id !== action.id);
      return {
        ...state,
        list: filterData,
      };
    default:
      return state;
  }
};

export default todoreducers;
