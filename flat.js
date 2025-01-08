//Flattens an array to a specified depth recursively processing nested arrays.
function flat(array,depth = 1){
    return array.reduce((acc, curr) => {
        //If the current element is an array and depth is greater than 0 recursively flatten it
        if(Array.isArray(curr) && depth > 0){
            acc.push(...flat(curr,depth - 1));
        } else {
            acc.push(curr);//Otherwise push the non-array element directly into the accumulator
        }
        return acc;
    }, []);//Initialize the accumulator as an empty array
}

