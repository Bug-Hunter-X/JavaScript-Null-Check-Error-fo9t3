function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null and undefined cases
  } else if (typeof x !== 'object' || x.length === undefined){
    return 0; // Handle cases where x is not an object with a length property
  }
  return x.length; 
}