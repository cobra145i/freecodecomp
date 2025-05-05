function maps(x) {
    let res = []
    for (let i = 0; i < x.length; i++) {
        res.push(x[i] + x[i])
    }
    console.log(res)
}

maps([1, 2, 3])//, [2, 4, 6]);
maps([4, 1, 1, 1, 4])//, [8, 2, 2, 2, 8]); 
maps([2, 2, 2, 2, 2, 2])//, [4, 4, 4, 4, 4, 4]); 