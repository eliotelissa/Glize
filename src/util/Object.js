
/**
 * @fileoverview Miscellaneous Object utility methods.
 *
 * @see {@link http://google.github.io/styleguide/javascriptguide.xml}
 * @see {@link developers.google.com/closure/compiler/docs/js-for-compiler}
 */


/**
 * Miscellaneous Object utility methods.
 * @namespace
 */
util.Object = {
  /**
   * Extends source with target options.
   * @param {!Object} target Options map.
   * @param {!Object} source Options map.
   * @return {!Object} A map of key/value pairs of options.
   */
  extend: function(target, source) {
    for (/** @type {string} */ var key in source) {
      if (source[key] instanceof Array) {
        target[key] = [].concat(source[key]);
      } else if ('object' == typeof source[key]) {
        target[key] = util.Object.extend(
            /** @type {!Object} */ (target[key] || {}),
            /** @type {!Object} */ (source[key]));
      } else {
        target[key] = source[key];
      }
    }
    return /** @type {!Object} */ (target);
  },

  /**
   * Returns list of object keys.
   * @param {!Object} obj Target Object.
   * @return {!Array.<string>} List of target object keys.
   */
  keys: function(obj) {
    /** @type {Function} */ var fn = Object.keys;
    /** @type {!Array.<string>} */ var keys = fn ? fn(obj) : [];
    /** @type {string|number} */ var key;

    if (!fn)
      for (key in obj)
        keys.push(key);

      return keys;
  },

  /**
   * Filters object.
   * @param {!Object} obj The target object.
   * @param {!function(*): boolean} func The filter function.
   * @return {!Object} Return filtered object.
   */
  filter: function(obj, func) {
    /** @type {!Object} */ var result = {};
    /** @type {string|number} */ var key;

    for (key in obj) {
      if (func(obj[key])) {
        result[key] = obj[key];
      }
    }
    return result;
  }
};
