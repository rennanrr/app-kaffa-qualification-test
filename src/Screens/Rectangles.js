import React, { Fragment, useState } from 'react';

function arrayR(A, B) {
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

//Exercise Four
function AreaOfIntersection(a, b) {
  let intersection = a.x1 < b.x1 ? {x1: b.x1, x2: a.x2} : {x1: a.x1, x2: b.x2};
      intersection = a.y1 < b.y1 ? {...intersection, y1: b.y1, y2: a.y2} : {...intersection, y1: a.y1, y2: b.y2};
  return (intersection.x2 - intersection.x1 + 1) * (intersection.y2 - intersection.y1 + 1);
}

//Exercise Three
function Intersects(rectangles) {
  //Sort axes by x1,x2, y1,y2 for each form
  rectangles.map((item, i ) => {
    let key = Object.keys(item)[0];
    item = item[key];
    rectangles[i][key] = item[0][0] <= item[1][0] ? 
      {x1: item[0][0], x2: item[1][0]} 
    : 
      {x1: item[1][0], x2: item[0][0]};

      rectangles[i][key] = item[0][1] <= item[1][1] ? 
      {...rectangles[i][key], y1: item[0][1], y2: item[1][1]} 
    : 
      {...rectangles[i][key], y1: item[1][1], y2: item[0][1]};
  });
  let intersects = [];
  let intersectedAll = true;
  rectangles.map((item, i) => {
    let key = Object.keys(item)[0];
    item = item[key];
    rectangles.map((item2, i2) => {
      let key2 = Object.keys(item2)[0];
      item2 = item2[key2];
      if(item !== item2) {
        if(item.x1 <= item2.x2 && item2.x1 <= item.x2 &&
          item.y1 <= item2.y2 && item2.y1 <= item.y2)
          intersects = [...intersects, `${key}∩${key2}`];
        else
          intersectedAll = false;
      }
    })
  });

  return {rectangles, intersects, intersectedAll};
}

function Rectangles() {
  const gridSize = [16, 16];
  let grid = [];
  for(let x = 0; x < gridSize[0]; x++) {
    for(let y = 0; y < gridSize[1]; y++) {
      grid = [...grid, [x,y]];
    }
  }
  const [A, setA] = useState([[11,11], [3,5]]);
  const [B, setB] = useState([[7,2], [13,7]]);
  const [C, setC] = useState([[11,6], [15,13]]);
  const [D, setD] = useState([[1,1], [20,20]]);

  console.log(Intersects([{A}, {B}, {C}, {D}]));

  return (
    <Fragment>
      <div className="App">
        <h1>Rectangles Intersect</h1>
        <p>(Exercises Three and Four)</p>
        <table className="">
          
          </table>
      </div>
    </Fragment>
  )
}

export default Rectangles;