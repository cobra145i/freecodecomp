function saleHotdogs(n) {
    if (n >= 10) {
        return 90 * n;
    } else if (n >= 5 && n < 10) {
        return 95 * n;
    } else {
        return 100 * n;
    }
}