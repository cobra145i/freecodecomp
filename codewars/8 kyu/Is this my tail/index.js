function correctTail(bod, tail) {

    let sub = bod.substr(bod.length - 1)

    if (sub == tail) {
        return true
    }
    else {
        return false
    }
}

    correctTail("Fox", "x")//, true);
    correctTail("Rhino", "o")//, true);
    correctTail("Meerkat", "t")//a, true);   