function dayOfTheYear(date){
    let result = 1;
    while (!isJanuaryFirst(date)){
        date.setDate(date.getDate() - 1);
        result++;
    }
    return result 
}

function isJanuaryFirst(date) {
    return date.getDate() === 1 && date.getMonth() === 0;
}