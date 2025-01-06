// if value is a number
is.num = (value) => typeof value === 'number';

//if value is NaN
is.nan = (value) => Number.isNaN(value);

//if value is a string
is.str = (value) => typeof value === 'string';

//if value is a boolean
is.bool = (value) => typeof value === 'boolean';

//if value is undefined
is.undef = (value) => typeof value === 'undefined';

//if value is defined
is.def = (value) => value !== undefined;

//if value is an array
is.arr = (value) => Array.isArray(value);

//if value is a simple object or null objects
is.obj = (value) => value !== null && typeof value === 'object' && !Array.isArray(value)

//if value is a function
is.fun = (value) => typeof value === 'function';

//if value is truthy
is.truthy = (value) => !!value === true;

//if value is falsy
is.falsy = (value) => !value;
