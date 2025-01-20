// Inverts the keys and values of an object
function invert(obj) {
    return Object.fromEntries(
        // Create entries by swapping keys and values
        Object.entries(obj).map(([key, value]) => [value, key])
    );
}
