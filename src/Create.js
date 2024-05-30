import React, { useState } from 'react';
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';

function Create() {
  const [task, setTask] = useState('');
  const [listData, setListData] = useState([]);

  const addTask = () => {
    setListData((listData) => {
      const updatedList = [...listData, task];
      console.log(updatedList);
      setTask('');
      return updatedList;
    });
  };

  const removeActivity = (i) => {
    const updatedListData = listData.filter((item, id) => {
      return i !== id;
    });
    setListData(updatedListData);
  };

  const removeAll = () => {
    setListData([]);
  };

  return (
    <div className='container'>
      <div className='header'>TODO LIST</div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Task"
      />
      <button className="button" onClick={addTask}>
        Submit
      </button>
      <p className="list-heading">Here is your list </p>
      {listData.length > 0 && listData.map((data, i) => {
        return (
          <div key={i}>
            <div className='listData'>{data}</div>
            <div className='btn-position'>
              <button className='remove-button' onClick={() => removeActivity(i)}>Remove</button>
            </div>
          </div>
        );
      })}
      {listData.length >= 1 && <button className='button' onClick={removeAll}>Remove All</button>}
    </div>
  );
}

export default Create;
