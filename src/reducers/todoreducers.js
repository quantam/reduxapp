const initialState = {
  list: [],
};

const todoreducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const { id, data } = action.payload; // object destructing es6 feature
      return {
        ...state,
        data: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
  }
  return state;
};

export default todoreducers;

//state

// state: [
//     list: [
//         {id: 63473547, data: '1st todo'},
//         {id: 63473547, data: '1st todo'}
//         {id: 63473547, data: '1st todo'}
//   ];
// ]

// {id: 63473547, data: '1st todo'}
// state.list.push(inputdata);
