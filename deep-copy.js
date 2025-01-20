// Recursively creates a deep copy of an object or array
function deepCopy(obj) {
    if (Array.isArray(obj)) {
        return obj.map(deepCopy); // Recursively copy arrays
    } else if (Object.prototype.toString.call(obj).slice(8, -1) === 'Object') {
        return Object.fromEntries(
            Object.entries(obj).map(([key, value]) => [key, deepCopy(value)])
        ); // Recursively copy objects
    } else {
        return obj; // Base case for primitive values
    }
}
