function slice(input,start,end = input.length){
    const result = [];
    //Handling negative value for start and end 
    if (start < 0){
        start = Math.max(input.length + start,0);
    }
    if (end < 0){
        end = Math.max(input.length + end,0);
    }

    start = Math.max(start, 0);
    end = Math.min(end, input.length);
    
    // If it's a string
    if(typeof input === 'string'){
        let substring = '';
        for(let i = start; i < end;i++){
            substring += input[i];
        }
        return substring;
    }
    //If it's an array 
    if(Array.isArray(input)){
        for(let i = start; i < end; i++){
            result.push(input[i]);
        }
        return result;
    }

    throw new Error("Put an array or a string")
}