/**
 * @param {any} object
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  if (obj instanceof classFunction) {
    return true;
  }
  if (obj.constructor === classFunction) {
    return true;
  }
  return false;
  // console.log(obj instanceof classFunction);
  // console.log(Object.prototype.toString.call(obj));
  // console.log(obj.__proto__, classFunction.name);
};

console.log(checkIfInstanceOf(new Date(), Date));

class Animal {}
class Dog extends Animal {}
console.log(checkIfInstanceOf(new Dog(), Animal));
console.log(checkIfInstanceOf(new Dog(), Dog));
console.log(checkIfInstanceOf(5, Number));
console.log(checkIfInstanceOf(null, null));

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
