//Function creates a string representing a triangle with the given character and height.
function triangle(char,height){
    let result = "";
    for (let i = 1; i <= height; i++){
        result += char.repeat(i) + (i === height ? "" : "\n");
    }
    return result;
}