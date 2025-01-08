//Function creates a string representing a pyramid with the given character string and height.
function pyramid(str, int) {
    let res = '';
    for (let i = 1; i <= int; i++) {
        //Add spaces for centering the pyramid
        res += ' '.repeat(int - i).repeat(str.length)
        //Repeat the string to form the pyramid width
        res += str.repeat(i * 2 - 1)
        //No new line after the last line
        if (i === int) {
            return res; 
        }
        res += '\n';
    }
    return res;
}