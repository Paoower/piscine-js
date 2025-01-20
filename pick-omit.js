// Picks specific keys from an object
function pick(obj, keys) {
    const picked = {};
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // If keys is a string, match the key
            let matchKey = typeof keys === "string" ? keys.match(new RegExp(`^${key}$`)) : keys.includes(key);
            if (matchKey) picked[key] = obj[key];
        }
    }
    return picked;
}

// Omits specific keys from an object
function omit(obj, keys) {
    const omitted = {};
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // Skip the key if it exists in the keys to omit
            let matchKey = typeof keys === "string" ? !keys.match(new RegExp(`^${key}$`)) : !keys.includes(key);
            if (matchKey) omitted[key] = obj[key];
        }
    }
    return omitted;
}
