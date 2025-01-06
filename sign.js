Math.sign = undefined;

const sign = (num) => {
    if (num > 0) return 1;
    if (num < 0) return -1;
    return 0;
  };
  
const sameSign = (a, b) => {
    return sign(a) === sign(b);
};