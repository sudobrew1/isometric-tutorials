---
layout: base.njk
title: "Part 4 - Rule Tiles"
---

Rule Tiles in Unity automatically change their displayed sprite based on it's neighboring tiles. You can paint continous edges, walls and corners seamlessly without manually choosing sprites to paint. It cuts down on level development and is highly recommended to use.

Before this part of the tutorial, go to <strong>Blender > Texture Painting</strong> to learn how create transition tiles or you can use pre-made ones in <a href="/_site/blender/blender-templates/" target="_blank" rel="noopener noreferrer"><strong>Blender Templates</strong></a>.

### 1. Rule Tile & Scene Setup

From the Main Menu, select `Assets > Create > Tiles > Isometric Rule Tile`. Rename it in your <strong>Assets</strong> folder to whatever you'd like.

Next, Go to `Window > 2D Object > Tilemap` to set up our tiles to paint. Create a new Isometric tile palette, then drag and drop the Isometric Rule Tile Asset into the Palette window.

<figure>
    <a href="/images/drag-and-drop-rule-tile.png" class="lightbox">
        <img src="/images/drag-and-drop-rule-tile.png" alt="Demonstration of Rule Tile drag and drop into Tile Palette"
            width="854" height="930" loading="lazy">
    </a>
</figure>

Select a <strong>Default Sprite</strong> for each of our rules to work off of. In the <strong>Inspector</strong> panel, click the <strong>Select</strong> button in the box highlighted in red in the figure below. Choose a default sprite like a plain grass texture to start off with. <strong>Default Game Object</strong> can remain blank and <strong>Default Collider</strong> can be left on `Sprite`.

<figure>
    <a href="/images/isometric-rule-tile-inspector.png" class="lightbox">
        <img src="/images/isometric-rule-tile-inspector.png" alt="UI of the Isometric Rule Tile Inspector panel"
            width="587" height="951" loading="lazy">
    </a>
</figure>

### 2. Set Tiling Rules

Under <strong>Tiling Rules</strong> Click the `+` button to add tiles to the list. In the grids for each, set a green arrow to make your texture continuous. Set a red "X" to designate a hard edge where the tile won't repeat. In this case, the grass is continuous while the dirt texture is the hard edge.

<figure>
    <a href="/images/isometric-rule-tile-with-rules.png" class="lightbox">
        <img src="/images/isometric-rule-tile-with-rules.png" alt="Inspector of Isometric Rule Tile with Tiling Rules"
            width="583" height="947" loading="lazy">
    </a>
</figure>

After applying the tiling rules, select your rule tile in the Tile Palette and paint.

<figure>
  <video src="/videos/painting-rule-tiles.webm" width="3840" height="2076"
         controls muted loop playsinline preload="metadata"></video>
</figure>

### 3. Tile Randomization

You can randomize tiles with Rule Tiles throughout the scene. Click on your rule tile in the <strong>Assets</strong> folder and go to the Inspector and add another rule. Click on the <strong>Output</strong> drop-down, and select `Random`. 

Set the <strong>Size</strong> and select the second sprite tile you would like to neighbor with. In this case, I'm adding variation across my plain grass texture. Adding the same sprite to the list multiple times weights how often it shows up; the more copies, the more common it is. 

Use the <strong>Noise</strong> slider to control how tightly or loosely the random tiles scatter.

<strong>Shuffle</strong> allows you to flip and rotate each sprite. Use Mirror X, Mirror Y, and Mirror XY to rotate on the 2D scene and keeps a flat 2D look. The Rotate and and Rotated Mirror settings spin the sprite on the Z axis. For isometric tiles these usually look wrong, since the rotation breaks the fixed viewing angle.

<figure>
  <video src="/videos/painting-random-rule-tiles.webm" width="3840" height="2076"
         controls muted loop playsinline preload="metadata"></video>
</figure>

### References

- <a href="https://learn.unity.com/tutorial/using-rule-tiles" target="_blank" rel="noopener noreferrer">Using Rule Tiles Tutorial from Unity</a>




