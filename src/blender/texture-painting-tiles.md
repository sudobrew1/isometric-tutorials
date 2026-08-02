---
layout: base.njk
title: "Part 4 - Texture Painting Tiles"
---

Texture painting in Blender allows you to to paint textures directly on a 3D model's surface with a brush. This is a different method to editing a 2D image in a photo editing program like Gimp or Photoshop and guessing how that image will appear on the UV map. Instead, you are actually editing an image file in Blender, but you can actually see the actual result of the brush strokes on the geometry.

In this context, this tutorial will go over how to blend two textures together to get seemless transitions from grass to dirt and vice versa. This will make your levels look less jarringly patchy and more natural like the image below.

<figure>
    <a href="/images/seemless-tiles.png" class="lightbox">
        <img src="/images/seemless-tiles.png" alt="Seemless tiles in Unity example"
            width="1508" height="871" loading="lazy">
    </a>
</figure>

### 1. Simple Overview of Nodes

Blender's shading node system allows us to do more complex work with textures. Instead of setting properties right on the object in the <strong>Material Properties</strong> panel when you click on an object, you wire together <strong>nodes</strong> that connect and carry values from one to the next until they reach the <strong>Material Output</strong>.

Open up your UV unwrapped, plain textured tile, select your plane object and at the top, click on the <strong>Shading</strong> tab.

<figure>
    <a href="/images/blender-shading-editor-ui.png" class="lightbox">
        <img src="/images/blender-shading-editor-ui.png" alt="UI of the Shading editor in Blender"
            width="1508" height="871" loading="lazy">
    </a>
</figure>

At the bottom of the this view, there are three nodes that make the current grass texture appear on the plane object.

<strong>Grass004_1K-JPG_Color.jpg</strong> - Represents the Image Texture we added back in the previous tutorial, <strong>UV Mapping Tile Textures</strong>.

<strong>Principled BSDF</strong> - Blender's all-purpose surface shader. You use this node to describe the material through a set of inputs like Base Color, Roughness, Metallic, Transmission, Emission, etc.

<strong>Material Output</strong> - The final output of the texture. Textures will not appear or have any affect until it reaches this node.

### 2. Adding & Mixing Image Textures

In the Shader editor view, go to `Add > Texture > Image Texture` or press `Shift + A` and search for and select "Image Texture." Place this node under the current grass Image Texture node. Then click on <strong>Open</strong> and select your texture you'd like to mix with. In this case, I'm going with `Ground079S_1K-JPG_Color.jpg` to mix my grass texture with dirt.

Before we connect anything, we need to add a <strong>Mix Color</strong> node so that these two textures can combine with eachother based on a Factor of 0.000 to 1.000. Go to `Add > Color > Mix Color` or press `Shift + A` and search for "Mix Color." Disconnect the Color output on the grass texture and plug it into the Mix Color's "A" input, then connect the dirt's Color output to the "B" input. Finally, connect the Mix Color's "Result" output into the "Base Color" input for <strong>Principled BSDF</strong> The graph should look like this:

<figure>
    <a href="/images/mixing-textures-shader-editor.png" class="lightbox">
        <img src="/images/mixing-textures-shader-editor.png" alt="Shader editor displaying Mix Node and additional texture"
            width="1508" height="871" loading="lazy">
    </a>
</figure>

Right now, Mix Color's Factor setting is set to `1.000` which will show only dirt. Slide it around to see the texture transition into the grass texture set to `0.000`.

### 3. Adding an Image Texture Mask

Add another image texture node and rename it to "terrain_mask." This will be our mask to paint where we want the grass, represented as `0` and dirt represented as `1`. Click on <strong>New</strong>, name the image to "terrain_texture_half" and uncheck the <strong>Alpha</strong> setting if it's checked. Then click "New Image". Set the <strong>Color Space</strong> to `Non-Color`. Plug the "Color" output into <strong>Mix Color's</strong> "Factor" input.

<figure>
    <a href="/images/adding-terrain-mask.png" class="lightbox">
        <img src="/images/adding-terrain-mask.png" alt="Terrain mask added to Shader editor"
            width="1508" height="871" loading="lazy">
    </a>
</figure>

Click on the <strong>terrain_mask</strong> node we just created then click on the <strong>Texture Paint</strong> tab at the top. In this view, you'll see a black square in the Image editor to the left and the grass texture in the 3D Viewport to the right. Set the brush color to white in the Color Picker to start painting the dirt texture. You can use a variety of brushes at the bottom to get a hard or soft edge on your brushes. You can also change the size and strength of the brush at the top.

On the <strong>terrain_mask</strong> node, we selected the default color to be black which represents `0` for grass in the Factor input on the Mix Color node. White represents `1` for dirt.

<figure>
  <video src="/videos/terrain-mask-painting.webm" width="3840" height="2076"
         controls muted loop playsinline preload="metadata"></video>
</figure>

Tip: In the 3D Viewport on the right, hit `0` on the keyboard to set the view to the camera's lens.

To create more tile variations like corner edges, you'll need a different mask image. Here are two ways to do this:

<strong>Swap the image on the existing Image Texture node</strong> - In the Image Editor, create and save a new mask. Then, back over to the Shader editor, on the <strong>terrain_mask</strong> node, click on "Browse image to be linked" (icon to the left of the field) and choose your new file. The node stays where it's at and only the image changes

<strong> Or add a second node </strong> - Create another Image Texture with a new mask, then drag its Color output to the Mix node's Factor input, replacing the connection from the original <strong>terrain_mask</strong> Image Texture node. You can keep both masks in the graph so you can swith between them.

For cleaner work so that your Shader editor doesn't get too crazy with multiple nodes all over the place, stick with swapping the image on the existing node.

### 4. Rendering Tile Directions

Once all directions of your seamless tile texture painted, we can start rendering sprites.

In the 3D Viewport, Click on your plane object, then click on the sidebar tab arrow or press `N` to open it. Click on <strong>Item</strong> and in the Rotation section, set the Z value to `0°` and press `F12` to render. Set the Z value to `90°`, `180°` then `270°` to render each direction. Save the .png sprites and name them something like `dirt_corner_se.png` (dirt corner southeast), `dirt_edge_n.png` (dirt edge north) to give your assets a clear name when browsing your library.