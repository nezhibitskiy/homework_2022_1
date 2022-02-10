'use strict';

/**
 * Inverse elements in array.
 * @param {Array<>} inputArray - Array for inversing
 * @param {number} offsetIndex - Index of unchangeable part of array (if negative, counts from end of array)
 * @example
 * // returns [3, 2, 1]
 * inverse([1, 2, 3]); 
 * @example
 * // returns [1, 3, 2]
 * inverse([1, 2, 3], 1);
 * @example
 * // returns [2, 1, 3]
 * inverse([1, 2, 3], -1);
 */
const inverse = (inputArray, offsetIndex = 0) => {
    if (!inputArray) return inputArray;
    
    /** Check if index is default or invalid */
    if (!offsetIndex) return inputArray.reverse();

    if (offsetIndex > 0)
    {
        let unchangalbeArrPart = inputArray.splice(0, offsetIndex);
        inputArray.reverse();
        return unchangalbeArrPart.concat(inputArray);
    }
    else
    {
        let unchangalbeArrPart = inputArray.splice(offsetIndex);
        inputArray.reverse();
        return inputArray.concat(unchangalbeArrPart);
    }
}