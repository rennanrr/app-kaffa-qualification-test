import React, { Fragment, useState } from 'react';

function arrayR(A, B) {
  const gridSize = [16, 16];
  let grid = [];
  for(let x = 0; x < gridSize[0]; x++) {
    for(let y = 0; y < gridSize[1]; y++) {
      grid = [...grid, [x,y]];
    }
  }
  const littleA = [A[0][0] < A[1][0] ? A[0][0] : A[1][0], A[0][1] < A[1][1] ? A[0][1] : A[1][1]];
  let arrayA = [];
  for(let x = littleA[0]; x < (littleA[0] + Math.abs(A[0][0]-A[1][0])); x++){
    for(let y = littleA[1]; y < (littleA[1] + Math.abs(A[0][1]-A[1][1])); y++){
      arrayA = [...arrayA, [x,y]];
    }
  }
  const littleB = [B[0][0] < B[1][0] ? B[0][0] : B[1][0], B[0][1] < B[1][1] ? B[0][1] : B[1][1]];
  let arrayB = [];
  for(let x = littleB[0]; x < (littleB[0] + Math.abs(B[0][0]-B[1][0])); x++){
    for(let y = littleB[1]; y < (littleB[1] + Math.abs(B[0][1]-B[1][1])); y++){
      arrayB = [...arrayB, [x,y]];
    }
  }
  return (littleA,littleB);
}


const Rectangles = () => {

  const [name, setName] = useState('A');
  const [r1x, setr1x] = useState(0);
  const [r1y, setr1y] = useState(0);
  const [r2x, setr2x] = useState(0);
  const [r2y, setr2y] = useState(0);

  const [list, setList] = useState([]);
  const [message, setMessage] = useState('');

  function calculate() {
    const result = intersects(list);
    const area = result.intersected ? areaOfIntersection(result.rectangles) : 0;
    if(result.intersected){
      setMessage(`Area of intersection (${result.intersects}) = ${area}`);
    }
    else
      setMessage(`There is no intersection.`);

    setList([]);
  }

  function addToList() {
    setList([...list, {
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

    //Map object rectangles to sort item(rectangle) axes by x1,x2, y1,y2
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
      <div className="App">
        <h1>Rectangles Intersect</h1>
        <p>(Exercises Three and Four)</p>
        <div>
          <input type="text" className="input-name" value={name} onChange={e => setName(e.target.value)} placeholder="A"></input>
          = (
          <input type="number" className="input-number" value={r1x} onChange={e => setr1x(e.target.valueAsNumber || 0)} placeholder="0"></input>, 
          <input type="number" className="input-number" value={r1y} onChange={e => setr1y(e.target.valueAsNumber || 0)} placeholder="0"></input>; 
          <input type="number" className="input-number" value={r2x} onChange={e => setr2x(e.target.valueAsNumber || 0)} placeholder="0"></input>,
          <input type="number" className="input-number" value={r2y} onChange={e => setr2y(e.target.valueAsNumber || 0)} placeholder="0"></input>)
          <button onClick={addToList}>Add</button>
        </div>
        {
          list.map((rectangle, i) => {
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
        <button hidden={list.length === 0} onClick={calculate}>Calculate</button>
      <div hidden={list.length !== 0}>{message}</div>
      </div>

    </Fragment>
  )
}

export default Rectangles;