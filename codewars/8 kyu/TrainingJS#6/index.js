function trueOrFalse(val) {
    if (val == false || val == 0 || val == NaN || val == undefined) {
        return 'false';
    } else {
        return 'true';
    }
}