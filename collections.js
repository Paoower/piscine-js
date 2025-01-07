// Convert Array to Set
function arrToSet(arr) {
    return new Set(arr);
}
  
// Convert Array to String
function arrToStr(arr) {
    return arr.join('');
}

// Convert Set to Array
function setToArr(set) {
    return Array.from(set);
}
  
// Convert Set to String
function setToStr(set) {
    return Array.from(set).join('');
}  
  
// Convert String to Array
function strToArr(str) {
    return str.split('');
}
  
// Convert String to Set
function strToSet(str) {
    return new Set(str.split(''));
}
  
// Convert Map to Object
function mapToObj(map) {
    const obj = {};
    for (const [key, value] of map.entries()) {
      obj[key] = value;
    }
    return obj;
}
  
// Convert Object to Array
function objToArr(obj) {
    return Object.values(obj);
}  
  
// Convert Object to Map
function objToMap(obj) {
    return new Map(Object.entries(obj));
}
  
// Convert Array to Object
function arrToObj(arr) {
    const obj = {};
    arr.forEach((value, index) => {
      obj[index] = value;
    });
    return obj;
}
  
// Convert String to Object
function strToObj(str) {
    const obj = {};
    for (let i = 0; i < str.length; i++) {
      obj[i] = str[i];
    }
    return obj;
}
  
// Super type detection
function superTypeOf(value) {
    const typeMapping = {
      string: 'String',
      number: 'Number',
      boolean: 'Boolean',
      undefined: 'undefined',
      object: value === null ? 'null' : 'Object',
      function: 'Function',
      symbol: 'Symbol',
      bigint: 'BigInt',
    };
  
    if (value instanceof Map) return 'Map';
    if (value instanceof Set) return 'Set';
    if (Array.isArray(value)) return 'Array';
  
    const type = typeof value;
    return typeMapping[type] || 'Unknown';
}