---
layout: base.njk
title: "Part 2 - Creating a New Project"
---

Let's get started with creating a new project for our pre-rendered isometric game. Open up Godot and follow the steps below.

### 1. Getting Started

Open Unity Hub and click on "Projects" on the left panel, then click "New project" in the upper-right.

<figure>
    <a href="/images/unity-hub-create-project.png" class="lightbox">
        <img src="/images/unity-hub-create-project.png" alt="Unity Hub setup project screen"
            width="2245" height="1263" loading="lazy">
    </a>
</figure>

In the New Project window, select the "Universal 2D" project and give it a name, set your file location and optionally if you want to use source control, click the drop-down to select the provider. Then click, "Create Project."

Next, In the Heirarchy panel on the left, right-click or click the plus button in the top-left to create a new `2D Object > Tilemap > Isometric` tilemap. In the panel a new "Grid" object will appear with a Tilemap underneath it. Select it in the "Inspector" panel to the right and set the `Cell Size` under "Grid" to X=1, Y=1, and Z=2. This will give the correct 2:1 ratio for our tile sprites.

We need to add a background layer so that the terrain tiles will sit under everything else in our scene. Along the top of the Inspector panel, click the Layer drop-down and select "Add Layer." Click the arrow next to "Sorting Layers" and add a new layer and call it "Backgorund." Select your Tilemap object again and under `Tilemap Renderer > Additional Settings`, select your new Background layer for Sorting Layer and keep it at `0` for `Order in Layer`.

We are now ready to import our tiles! Select the Grid in the Hierarchy panel and your project should look something like this:

<figure>
    <a href="/images/unity-2d-isometric-editor.png" class="lightbox">
        <img src="/images/unity-2d-isometric-editor.png" alt="2D Isometric Unity Editor"
            width="3839" height="2075" loading="lazy">
    </a>
</figure>

### 2. Unity Overview

<figure>
    <a href="/images/unity-editor-ui-annotated.png" class="lightbox">
        <img src="/images/unity-editor-ui-annotated.png" alt="Unity Editor UI"
            width="3839" height="2075" loading="lazy">
    </a>
</figure>

#### 1. Scene View
The Scene view is where you build your game, visually placing, moving and arranging objects. The toolbar to the left has transform tools to move, rotate, and scale your objects. The Game tab to the right, switches to a preview of what the player will see through the camera.

#### 2. Hierarchy
The Hierarchy lists every object in the current scene as a tree. In this image, it holds SampleScene with a Main Camera and a Global Light 2D. Objects can be nested so that you can group objects together and be able to move the parent object with everything else under it. An example would be like grouping a character with their art, audio FX and more.

#### 3. Project Tree & Console
This is your project's file browser. The Asset folder is where scenes, sprites and scripts live. The Packages folder below it are pre-installed tools like 2D Tilemap Editor and 2D Sprite importer that you'll use extensively for 2D sprite work. To the right, the Console tab allows you to view errors and warnings in your Scene.

#### 4. Project Contents
When you select a folder from the Project Tree, the contents of it will display here. You can drag a sprite from here into the Scene to place it, or into the Inpsector to assign it. You'll import all your assets here.

#### 5. Inspector
The Inspector shows every property of whatever object you currently have selected, either in the Hierarchy or the Project window. Select the Main Camera and you'll see its position, projection and background settings here. Editing a value changes the object directly, and it's also where you add Components to give an object a new behavior.

#### 6. Toolbar, Play Buttons & Main Menu
In the center are the play controls that run the game, pause and step through frame by frame for debugging. The Layout dropdown to the right allows you to change and rearrange panels once you settle into a new workflow. The Main Menu in the upper-right (File, Edit, Assets, GameObject, Component, etc). are for everything else. GameObject for instance, creates things in your scene, Assets handles importing sprites, Window reopens a panel you closed, and Edit contains Project Settings and undo/redo options.