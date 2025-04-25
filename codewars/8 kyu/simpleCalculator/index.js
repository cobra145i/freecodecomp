function calculator(a, b, sign) {
    if (sign == "$") {
        console.log("unknown value")
    } else if (typeof (a) == "string" || typeof (b) == "string") {
        console.log("unknown value")
    } else {
        let res = eval(a + sign + b)
        console.log(res)
    }
}

calculator(1, 2, "+")//,               3);
calculator(1, 2, "-")//,              -1);
calculator(3, 5, "*")//,              15);
calculator(6, 2, "/")//,               3);
calculator(6, 2, "$")//, "unknown value");
calculator(6, "h", "*")//, "unknown value");