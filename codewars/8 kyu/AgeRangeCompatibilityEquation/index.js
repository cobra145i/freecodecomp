function datingRange(age) {
    if (age >= 14) {
        let min = Math.floor((age / 2) + 7);
        let max = Math.floor(2 * (age - 7));
        return min + "-" + max
    } else {
        let min = Math.floor(age - 0.10 * age)
        let max = Math.floor(age + 0.10 * age)
        return min + "-" + max
    }
}


datingRange(17)//, "15-20")
datingRange(40)//, "27-66")
datingRange(15)//, "14-16")
datingRange(35)//, "24-56")
datingRange(10)//, "9-11")