---
layout: base.njk
title: "Part 3 - Importing Tiles"
---

Now we will begin importing and painting our textured tiles into Unity. If you haven't already, please follow the <a href="/_site/blender/modeling-tiles/" target="_blank" rel="noopener noreferrer"><strong>Modeling Tiles</strong></a> and <a href="/_site/blender/uv-mapping-tiles/" target="_blank" rel="noopener noreferrer"><strong>UV Mapping Tile Textures</strong></a> to model and texture your own tilesets.

Optionally, if you would like to skip those steps and go right into importing and painting tiles in your scene, go to <a href="/_site/blender/blender-templates/" target="_blank" rel="noopener noreferrer"><strong>Blender Templates</strong></a> to download pre-made tilesets I've made for this tutorial or go to any video game asset site to download and use free tileset environments like the <a href="https://assetstore.unity.com/search#q=isometric%202D&nf-ec_price_filter=0...0" target="_blank" rel="noopener noreferrer"><strong>Unity Asset Store</strong></a> or <a href="https://itch.io/game-assets/free/tag-isometric" target="_blank" rel="noopener noreferrer"><strong>itch.io</strong></a>.

This tutorial will show you how to import and paint flat and slab (3D looking) tiles.

### 1. Importing

Importing assets in Unity is pretty straight-forward. Navigate to your folder in your file manager where you've stored your rendered 128x256 (or different resolution) textured tiles and open it. In Unity, select the "Assets" folder in the Project tab and create a new file called "Tiles." Double-click it and select the tiles from your file manager, then drag and drop it into your "Tiles" folder in Unity.

### 2. Painting Tiles

In the Main Menu at the top left, go to `Window > 2D > Tile Palette`. This will open a seperate "Tile Palette" window which we'll use to paint our tiles on our isometric grid in the Scene.

<figure>
    <a href="/images/unity-tile-palette-ui.png" class="lightbox">
        <img src="/images/unity-tile-palette-ui.png" alt="Tile Palette UI"
            width="848" height="1116" loading="lazy">
    </a>
</figure>

In the "Create New Tile Palette" drop-down, select, "Create New Tile Pallet." Rename it to something like "Ground," set the Grid size to `Isometric` and click "Create." A "Create palette into folder" file explorer window will appear and it should point to your "Tiles" folder that we are currently in. Click Select Folder and drag and drop your tiles into the palette.

<figure>
    <a href="/images/unity-tile-palette-too-big.png" class="lightbox">
        <img src="/images/unity-tile-palette-too-big.png" alt="Tile Palette UI with tiles that are too big"
            width="1069" height="1501" loading="lazy">
    </a>
</figure>

It looks like our tiles are a little too big, so we'll scale them exactly to the size that we need so it fits a single face of the isometric grid. Select all of your tile assets in the Assets folder, and in `Sprite Mode > Pixels Per Unit` in the Inspector panel, set the value from `100` to `256` (or whatever the width is for your tiles), then click the "Apply" button at the bottom of the Inspector.

If you would like to move your tiles in the Tile palette for better organization, select Edit (pencil icon), Select (cursor icon along the top buttons), select your tile you wish to move, then click Move Selection.

<figure>
  <video src="/videos/moving-tiles.webm" width="1068" height="1502"
         controls muted loop playsinline preload="metadata"></video>
</figure>

Select the tile you wish to paint in the palette, make sure the brush tool is selected, then head over to the Scene, left-click on a tile to paint. If you want to paint an entire area, click the "Paint a filled box with active brush" next to the brush button. Click the Erase button to remove tiles. You can even select multiple tiles at once.

<figure>
  <video src="/videos/painting-tiles.webm" width="3840" height="2076"
         controls muted loop playsinline preload="metadata"></video>
</figure>

This is the end of the tutorial for flat tiles. Continue below if you'd like to learn how to paint slab tiles.

### 3. Slab Tiles

Importing and painting slab tiles (tiles with depth) can be a little tricky, but setting the correct sorting will solve problems like this:

<figure>
    <a href="/images/clipping-slab-tiles.png" class="lightbox">
        <img src="/images/clipping-slab-tiles.png" alt="Slab tiles clipping over eachother"
            width="3813" height="1660" loading="lazy">
    </a>
