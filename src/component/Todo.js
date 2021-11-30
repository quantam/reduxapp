import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../actions';

function Todo() {
  const [inputData, setInputData] = useState('');
  const list = useSelector((state) => state.todoreducers.list);
  const dispatch = useDispatch();

  return (
    <div className="parent-div">
      <div className="child-div">
        <h2>Add your list here : TODO</h2>

        <div className="add-item">
          <input type="text" placeholder="Add text here...." value={inputData} onChange={(event) => setInputData(event.target.value)} />
          <button className="btn" onClick={() => dispatch(addTodo(inputData))}>
            +
          </button>
        </div>

        <div className="showItems">
          {list?.map((elm) => {
            return (
              <div className="eachItems" key={elm.id}>
                <h3>{elm.data}</h3>
                <button className="btn danger" onClick={(event) => dispatch(deleteTodo(elm.id))}>
                  -
                </button>
              </div>
            );
          })}
        </div>

        <div className="deleteall">
          <button className="btn">Remove All</button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
