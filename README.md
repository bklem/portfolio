# Engineering Portfolio Prototype

This is a static portfolio for CAD, 3D modeling, hardware, software, and other engineering projects.

## How to Preview

Open `index.html` in a browser. No build step is required.

## How to Add Your Projects

Edit `projects.js`.

1. Duplicate one object inside the `projects` array.
2. Replace `title`, `summary`, `tags`, `tools`, `status`, `year`, `role`, and `highlight`.
3. Add links when you have them. Use `"#"` as a placeholder until a page, repo, file, or gallery is ready.
4. Add pictures by placing image files in the `images` folder and listing them in `images`.
5. Choose an `accent`: `green`, `blue`, `teal`, `orange`, `red`, or `purple`.

The filter chips, stats, search, and project cards update automatically from the data.

## How to Add Pictures

Put your project pictures in the `images` folder. Then list those files in the matching project object in `projects.js`.

Then add them to the project in `projects.js`:

```js
images: [
  {
    src: "images/my-project-front.jpg",
    alt: "Front view of my project"
  },
  {
    src: "images/my-project-detail.jpg",
    alt: "Detail view of my project"
  }
],
```

Use one image for a single picture, or multiple images to get scroll buttons on the project card. Leave `images: []` if you want to keep the generated placeholder graphic for now.

## Suggested Tags

Use multiple tags per project when appropriate:

- CAD
- Arduino
- Coding
- Electronics
- Robotics
- Mechanical
- 3D Printing
- Web
- Tools
- Design

## Next Upgrades

- Add real project images or CAD screenshots.
- Replace the contact links in `index.html`.
- Create one detail page per major project.
- Add resume and GitHub links to the header or footer.
