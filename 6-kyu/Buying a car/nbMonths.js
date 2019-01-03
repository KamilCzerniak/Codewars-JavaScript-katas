function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    let month = 0;
    let money = startPriceOld;
    let priceNewCar = startPriceNew;
    let priceOldCar = startPriceOld;

    while (money < priceNewCar) {
        month++;
        percentLossByMonth += month > 0 && month % 2 === 0 ? 0.5 : 0;
        priceOldCar = (priceOldCar * (100 - percentLossByMonth) / 100.0);
        priceNewCar = (priceNewCar * (100 - percentLossByMonth) / 100.0);
        money = savingperMonth * month + priceOldCar;
    }
    return [month, Math.round(money - priceNewCar)];
}