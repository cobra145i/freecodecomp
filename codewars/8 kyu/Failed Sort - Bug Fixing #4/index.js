function sortArray(value) {
  console.log(value.split('').sort((a, b) => a - b ).join(''))
}

  sortArray('12345')//, '12345', 'Return a ascending sorted array');
  sortArray('54321')//, '12345', 'Return a ascending sorted array');
  sortArray('34251')//, '12345', 'Return a ascending sorted array');
