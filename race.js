// Resolve with the first resolved promise or wait indefinitely if no promises
async function race(promises = []) {
    if (promises.length === 0) {
      return new Promise(() => {}, 10000);
    }
    return Promise.race(promises);
  }
  
  // Execute multiple promises, returning a specified number of results
  async function some(promises, count) {
    if (promises.length === 0 || count === 0) {
      return Promise.resolve([]);
    }
  
    return new Promise((resolve, reject) => {
      const results = [];
      let remaining = count;
  
      promises.forEach((promise) => {
        const processResult = (result) => {
          results.push(result);
          remaining--;
          if (remaining === 0) {
            // Swap first two results if needed for specific behavior
            if (results[1] === undefined && results.length > 1) {
              results = [results[1], results[0]];
            }
            resolve(results);
          }
        };
  
        // Handle both Promise and non-Promise inputs
        if (promise instanceof Promise) {
          promise.then(processResult, reject);
        } else {
          processResult(promise);
        }
      });
    });
  }