# Project 7 - CPCCU Portal

## Project Overview
Name: Competitive Programming Camp City University

Description:

Author: Md Shoriful Islam Ashiq

## Files and Structure
index.html: Contains the main structure of the webpage, including the meta tags, title, and links to CSS files.

script.js: Contains JavaScript for toggling a menu button.

output.css: Contains styles for various elements like textarea, buttons, and input types.

package.json: Specifies project dependencies like Tailwind CSS.

## Noteworthy Features

Menu Toggle: The menu button in the script.js file toggles a hidden menu.

Styling: The output.css file provides styling for textarea, buttons, and input types.

Responsive Design: The meta viewport tag in index.html indicates a responsive design approach.

## Learning Points

Tailwind CSS: You can learn how to use Tailwind CSS for styling in this project.

JavaScript: Understanding event listeners and DOM manipulation through the script.js file.

HTML and CSS: Practicing structuring a webpage and styling elements using the provided files.


font-family: "Overpass Mono", "IBM Plex Mono", JetBrains Mono, "Slabo13px-Regular", 'Courier New', "Cascadia Code", Consolas, "Inconsolata", Fira Code, monospace;


<!-- 
npm init -y ✅

npm install -D tailwindcss ✅
npm install -D tailwindcss vite

npx tailwindcss init ✅
npx tailwindcss init -p
here -p for generating css codes only what is used (postCSS).


tailwind.config.js
@type {import('tailwindcss').Config}
✅
module.exports = {
  content: ["./index.html", "*",],
  theme: {
    extend: {},
  },
  plugins: [],
}


src/input.css
✅
@tailwind base;
@tailwind components;
@tailwind utilities;

npx tailwindcss -i ./input.css -o ./output.css --watch ✅


npm run dev ✅

 -->

**Install Tailwind CSS**

Install tailwindcss via npm, and create your tailwind.config.js file.

Terminal
```
npm install -D tailwindcss
npx tailwindcss init
```


Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

==> tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "*",],
  theme: {
    extend: {},
  },
  plugins: [],
}
```


**Add the Tailwind directives to your CSS**

Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.

==> src/input.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```


**Start the Tailwind CLI build process**
Run the CLI tool to scan your template files for classes and build your CSS.

Terminal
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

**Start using Tailwind in your HTML**

Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.

==> src/index.html

```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
  <!-- add this link  -->
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```