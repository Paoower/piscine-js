// Perform parallel search across multiple server types with timeout
const queryServers = async (serverName, query) =>
    await Promise.race([
      getJSON(`/${serverName}?q=${query}`), 
      getJSON(`/${serverName}_backup?q=${query}`)
    ]);
  
  const gougleSearch = async (query) => {
    const searchTypes = ['web', 'image', 'video'];
    
    // Create timeout promise to limit search duration
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(reject, 80, new Error('timeout'))
    );
  
    // Parallel server queries with timeout protection
    const serverPromises = searchTypes
      .map((serverName) => queryServers(serverName, query))
      .map(async (promise) => await Promise.race([promise, timeoutPromise]));
  
    // Collect and return results
    const results = {};
    for (let i = 0; i < searchTypes.length; i++) {
      results[searchTypes[i]] = await serverPromises[i];
    }
    return results;
  };