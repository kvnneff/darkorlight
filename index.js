'use strict';
/**
 * Convert hex string to rgb array
 * @param  {String} hex
 * @return {Array}
 * @api public
 */
function hexToRGB(hex) {
    hex = hex.replace(/[^0-9A-F]/gi, '');
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return [r, g, b];
};


/**
 * Taken from http://24ways.org/2010/calculating-color-contrast/
 *
 * @param  {String|Array} color
 * @return {String}
 * @api private
 */
function getContrastYIQ(color){
    if (typeof color === 'string' || color instanceof String) color = hexToRGB(color);
    var yiq = ((color[0]*299)+(color[1]*587)+(color[2]*114)) / 1000;
    return (yiq >= 128) ? 'light' : 'dark';
}

/**
 * Return `true` if `color` is dark
 * @param  {String|Array} color
 * @return {Boolean}
 * @api public
 */
function dark(color) {
    return (getContrastYIQ(color) === 'dark') ? true : false;
};

/**
 * Return `true if `color` is light
 * @param  {String|Array} color
 * @return {Boolean}
 * @api public
 */
function light(color) {
    return !this.dark(color);
};

module.exports = {
    dark: dark,
    light: light,
    hexToRGB: hexToRGB
};