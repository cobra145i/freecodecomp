function betterThanAverage(classPoints, yourPoints) {
    let sum=0;
    for (let i = 0; i<classPoints.length;i++){
        sum += classPoints[i];
    }
    return sum/classPoints.length<yourPoints
  }
  
  betterThanAverage([2, 3], 5)//, true);
  betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)//, true);

  betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)//, false);
  betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)//, false);
  betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)//, false);