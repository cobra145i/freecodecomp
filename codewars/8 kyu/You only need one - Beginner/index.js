function check(a, x) {
  for (let i = 0; i < a.length; i++){
    if ( x == a[i]){
      return true
    }
  }
    return false
}

    check([66, 101], 66)//, true);
    check([101, 45, 75, 105, 99, 107], 107)//, true);
    check(['t', 'e', 's', 't'], 'e')//, true);
    check(['what', 'a', 'great', 'kata'], 'kat')//, false)