</figure>

<strong><mark>Important Note:</mark></strong> In Unity 6, the global settings for your project `Edit > Project Settings` <strong>will not work</strong> if your project already has the <strong>2D URP (2D Universal Rendering Pipeline)</strong>. To make sure you are using this pipeline, go to `Edit > Project Settings`, click on the "Graphics" tab in the left sidebar and look at the <strong>Default Render Pipeline Asset</strong> field at the top. In the <a href="/_site/unity/project-Setup/" target="_blank" rel="noopener noreferrer"><strong>Unity > Project Setup</strong></a> tutorial, we created this project using the "Universal 2D" template, so the default rendering pipeline should already be set to 2D URP regardless of the <strong>Default Render Pipeline</strong> field being set to `None`. It's a little confusing and contradicting because of the warning message saying:

"If you don't assign a render pipeline asset in your project, Unity uses the Built-In Render Pipeline which is deprecated. Migrate your project to the Universal Render Pipeline instead."

But rest assured, as long as you chose the "Universal 2D" template when creating this project, it should already be using 2D URP. As of 2026, Unity is currently depricating it's old, built-in rendering pipeline for this new one.

### 4. Transparency Sort Axis

Click on the `Assets > Settings` folder in the Project Tree panel and select the `Renderer2D` asset. Under the <strong>General</strong> section in the Inspector, set the <strong>Transparency Sort Mode</strong> to `Custom Axis` and set the <strong>Transparency Sort Axis</strong> to `X=0, Y=1, Z=0`. 

This tells the renderer to decide draw order by each sprite's Y position instead of sorting by distance from the camera. Why this matters is that the front of sprites with depth (like a slab or cube) get covered by the tile in front of it. If you've ever used Godot for example, you'll know that this is exactly like the <strong>Y-Sort</strong> setting.

### 5. Setting Tiles to Individual Mode

Next, click on the "Tilemap" object in the Hierarchy, go to the Inspector, under <strong>Tilemap Renderer</strong>, set the <strong>Mode</strong> from `Chunk` to `Individual`.

<strong>Chunk mode</strong> will batch all the tiles in a tilemap into a small number of combined meshes and draw them as units and it's fast. However, a batch has only one position and sort key, so the tiles can't be sorted against eachother or anything else. 

<strong>Individual mode</strong> makes each tile its own sprite and position, so each one sorts seperately and is more computationally expensive. Tile A can draw over tile B because they're being compared according to how the <strong>Transparency Sort Axis</strong> is set.

### 5. Adjusting Pivot Points

When importing our slab tiles, the height of each tile will be higher than a regular flat tile, so we need to adjust the center pivot point of each so that they're all the same height. These are the sprite's anchor point and Unity uses this value to locate where the sprite is in 2D space. By default, they all have a center pivot point.

To adjust, select the sprite you want to edit in your Asset folder and go to `Window > 2D > Sprite Editor`. In this window, we can see the sprite and it's current Name, Position, Border and Pivot. In this example I'm using a 256x136 sprite below:

<figure>
    <a href="/images/sprite-editor-ui.png" class="lightbox">
        <img src="/images/sprite-editor-ui.png" alt="Sprite Editor UI"
            width="2593" height="1508" loading="lazy">
    </a>
</figure>

In <strong>Pivot</strong>, click the `Center` drop-down and select `Custom`. Set the <strong>Pivot Unit Mode</strong> to pixels. For the Y value, subtract `136 - 128 = 8`. 136 is the sprite's current hight and 128 is the height of a normal flat sprite. The difference between these two values is what you should add to the Y value for the pivot, so `68 + 8 = 72`. Replace `68` with `72` in the Y value and hit Apply. Do these for each of the tiles you have in your assets. You can write a C# script to automate this process, which I'll add to this tutorial at a later date.

### 6. Painting Slab Tiles

Follow step 2. Painting Tiles again to open a Tile Palette and add this time, add your slab tiles. Again, left-click to paint your tiles with the brush tool selected. There should be no tiles clipping through eachother and fit evenly into the Tilemap.

<figure>
  <video src="/videos/painting-slab-tiles.webm" width="3840" height="2076"
         controls muted loop playsinline preload="metadata"></video>
</figure>