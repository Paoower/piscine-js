function sameAmount (str,rexp1,rexp2){
    // Ensure both regex patterns are global by adding the 'g' flag if missing
    const pattern1 = new RegExp(rexp1.source, rexp1.flags.includes('g') ? rexp1.flags : rexp1.flags + 'g');
    const pattern2 = new RegExp(rexp2.source, rexp2.flags.includes('g') ? rexp2.flags : rexp2.flags + 'g');
    
    // Match both patterns in the string (Fallback to empty array if no matches)
    const matches1 = str.match(pattern1) || []; 
    const matches2 = str.match(pattern2) || [];
    
    // Compare the number of matches
    return matches1.length === matches2.length;
}