String.prototype.repeat = undefined;

function repeat(str,num){
    //Is num a non-negative value
    if (typeof num !== 'number'||num < 0 || !Number.isInteger(num)){
        throw new RangeError('Can\'t take a negative value for the number of repeat');
    }
    //If num is 0 
    if (num === 0){
        return '';
    }
    let result = '';

    //Concatenate the string for num times 
    for (let i = 0; i < num; i++) {
        result += str;
    }
    return result; 
}