"use strict";
/**
 * @param {Array} arr
 * @return {Object<number>}
 */
const countTypesInArray = (arr) => {
  const types = {};

  for (const elm of arr) {
    if (types[typeof elm] === undefined) {
      types[typeof elm] = 0;
    }
    types[typeof elm]++;
  }
  return types;
};

module.exports = { countTypesInArray };
