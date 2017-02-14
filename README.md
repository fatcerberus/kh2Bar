kh2Bar
======

**kh2Bar** is an implementation of the Kingdom Hearts segmented HP gauge for
[miniSphere](https://github.com/fatcerberus/minisphere).

Introduction
------------

*Work in progress.*

The Kingdom Hearts series of games, being fast-paced realtime action RPGs, have
some unique instrumentation requirements, particularly with regard to enemy HP.
The enemy's remaining health needs to be easy to see at a glance without
distracting the player, as even a split-second distraction can be enough to get
you killed (especially true on high difficulty settings).  Raw HP won't work:
while numbers are easy enough to read, rapidly changing numbers quickly become
a distraction.

Most action games solve the problem by representing the enemy's health with a
fixed-size "progress bar" style gauge.  The gauge depletes as the enemy takes
damage; when it empties completely, the enemy is defeated.  In most cases this
works well because the player's damage output is a known quantity.  The player
only has to damage the enemy once to get an idea of how quickly they can defeat
it.
