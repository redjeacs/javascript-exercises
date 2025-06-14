const removeFromArray = function(array, ...rm) {
  newArray = []
  array.forEach(item => {
    if (!rm.includes(item)) {
      newArray.push(item);
    }
  })
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
