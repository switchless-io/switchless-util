/**
 * Helper and middleware function for node and express based apps.
 * @module @switchless/util
 * @typicalname switchless-util
 * 
 * @example
 * ```js
 * const switchlessUtil = require('@switchless/util')
 * ```
 */


var middleware = require('./middleware');
var helper = require('./helper');

module.exports = {
	middleware: middleware,
	helper: helper
}