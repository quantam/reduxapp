import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';

function Todo() {
  const [inputData, setInputData] = useState('');
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

        <div className="display-item">
          <ul>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
