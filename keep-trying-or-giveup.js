function retry(count = 3, callback = async () => {}) {
  return async function (...args) {
    let attempt = 0;

    while (attempt <= count) {
      try {
        // Essayez d'invoquer le callback
        return await callback(...args);
      } catch (error) {
        attempt++;
        if (attempt > count) {
          // Si les tentatives sont épuisées, relancez l'erreur d'origine
          throw error;
        }
      }
    }
  };
}

function timeout(delay = 0, callback = async () => {}) {
    return async function (...args) {
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('timeout')), delay)
      );
  
      try {
        // Use Promise.race to race between the timeout and the callback
        return await Promise.race([callback(...args), timeoutPromise]);
      } catch (error) {
        // Re-throw the error for the caller to handle
        throw error;
      }
    };
}