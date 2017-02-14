/**
 *  kh2Bar showcase demo for Sphere v2
 *  Kingdom Hearts-style HP gauge with multiple lifebars
 *  (c) 2013-2017 Bruce Pascoe
**/

import { HPGauge } from './kh2Bar';

import * as prim   from 'prim';
import * as random from 'random';

const GaugeColors =
[
	Color.Lime,
	Color.Red,
	Color.Yellow,
	Color.Cyan,
	Color.DodgerBlue,
	Color.Magenta,
	Color.White,
];

var colorID = 0;
var font = Font.Default;
var hp = 812, damage = 0;
var isHidden = false;
var lastDamage = 0;
var lifeBar = new HPGauge(160, 10, 150, 12, {
	capacity:   hp,
	sectorSize: 100,
	maxSectors: 'auto',
	color:      GaugeColors[colorID],
	priority:   1,
});

Dispatch.onUpdate(handleUpdate);
Dispatch.onRender(handleRender);

lifeBar.show();

function handleUpdate()
{
	let key = Keyboard.Default.getKey();
	switch (key) {
		case Key.Space:
			lastDamage = random.discrete(1, 25);
			hp = Math.max(hp - lastDamage, 0);
			lifeBar.set(hp);
			break;
		case Key.Escape:
			isHidden = !isHidden;
			if (!isHidden)
				lifeBar.show(0.25);
			else
				lifeBar.hide(0.25);
			break;
		case Key.Tab:
			colorID = (colorID + 1) % GaugeColors.length;
			lifeBar.changeColor(GaugeColors[colorID], 15);
			break;
	}
}

function handleRender()
{
	font.drawText(screen, 10, 45, "HP: " + hp);
	font.drawText(screen, 100, 40, "press SPACE to deal damage");
	font.drawText(screen, 100, 52, "ESC to show or hide the gauge");
	font.drawText(screen, 100, 64, "TAB to change color of gauge");
	if (lastDamage > 0)
		font.drawText(screen, 100, 88, `${lastDamage} damage!`);
}
