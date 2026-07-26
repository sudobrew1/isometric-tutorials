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

We are now able to import our tiles.

### 2. Unity Overview