kh2Bar
======

**kh2Bar** is a Kingdom Hearts-style segmented HP gauge for
[miniSphere](https://github.com/fatcerberus/minisphere).

Introduction
------------

Any time an enemy's health is displayed on-screen, it inevitably becomes a
distraction for the player.  As the enemy's remaining HP dwindles, the player
will begin to concentrate on the health gauge to plan the best way to finish it
off quickly.  Ironically, that often costs a player the fight.  This is what I
call the *In Time effect*, named after a line from the 2011 film *In Time*:

> **Will Salas:** What he'd do, is let them have the upper hand, and then he'd
> let his time go all the way down.  Because he knew that when you were down to
> your last seconds, and they think it's over, they start watching your
> clock--and forget to watch their own.

Advantages
----------

As a game designer, you want to strive to minimize the potential for
distraction.  Turn-based games often do this by simply hiding the enemy's HP
entirely, leaving the player to guess at their remaining vitality based on
their attack patterns.  Sometimes, however, that's not an option, even in a
role-playing game.  That's where kh2Bar comes in.


Examples
========

*Work in progress.*

kh2Bar is easy to use.  Simply add `kh2Bar.js` to your project, ensure it gets
transpiled using Cell's `transpile` module and import it using either an
`import` statement or a `require()` call:

```js
import { HPGauge } from './kh2Bar'
```


License
=======

kh2Bar is MIT-licensed.  Feel free to do whatever you want with it, as long as
you remember to credit the original author(s).
