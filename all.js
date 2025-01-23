// Execute multiple async operations in parallel and collect results
async function all(asyncOperations = {}) {
    const results = {};
    for (const key in asyncOperations) {
      results[key] = await asyncOperations[key];
    }
    return results;
  }