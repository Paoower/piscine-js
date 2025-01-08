//function that remove the first 2 characters 
function cutFirst(str){
    return str.slice(2);
}

//function that remove the last 2 characters 
function cutLast(str){
    return str.slice(0,-2);
}

//function that do both cutFirst and cutlast 
function cutFirstLast(str){
    return str.slice(2,-2);
}

// Function that keep only the first 2 characters
function keepFirst(str) {
    return str.slice(0, 2);
}

// Function that keep only the last 2 characters
function keepLast(str) {
    return str.slice(-2);
}

// Function that do both keepFirst and keepLast
function keepFirstLast(str) {
    if (str.length <= 3) {
        return str; 
    }
    return keepFirst(str) + keepLast(str); 
}