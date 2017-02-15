kh2Bar
======

**kh2Bar** is a Kingdom Hearts-style segmented HP gauge for
[miniSphere](https://github.com/fatcerberus/minisphere).

Introduction
------------

*Kingdom Hearts*, being a series of fast-paced, realtime action RPGs, has a few
unique requirements for on-screen instrumentation, particularly with regard to
enemies' HP.  A boss's remaining health needs to be easy to determine at a
glance without getting in the way, as even a moment's distraction can cost you
the fight.

Displaying a raw hit point count, as is done in turn-based games, doesn't
translate well to a fast-paced game like *Kingdom Hearts*.  Numbers are easy to
interpret but, due to the *In Time* effect, quickly become a distraction,
especially as the amount dwindles.  I named the effect for a line in the 2011
film *In Time*:

> **Will Salas:** What he'd do, is let them have the upper hand, and then he'd
> let his time go all the way down.  Because he knew that when you were down to
> your last seconds, and they think it's over, they start watching your
> clock--and forget to watch their own.

Most action games solve this problem by representing the boss's health with a
fixed-size "progress bar" style gauge.  The gauge depletes as the boss takes
damage; when it empties completely, the boss is defeated.  This works well for
pure action games because the game is primarily a test of skill; the player's
damage potential is a known quantity.  A boss, therefore, only needs to be
damaged once to get an idea of how much health it has.

In an RPG, damage is rarely a known quantity, even against the same enemy.  It
can be influenced by any number of factors: the player's STR; the boss's DEF;
any number of elemental affinities; status effects... the list goes on.  Under
these circumstances, it is vitally important that the player get an accurate
picture of a boss's remaining health.  A "progress bar"-style gauge isn't
adequate for this.

So if we can't use a progress bar and the *In Time* effect prevents us from
displaying HP numbers, what else can we do?  Kingdom Hearts offers a novel
solution: multiple progress bars.  The gauge consists of any number of stacked
progress bars, each of which represents the same amount of HP.  The player
knows immediately, upon seeing the HP gauge, exactly how much effort will be
required to take it out.  All without ever displaying an HP count!


Advantages
==========

*Work in progress.*


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
