function integrate(coefficient, exponent) {
  let res = coefficient/(exponent + 1)
  let res2 = exponent + 1
  return res + "x^"+ res2
}

  integrate(3,2)//, "1x^3");
  integrate(12,5)//, "2x^6");
integrate(20,1)//, "10x^2");
  integrate(40,3)//, "10x^4");
  integrate(90,2)//, "30x^3");