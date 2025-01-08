//function to returns the index of the first occurrence of a value
function indexOf(arr,value,start = 0){
    for(let i = start; i < arr.length; i++){
        if (arr[i] === value){
            return i;
        }
    }
    return -1;
}

//function to returns the index of the last occurrence of a value
function lastIndexOf(arr,value,start=arr.length - 1){
    for(let i = start; i >= 0; i--){
        if (arr[i] === value){
            return i;
        }
    }
    return -1;
}

//function to returns a bool if the value is present in the array
function includes(arr,value){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === value){
            return true;
        }
    }
    return false;
}