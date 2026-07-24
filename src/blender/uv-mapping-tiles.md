---
layout: base.njk
title: "UV Mapping Tile Textures"
---

UV mapping is the process of "unwrapping" a 3D object's surface and laying it flat. Think about it like cutting apart a cardboard box and flattening it out. This creates a canvas that is used as a guide to wrap 2D textures, images and colors onto the 3D model.

### 1. Open The Tile .blend Project
After completing the <strong><a href="/blender/modeling-tiles/">Modeling Tiles</a></strong> tutorial, open up the `.blend` file containing your newly made tile. Click on the UV Editing Tab.

<figure>
    <a href="/images/uv_editing_tab.png" class="lightbox">
        <img src="/images/uv_editing_tab.png" alt="UV Editing Screen in Blender"
            width="3820" height="1982" loading="lazy">
    </a>
</figure>

### 2. Find and Import a Texture

There are many sites to find textures online, but the most realiable site I've found is <strong><a href="https://www.ambientcg.com" target="_blank" rel="noopener noreferrer">ambientcg.com</a></strong>. It contains thousands of high-quality and seemless textures for your 3D models for free. In this tutorial, I will be using Grass004 from this website. Feel free to download any texture at any resolution as you wish.

Next, unzip the folder containing your chosen texture and open in your file manager.

<figure>
    <a href="/images/texture_folder.png" class="lightbox">
        <img src="/images/texture_folder.png" alt="Folder containing downloaded texture"
            width="1613" height="1120" loading="lazy">
    </a>
</figure>

As you can see, there's not just the image for the texture itself (aka color map), but other texture maps. These affect the geometry like normal and displacement maps, giving your texture depth as well as reflectance and occlusion to give it roughness or metallic look and soft shadows that show up where surfaces get close together. For now, we are only going to use the color map. For this example, I will use `Grass004_1K-JPG_Color.jpg`.

In Blender, click on the "Plane" object in the Scene collection, press `Tab` to make sure you're in `Object Mode` and in the Properties panel underneath, select the Material Properties <img src="/images/material_properties_icon.png" alt="Material Properties Icon" class="ui-icon"> tab.

Click the "New +" button and a new material will be added to your Plane object.

<figure>
    <a href="/images/material_properties_panel.png" class="lightbox">
        <img src="/images/material_properties_panel.png" alt="Material Properties panel in Blender"
            width="334" height="785" loading="lazy">
    </a>
</figure>

In the "Surface" section, click on the yellow dot left to "Base Color" and select "Image Texture," underneath the "Texture" section. Options appear underneath "Base Color" to create a new or add an existing texture from your filesystem. Click on the "Open" button and select the color map image. Again, in this example it's `Grass004_1K-JPG_Color.jpg`.

If you are not already on "Material Preview" in your Viewport Shading settings, go ahead and click on it in the upper right-hand corner of your viewport so you can actually see the texture being applied to the Plane.

<figure>
    <a href="/images/material_preview_example.png" class="lightbox">
        <img src="/images/material_preview_example.png" alt="Material Properties panel in Blender"
            width="1652" height="1942" loading="lazy">
    </a>
</figure>

### 3. UV Unwrapping the Plane

Now that we have our grass texture added as a material to our object, let's preview the material on the UV Editing viewport. Along the top, click on "Browse Image to be linked" and select your texture to view in the background. Press `tab > A` to go into Edit Mode to see the Plane object's mesh and all of its faces selected. Since this is a flat plane, there are no extra steps to unwrap.

From here, you can scale, rotate or move the UV mesh around the texture. If you feel the texture is too granular and would like to see more detail, scale the mesh smaller to get more details on the blades of grass, rotate it for the grass blades to go in a different direction or move to get certain details if you have something in it you'd like to include, like flowers or specific cracks in dirt.

