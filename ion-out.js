function ionOut(str) {
    // Split the input string into words
    let arr = str.split(" ");
    // Regular expression to match 'tion'
    let rexp = /tion/g;
    let result = [];

    // Loop through words and remove 'tion' from words that contain it
    arr.forEach((word) => {
        word.match(rexp)
            ? result.push(word.replace(/[.,?!]/g, "").slice(0, -3))
            : null;
    });

    return result;
}
