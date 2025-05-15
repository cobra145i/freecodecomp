function twoSort(s) {
    let res = []
     s.sort()
    res += s[0]
    return res.split("").join("***")
}

twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])//, 'b***i***t***c***o***i***n' );
//twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])//, 'a***r***e');