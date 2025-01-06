const id = (n) => n;
const getLength = (input) => {
    let count = 0;
    if (Array.isArray(input)) {
      for (let i = 0; i < input.length; i++) {
        count++;
      }
    } 
    else if (typeof input === 'string') {
      for (let i = 0; i < input.charCodeAt(i); i++) {
        count++;
      }
    }
    return count;
  };
