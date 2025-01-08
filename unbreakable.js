//funciton that works like String.split but takes the string as its first argument.
function split(string, separator) {
    const result = [];

    // Handle the case where the separator is an empty string
    if (separator === "") {
        for (let i = 0; i < string.length; i++) {
            result.push(string[i]);
        }
        return result;
    }

    let currentSegment = "";

    for (let i = 0; i < string.length; i++) {
        // Check if the current character matches the separator
        if (string.substr(i, separator.length) === separator) {
            result.push(currentSegment);
            currentSegment = "";
            i += separator.length - 1; 
        } else {
            currentSegment += string[i];
        }
    }

    // Add the last segment to the result
    result.push(currentSegment);
    return result;
}

//Function that works like Array.join but take the array as its first argument.
function join(array, separator) {
    let result = "";

    for (let i = 0; i < array.length; i++) {
        result += array[i];
        if (i < array.length - 1) {
            result += separator;
        }
    }

    return result;
}