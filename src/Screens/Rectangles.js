import React, { Fragment, useState } from 'react';

function areaOfIntersection(A, B) {
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
  let intersections = 0;
  for(let a = 0; a < arrayA.length; a++) {
    for(let b = 0; b < arrayB.length; b++) {
      if(arrayA[a][0] == arrayB[b][0] && arrayA[a][1] == arrayB[b][1])
        intersections++;
    }
  }
  return (intersections);
}

//Exercise Four
function AreaOfIntersection(a, b) {
  let intersection = a.x1 < b.x1 ? {x1: b.x1, x2: a.x2} : {x1: a.x1, x2: b.x2};
      intersection = a.y1 < b.y1 ? {...intersection, y1: b.y1, y2: a.y2} : {...intersection, y1: a.y1, y2: b.y2};
  return (intersection.x2 - intersection.x1 + 1) * (intersection.y2 - intersection.y1 + 1);
}

//Exercise Three
function Intersects(rectangles) {
  let sorted = {};
  rectangles.map((rectangle, index) => {
    sorted[index] = rectangle[0][0] <= rectangle[1][0] ? 
      {...sorted[index], x1: rectangle[0][0], x2: rectangle[1][0]} 
    : 
      {...sorted[index], x1: rectangle[1][0], x2: rectangle[0][0]};

      sorted[index] = rectangle[0][1] <= rectangle[1][1] ? 
      {...sorted[index], y1: rectangle[0][1], y2: rectangle[1][1]} 
    : 
      {...sorted[index], y1: rectangle[1][1], y2: rectangle[0][1]};


  });
  let intersect = false;
  for(let i = 0; i < Object.keys(sorted).length; i++) {
    for(let j = 0; j < Object.keys(sorted).length; j++) {
      if(sorted[i] != sorted[j]) {
        if(sorted[i].x1 <= sorted[j].x2 && sorted[j].x1 <= sorted[i].x2 &&
            sorted[i].y1 <= sorted[j].y2 && sorted[j].y1 <= sorted[i].y2)
          intersect = true;
        else
          intersect = false;
      }
    }
  }
    return intersect;
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
  const [C, setC] = useState([[11,11], [15,13]]);
  const [D, setD] = useState([[1,1], [20,20]]);

  console.log(Intersects([A, B, C, D]));

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