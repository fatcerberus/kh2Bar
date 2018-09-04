/**
 *  kh2Bar showcase demo for Sphere v2
 *  Kingdom Hearts-style HP gauge with multiple lifebars
 *  (c) 2013-2018 Bruce Pascoe
**/

Object.assign(Sphere.Game, {
	version: 2, apiLevel: 1,

	name: "kh2Bar Showcase",
	author: "Fat Cerberus",
	resolution: '320x240',
	main: '@/bin/main.mjs',
});

install('@/bin',    files('src/*.mjs', true));
install('@/images', files('images/*.png', true));
