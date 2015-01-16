#darkorlight

A tiny utility that checks whether a color is dark or light, for node.js or the browser.  Useful for determining what text color to use over differently colored backgrounds.

##API

###darkorlight.dark(color)

Accepts either a hex string or an array of rgb values.  Returns `true` if the color is dark, or `false` if considered light.

**Example:**

	var color1 = '#e4e4e4';
	var color2 = '000';
	var color3 = [200, 200, 200];

	darkorlight.dark(color1); // returns `false`
	darkorlight.dark(color2); // returns `true`
	darkorlight.dark(color3); // returns `false`
	
###darkorlight.light(color)

Accepts either a hex string or an array of rgb values.  Returns `true` if the color is light, or `false` if considered dark.

**Example:**

	var color1 = '#e4e4e4';
	var color2 = '000';
	var color3 = [200, 200, 200];

	darkorlight.light(color1); // returns `true`
	darkorlight.light(color2); // returns `false`
	darkorlight.light(color3); // returns `true`

##TEST

	make test

##LICENSE
The MIT License (MIT)

Copyright (c) 2015 River Grimm river.grimm@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.