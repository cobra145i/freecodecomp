function getSize(width, height, depth) {
    let res = 2 * width * height + 2 * width * depth + 2 * height * depth;
    let res1 = (width * height * depth)
    return [res, res1]
  }

  getSize(4, 2, 6)//, [88, 48]);   
  getSize(10, 10, 10)//, [600, 1000]);
getSize(4, 2, 6)//[0], 88);
  getSize(4, 2, 6)//[1], 48);