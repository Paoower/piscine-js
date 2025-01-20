// Recursively merges two objects, prioritizing values from the larger object
function fusion(a, b) {
    const result = {};
    const use = Object.keys(a).length > Object.keys(b).length ? a : b;

    // Iterate over the larger object and merge values
    Object.keys(use).forEach(key => {
        const valueA = a[key], valueB = b[key];
        if (Array.isArray(valueA) && Array.isArray(valueB)) {
            result[key] = valueA.concat(valueB); // Merge arrays
        } else if (typeof valueA === 'string' && typeof valueB === 'string') {
            result[key] = valueA + ' ' + valueB; // Concatenate strings
        } else if (typeof valueA === 'number' && typeof valueB === 'number') {
            result[key] = valueA + valueB; // Sum numbers
        } else if (typeof valueA === 'object' && valueA !== null && typeof valueB === 'object' && valueB !== null) {
            result[key] = fusion(valueA, valueB); // Merge objects recursively
        } else {
            result[key] = valueB !== undefined ? valueB : valueA; // Fallback to values
        }
    });

    return result;
}
