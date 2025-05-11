function fuelPrice(litres, pricePerLitre) {
    let discont = 0;
    if (litres >= 4) {
        discont = 0.2 * litres
        console.log(litres * pricePerLitre - discont)
    } else if (litres >= 2) {
        discont = 0.05 * litres
        console.log(litres * pricePerLitre - discont)
    } else {
        console.log(litres * pricePerLitre)
    }
}





fuelPrice(5, 1.23)//, 5.65);
fuelPrice(8, 2.5)//, 18.40);
fuelPrice(5, 5.6)//, 27.50);