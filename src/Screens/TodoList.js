import React, { Fragment, useEffect, useState } from 'react';
import Api from '../services/Kaffa';
import dotenv from 'dotenv';

 const TodoList = () => {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState('');

  async function createItem() {
    try {
      await Api.post("/todo", 
        {
          description: newItem
        }).then(res => {
          getList();
          setNewItem('');
        })
    } catch (err) {
      console.log(err);
    }
  }
  async function updateItem(newDescription, i, id) {
    try {
      await Api.put("/todo", {id:id,description:newDescription}).then(res => {
        let newList = [...list];
        newList[i].description = newDescription;
        setList(newList);
      })
      } catch (err) {
      console.log(err);
    }
  }
  async function getList() {
    try
    {
      await Api.get(`/todo`)
        .then((res) => {
          setList(res.data);
        });
      }
    catch (err){
      console.log(err);
    }
  }
  async function deleteItem(id) {
    try {
      if(window.confirm(`Are you sure about delete?`)) {
        await Api.delete(`/todo?id=${id}`).then(res => {
          getList();
        })
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    console.log(dotenv.config);
    getList();
  },[])
  return (
    <Fragment>
      <div className="App">
        <h1>Todo List</h1>
        <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text"></input>
        <button onClick={() => createItem()}>Add</button>
        <table>
          <tbody>
        {
          list.map((item, i) => {
            return (
              <tr key={item.id}>
                <td><input value={item.description} onChange={e => updateItem(e.target.value, i, item.id)}></input></td>
                <td><button onClick={() => deleteItem(item.id)}>Delete this stuff, man!!</button></td>
              </tr>
              )
          })
        }
        </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default TodoList;