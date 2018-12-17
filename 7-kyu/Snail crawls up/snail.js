function snail(column, day, night) {

    return night < column ? Math.ceil((column - night) / (day - night)) : 1;

}