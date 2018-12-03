# Aphelion
This file contains documentation of Aphelion and an explanation of everything as it stands.
This game was created by my friends and I as a browser-based clone to Endless-Online.

## Overview of Game Engine Technology ##

# Client #

The guts of the engine can be found in client/media/js/

For drawing the game the engine utilizes HTML5 canvas technology.
The game UI is HTML and we utilize the bootstrap and jQuery JS libraries.
For networking we use node.js with socket.io

# Server #

The server runs on Node.js using primiarily WebSockets as the transport type but other fallback methods are supported.
The server (gameServer.js) and all node_modules required to run the server are required.


## Breakdown of In-Game Features ##

# Account System #

The account system includes a registration and login system uses a MySQL database.
createtable.sql includes the SQL code required to create the necessary MySQL table for accounts.

# Map Drawing Engine #

Complete: 
* Multi-layered map drawing
* Support for different types of objects (e.g. NPC, player, static, etc..)
* Efficient as-needed map redrawing*
* Viewport support so only things within a player's view are drawn

Incomplete:
* Complete viewport support. The whole map object (the actual canvas for the map) stays there the whole time
regardless of the size of the map. Objects outside of your view aren't updated however so the effect on 
performance is minimal. The engine has been tested with large maps and works fine but for especially large maps
it's recommended that better view support be added.

Known issues:
* The the redrawing code has a few minor bugs that will sometimes result in graphical glitches. This might manifest itself
as a small portion of a character that wasn't erased or something similar.

# Battle System #

Complete:
* Basic battle system with support for different mosnter stats (hp, attack range, attack speed, exp given etc..)
* Healthbars that change color based on hp remaining
* "Anti-kill steal". Experience from a killed monster is distributed to all players who helped kill it proportional
to how much damage they did. 50% of damage = 50% of experience.

Incomplete:
* Support for aggressive monsters
* Support for displaying the numbers indicating the damage delt

# Chat System #

Complete:

* UI chat support
* Chat bubble support with auto-adjusting size
* Support for multiple channels (e.g. prefix chat with ~ for global chat)
* Support for system messages (e.g. "You gained X experience!")

Missing:
* Anything not mentioned above. This includes support for PMs, etc..

# Arena System #

Complete:
* Basic arena functionality
* No waiting time for spawns, go in whenever you want
* Stat recording system. All kills and deaths are recorded
* Viewing of stats. Type #stats to view your kills deaths and KDR (e.g. "X kills, Y deaths. Z KDR")

Missing:
* Dynamic support for arenas. Currently arena locations must be specificed in the server
* Any type of arena timing system


# Experience and Leveling #

Complete:
* Support for gaining experience and leveling up

Incomplete:
* Support for any kind of level-based stat system. Currently your attack increases based on your level and that's it.

# Settings #

Complete:
* Support for adjusting the background and SFX audio levels

Missing:
* Anything else

# Various Other Things #

Complete:
* Functioning online list
* Different skin support for players
* Support for 3 levels of users (player, mod, admin)
* Support for commands with authorization levels (player, mod, admin)
* Support for various commands:
	$toall [message] - sends a global admin message to everyone
	#stats - view your arena stats
	#nowall - allows an admin to walk through walls
	$skin [playername] [skinid] - Allows an admin to change the skin of a player. Valid skinids: 0-6
	$spawn [monstername] - spawn a monster
	$massspawn [monstername] [howmany] - spawn many monsters at once
	$kick [playername] - boot a player from the server
	$shutdown - kick everyone off the server to save their stats before you reboot
	$warp [playername] [mapID] [x] [y] - warp a player somewhere
	$warptome [playername] - warp a player to yourself
* Support for disconnecting messages and things like that

Incomplete:
* Perfect client-server syncronization which can sometimes result in a player seeing
themselves somewhere where they're not. Happens infrequently but requires a player to relog.
This can be fixed easily but the fix hasn't been fully implemented.

Missing:
* Any real inventory support
* Any type of equipment support

## Configuration ##

Configuration.php

In this file you can find the following configuration variables:

SITE_TITLE, SITE_URL, PATH_BASE, PATH_AVATARS, URL_MEDIA, URL_MINIFY

# Server #

* mysql_client.host/user/password/database must be updated.

## Map Editor ##

Location: mapeditor.php

The current map editor offers the ability to create variable sized maps with object support.
You can specify the size of the map in the url e.g. mapeditor.php?x=15&y=15. This defaults to a 10x10 map.

Known issues: 

When the object images are extracted from the EO files some of the images aren't aligned completely right.
This isn't a problem with the map editor itself and if you intend to use other graphics then this isn't an issue.

Extracting map data from the editor:

In order to get the map data for the created map you must goto the browser console (F12 in chrome) and type
map.export() which will then return you the text data for the map.

Map data for the game is currently stored in the Client.mapData array in client/media/js/client.js
