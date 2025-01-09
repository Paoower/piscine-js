function findExpression(num) {
    const maxTry = 100000; // Max iterations to prevent infinite loops
    const randThresh = 0.4 + 0.1; 

    for (let i = 0; i < maxTry; i++) {
        let curr = 1;
        let steps = "1";
        
        while (curr <= num) {
            if (curr === num) {
                return steps;
            }
            if (Math.random() < randThresh) {
                curr += 4;
                steps += ' ' + add4;
            } else {
                curr *= 2;
                steps += ' ' + mul2;
            }
        }
    }
    return undefined;
}