function whatday(num) {
    if (num == 1) {
        return "Sunday"
    } else if (num == 2) {
        return "Monday"
    } else if (num == 3) {
        return "Tuesday"
    } else if (num == 4) {
        return "Wednesday"
    } else if (num == 5) {
        return 'Thursday'
    } else if (num == 6) {
        return "Friday"
    } else if (num == 7) {
        return "Saturday"
    } else {
        return "Wrong, please enter a number between 1 and 7"
    }
}

    whatday(1)//,'Sunday')
    whatday(2)//, 'Monday')
whatday(3)//,'Tuesday')
       whatday(8)//,  'Wrong, please enter a number between 1 and 7')
    whatday(20)//,  'Wrong, please enter a number between 1 and 7')