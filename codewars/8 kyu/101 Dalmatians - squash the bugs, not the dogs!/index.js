function howManyDalmatians(number) {
    var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    
    if (number < 10) {
        return dogs[0];
    } else if (number <= 50) {
        return dogs[1];
    } else if (number < 101) {
        return dogs[2];
    } else {
        return dogs[3];
    }
}
    howManyDalmations(26)//, "More than a handful!");
    howManyDalmations(8)//, "Hardly any");
    howManyDalmations(14)//, "More than a handful!");
    howManyDalmations(80)//, "Woah that's a lot of dogs!");
    howManyDalmations(100)//, "Woah that's a lot of dogs!");
    howManyDalmations(101)//, "101 DALMATIANS!!!");