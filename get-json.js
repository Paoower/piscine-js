// Utility function to fetch JSON data with query parameter encoding
async function getJSON(p = '', params = {}) {
  const url = `${p}?${Object.entries(params)
      .map(([key, value]) => `${key.replace(' ', '+')}=${value.toString().replace(' ', '+')}`)
      .join('&')}`;

  // Fetch and process JSON response
  const response = await fetch(url);
  if (response.ok) {
    const result = await response.json();
    if (result.error) throw new Error(result.error);
    return result.data;
  } else {
    throw new Error(response.statusText);
  }
}