### 4. Rendering
In Blender there are two types of Render Engines: EVEE and Cycles. EVEE is a real-time render engine for instant feedback and speed. Cycles is a physically-based, ray-tracing engine that simulates real-world light behavior to get the most realistic look out of your 3D models and needs much more computational power to completely render the Scene. Navigate to the Properties panel and click the "Render" tab to change these settings. By default, Blender will set the Engine to EVEE. Press `F12` to view the render.

<figure>
    <a href="/images/evee-blender-render.png" class="lightbox">
        <img src="/images/evee-blender-render.png" alt="Blender Render in EVEE Render Engine"
            width="550" height="457" loading="lazy">
    </a>
</figure>

This is the render result from our scene. Now switch to Cycles and choose "Device" to "GPU Compute" to use your computer's graphics card to help render the scene faster. Hit `F12` again to render your scene in Cycles this time.

As you can see, there isn't much of a difference between the two renders, because the Plane object is a flat surface with no shadows casting over it. If an object is added in the scene, we can compare it side-by-side between both Render Engines:

<div class="figure-row">
  <figure>
    <a href="/images/evee-palm-tree-annotated.png">
      <img src="/images/evee-palm-tree-annotated.png" alt="EVEE Render" loading="lazy">
    </a>
  </figure>
  <figure>
    <a href="/images/cycles-palm-tree-annotated.png">
      <img src="/images/cycles-palm-tree-annotated.png" alt="Cycles Render" loading="lazy">
    </a>
  </figure>
</div>

EEVEE uses approximate light rather than simulate it. Shadows and edges are sharper with aliasing and light is faked. The image is flat but has very fast rendering time.

Cycles uses path tracing techniques to simulate individual rays of light bouncing around the scene. Shadows are much softer and light actually reflects off the ground back to the model. It's much more physically accurate, but at the cost of being much slower to render and will look grainy until enough samples accumulate.

For a 2D isometric game, you can use either render engine to suit your style. For a more old-school, 90's PC game look EVEE is perfect. If you want your game assets to look a little more polished, use Cycles.

### 5. Lighting

If you noticed, our render looks a little too dark for our liking. To brighten it up, let's experiment with light!

There is already a light object in our scene. Select it in the Scene Collection panel and click on the "Data" tab.

<figure>
    <a href="/images/light-panel.png" class="lightbox">
        <img src="/images/light-panel.png" alt="Light panel in Blender"
            width="434" height="633" loading="lazy">
    </a>
</figure>

There are four types of lighting in Blender:

<strong>Point</strong> - A single point of light radiating in all directions, like a light bulb. The farther away an object is away from it, the less bright it gets. Increasing the radius gives it a bigger "bulb" and softer shadows.

<strong>Sun</strong> - Parallel rays from light infinitely far away. Positioning does not matter, however rotation does. You can place an object very far away and the light intensity will stay the same. The Angle setting controls the softness and if you want overcast, increase the value.

<strong>Spot</strong> - Is just like a point light, but with a cone over it. Again, the farther away the object is, the less bright it is. Adjust the Spot Size for the cone's angle and Blend for how soft the edges are around the cone.

<strong>Area</strong> - Emits from a surface like a rectangle, disk or ellipse. Think of this like light coming through a window. Increase the size (X,Y) to get softer shadows.

For this tutorial, we will use Sun since the light will evenly spread across the tile. Right now, the Exposure is set to 0 which is extremely bright, causing the render to be completely white. Decrease the value to around -7 to get the tile have just the right amount of brightness. In the Viewport Shading settings, select "Rendered" to view your changes in real-time.

Feel free to play around with the Color and Temperature settings to get different color lighting.

### 6. Saving the Render

Once you are content with how the texture and lighting looks, press `F12` to render the object and a new "Blender Render" window will appear. Optionally, use the scroll wheel or click and drag on the zoom in/zoom out button on the right to view the render up close or far away. Click on `Image > Save As` and name your new 256x256 tile sprite something appropriate (like grass-01.png) and save it.

<h2>Congratulations! You just made your first asset to import into Godot or Unity.</h2>