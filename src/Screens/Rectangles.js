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
function Intersects(A, B) {
  let a = A[0][0] <= A[1][0] ? {x1: A[0][0], x2: A[1][0]} : {x1: A[1][0], x2: A[0][0]};
      a = A[0][1] <= A[1][1] ? {...a, y1: A[0][1], y2: A[1][1]} : {...a, y1: A[1][1], y2: A[0][1]};
  let b = B[0][0] <= B[1][0] ? {x1: B[0][0], x2: B[1][0]} : {x1: B[1][0], x2: B[0][0]};
      b = B[0][1] <= B[1][1] ? {...b, y1: B[0][1], y2: B[1][1]} : {...b, y1: B[1][1], y2: B[0][1]};

  if(a.x1 <= b.x2 && b.x1 <= a.x2 && a.y1 <= b.y2 && b.y1 <= a.y2 ){

    console.log(AreaOfIntersection(a,b));
    return true;
  }else
    return false;
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
  const [B, setB] = useState([[11,11], [15,13]]);

  console.log(Intersects(A,B));

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