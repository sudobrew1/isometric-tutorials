---
layout: base.njk
title: "Part 3 - Importing Tiles"
---

Now we will begin importing and painting our textured tiles into Godot. If you haven't already, please follow the <a href="/_site/blender/modeling-tiles/" target="_blank" rel="noopener noreferrer"><strong>Modeling Tiles</strong></a> and <a href="/_site/blender/uv-mapping-tiles/" target="_blank" rel="noopener noreferrer"><strong>UV Mapping Tile Textures</strong></a> to model and texture your own tilesets.

Optionally, if you would like to skip those steps and go right into importing and painting tiles in your scene, go to <a href="/_site/blender/blender-templates/" target="_blank" rel="noopener noreferrer"><strong>Blender Templates</strong></a> to download pre-made tilesets I've made for this tutorial or go to any video game asset site to download and use free tileset environments like <a href="https://itch.io/game-assets/free/tag-isometric" target="_blank" rel="noopener noreferrer"><strong>itch.io</strong></a>.

This tutorial will show you how to import and paint flat and slab (3D looking) tiles.

### 1. Importing

Importing assets in Godot is very easy. In the <strong>FileSystem</strong> panel to the left, left-click and create a new "assets" folder under `res//:`, then create another folder called "tiles" in your assets folder. Drag and drop your 128x256 (or different resolution) tiles from your into the tiles folder.

<figure>
    <a href="/images/godot-file-system-assets.png" class="lightbox">
        <img src="/images/godot-file-system-assets.png" alt="FileSystem assets in Godot"
            width="407" height="881" loading="lazy">
    </a>
</figure>

### 2. Create a TileMapLayer Node

In the Scene panel, just above the FileSystem panel to the left, right-click <strong>Node2D > + Add Child Node</strong>, then search for <strong>TileMapLayer</strong> (don't select TileMap since it's being deprecated) and click <strong>Create</strong>.

The new TileMapLayer node should appear under <strong>Node2D</strong>. Right-click and rename it to `Ground`. In the <strong>Inspector</strong> panel to the right, go to <strong>Tile Set</strong> click the drop-down and select `New > TileSet`. At the bottom of the screen, a <strong>TileSet</strong> panel will appear. On the Inspector, click on <strong>TileSet</strong> and you will see its current settings.

Right now, the <strong>Tile Shape</strong> is set to `Square` so set it to `Isometric`. Next, set the <strong>Tile Size</strong> to `X=256, Y=128`. Click on <strong>TileMap</strong> at the bottom panel and the Scene should look like this:

<figure>
    <a href="/images/empty-tilemap-scene.png" class="lightbox">
        <img src="/images/empty-tilemap-scene.png" alt="An empty TileMap scene in Godot"
            width="2492" height="1322" loading="lazy">
    </a>
</figure>

### 3. Creating The TileSet

Select the <strong>TileMap</strong> tab at the bottom of the screen. We're going to set our sources on our TileSet.

Drag and drop the tiles from the `asset > tiles` folder into <strong>Tile Sources</strong>. A pop-up window will appear asking:

<figure>
    <a href="/images/auto-create-atlas-tiles-prompt.png" class="lightbox">
        <img src="/images/auto-create-atlas-tiles-prompt.png" alt="A prompt asking a user if they want to create a tile atlas"
            width="715" height="287" loading="lazy">
    </a>
</figure>

Select <strong>Yes</strong> so that Godot automatically scans the texture and creates each tile for every non-transparent pixel it finds that is set in the <strong>Texture Region Size</strong> which is set to 256x128. This is inherited from the Tile Size settings in the Inspector's TileMapLayer.

<figure>
    <a href="/images/texture-region-inherits-from-tile-size.png" class="lightbox">
        <img src="/images/texture-region-inherits-from-tile-size.png" alt="Figure displaying the Texture Region Size inheriting from Tile Size"
            width="2083" height="1317" loading="lazy">
    </a>
</figure>

### 4. Painting Tiles

