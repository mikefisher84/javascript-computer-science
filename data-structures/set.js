/**
 * Set
 *
 * A Set is a collection of {key:key} items that are unordered and consist of
 * unique elements (meaning they cannot be repeated)
 *
 * You can also imagine a Set2 as an array with no repeated elements and
 * no concept or order.
 */

// Named Set2 to not overwrite ES6 Set class
function Set2() {
  this.items = {};
}

/**
 * add - adds a new value to a set
 *
 * @param  {any} value the value to add
 * @return {boolean}
 */
Set2.prototype.add = function (value) {
  if (!this.has(value)) {
    this.items[value] = value;
    return true;
  }
  return false;
};


/**
 * delete - removes a value from a set
 *
 * @param  {any} value the value to delete
 * @return {boolean}
 */
Set2.prototype.delete = function (value) {
  if (this.has(value)) {
    delete this.items[value];
    return true;
  }
  return false;
};


/**
 * has - checks if set contains a value
 * *
 * @param  {any} value the value to check
 * @return {boolean}
 */
Set2.prototype.has = function (value) {
  return {}.hasOwnProperty.call(this.items, value);
};

Set2.prototype.clear = function () {
  this.items = {};
};


/**
 * size - return a number of the size of the Set
 *
 * @return {Number}  size of the set
 */
Set2.prototype.size = function () {
  return Object.keys(this.items).length;
};


/**
 * sizeLegacy - same as size but works in legacy browsers
 *
 * @return {Number}  size of the set
 */
Set2.prototype.sizeLegacy = function () {
  let count = 0;
  for (const key in this.items) {
    if (this.items.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
};


/**
 * values - returns an array of all the values contained in a set
 *
 * @return {Array}  an array of all values in the set
 */
Set2.prototype.values = function () {
  const values = [];

  for (let i = 0, keys = Object.keys(this.items); i < keys.length; i++) {
    values.push(this.items[keys[i]]);
  }
  return values;
};


/**
 *** SET OPERATIONS ***
 *
 * Union: Given two sets this returns a new set wtih elements from both the
 * given sets
 * Intersection: Given two sets, this returns a new set with the elements that
 * exist in both sets
 * Difference: Given two sets, this returns a new set with all the elements that
 * exist in the first set and do not exist in the second set.
 * Subset: This confirms whether a given set is a subset of another set
 */


/**
 * Union
 *
 * @param  {Set} otherSet the other set to be joined
 * @return {Set} unionSet a new set with values from this set and otherSet
 */
Set2.prototype.union = function (otherSet) {
  const unionSet = new Set();

  let values = this.values();

  for (let i = 0; i < values.length; i++) {
    unionSet.add(values[i]);
  }

  values = otherSet.values();

  for (let i = 0; i < values.length; i++) {
    unionSet.add(values[i]);
  }
  return unionSet;
};


/**
 * Intersection
 *
 * @param  {Set} otherSet other set to compare
 * @return {Set} intersectionSet new set with elements that are in both sets
 */
Set2.prototype.intersection = function (otherSet) {
  const intersectionSet = new Set();

  const values = this.values();

  for (let i = 0; i < values.length; i++) {
    if (otherSet.has(values[i])) {
      intersectionSet.add(values[i]);
    }
  }
  return intersectionSet;
};


/**
 * differenceSet
 *
 * @param  {Set} otherSet the other set to compare
 * @return {Set} differenceSet items that exist in main set but not other set
 */
Set2.prototype.difference = function (otherSet) {
  const differenceSet = new Set();

  const values = this.values();

  for (let i = 0; i < values.length; i++) {
    if (!otherSet.has(values[i])) {
      differenceSet.add(values[i]);
    }
  }
};


/**
 * subset - checks if current set is a subset of another set
 *
 * @param  {Set} otherSet the other set to be compared
 * @return {boolean}
 */
Set2.prototype.subset = function (otherSet) {
  if (this.size() > otherSet.size()) {
    return false;
  }
  const values = this.values();
  for (let i = 0; i < values.length; i++) {
    if (!otherSet.has(values[i])) {
      return false;
    }
  }
  return true;
};
