var color = require('../');
var assert = require('component/assert');

describe('color.dark()', function () {
    it ('returns true if the color is dark', function () {
        var hex = '#000000';
        assert(color.dark(hex));
    });
    it('returns false if the color is light', function () {
        var hex = '#FFFFFF';
        assert(!color.dark(hex));
    });
    it('accepts an array of rgb values ', function () {
        var light = [200, 200, 200];
        var dark = [10, 10, 10];
        assert(!color.dark(light));
        assert(color.dark(dark));
    });
});

describe('color.light()', function () {
    it ('returns true if the color is light', function () {
        var hex = '#FFFFFF';
        assert(color.light(hex));
    });
    it('returns false if the color is dark', function () {
        var hex = '#000000';
        assert(!color.light(hex));
    });
    it('accepts an array of rgb values ', function () {
        var light = [200, 200, 200];
        var dark = [10, 10, 10];
        assert(!color.light(dark));
        assert(color.light(light));
    });
});
