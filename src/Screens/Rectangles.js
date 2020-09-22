import React, { Fragment, useState } from 'react';

const Rectangles = () => {

  const [name, setName] = useState('A');
  const [r1x, setr1x] = useState(0);
  const [r1y, setr1y] = useState(0);
  const [r2x, setr2x] = useState(0);
  const [r2y, setr2y] = useState(0);

  const [list, setList] = useState([]);
  const [listResponse, setListResponse] = useState([]);

  const [message, setMessage] = useState('');

  const calculate = () => {
    const result = intersects(list);
    const area = result.intersected ? areaOfIntersection(result.rectangles) : 0;
    if(result.intersected){
      setMessage(`Area of intersection (${result.intersects}) = ${area}`);
    }
    else
      setMessage(`There is no intersection.`);
    console.log(listResponse);
  }

  const addToList = () => {
    setList([...list, {
      [name]: [
        [r1x,r1y],
        [r2x,r2y]
      ]
    }]);

    setListResponse([...listResponse, {
      [name]: [
        [r1x,r1y],
        [r2x,r2y]
      ]
    }]);
    
    setr1x(0);
    setr1y(0);
    setr2x(0);
    setr2y(0);
    setName('A');
  }

  //Exercise Four
  const areaOfIntersection = (rectangles) => {
    console.log(rectangles);
    let arrayX1 = [], arrayX2 = [], arrayY1 = [], arrayY2 = [];
    rectangles.forEach((item) => {
      let key = Object.keys(item)[0];
      item = item[key];
      arrayX1 = [...arrayX1, item.x1];
      arrayX2 = [...arrayX2, item.x2];
      arrayY1 = [...arrayY1, item.y1];
      arrayY2 = [...arrayY2, item.y2];
    });
    let intersPoints = { x1:0, x2: 0, y1:0, y2:0 };
    //Sort the smallests (x1) points of X axe and get the bigger, 
    //because this is the x1 point of interaction rectangle
    intersPoints.x1 = arrayX1.sort((a,b)=>b-a)[0];

    //Sort the biggests (x2) points of X axe and get the smallest, 
    //because this is the x2 point of interaction rectangle
    intersPoints.x2 = arrayX2.sort((a,b)=>a-b)[0];

    //Sort the smallests (y1) points of Y axe and get the bigger, 
    //because this is the y1 point of interaction rectangle
    intersPoints.y1 = arrayY1.sort((a,b)=>b-a)[0];

    //Sort the biggests (y2) points of Y axe and get the smallest, 
    //because this is the y2 point of interaction rectangle
    intersPoints.y2 = arrayY2.sort((a,b)=>a-b)[0];

    const sizeX = intersPoints.x2 - intersPoints.x1 + 1;
    const sizeY = intersPoints.y2 - intersPoints.y1 + 1;
    const area = sizeX * sizeY;
    
    return area;
  }

  //Exercise Three
  const intersects = (rectangles) => {
    //variables that will be used in the response
    let intersects = [];
    let intersected = true;

    //Map object rectangles to sort item(rectangle) axes by x1,x2, y1,y2)
    rectangles.forEach((item, i ) => {
      //get key("A", for example) and set item to value (coordinates)
      const key = Object.keys(item)[0];
      item = item[key];

      //organize rectangle, orderning x1,x2
      rectangles[i][key] = item[0][0] <= item[1][0] ? 
        {x1: item[0][0], x2: item[1][0]} 
      : 
        {x1: item[1][0], x2: item[0][0]};

      //organize rectangle, ordening y1,y2
      rectangles[i][key] = item[0][1] <= item[1][1] ? 
        {...rectangles[i][key], y1: item[0][1], y2: item[1][1]} 
      : 
        {...rectangles[i][key], y1: item[1][1], y2: item[0][1]};
    });

    //with object rectangles organized, will sweep each item with other
    rectangles.forEach((item, i) => {
      //get key and set to value
      const key = Object.keys(item)[0];
      item = item[key];

      //test each rectangle, starting i+1, to only test 1-1 one time, 
      //example: will test A∩C, but won't test C∩A, because A∩C=C∩A
      for(let i2 = i + 1; i2 < rectangles.length; i2++){
        //get key and set to value
        let item2 = rectangles[i2];
        const key2 = Object.keys(item2)[0];
        item2 = item2[key2];

        //check if sintersect
        if(item.x1 <= item2.x2 && item2.x1 <= item.x2 &&
          item.y1 <= item2.y2 && item2.y1 <= item.y2)
          intersects = [...intersects, `${key}∩${key2}`];
        else
          intersected = false;
      }
    });
    //return three objects
    return {rectangles, intersects, intersected};
  }

  return (
    <Fragment>
      <div className="container">
        <div className="py-5 mt-4 text-center">
          <h1>Rectangles Intersect</h1>
          <p>(Exercises Three and Four)</p>
        </div>
        <div className="row" hidden={message}>
          <div className="col-md-8 order-md-1">
            <form>
              <div className="row">
                <div className="col-2 m-0">
                  <input type="text" className="form-control m-0" value={name} onChange={e => setName(e.target.value)} placeholder="A"></input>
                </div>
                = (
                <div className="col-2 m-0">
                  <input type="number" className="form-control m-0" value={r1x} onChange={e => setr1x(e.target.valueAsNumber || 0)} placeholder="0"></input>
                </div>
                ,
                <div className="col-2 m-0">
                  <input type="number" className="form-control m-0" value={r1y} onChange={e => setr1y(e.target.valueAsNumber || 0)} placeholder="0"></input>
                </div>
                ;
                <div className="col-2 m-0">
                  <input type="number" className="form-control m-0" value={r2x} onChange={e => setr2x(e.target.valueAsNumber || 0)} placeholder="0"></input>
                </div>
                ;
                <div className="col-2 m-0">
                  <input type="number" className="form-control m-0" value={r2y} onChange={e => setr2y(e.target.valueAsNumber || 0)} placeholder="0"></input>
                </div>
                )
              </div>
              <div className="row mt-2 justify-content-center">
                <div className="col-2 float-right">
                  <button onClick={() => addToList()} className="btn btn-primary btn-lg btn-block">Add</button>
                </div>
              </div>
              <hr className="mb-4"></hr>
            </form>
          </div>
          <div className="col-md-4 order-md-2 mb-4" hidden={list.length === 0} >
            <h4 className="d-flex justify-content-end">
                <span className="badge badge-warning badge-pill">{list.length}</span>
            </h4>
            <ul className="list-group mb-3">
              {
                list.map((rectangle, i) => {
                  const key = Object.keys(rectangle)[0];
                  rectangle = rectangle[key];
                  if(rectangle[0]){
                    return (
                      <li key={i} className="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                          <h6 className="my-0">{key}</h6>
                          <small className="text-muted">({rectangle[0][0]}, {rectangle[0][1]}; {rectangle[1][0]}, {rectangle[1][1]})</small>
                        </div>
                      </li>
                    )
                  }
                })
              }
            </ul>
            <div className="col">
              <button className="btn btn-danger btn-lg btn-block" onClick={() => calculate()}>Calculate</button>
            </div>
          </div>
        </div>
        <div hidden={!message} className="col-5">
        <hr className="mb-4"></hr>
          <h4>{message}</h4>
          <hr className="mb-1"></hr>
          <div>Intersection between:</div>
          {
            message && listResponse.map((rectangle, i) => {
              const key = Object.keys(rectangle)[0];
              rectangle = rectangle[key];
              if(rectangle[0]){
                return (
                  <div key={i}>
                    {key} = ({rectangle[0][0]}, {rectangle[0][1]}; {rectangle[1][0]}, {rectangle[1][1]})
                  </div>
                )
              }
            })
          }
          <hr className="mb-1"></hr>
          <div>Sorted:</div>
          {
            message && list.map((rectangle, i) => {
              const key = Object.keys(rectangle)[0];
              rectangle = rectangle[key];
              
              return (
                <div key={i}>
                  {key} (x1: {rectangle.x1}, x2: {rectangle.x1}; y1: {rectangle.y1}, y2: {rectangle.y1})
                </div>
                )
            })
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Rectangles;