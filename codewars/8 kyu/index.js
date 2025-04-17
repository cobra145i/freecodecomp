function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) {
        console.log(100)
    } else if (exam > 75 || projects > 4) {
        console.log(90)
    } else if (exam > 50 || projects > 1) {
        console.log(75)
    } else {
        console.log(0)
    }
}

finalGrade(100, 12)//, 100);
finalGrade(85, 5)//, 90);
finalGrade(0, 2)//, 100);
finalGrade(7, 2)//, 90);