//Function that reverses an array or a string 

function reverse(input) {
    if (typeof input === 'string') {
        let reversed = '';
        for (let i = input.length - 1; i >= 0; i--) {
            reversed += input[i];
        }
        return reversed;
    } else if (Array.isArray(input)) {
        const reversed = [];
        for (let i = input.length - 1; i >= 0; i--) {
            reversed.push(input[i]);
        }
        return reversed;
    } else {
        throw new TypeError('Input must be a string or an array');
    }
}
