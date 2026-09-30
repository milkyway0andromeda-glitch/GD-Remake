# GD Remake

A browser Geometry Dash remake based on Web Dashers. The current build keeps the classic main levels through Electroman Adventures.

Original project: https://github.com/web-dashers/web-dashers.github.io

Site: https://milkyway0andromeda-glitch.github.io/GD-Remake/

## Editing the in-game update log

Open `assets/scripts/core/game-scene.js`, search for `const updateEntries = [`, and edit the entries in that array. Each entry has `text` (use `\n` for a new line), optional `color` as a hex number such as `0xaaddff`, and optional `scale` such as `0.7`. Keep the commas between entries.
