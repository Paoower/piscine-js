// Regular expression to match valid http/https urls 
const urlExp = /https?:\/\/(?:www\.)?[a-zA-Z0-9@:%._\+~#=]{1,256}(?:\.[a-zA-Z0-9()]{1,6})?(?:[-a-zA-Z0-9()\[\],@:%_\+.~#?&\/\/=]*)/g;

// Function to extract all Urls from the given dataSet
function getURL(dataSet){
    return dataSet.match(urlExp) || []; //return matched url or empty array if find nothing
}

// Function to extract Urls with at least 3 querry parameters
function greedyQuery(dataSet){
    const urls = getURL(dataSet);
    return urls.filter(url => /\?([^&=]+=[^&=]+&){2,}[^&=]+=[^&=]+/.test(url));
}

// Function to extract Urls with at least 2 but not more then 3 query parameters 
function notSoGreedy(dataSet){
    const urls = getURL(dataSet);
    return urls.filter(url =>  /\?([^&=]+=[^&=]+&){1,2}[^&=]+=[^&=]+$/.test(url));
}