import React, { Fragment, useEffect, useState } from 'react';
import Api from '../services/Kaffa';

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
    getList();
  },[])
  return (
    <Fragment>
      <div className="App">
        <h1>Todo List</h1>
        <p>(Exercise Five)</p>
        <div className="col-md-6 order-md-2 mb-4" hidden={list.length === 0}>
        <hr className="mb-2"></hr>
        <form>
          <div className="row mb-3">
            <div className="col-8">
              <input value={newItem} className="form-control m-0" onChange={e => setNewItem(e.target.value)} type="text"></input>
            </div>
            <div className="col-4 flex">
              <button className="btn btn-dark btn-block" onClick={() => createItem()}>Add</button>
            </div>
          </div>
        </form>
            <ul className="list-group mb-3">
              {
                list.map((item, i) => {
                  return (
                      <li key={item.id} className="list-group-item lh-condensed">
                        <div className="row">
                          <div className="col-10">
                            <input className="form-control m-0" value={item.description} onChange={e => updateItem(e.target.value, i, item.id)}></input>
                          </div>
                          <div className="col-2">
                            <button className="btn btn-danger btn-lg btn-block" onClick={() => deleteItem(item.id)}>Delete</button>
                          </div>
                        </div>
                      </li>
                    )
                  }
                )
              }
            </ul>
          </div>
      </div>
    </Fragment>
  )
}

export default TodoList;