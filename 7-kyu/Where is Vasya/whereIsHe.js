function whereIsHe(p, bef, aft) {
    return p - aft <= bef ? p - bef : aft + 1;

}