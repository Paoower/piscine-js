//function that takes a number N as an argument and returns a string with all numbers from 1 to N separated by spaces. 
function nasa(N) {
    if (typeof N !== 'number' || N < 1) {
        return '';
    }

    const result = [];

    // Loop through numbers from 1 to N
    for (let i = 1; i <= N; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('NASA');
        } else if (i % 3 === 0) {
            result.push('NA');
        } else if (i % 5 === 0) {
            result.push('SA');
        } else {
            result.push(i);
        }
    }
    return result.join(' ');
}