// Extracts pronouns and their following words from a string
function pronoun(elem_string) {
    const pronouns = ["i", "you", "he", "she", "it", "they", "we"];
    let res = {};
    let words = elem_string.toLowerCase().split(/\W+/).filter(x => x !== '');

    words.forEach((word, i) => {
        if (pronouns.includes(word)) {
            let nextWord = words[i + 1];
            // Only consider the next word if it's not a pronoun and exists
            if (nextWord && !pronouns.includes(nextWord)) {
                res[word] = res[word] || { word: [], count: 0 };
                res[word].word.push(nextWord);
            }
            // Always increment the count
            res[word] = res[word] || { word: [], count: 0 };
            res[word].count++;
        }
    });

    return res;
}
