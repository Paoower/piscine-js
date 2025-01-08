//Function to chunk an array into sub-arrays of specified size
function chunk(array,size){
//If size is 0 return an empty array
    if(size === 0){
        return[];
    }
//If size is 1 return an array where each element is a sub-array
    if(size === 1){
        return array.map(item => [item]);
    }

    const result = [];
//Loop through the array, slicing into chunks of the given size
    for (let i = 0;i < array.length; i += size){
        result.push(array.slice(i,i + size));
    }
    return result;
}