function squareArea(A) {
  const pi = Math.PI;
  const side = (2 * A)/pi
  const area = side * side
 
    return area;
}


  
    squareArea(2),// 1.6211389382774046, DELTA);
    
    squareArea(0),// 0, DELTA);
    
    squareArea(14.05),// 80.00421981582636, DELTA);