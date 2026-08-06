---
layout: base.njk
title: "Part 2 - Modeling Tiles"
---

First, we begin with 3D modeling the tile template in Blender. After creating this template, you can easily alter the look by adding/replacing different textures, and using it as a base to render foliage, different wall directions, buildings and props to make multiple assets for your game.

### 1. Open a new file in Blender

Go to `File > New > General or Ctrl+N > General` or simply start Blender.

### 2. Adjust scene to 2:1 ratio

It's important that the project is set up using a resolution that is 2:1 for dimetric isometric projection. Here are some common resolutions from past to present:

<div class="table-scroll">
    <table>
        <thead><tr><th>Tile Resolution</th><th>Recommended Screen Resolution</th><th>Notes</th></tr></thead>
        <tbody><tr><td>32 × 16</td><td>640 x 480 / 800 x 600</td><td>Retro PC monitor from early to mid 90's</td></tr></tbody>
        <tbody><tr><td>64 x 32</td><td>1280 x 720</td><td>Late 90s, early 00's monitors (720p)</td></tr></tbody>
        <tbody><tr><td>128 x 64</td><td>1920 x 1080 - 2560 x 1440</td><td>Modern default (1080p - 2K)</td></tr></tbody>
        <tbody><tr><td>256 x 128</td><td>3840 × 2160</td><td>Modern 4K</td></tr></tbody>
    </table>
</div>

Select the default cube and delete it. Select `Output > Format` in the Properties panel and change the X resolution to 256px and the Y resolution to 128px.

<figure>
    <a href="/images/scene-resolution-panel.png" class="lightbox">
        <img src="/images/scene-resolution-panel.png" alt="Scene panel in Blender"
            width="452" height="555" loading="lazy">
    </a>
    <figcaption class="img-caption">This tutorial will use 256x128. Feel free to use any resolution you want.</figcaption>
</figure>

<h3>3. Add background transparency </h3>

Next, click on the <strong>Render</strong> tab in the Properties panel, go to the <strong>Film</strong> section and set the <strong>Filter Size</strong> to `0.00 px` and click the <strong>Transparent</strong> checkbox to get a transparent background when rendering the .png image of the tile sprite.

<figure>
    <a href="/images/render-panel.png" class="lightbox">
        <img src="/images/render-panel.png" alt="Render panel in Blender"
            width="452" height="555" loading="lazy">
        </a>
</figure>

### 4. Add a Plane Mesh and Camera

Under the main toolbar, go to `Add > Mesh > Plane` or press `Shift + A > Mesh > Plane`. Set it to 1x1 meter. Press `Tab` to go into Edit Mode, right-click and select `Subdivide`. Next, add a camera (Shift + A > Camera) and reset its rotation by pressing `alt+R`. Set the X rotation axis to 60 degrees, and the Z rotation axis to 45 degrees. Drag the camera way from the plane mesh for now.

<figure>
    <a href="/images/camera-rotation.png" class="lightbox">
        <img src="/images/camera-rotation.png" alt="Camera rotation settings"
            width="882" height="582" loading="lazy">
        </a>
</figure>

### 5. Set Lens to orthograhic view

Select the <strong>Camera</strong>, then click on the <strong>Data</strong> tab in the Properties panel (green camera icon). Go to Lens and change the type from perspective to <strong>Orthographic</strong>.

<figure>
    <a href="/images/camera-orthographic-view.png" class="lightbox">
        <img src="/images/camera-orthographic-view.png" alt="Camera lens set to orthographic"
            width="457" height="794" loading="lazy">
        </a>
</figure>

### 6. Setting orthographic scale</h3>

Press `0` on the keyboard's numpad to change to camera view. If you don't have a numpad on your keyboard, adjust the viewfinder to where you want the camera, then click on `View > Align View > Align Active Camera to View`.

Since the orthographic scale is set to `6.0`, it needs to be scaled down for the tile to fit inside the camera's view. In the `Data > Lens` tab, throw in this formula into the Orthographic Scale field: 

