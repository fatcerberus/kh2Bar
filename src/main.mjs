/**
 *  kh2Bar showcase demo for Sphere v2
 *  Kingdom Hearts-style HP gauge with multiple lifebars
 *  (c) 2013-2017 Bruce Pascoe
**/

import { Prim, Random, Thread } from 'sphere-runtime';
import { HPGauge } from './kh2Bar';

// let me just say how awesome it is that KH uses chartreuse to
// color HP gauges rather than pure green.  very classy.
const GaugeColors =
[
	Color.Chartreuse,
	Color.PurwaBlue,
	Color.Yellow,
	Color.Salmon,
	Color.HotPink,
];

export default
class Showcase extends Thread
{
	static Wallpaper = new Texture('images/saiyan.png');

	constructor()
	{
		super({ priority: 0 });

		this.colorID = 0;
		this.comboTimer = 0;
		this.hp = 812;
		this.isHidden = false;

		// construct a new HP gauge and make it visible
		this.lifeBar = new HPGauge(160, 10, 150, 12, {
			capacity:   this.hp,
			sectorSize: 100,
			maxSectors: 'auto',
			color:      GaugeColors[this.colorID],
			priority:   1,
		});
		this.lifeBar.show();
	}

	on_update()
	{
		if (this.lifeBar.inCombo && screen.now() >= this.comboTimer + 30)
			this.lifeBar.endCombo();
		let key = Keyboard.Default.getKey();
		let damage;
		switch (key) {
			case Key.Z:
				damage = Math.round(Random.discrete(1, 3));
				this.hp = Math.max(this.hp - damage, 0);
				this.comboTimer = screen.now();
				if (!this.lifeBar.inCombo)
					this.lifeBar.startCombo();
				this.lifeBar.set(this.hp);
				break;
			case Key.X:
				damage = Math.round(Random.discrete(20, 30));
				this.hp = Math.max(this.hp - damage, 0);
				this.lifeBar.set(this.hp);
				if (this.lifeBar.inCombo)
					this.lifeBar.endCombo();
				break;
			case Key.C:
				this.colorID = (this.colorID + 1) % GaugeColors.length;
				this.lifeBar.changeColor(GaugeColors[this.colorID], 15);
				break;
			case Key.V:
				this.isHidden = !this.isHidden;
				if (!this.isHidden)
					this.lifeBar.show(0.25);
				else
					this.lifeBar.hide(0.25);
				break;
		}
	}

	on_render()
	{
		Prim.blit(screen, 0, 0, Showcase.Wallpaper);
		Prim.drawSolidRectangle(screen, 5, 95, 148, 58, Color.Black.fade(0.5));
		drawShadowText(screen, 10, 100, "press Z to attack");
		drawShadowText(screen, 10, 112, "press X to crit");
		drawShadowText(screen, 10, 124, "press V to show/hide");
		drawShadowText(screen, 10, 136, "press C to recolor");
	}
}

function drawShadowText(surface, x, y, text, color = Color.White)
{
	Font.Default.drawText(surface, x + 1, y + 1, text, Color.Black.fade(color.a));
	Font.Default.drawText(surface, x, y, text, color);
}
