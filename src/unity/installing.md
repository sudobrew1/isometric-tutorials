---
layout: base.njk
title: "Part 1 - Installing Unity"
hideBackToTop: true
---

Installation guide for the <a href="https://unity.com" target="_blank" rel="noopener noreferrer"><strong>Unity Hub and Unity Editor</strong></a> On Windows 11, MacOS and Linux.

Login or create an account then select the appropriate installer for x86 (Intel), ARM or Apple Silicon depending on your CPU architecture for your operating system. 

## Windows

Once downloading is finished on Windows, click on the `UnityHubSetup-<your_cpu_architecture>.exe` file, agree to terms of service and follow the installation prompts. Open Unity Hub and go to `Installs > Install Editor` Go to the <strong>Official releases</strong> tab and select the Unity version you wish to install. The LTS (Long Term Support) version is recommended. 

Next, there will be a list of additional modules to install. If you do not have Microsoft Visual Studio Community installed, click the check box next to it. Underneath Platforms, make sure at least Windows Build Support (IL2CPP) is checked. Feel free to check any additional platforms you wish to install and you can also install these later. During installation, the Visual Studio Installer will appear. Scroll down to Gaming and check `Game development with Unity`.

## MacOS

On MacOS, navigate to your Downloads folder and double-click on `UnityHubSetup<your_cpu_architecture>.dmg`. Accept the license agreement and drag and drop the Unity Hub icon into the Applications folder on the right. Open a new Finder window, navigate to the Applications folder and double-click on Unity Hub. Click open on the prompt and login or create an account with Unity. Click Agree to get the Unity Personal edition.

To install the editor, click Install Editor in the upper right-hand corner and go to `Installs > Install Editor`. Select the Unity version you wish to install. The LTS (Long Term Support) version is recommended. You will have a list of additional modules to install. If you do not have Visual Studio Code installed, click the check box next to it and click install.

## Linux

<strong>Important Note - </strong> Unity officially and only supports Debian .deb and Fedora .rpm package formats. You can install community maintained packages on Arch Linux from the AUR, but you may run into missing dependencies and experience glitches that will need troubleshooting.

<h3>Debian & Ubuntu</h3>

Download the .deb file from the website navigate to your `~/Downloads` folder and run:
```bash
sudo apt install ./UnityHubSetup.deb
```

<h3>Fedora</h3>

Download the .rpm file from the website navigate to your `~/Downloads` folder and run:
```bash
sudo dnf install ./UnityHubSetup.rpm
```

<h3>Arch Linux</h3>

Download and install packages from the AUR:
```bash
yay -S unityhub
#or
paru -S unityhub
```