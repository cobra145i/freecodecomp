function oddCount(n) {
    let res = n.split(' ');
    let count = 0;

    for (let i = 0; i < res.length; i++) {
        let number = parseInt(res[i]);
     
        if (!isNaN(number) && number % 2 !== 0) {
            count++;
        }
    }

    return count; 
}


    oddCount(15)//, 7, "Oops! Wrong.");
    oddCount(15023)//, 7511, "Oops! Wrong.");