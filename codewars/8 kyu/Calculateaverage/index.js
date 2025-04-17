function findAverage(array) {
    if (array.length == 0) {
        return 0
    } else {
        return array.reduce((a, b) => (a + b)) / array.length
    }
}
findAverage([1,1,1])//, 1);
findAverage([1,2,3])//, 2);
findAverage([1,2,3,4])//, 2.5);