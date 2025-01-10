function letterSpaceNumber(str){
    // Match: letter (a-z), space, digit (0-9), not followed by letter or digit (negative lookahead (?![a-z0-9]))
    let arr = str.match(/[a-z] [0-9](?![a-z0-9])/gi);
    // Return matches or an empty array if none are found
    return arr !== null ? arr : [];
}