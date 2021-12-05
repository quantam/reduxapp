import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteAllTodo, deleteTodo, updateTodo } from '../actions';

function Todo() {
  const [inputData, setInputData] = useState('');
  const [updateData, setUpdateData] = useState('');
  const [show, setShow] = useState(true);
  const [itemId, setItemId] = useState('');
  const list = useSelector((state) => state.todoreducers.list);
  const dispatch = useDispatch();

  const getUpdateData = (id) => {
    const singleData = list.find((item) => item.id === id);
    setUpdateData(singleData.data);
    setItemId(id);
    setShow(!show);
  };

  const updateValue = (id, updateData) => {
    dispatch(updateTodo(id, updateData));
    setShow(!show);
  };
  return (
    <div className="parent-div">
      <div className="child-div">
        <h2>Add your list here : TODO</h2>

        <div className="add-item">
          <input type="text" placeholder="Add text here...." value={inputData} onChange={(event) => setInputData(event.target.value)} style={{ display: show ? 'block' : 'none' }} />

          <input type="text" value={updateData} onChange={(event) => setUpdateData(event.target.value)} style={{ display: !show ? 'block' : 'none' }} />

          <button
            className="btn"
            onClick={() => {
              dispatch(addTodo(inputData));
              setInputData('');
            }}
            style={{ display: show ? 'block' : 'none' }}
          >
            Add
          </button>
          <button className="btn" onClick={(event) => updateValue(itemId, updateData)} style={{ display: !show ? 'block' : 'none' }}>
            Update
          </button>
        </div>

        <div className="showItems">
          {list?.map((elm) => {
            return (
              <div className="eachItems" key={elm.id}>
                <h3>{elm.data}</h3>
                <button className="btn" onClick={() => getUpdateData(elm.id)}>
                  Edit
                </button>
                <button className="btn danger" onClick={(event) => dispatch(deleteTodo(elm.id))}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>

        <div className="deleteall">
          <button className="btn" onClick={(event) => dispatch(deleteAllTodo())}>
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
