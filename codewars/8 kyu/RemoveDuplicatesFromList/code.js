function distinct(a) {
    let s = new Set(a);
    let a1 = [...s]
    return a1;
  }

  distinct([1])//, [1]);
  distinct([1,2])//, [1,2]);
  distinct([1,1,2])//, [1,2]);