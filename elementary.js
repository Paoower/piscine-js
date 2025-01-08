//function multiply that acts like the * operator, without using it.
function multiply(a,b){
    let result = 0;
    const positive = Math.abs(b);
    for (let i = 0; i< positive; i++){
        result += a;
    }
    return b < 0 ? -result : result; 
}

//function divide that acts like the integer division operator /, without using it.
function divide(a,b){
    if (b === 0){
        throw new Error("Division by zero is impossible");
    }

    let q = 0;
    const neg = (a < 0) !== (b < 0);
    a = Math.abs(a);
    b = Math.abs(b);
    
    while (a >= b){
        a -= b;
        q++;
    }

    return neg ? -q : q; 
}

//function modulo that acts like the % operator, without using it.
function modulo(a,b){
    if (b === 0){
        throw new Error("Modulo zero is impossible")
    }

    const neg = a < 0;
    a = Math.abs(a);
    b = Math.abs(b);

    while (a >= b){
        a -= b; 
    }

    return neg ? -a : a;
}