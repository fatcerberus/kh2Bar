kh2Bar
======

**kh2Bar** is a Kingdom Hearts-style segmented HP gauge for
[miniSphere](https://github.com/fatcerberus/minisphere).

Introduction
------------

Any time an enemy's health is displayed on-screen, it inevitably becomes a
distraction for the player.  As the enemy's remaining HP dwindles, the player
will begin to concentrate on the health gauge to plan the best way to finish it
off quickly.  Ironically, that often costs them the fight.  I call this the
*In Time effect*, after a line in the 2011 film *In Time*:

> **Will Salas:** What he'd do, is let them have the upper hand, and then he'd
> let his time go all the way down.  Because he knew that when you were down to
> your last seconds, and they think it's over, they start watching your
> clock--and forget to watch their own.

As a game designer, you want to strive to minimize that potential for
distraction.  That's where kh2Bar comes in.

Advantages
----------

*Kingdom Hearts*, being a series of fast-paced, realtime action RPGs, has some
unique requirements compared to a typical action game.  In such games, a single
"progress bar"-style health gauge is usually sufficient.  When the bar is
depleted, the enemy dies.  This works because the player's damage output is a
known quantity.  After dealing damage once, you already have a good idea how
long it will take to defeat.

In a role playing game, however, damage is rarely a known quantity, even
against the same enemy.  Many factors influence it, from the player's STR to
the enemy's DEF, to everything from status effects to elemental affinities.  It
is therefore vitally important that the player has an accurate picture of the
enemy's remaining health.


Examples
========

*Work in progress.*

kh2Bar is easy to use.  Simply add `kh2Bar.mjs` to your project, ensure it gets
transpiled using Cell's `transpile` module and import it using either an
`import` statement (ES6 modules only) or a `require()` call:

```js
import { HPGauge } from './kh2Bar'
```


License
=======

kh2Bar is MIT-licensed.  Feel free to do whatever you want with it, as long as
you remember to credit the original author(s).
