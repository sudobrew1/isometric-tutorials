---
layout: base.njk
title: "Part 4 - Terrain Sets & Auto-Tiling"
---

Terrain Sets are Godot's auto-tiling system. It picks the correct transition sprite when two terrains meet. You can paint continous edges, walls and corners. Instead of clicking on one tile and tediously painting them one by one, you can make levels much faster this way.

### 1. Using the Atlas Merging Tool

Atlas Merging merges all of your sprites into a single image.

From the last tutorial <strong>Importing Tiles</strong>, we created a TileSet on our TileMapLayer called "Ground". Click on the TileSet tab on the bottom, then from your assets folder, drag and drop your tiles into <strong>Tile Sources</strong>. Click <strong>Yes</strong> on the "Auto Create Tiles" prompt.

Under the <strong>Tile Sources</strong> panel, click on the button with three vertical dots, then click "Open Atlas Merging Tool". Select all of your tiles to merge them into one image. You can adjust the "Next Line After Column" number to make the image more compact or wide.

<figure>
  <video src="/videos/atlas-merging-tool.webm" width="3840" height="2076"
         controls muted loop playsinline preload="metadata"></video>
</figure>

Now we are ready to make our Terrain Set!

### 2. Creating the Terrain Set

In the <strong>Inspector</strong>, `Tile Set > Terrain Sets`, click on <strong>+ Add Element</strong>. Keep the <strong>Mode</strong> on `Match Corners and Sides`. Under <strong>Terrains</strong>, click on <strong>+ Add Element</strong>. Name it "Ground". <strong>Color</strong> doesn't change the sprite at all, it's just an in-engine color that represents what sides will match where. You can change it to whatever you want.

Next, on the <strong>TileSet</strong> tab, select the <strong>Paint</strong> button at the top and under `Paint Properties > Select a property editor`, go to `Rendering > Terrains`. Set the <strong>Terrain Set</strong> to `Terrain Set 0` and under <strong>Terrain</strong>, set it to `Ground`.

<figure>
  <video src="/videos/setting-up-terrain-set.webm" width="3840" height="2076"
         controls muted loop playsinline preload="metadata"></video>
</figure>

### 3. Auto-Tiling

Now that we have our Terrain Set ready, we can set the rules for auto-tiling. On your <strong>Base Tiles</strong>, select where you want the tiles to match up. Right-click to remove the selection. In this example, I want the grass texture neighboring with the other grass textures. You can change the <strong>Mode</strong> under <strong>Terrain Sets</strong> in the Inspector to Match Corners, Match Sides or Match Corners and Sides. Change these settings to see what fits best for your scene.

<figure>
  <video src="/videos/selecting-auto-tiling-rules.webm" width="3840" height="2076"
         controls muted loop playsinline preload="metadata"></video>
</figure>

Once finished, click on the <strong>TileMap</strong> tab, click the <strong>Terrains</strong> button and under <strong>Terrain Set 0</strong>, click on <strong>Ground</strong>. Then use the painting tools to click and drag your tiles on the Scene. The tiles should apply the auto-tiling rules.

<figure>
  <video src="/videos/painting-auto-tiles.webm" width="3840" height="2076"
         controls muted loop playsinline preload="metadata"></video>
</figure>

Known Bug: Sometimes the Terrain Set doesn't show up at all in the <strong>Terrains</strong> box. To fix, create a new Scene (the empty tab at the top of the Scene view) then switch back to your main (node_2d) scene.

### 4. Random Tile Probabilities

In this scene, there are too many patchy grass areas and I want to decrease the probability it showing up. Go back to the <strong>TileSet</strong> tab, then go to `Paint Properties > Rendering > Probability`. All of our tiles are currently set to `1.0` meaning they'll all have an equal chance of randomly showing up when painting the tiles. Set the <strong>Probability</strong> to something like `0.20` press Enter and click on tiles of your choice to set the value.

Go to <strong>TileMap</strong>, select <strong>Terrains</strong> then <strong>Ground</strong> and paint again.

<figure>
  <video src="/videos/random-tile-probability.webm" width="3840" height="2076"
         controls muted loop playsinline preload="metadata"></video>
</figure>

### Video References

<div class="video">
  <iframe src="https://www.youtube-nocookie.com/embed/B3bS9AGTSAw"
          title="Godot Isometric Tilemap Tutorial | Master Tilesets, Terrain & Auto-Tiling"
          loading="lazy"
          allowfullscreen></iframe>
</div>