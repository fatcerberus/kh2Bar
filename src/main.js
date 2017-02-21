/**
 *  kh2Bar showcase demo for Sphere v2
 *  Kingdom Hearts-style HP gauge with multiple lifebars
 *  (c) 2013-2017 Bruce Pascoe
**/

import { HPGauge } from './kh2Bar';

import term        from 'term';
import * as prim   from 'prim';
import * as random from 'random';

// let me just say how awesome it is that KH uses chartreuse to
// color HP gauges rather than pure green.  very classy.
const GaugeColors =
[
	Color.Chartreuse,
	Color.Turquoise,
	Color.Yellow,
	Color.Salmon,
	Color.HotPink,
];

const Background = new Texture('images/justSaiyan.png');

var colorID = 0;
var font = Font.Default;
var hp = 812;
var isHidden = false;
var comboTimer = 0;
var lifeBar = new HPGauge(160, 10, 150, 12, {
	capacity:   hp,
	sectorSize: 100,
	maxSectors: 'auto',
	color:      GaugeColors[colorID],
	priority:   1,
});

Dispatch.onUpdate(handleUpdate);
Dispatch.onRender(handleRender);

// the HP gauge is hidden by default.  this is the only thing
// we have to do manually--Sphere's Dispatch system keeps the gauge
// animated and rendered for us.
lifeBar.show();

function drawShadowText(surface, x, y, text, color = Color.White)
{
	font.drawText(surface, x + 1, y + 1, text, Color.Black.fade(color.a));
	font.drawText(surface, x, y, text, color);
}

function handleUpdate()
{
	if (lifeBar.inCombo && screen.now() >= comboTimer + 30)
		lifeBar.endCombo();
	let key = Keyboard.Default.getKey();
	let damage;
	switch (key) {
		case Key.Z:
			damage = Math.round(random.discrete(1, 3));
			hp = Math.max(hp - damage, 0);
			comboTimer = screen.now();
			if (!lifeBar.inCombo)
				lifeBar.startCombo();
			lifeBar.set(hp);
			break;
		case Key.X:
			damage = Math.round(random.discrete(20, 30));
			hp = Math.max(hp - damage, 0);
			lifeBar.set(hp);
			if (lifeBar.inCombo)
				lifeBar.endCombo();
			break;
		case Key.C:
			colorID = (colorID + 1) % GaugeColors.length;
			lifeBar.changeColor(GaugeColors[colorID], 15);
			break;
		case Key.V:
			isHidden = !isHidden;
			if (!isHidden)
				lifeBar.show(0.25);
			else
				lifeBar.hide(0.25);
			break;
	}
}

function handleRender()
{
	prim.blit(screen, 0, 0, Background);
	prim.rect(screen, 5, 95, 148, 58, Color.Black.fade(0.5));
	drawShadowText(screen, 10, 100, "press Z to attack");
	drawShadowText(screen, 10, 112, "press X to crit");
	drawShadowText(screen, 10, 124, "press V to show/hide");
	drawShadowText(screen, 10, 136, "press C to recolor");
}
