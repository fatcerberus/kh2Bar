import * as prim   from 'prim';
import * as random from 'random';

import { HPGauge } from './kh2Bar';

var colors = [
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
var lifeBar = new HPGauge(hp, 100, colors[colorID]);

lifeBar.show();
while (true) {
	prim.fill(screen, new Color(0.25, 0.25, 0.25));
	font.drawText(screen, 10, 45, "HP: " + hp);
	font.drawText(screen, 100, 40, "press SPACE to deal damage");
	font.drawText(screen, 100, 52, "ESC to show or hide the gauge");
	font.drawText(screen, 100, 64, "TAB to change color of gauge");
	if (damage > 0)
		font.drawText(screen, 100, 88, `${damage} damage!`);
	lifeBar.draw(160, 10, 150, 12);
	screen.flip();
	lifeBar.update();
	var key = Keyboard.Default.getKey();
	switch (key) {
		case Key.Space:
			var damage = random.discrete(1, 25);
			hp = Math.max(hp - damage, 0);
			lifeBar.set(hp);
			break;
		case Key.Escape:
			isHidden = !isHidden;
			if (!isHidden) {
				lifeBar.show(0.25);
			} else {
				lifeBar.hide(0.25);
			}
			break;
		case Key.Tab:
			colorID = (colorID + 1) % colors.length;
			lifeBar.changeColor(colors[colorID], 15);
			break;
	}
}
