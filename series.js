// Execute async operations sequentially and collect results
async function series(asyncFunctions) {
    const results = [];
    for (const fn of asyncFunctions) {
      results.push(await fn());
    }
    return results;
  }