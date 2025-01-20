// Filters object values based on a callback function
function filterValues(obj, callback) {
    let res = {};
    for (let key in obj) {
        if (callback(obj[key])) {
            res[key] = obj[key];
        }
    }
    return res;
}

// Maps object values using a callback function
function mapValues(obj, callback) {
    let res = {};
    for (let key in obj) {
        res[key] = callback(obj[key]);
    }
    return res;
}

// Reduces object values to a single value based on a callback
function reduceValues(obj, callback, acc = 0) {
    for (let key in obj) {
        acc = callback(acc, obj[key]);
    }
    return acc;
}