`X*(1/cos(radians(45)))`

Then set "X" in for whatever scale you're looking for. For now, we just need all four corners to reach all four edges of the camera, so it will be set to 1. The formula should look like:

`1*(1/cos(radians(45)))`

Hit enter and it should calculate to `1.414`.

### 7. Moving the Camera

Next we need to move the camera precisely over the tile. Enable snapping and select the `Snap Target to Vertex`. Then select `Tranform Orientations` next to the snap button and select `Normal`.

<figure>
  <video src="/videos/snapping.webm" width="640" height="360"
         controls muted loop playsinline preload="metadata"></video>
</figure>

Select the camera, press `G` then `Shift+Z` to exclude moving on the Z axis. Click the center of your tile mesh. Press `0` on the numpad to view through the camera. The view should look like this:

<figure>
    <a href="/images/camera-placement.png" class="lightbox">
        <img src="/images/camera-placement.png" alt="Camera placed correctly over tile"
            width="955" height="467" loading="lazy">
    </a>
</figure>

And now you have your own basic 3D template! Press `F12` to render and view your basic 256x128 tile. Continue below to learn how to adjust for building height.

### 8. Adjusting resolution for building height

Now that we have our basic tile set up, the most we can do is give it a texture and some rubble or grass and not go any higher or else it gets cut off. If we placed a castle wall, the render would be cropped at where the lens edge is.

Go to `Output > Format` and swap the X and Y resolution values so that the lens becomes vertical. Then go to `Data > Lens`, throw in `2*(1/cos(radians(45)))` into the Orthographic Scale field and hit Enter. The value should be `2.828`. It should be wide enough now to see the entire tile now with space at the bottom.

<figure>
    <a href="/images/building-height-1.png" class="lightbox">
        <img src="/images/building-height-1.png" alt="Camera is taller"
            width="955" height="462" loading="lazy">
    </a>
</figure>

Next, we want to shift Y upwards. While in `Data > Lens`, Click on the arrows on the Y axis to move the camera upwards until the tile's bottom corner touches the edge of the lens. The result should look like this:

<figure>
    <a href="/images/building-height-2.png" class="lightbox">
        <img src="/images/building-height-2.png" alt="Tile is set to the bottom"
            width="955" height="462" loading="lazy">
    </a>
</figure>

Now you can render buildings, walls, props and more!

<figure>
    <a href="/images/wall-with-palm-and-rubble.png" class="lightbox">
        <img src="/images/wall-with-palm-and-rubble.png" alt="Basic wall with a palm tree and rubble"
            width="256" height="298" loading="lazy">
    </a>
</figure>

Generally, you should render tiles, props and walls seperately to easily mix-and-match pieces and better performance optimization. Use the base tile as a guide for your props and walls, then turn off rendering for the <strong>Plane</strong> object in the <strong>Scene Collection</strong>.

## 9. Optional - Set tile thickness

If you would like to add thickness to your tile designs, here's an optional guide.

<h3>Extruding downward</h3>

Select the plane, the press `Tab (edit mode) > A (select all) > E (extrude), Z > <desired value>`.

<h3>Shifting resolution</h3>

The extruded part at the bottom is getting cut off by the camera lens at the current 256x128. To fix this, Go to The Output tab on the properties panel and increase the Y resolution. Then go to Data > Lens and Shift Y downward until you can get the bottom corner within the lens.

The final result should look something like this:

<figure>
    <a href="/images/tile-thickness-result.png" class="lightbox">
        <img src="/images/tile-thickness-result.png" alt="Tile thickness achieved"
            width="955" height="462" loading="lazy">
    </a>
</figure>

## Video references

<div class="video">
  <iframe src="https://www.youtube-nocookie.com/embed/dlBXiDZNWI0"
          title="How to set Blender 3.0+ up to flawlessly render isometric tiles"
          loading="lazy"
          allowfullscreen></iframe>
</div>