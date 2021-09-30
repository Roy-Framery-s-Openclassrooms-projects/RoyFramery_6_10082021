# FishEye 
## _Create an accessible site for a platform of photographers_ 📷 
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

---  
> Github Pages : **https://roy-framery-s-openclassrooms-projects.github.io/RoyFramery_6_10082021/**
--- 

## Table of Contents
  - [Description](#description)
    - [About the briefing :](#about-the-briefing-)
    - [Accessibility](#accessibility)
    - [Mockup](#mockup)
  - [Tech](#tech)
  - [Installation](#installation)
  - [Author info](#author-info)
---
## Description

![Logo FishEye](https://github.com/Roy-Framery-s-Openclassrooms-projects/RoyFramery_6_10082021/tree/main/public/images/README/logo.png)

__*FishEye*__ is the sixth project I made during this training. 
Since few weeks I'm a junior developer at Techasite, 
a consulting company specialised in website and mobile application development.
The goal 🎯 was to build a **working prototype** of a new website in **HTML, CSS and JavaScript**.
For this, I had a [briefing](https://s3.eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/Notes+de+r%C3%A9union.pdf) that notice me some features and contraints to integrate, 
the [mockup](https://www.figma.com/file/pt8xJxC1QffW4HX16QhGZJ/UI-Design-FishEye-FR?node-id=0%3A1)
and [data](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeData.json) in **Json** format: 

### About the briefing :
- **Home page** :
  - I had to **display** a list of photographers with their **name, tagline, localisation, dailyprice, tafs and a thumbnail**
  - By **clicking** of one of the tags in the header, the list of photographers is **filtered** to show only those that **match this tags**
  - When the user **clicks** on a photographer's thumbnail, they are **taken to their page**.
- **Photographers' pages** :
  - **Displays** a gallery of the **photographer's work**
  - Photographers can show both **photos** and **videos**
    - I had to **use Fattory Pattern** for create a video or an image
    - In the **case** of videos, show a **thumbnail** in the gallery
  - **Each** media item includes a **title and a number of likes**
    - When the user **clicks** on the "Like" icon, the number of likes displayed **is incremented**
    - A photographer's **total number of likes** should **equal** the **sum of the likes** of each of his media
  - **Media** can be **sorted by popularity or by title and date**
  - When the user **clicks** on a media, it should **open in a lightbox** :
    - When the lightbox is displayed, there is a **cross in the corner to close the window**
    - There are **navigation buttons** to move from one media item to another (users can **click** on these buttons **to navigate**).
    - **Arrow keys** are also used **to navigate** between media
  - Display **a button to contact the photographer**
    - The contact form **is a modal** that is displayed **over the rest**
    - It includes fields for **name, email address and message**
    - Later, the contact button will send a message to the photographer. For now, only **display** the contents of the three fields in the **console logs**

### Accessibility 
A big point was made on the accessibility :
- Use **"semantic"** HTML elements that describe their intent **as much as** possible, **instead of** putting <div> and <span> elements everywhere.
- When you need to create a **custom element**, add **ARIA attributes** to describe what it does.
- The code should **pass the AChecker tests without a known issue**.
- Use a free **screen reader** to get an idea of how much using the site for a visually impaired person: I used **NVDA**.


### Mockup 
I would found in the [mockup](https://www.figma.com/file/pt8xJxC1QffW4HX16QhGZJ/UI-Design-FishEye-FR?node-id=0%3A1) a lot of details about **fonts, colors, element's size, hover effect, etc.**


[Back to the top](#fisheye)

---
## Tech

👁️‍🗨️ __*FishEye*__ use open source projects to work properly:

- [Sass](https://sass-lang.com/) - CSS enhanced for web apps!
- [node.js](https://nodejs.org/en/) - To create the project and add dependencies
- [Webpack](https://webpack.js.org/) - A bundler to package Js files
- [Babel](https://babeljs.io/) - A transpiler to make the versions of JavaScript compatible
- [ESLint](https://eslint.org/) - A linter to standardize Javascript code

[Back to the top](#fisheye)

---
## Installation

💽 __*FishEye*__ requires [Node.js](https://nodejs.org/) to run.

Clone repository...
```sh
git clone https://github.com/Roy-Framery-s-Openclassrooms-projects/RoyFramery_6_10082021.git
```

Install the dependencies...

```sh
npm i
```

To expanded CSS file ...

```sh
npm run expanded 
```

Start the Sass compiler... 

```sh
npm run sass 
```

Start the JS bundler... 

```sh
npm run dev 
```
[Back to the top](#fisheye)

---
## Author info 
- LinkedIn - [Roy Framery](https://www.linkedin.com/in/roy-framery/)

[Back to the top](#fisheye)
