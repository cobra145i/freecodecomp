// скорость самолетов указана в *узлах*
// время в пути указано в *минутах*
// расстояние в пути должно быть указано в *километрах*
function travelDistance(avgSpeedKnots, travelTimeMinutes) {
    const KM_PER_KNOT = 1.852;
    const travelTimeHours = travelTimeMinutes / 60;
    const traveledKnots = avgSpeedKnots * travelTimeHours;
    const traveledKms = traveledKnots * KM_PER_KNOT;
    return traveledKms;
}


travelDistance(0, 0)//, 0);
travelDistance(600, 60)//, 1111.2, 1);
travelDistance(800, 60)//, 1481.6, 1);