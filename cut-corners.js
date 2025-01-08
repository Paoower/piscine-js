//Function modulo that acts like the % operator without using it
function modulo(value1, value2) {
    var sign = value1 < 0 ? -1 : 1;
    var absValue1 = Math.abs(value1);
    var absValue2 = Math.abs(value2);
    
    if (absValue1 === 0) {
        return 0;
    }
    
    if (absValue2 === 0 || isNaN(absValue1) || isNaN(absValue2)) {
        return NaN;
    }
    
    if (absValue1 < absValue2) {
        return (sign * absValue1);
    }
    
    //Calculate the modulo
    var remainder = absValue1;
    while (remainder >= absValue2) {
        remainder = remainder - absValue2;
    }
    
    return sign * remainder;
}

// Function to round a number to the nearest integer
function round(number) {
    var absNumber = number;
    // If the number is negative make it positive   
    if (absNumber < 0) {
        absNumber = -absNumber;
    }
    
    // If the number is greater than a large threshold calculate the decimal part manually
    if (absNumber > 68719476735) {
        for (var i = 68719476735; i <= absNumber; i++) {
            if (absNumber - i <= 1) {
                decimalPart = absNumber - i;
            }
        }
    } else {
        // Calculate the decimal part using modulo
        var decimalPart = modulo(absNumber, 1);
    }
    
    var threshold = 0.5;
    // Round up if the decimal part is greater than or equal to 0.5
    if (decimalPart >= threshold) {
        absNumber++;
    }
    
    // Return the rounded result, considering the sign of the original number
    if (number < 0) {
        return -(absNumber - decimalPart);
    } else {
        return absNumber - decimalPart;
    }
}

// Function to return the smallest integer greater than or equal to a number
function ceil(number) {
    // Use round to determine the closest integer and round up if needed
    var result = round(number) >= number ? round(number) : round(number) + 1;
    return result;
}

// Function to return the largest integer less than or equal to a number
function floor(number) {
    // Use round to determine the closest integer and round down if needed
    var result = round(number) <= number ? round(number) : round(number) - 1;
    return result;
}

// Function to truncate the decimal part of a number
function trunc(number) {
    var absNumber = number;
    // If the number is negative make it positive
    if (absNumber < 0) {
        absNumber = -absNumber;
    }
    
    // If the number is greater than a large threshold calculate the decimal part manually
    if (absNumber > 68719476735) {
        for (var i = 68719476735; i <= absNumber; i++) {
            if (absNumber - i <= 1) {
                decimalPart = absNumber - i;
            }
        }
    } else {
        // Calculate the decimal part using modulo
        var decimalPart = modulo(absNumber, 1);
    }
    
    // Return the truncated result, considering the sign of the original number
    if (number < 0) {
        return -(absNumber - decimalPart);
    } else {
        return absNumber - decimalPart;
    }
}