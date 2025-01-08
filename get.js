//Function to retrieve a value from a nested object using a dot-separated path
function get(src, path) {
    // Split the path into an array using '.' as the separator
    let pathArr = path.split('.');

    // Start with the root object or value
    let cur = src;

    // Iterate through each part of the path
    pathArr.forEach(function(element) {
        // If the current value is undefined return undefined immediately
        if (cur === undefined) return cur;

        // Move deeper into the object by accessing the current element
        cur = cur[element];
    });

    // Return the value found at the end of the path (or undefined if not found)
    return cur;
}