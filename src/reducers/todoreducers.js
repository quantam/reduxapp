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

    case 'UPDATE_TODO':
      const modifiedData = state.list.map((item) => {
        if (item.id === action.payload.id) {
          item.data = action.payload.data;
        }
        return { id: item.id, data: item.data };
      });

      return {
        ...state,
        list: modifiedData,
      };

    case 'DELETE_ALL_TODO':
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};

export default todoreducers;
