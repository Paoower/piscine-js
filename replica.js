// Deeply replicates the properties of one object to another
function replica(elem_to, ...elem_from) {
    elem_from.forEach(source => {
        for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                const value = source[key];

                // Handle special types
                if (value instanceof RegExp) {
                    elem_to[key] = new RegExp(value.source, value.flags);
                } else if (value instanceof Date) {
                    elem_to[key] = new Date(value.getTime());
                } else if (Array.isArray(value)) {
                    // Replace with a deep copy of the array
                    elem_to[key] = value.map(item =>
                        typeof item === 'object' && item !== null ? replica({}, item) : item
                    );
                } else if (typeof value === 'object' && value !== null) {
                    // Replace if types mismatch or recurse if both are objects
                    if (!elem_to[key] || typeof elem_to[key] !== 'object' || Array.isArray(elem_to[key])) {
                        elem_to[key] = {};
                    }
                    elem_to[key] = replica(elem_to[key], value);
                } else {
                    // Primitive values
                    elem_to[key] = value;
                }
            }
        }
    });
    return elem_to;
}
