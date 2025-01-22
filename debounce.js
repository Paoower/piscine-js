function debounce(fn, wait = 100) {
    let timeout;
  
    return function(...args) {
      const context = this;
  
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(context, args), wait);
    };
}

function opDebounce(fn, wait = 100, leading = false) {
    let timeout;
    let isLeadingCalled = false; // Tracks if the leading call has already occurred
  
    return function(...args) {
      const context = this;
  
      if (leading && !isLeadingCalled) {
        // Call immediately if leading is true and hasn't been called yet
        fn.apply(context, args);
        isLeadingCalled = true;
      }
  
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        // Reset the leading call status after wait period
        isLeadingCalled = false;
        if (!leading) {
          // If not leading, execute the function at the end of the wait period
          fn.apply(context, args);
        }
      }, wait);
    };
}