**tl;dr** a spotify-ish app where you and your friends listen to the same song, at the same second, in the same "room", and talk about it.

## why

spotify's group session is cute, but it disappears when you leave, there's no chat, and you can't find anyone else's session. we wanted a listening party that doesn't have to end.

## what it does

- rooms that keep playing even after the creator leaves
- real-time chat while the music plays
- public rooms you can just drop into
- playlists you build together

## the hard part

keeping everyone on the exact same second of the song. plus spotify's API rate limits. plus chat lag. turns out "real-time" is a lot harder than it sounds.

## built with

react native + typescript, the spotify API, and firebase for all the live stuff. we designed it in figma first.

## someday

voice chat, recommendations based on everyone in the room, and DJ controls for the host.
