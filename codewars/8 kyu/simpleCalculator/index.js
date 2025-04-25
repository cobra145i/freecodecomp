function calculator(a,b,sign){
	if ((typeof a === "number") && (typeof b === "number")) {
    switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    }
  }
  return "unknown value";
}

calculator(1, 2, "+")//,               3);
calculator(1, 2, "-")//,              -1);
calculator(3, 5, "*")//,              15);
calculator(6, 2, "/")//,               3);
calculator(6, 2, "$")//, "unknown value");
calculator(6, "h", "*")//, "unknown value");