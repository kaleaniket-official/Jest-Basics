
const cloneArray = require("../cloneArray.js");

// test("Clone array", () => {
//     const array = [1,2,3];
//     expect(cloneArray(array)).toBe(array)  //Test wll fail as array values are equal but memory places are diff.
// })

test("Clone array", () => {
    const array = [1,2,3];
    expect(cloneArray(array)).toEqual(array);   //use .toEqual() to pass
    expect(cloneArray(array)).not.toBe(array); //pass
})