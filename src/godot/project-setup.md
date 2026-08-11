---
layout: base.njk
title: "Part 2 - Creating a New Project"
---

Let's get started with creating a new project for our pre-rendered isometric game. Open up Godot and follow the steps below.

### 1. Getting Started

After opening Godot, the Project Manager will appear. Click the Create button in the upper left hand corner to create a new Godot project. Name your project and select a project path for your game to live in. Choose `Forward+`. Mobile and Compatibility are not going to be covered in this tutorial. If you would like to include a Version Control system, select `Git` from the dropdown menu. Keep the `Edit Now` box checked and click Create.

<figure>
    <a href="/images/godot-project-setup-screen.png" class="lightbox">
        <img src="/images/godot-project-setup-screen.png" alt="Godot project setup screen"
            width="2021" height="1404" loading="lazy">
    </a>
</figure>

### 2. Selecting the Root Node

For our game, we need to it to be 2D instead of 3D. In the upper-right hand corner, underneath Create Root Node, select `2D Scene`. Your editor should now look like this:

<figure>
    <a href="/images/godot-node2d-scene.png" class="lightbox">
        <img src="/images/godot-node2d-scene.png" alt="Godot Node2D screen"
            width="3822" height="2023" loading="lazy">
    </a>
</figure>

### 3. Godot User Interface Overview

<figure>
    <a href="/images/godot-node2d-scene-annotated.png" class="lightbox">
        <img src="/images/godot-node2d-scene-annotated.png" alt="Annotated image of Godot Node2D project"
            width="3822" height="2023" loading="lazy">
    </a>
</figure>

#### 1. Scene & Import Panel
The Scene panel is the heart of your Godot workflow. This displays the hierarchy of Nodes that make up the current Scene of your game. The Import panel next to the Scene panel determines how Godot processes external files when brought into the engine. Settings like asset configuration allows you to change settings depending on the file type, such as enabling compression for textures or if an audio file should loop for example.

#### 2. FileSystem & History Panel
Godot creates a filesystem to drop assets into. You can create new folders, Scenes, Scripts, Resource and TextFiles underneath `res://` to organize your assets. The History panel allows you to look at past changes and revert back to a specific state if needed.

#### 3. 2D Viewport
The 2D viewport allows you to build and modify your Scene. You can position Nodes, place assets and see your game's layout. The toolbar along the top contains tools for selecting, moving and rotating with a ruler and grid to help you align assets precisely.

#### 4. Inspector & Signal Panel
The Inspector shows every property of whatever node you currently have selected. These are grouped into sections you can expand: Transform, Visibility, Texture, etc. Editing a value changes the selected node directly. The Signals tab lets you connect to a Node's events like a button being pressed, a player or object entering an area to functions in your scripts, which is how Nodes react to eachother.

#### 5. Workspace Buttons
Switch between Godot's editing modes: 2D, 3D, Script, Game and Asset Store. Since this tutorial is 2D, you'll most of your time in the 2D workspace and go over to Script mode when it's time to write code.

#### 6. Main Menu
The main menu bar has options for Scene, Project, Debug, Editor, and Help. Scene handles creating, saving and opening scenes. Project holds project-wide settings and export options. Project settings contain settings for dispay resolution and input maps for a keyboard or gamepad.

#### 7. Playtest Buttons
These run your game to test it. You can play the entire project, or just the current scene, and stop or pause once it's running. Use these to quickly catch problems early.