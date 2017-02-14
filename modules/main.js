/**
 *  kh2Bar showcase demo for Sphere v2
 *  Kingdom Hearts-style HP gauge with multiple lifebars
 *  (c) 2013-2017 Bruce Pascoe
**/

import { HPGauge } from './kh2Bar';

import * as prim   from 'prim';
import * as random from 'random';

// colors used to showcase the "color change" feature.
// press Tab to cycle colors.
const GaugeColors =
[
	Color.Chartreuse,
	Color.Red,
	Color.Yellow,
	Color.Cyan,
	Color.DodgerBlue,
	Color.Magenta,
	Color.White,
];

var colorID = 0;
var font = Font.Default;
var hp = 3600, damage = 0;
var isHidden = false;
var lastDamage = 0;
var comboTimer = 0;
var lifeBar = new HPGauge(160, 10, 150, 12, {
	capacity:   hp,
	sectorSize: 500,
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

function handleUpdate()
{
	if (lifeBar.inCombo && screen.now() >= comboTimer + 30) {
		lifeBar.endCombo();
		lastDamage = 0;
	}
	let key = Keyboard.Default.getKey();
	let damage;
	switch (key) {
		case Key.A:
			damage = Math.round(random.normal(10, 2));
			lastDamage += damage;
			hp = Math.max(hp - damage, 0);
			comboTimer = screen.now();
			if (!lifeBar.inCombo)
				lifeBar.startCombo();
			lifeBar.set(hp);
			break;
		case Key.S:
			damage = Math.round(random.normal(50, 10));
			lastDamage += damage;
			hp = Math.max(hp - damage, 0);
			comboTimer = screen.now();
			if (!lifeBar.inCombo)
				lifeBar.startCombo();
			lifeBar.set(hp);
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
	font.drawText(screen, 10, 45, `HP: ${hp}`);
	font.drawText(screen, 100, 40, "press A to attack");
	font.drawText(screen, 100, 52, "press S for critical hit");
	font.drawText(screen, 100, 64, "press V to show or hide");
	font.drawText(screen, 100, 76, "press C to change color");
	if (lastDamage > 0)
		font.drawText(screen, 100, 100, `${lastDamage} damage!`);
}
