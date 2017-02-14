/**
 *  kh2Bar demonstration for Sphere v2
 *  a Kingdom Hearts-style HP gauge with multiple lifebars
 *  (c) 2013-2017 Bruce Pascoe
**/

import transpile from 'transpile';

describe("kh2Bar Demo", {
	author:     "Fat Cerberus",
	resolution: '320x240',
	main:       'modules/main.js',
});

transpile('@/modules', files('modules/*.js', true));
