function countPositivesSumNegatives(input) {
    let sum = 0;
    let count = 0;
    let res = [];
    if (!input || input.length === 0) {
        return res
    }

    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {

            sum += input[i]
        }
        else if (input[i] > 0) {
            count += 1

        } else {}

    }

    res.push(count)
    res.push(sum)  
    return res
}


countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])