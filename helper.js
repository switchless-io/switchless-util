/**
 * @module helper
 * @typicalname switchlessUtil.helper
 */

var winston = require('winston');

module.exports = {
	/**
	 * number - the number to be formatted
	 * number_format - what format do you want the number to be formatted in. 
	 * precision - if the number has decimals, then what precision do you want to show
	 * 
	 * egs of number format 
	 * - indian_thousand
	 * - indian_lakh
	 * - indian_crore
	 * - us_thousand
	 * - us_million
	 * - us_billion
	 * 
	 * precision - takes in any integer. Most commonly used - 1 or 2
	 * 
	 * @returns {string}
	 * @param {*} number 
	 * @param {*} number_format 
	 * @param {*} precision 
	 */
	formatNumber: function (number, number_format, precision) {
		if (!number) return '';
		precision = precision ? precision : 'decimal1';
		number_format = number_format ? number_format : 'indian';
		var p = parseInt(precision.substring(7, 8)) ? parseInt(precision.substring(7, 8)) : 2;
		var locale;
		var format_symbol;
		if (number_format.startsWith('indian')) {
			var format = number_format.substring(7)
			locale = 'en-IN';
			switch (format) {
				case 'thousand':
					number = number / 1000;
					format_symbol = 'k';
					break;
				case 'lakh':
					number = number / 100000;
					format_symbol = 'l';
					break;
				case 'crore':
					number = number / 10000000;
					format_symbol = 'cr';
					break;
				default:
					format_symbol = ''
					break;
			};
		}
		else if (number_format.startsWith('us')) {
			var format = number_format.substring(3);
			locale = 'en-US';
			switch (format) {
				case 'thousand':
					number = number / 1000;
					format_symbol = 'k';
					break;
				case 'million':
					number = number / 1000000;
					format_symbol = 'm';
					break;
				case 'billion':
					number = number / 1000000000;
					format_symbol = 'b';
					break;
				default:
					format_symbol = ''
					break;
			};
		}
		else {
			locale = 'en-IN';
		}
		return number.toLocaleString(locale, { maximumFractionDigits: p }) + format_symbol
	},
	/**
	 * @returns {object}
	 * @param {string} level 
	 */
	logger: function (level) {

		var sentLogLevel = level ? level : 'info';

		var logger = new winston.Logger({
			//sails log levels
			levels: {
				silent: 0,
				error: 1,
				warn: 2,
				info: 3,
				verbose: 4,
				debug: 5,
				silly: 6
			},
			exitOnError: false,
			transports: [
				new (winston.transports.Console)({
					name: sentLogLevel,
					level: sentLogLevel,
					colorize: false,
					handleExceptions: true,
					humanReadableUnhandledException: true,
					timestamp: true
				}),
				new (logstashErrorTransporter)({
					level: 'error',
					handleExceptions: true,
					humanReadableUnhandledException: false,
					timestamp: true
				})
			]
		});
		return logger;
	}
}