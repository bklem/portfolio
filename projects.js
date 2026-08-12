const projects = [
  {
    title: "Bridge-Building Project",
    summary:
      "A 3D modeled bridge designed to stay within price, weight, and size criteria while holding as much weight as possible.",
    tags: ["3D Modeling"],
    tools: ["CAD", "3D Modeling", "Technical Drawings", "Structural Design"],
    status: "Finished",
    context: "Schoolwork",
    year: "2022",
    role: "Modeled the bridge geometry, planned the truss layout, and balanced material use against the project constraints.",
    highlight:
      "Used a truss-style design to improve strength while staying within the required budget, size, and build limitations.",
    links: [],
    images: [
      {
        src: "images/bridge-render.png",
        alt: "3D model render of the bridge design"
      },
      {
        src: "images/bridge-layout.png",
        alt: "Technical layout drawing of the bridge"
      },
      {
        src: "images/bridge-dimensions.png",
        alt: "Dimensioned drawing sheet for the bridge"
      },
      {
        src: "images/bridge-test.png",
        alt: "Physical bridge during weight testing"
      }
    ],
    accent: "blue"
  },
  {
    title: "Onshape Real-World Tool Models",
    summary:
      "A set of real-life objects recreated as 3D models in Onshape, including a hammer, screwdriver, and movable scissors assembly.",
    tags: ["3D Modeling", "CAD", "Mechanical"],
    tools: ["Onshape", "CAD", "Assemblies", "3D Modeling"],
    status: "Finished",
    context: "Schoolwork",
    year: "2022",
    role: "Modeled each tool from real-world references, built detailed part geometry, and created a functional scissors assembly with moving components.",
    highlight:
      "Designed the scissors as an articulated model so the blades and handles could open and close inside the 3D modeling software.",
    links: [],
    images: [
      {
        src: "images/onshape-hammer.png",
        alt: "Onshape 3D model of a hammer"
      },
      {
        src: "images/onshape-screwdriver.png",
        alt: "Onshape 3D model of a screwdriver"
      },
      {
        src: "images/onshape-scissors.png",
        alt: "Onshape 3D model of movable scissors"
      }
    ],
    accent: "red"
  },
  {
    title: "Traffic Sign Chess Pieces",
    summary:
      "A pair of custom chess pieces modeled as traffic signs, turning familiar road symbols into themed 3D designs.",
    tags: ["3D Modeling", "CAD", "Design"],
    tools: ["Onshape", "CAD", "3D Modeling"],
    status: "Finished",
    context: "Schoolwork",
    year: "2022",
    role: "Designed the chess piece concepts, modeled the signs, posts, and bases, and shaped the symbols and lettering as raised 3D geometry.",
    highlight:
      "Combined a class chess-piece prompt with real-world traffic signs to create recognizable models with functional display bases.",
    links: [],
    images: [
      {
        src: "images/crosswalk-chess-piece.png?v=wide",
        alt: "3D model of a crosswalk sign custom chess piece"
      },
      {
        src: "images/stop-sign-chess-piece.png?v=fit",
        alt: "3D model of a stop sign custom chess piece"
      }
    ],
    accent: "orange"
  },
  {
    title: "Human-Centered Multi-Sport Helmet",
    summary:
      "A human-centered design project for a versatile helmet concept that could support multiple sports and tasks.",
    tags: ["Human-Centered Design", "3D Modeling", "CAD", "Design"],
    tools: ["CAD", "3D Modeling", "Human-Centered Design"],
    status: "Finished",
    context: "Schoolwork",
    year: "2022",
    role: "Created the helmet concept around user needs, adaptable protection, visibility, and coverage for different activity types.",
    highlight:
      "Combined a hard-shell helmet, face shield, and protective cage features into one adaptable design for several use cases.",
    links: [],
    images: [
      {
        src: "images/human-centered-helmet.png",
        alt: "3D model of a human-centered multi-sport helmet design"
      },
      {
        src: "images/serf-helmet-prototype.jpeg",
        alt: "Physical helmet and face shield prototype",
        fit: "tall"
      }
    ],
    accent: "teal"
  },
  {
    title: "S.E.R.F.",
    summary:
      "A VR immersion prototype that lets a user strap in and run in place while adding environmental feedback through water, heating, and cooling effects.",
    tags: ["Human-Centered Design", "Prototype", "VR", "CAD", "Design"],
    tools: ["CAD", "Physical Prototyping", "VR", "Sensory Feedback"],
    status: "Finished",
    context: "Schoolwork",
    year: "2022",
    role: "Designed and built a full-scale prototype frame for running in place during VR experiences, with added sensory systems to make virtual environments feel more realistic.",
    highlight:
      "Combined movement, restraint, water spray, and temperature feedback into one concept for a more immersive VR experience.",
    links: [],
    images: [
      {
        src: "images/serf-concept.png?v=whole",
        alt: "CAD concept render of the S.E.R.F. VR running platform"
      },
      {
        src: "images/serf-build-prototype.jpeg",
        alt: "Physical S.E.R.F. prototype frame built in a workshop",
        fit: "tall"
      }
    ],
    accent: "purple"
  },
  {
    title: "Green Level 3D-Printed Keychains",
    summary:
      "A personal 3D printing project that turned school-themed CAD designs into custom keychains and official Green Level merchandise.",
    tags: ["3D Printing", "CAD", "Entrepreneurship", "Design"],
    tools: ["CAD", "3D Printing", "Product Design", "Customer Sales"],
    status: "Finished",
    context: "Personal",
    year: "2023",
    role: "Designed custom keychain models, prepared them for 3D printing, coordinated with the Green Level PTSA, and sold personalized versions to students.",
    highlight:
      "Moved the project beyond a one-off print by connecting with the PTSA to sell the designs as official Green Level merchandise.",
    links: [],
    images: [
      {
        src: "images/green-level-keychain-gators.png",
        alt: "CAD render of a Green Level Gators license plate style keychain"
      },
      {
        src: "images/green-level-keychain-2024.png",
        alt: "CAD render of a GLHS 2024 license plate style keychain"
      },
      {
        src: "images/green-level-logo-keychain.png",
        alt: "CAD render of a Green Level logo keychain"
      }
    ],
    accent: "green"
  },
  {
    title: "Dropbox Hitch Cover",
    summary:
      "A personal 3D modeling project that turned the Dropbox logo into a custom truck hitch cover as a gift for a friend who works at Dropbox.",
    tags: ["3D Modeling", "CAD", "Personal Project", "Product Design"],
    tools: ["CAD", "3D Modeling", "Product Design", "Custom Fabrication"],
    status: "Finished",
    context: "Personal",
    year: "2023",
    role: "Designed the hitch cover body, shaped the receiver insert, and integrated the Dropbox logo into the front face as a personalized detail.",
    highlight:
      "Created a practical custom accessory that connected the recipient's work at Dropbox with a functional addition to his truck.",
    links: [],
    images: [
      {
        src: "images/dropbox-hitch-cover.png",
        alt: "CAD render of a custom Dropbox truck hitch cover"
      }
    ],
    accent: "blue"
  },
  {
    title: "Track Spike",
    summary:
      "A personal 3D modeling project focused on recreating a track spike with detailed threading, a pointed traction tip, and a faceted metallic finish.",
    tags: ["3D Modeling", "CAD", "Personal Project", "Design"],
    tools: ["CAD", "3D Modeling", "Product Design"],
    status: "Finished",
    context: "Personal",
    year: "2023",
    role: "Modeled the spike geometry, including the threaded base, collar, and pointed tip, while shaping the part to look like a realistic track accessory.",
    highlight:
      "Built a compact model with recognizable track-spike features and a polished gold material style.",
    links: [],
    images: [
      {
        src: "images/track-spike.png",
        alt: "CAD render of a gold track spike"
      }
    ],
    accent: "yellow"
  }
].reverse();