Now we can individually paint the tiles. Click on the<strong>TileMap</strong> tab at the bottom, select the tile .png and then select the Base Tile in the editor. left-click and drag on the grid in your scene to paint. You can use the Paint (pencil icon), Line, Rect, Bucket and Erase Tool at the top of the TileMap editor to create your level.

<figure>
  <video src="/videos/painting-flat-tiles-godot.webm" width="3840" height="2076"
         controls muted loop playsinline preload="metadata"></video>
</figure>

### 5. Slab Tiles

Slab tiles will have extra height to them and will need to have the proper settings applied before painting.

Import the slab tiles into your `assets > tiles` folder or add another folder in the same project, then create a TileMapLayer.

In the Inspector, change the <strong>Tile Size</strong> to `X=256 Y=256`. The tiles I'm using have a height of 256px, so set your slab tile height to whatever you've made them to be. Select the <strong>TileSet</strong> tab at the bottom and drag and drop the tiles into <strong>Tile Sources</strong>. The "Auto Create Tiles" prompt will appear. Select <strong>No</strong> for now.

<figure>
    <a href="/images/auto-create-atlas-tiles-prompt-select-no.png" class="lightbox">
        <img src="/images/auto-create-atlas-tiles-prompt-select-no.png" alt="A prompt asking a user if they want to create a tile atlas"
            width="715" height="287" lot ading="lazy">
    </a>
</figure>

Next, in the Inspector panel, change the height back to 128px. The reason why we initially set it to 256px is because it automatically set the <strong>Texture Region Size</strong> to the entire image of each sprite, which is what we want. Otherwise, the sprite wouldn't fit and be cropped off at the top corner like this:

<figure>
    <a href="/images/slab-tile-cut-off.png" class="lightbox">
        <img src="/images/slab-tile-cut-off.png" alt="Image of slab tile cropped off at north corner"
            width="715" height="400" loading="lazy">
    </a>
</figure>

In the <strong>TileSet</strong> tab, there's a very faint, orange diamond of where our texture origins are set. Right now, it's not aligned with the top face of the tile like it should be.

<figure>
    <a href="/images/texture-origin-improperly-set.png" class="lightbox">
        <img src="/images/texture-origin-improperly-set.png" alt="Image the texture orgin of slab tile not set correctly"
            width="980" height="608" loading="lazy">
    </a>
</figure>

Change its offset. Click the <strong>Select</strong> tab > Rendering and change the <strong>Texture Origin</strong> Y value to the height where the top face of the tile sits. In this case with a 256x256 image, I divided 128 by 2, `128 / 2 = 64`. 64 for the Y value would only cover the bottom face of the tile, so in order to adjust, I subtracted 8 pixels for the slab's thickness `64 - 8 = 56`. 56px will be the Y offset.

Once the offset is correct, a faint, blue diamond will appear covering the entire top of the tile's face.

<figure>
    <a href="/images/setting-y-offset.png" class="lightbox">
        <img src="/images/setting-y-offset.png" alt="Image of the Rendering Y offset correctly set for texture origin."
            width="1931" height="1019" loading="lazy">
    </a>
</figure>

Now when painting slab tiles, you may notice these thin lines appearing in between them:

<figure>
    <a href="/images/thin-lines-between-tiles.png" class="lightbox">
        <img src="/images/thin-lines-between-tiles.png" alt="Image displaying rendering issues resulting in thin lines"
            width="1791" height="1333" loading="lazy">
    </a>
</figure>

To fix this issue, go to `Project > Project Settings > Rendering > Textures` and turn <strong>Default Texture Filter</strong> to `Nearest`. Then go to the 2D settings under Rendering and turn on <strong>Snap 2D Transforms to Pixel</strong> and <strong>Snap 2D Vertices to Pixel</strong> and reload the scene. The tiles should be uniform without any lines in between.

### Video References

<div class="video">
  <iframe src="https://www.youtube-nocookie.com/embed/B3bS9AGTSAw"
          title="Godot Isometric Tilemap Tutorial | Master Tilesets, Terrain & Auto-Tiling"
          loading="lazy"
          allowfullscreen></iframe>
</div>

