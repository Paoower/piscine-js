function groupPrice(str){
    let prices = str.match(/(([A-Z]{3})|\$)([0-9]+\.[0-9]+)/g);
    let result = [];
    if (prices === null) return result;
    prices.forEach((price,i) => {
        result.push([price]);
        result[i].push(price.match(/[0-9]+/g)[0]);
        result[i].push(price.match(/[0-9]+/g)[1]);
    });
    return result;
}