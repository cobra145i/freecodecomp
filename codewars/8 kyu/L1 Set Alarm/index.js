function setAlarm(employed, vacation){
 if (employed&&vacation){
   return false
 } else if (!employed&&vacation){
   return false
 } else if (employed&&!vacation){
   return true
 } else {
   return false
 }
}

    setAlarm(true, true),//  false,"Should be false.");
    setAlarm(false,true), // false, "Should be false.");
    setAlarm(true, false)// true,"Should be true.");