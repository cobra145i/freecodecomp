function calculator(a,b,sign){
    if (typeof(a)==Number&&typeof(b)==Number ||sign =="+"||sign =="-"||sign =="/"||sign =="*"){
        return eval(a+sign +b)
    } else if (typeof(b)!==Number) {
        return "unknown value"
   
    
    } else {
        return "unknown value"
    }}
  

  calculator(1,   2, "+")//,               3);
  calculator(1,   2, "-")//,              -1);
  calculator(3,   5, "*")//,              15);
  calculator(6,   2, "/")//,               3);
  calculator(6,   2, "$")//, "unknown value");
  calculator(6, "h", "*")//, "unknown value");