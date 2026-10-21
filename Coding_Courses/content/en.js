/* =====================================================================
   MULTI-COURSES TRAINING · CODING & TECHNOLOGY COURSES — CONTENT FILE (English)
   ---------------------------------------------------------------------
   TRANSLATORS: this is the ONLY file to translate for this training.
   - Translate ONLY the text inside quotes.
   - Change  lang: "en"  to your language code (it, pl…). Save as content/<code>.js
   - Do not change: key names, id / tour / track values, anything in {curly braces},
     HTML tags, emojis, links, file names (runner_v1, index.html…) and the numbers after  a:
     (index of the right answer, 0 = first).
   - Inside the texts, never use straight quotes or apostrophes: use ’ « » „ ” instead.
   ===================================================================== */
window.MC_CONTENT = {

  lang: "en",
  track: "coding",

  ui: {
    pageTitle: "Coding & Technology Courses",
    brand: "Multi-courses · Coding & Technology",
    footer: "kodland · Multi-courses training · Coding & Technology Courses",
    kicker: "Tutor training · Multi-courses",
    title1: "Coding & Technology",
    title2: "Courses",
    lead: "Meet the two coding and technology mini-courses your students can take: <b>Vibe Coding</b> and <b>Science via Minecraft</b>. For each one you’ll see the story, the lessons and the platform — and you’ll try it yourself.",
    strip: ["Complete the PL training first", "What mini-courses are", "Explore the 2 courses", "Take the test in the LMS"],
    flipHint: "Tap to flip",
    progress: "{done}/{total} courses viewed",

    pl: {
      title: "Before you start",
      text: "All these courses are taught in the <b>Parallel Lessons (PL)</b> format: you open and close each student’s lesson, and students work on their own with the cards in between. This training doesn’t explain the format again, so <b>complete the Parallel Lessons training first</b>.",
      check: "I’ve completed the Parallel Lessons training",
      ok: "✅ Great — the training is unlocked. Scroll down to start.",
      locked: "Complete the Parallel Lessons training first, then tick the box above to unlock this training."
    },

    mini: {
      title: "What are mini-courses?",
      intro: "<b>Multi-courses</b> give students the chance to explore different subjects through <b>shorter, topic-focused courses</b>, instead of committing to one long educational programme. Flip the cards:",
      cards: [
        ["⏱️", "Shorter", "Each course is short and focused on one topic, so students reach a finished, real project quickly."],
        ["🧭", "Explore", "Students can try different subjects — coding, science, video, music, pixel art — and discover what they enjoy most."],
        ["🧩", "Connected", "Some courses work together: for example, the runner game students build in Vibe Coding can use the graphics they draw in Pixel Lab."]
      ],
      catsTitle: "Two categories, two trainings",
      youAreHere: "This training",
      otherTraining: "Separate training",
      cats: [
        { icon: "🎨", name: "Creative Courses", courses: ["Video Editing", "Music", "Pixel Lab"], current: false },
        { icon: "💻", name: "Coding & Technology Courses", courses: ["Vibe Coding", "Science via Minecraft"], current: true }
      ],
      pl: "<b>Taught in the PL format.</b> Everything you learned in the Parallel Lessons training applies: individual openings and closings, independent work with the cards, help when a student raises their hand, and feedback in the closing."
    },

    courses: {
      title: "Explore the courses",
      intro: "Open each course and go through its sections: the story, the lessons, the projects, the platform and the technical requirements.",
      seen: "✓ Viewed",
      toSee: "Explore →"
    },

    course: {
      story: "📖 The story of the course",
      programme: "🗂️ Lessons",
      build: "🏆 What students create",
      pl: "⚡ In your parallel lessons",
      platform: "🖥️ Platform and tools",
      requirements: "Technical requirements",
      requirementsIntro: "Check them before the first lesson — and in the connection check, if something doesn’t work.",
      examples: "👀 Projects made by students",
      projOpen: "Open the project ↗",
      tourTitle: "Try it on Kodland Sparks",
      tourTodo: "Not done yet",
      tourDone: "✓ Tour completed",
      tourStart: "▶ Start the Sparks tour",
      tourHint: "An interactive replica of Kodland Sparks opens in this window.",
      tourFull: "Open the tour in full screen ↗",
      endText: "You’ve reached the end of {name}.",
      next: "Next course: {name} →",
      toFinal: "Finish the training →"
    },

    final: {
      title: "Finish the training",
      soonTitle: "Coming soon to BO",
      soon: "<p>These courses are <b>being translated</b> right now. As soon as they’re ready, <b>the bot will notify you</b> that they’ve been <b>enabled in BO</b>. From then on, you’ll find them — and their Teacher Notes — just like your other PL courses.</p>",
      lmsTitle: "You’ve finished reviewing the Coding & Technology Courses!",
      lms: "<p>Return to the <b>LMS training page</b> where you accessed this training. The <b>DST test</b> is available right below the training.</p><p>👉 You must complete and pass the DST test for the training to be considered successfully completed. If you do not complete the DST test, the training will remain incomplete and may expire.</p><p>The minimum passing score is <b>80%</b>.</p><p>Good luck! ❤️</p>"
    }
  },

  courses: [

    /* ================= VIBE CODING ================= */
    {
      id: "vibe",
      icon: "🤖",
      name: "Vibe Coding",
      label: "Coding & Technology course",
      tagline: "AI Coding Lab for Games: build your own Runner game with the help of AI.",
      facts: [["Age", "10+"], ["Lessons", "3 with a tutor + 1 self-study lesson"], ["Lesson length", "50 min"], ["Level", "Beginner — no coding experience"], ["Platform", "Kodland Sparks + an AI chat"]],
      story: "<p>From the very first lesson, students <b>create their own Runner game with AI</b>. With every lesson the game evolves: it gets new mechanics, a new interface, a new look — until it becomes a complete, personalised project published on Kodland Sparks.</p><p>Students don’t just learn to write prompts: they also start to <b>understand the structure of the code</b>, splitting the game into HTML, CSS and JavaScript. They work the way modern teams build projects with AI: <b>create → test → improve</b>.</p><p>The golden rule of the course: <b>the programmer directs the AI, not the other way round</b>.</p>",
      programmeIntro: "3 lessons with you, plus a lesson the student does on their own. Open each lesson:",
      programme: [
        { n: "Lesson 1", title: "Let’s create a Runner game",
          details: [
            ["🎯", "Mission", "Get to know AI Vibe Coding and create the first working version of the game."],
            ["🛠️", "What the student does", "Learns what AI Vibe Coding is, writes simple instructions for the AI, generates a Runner game, runs it in the browser, checks the character, the obstacles and the score, and fixes the first errors with the AI’s help."],
            ["💡", "What they learn", "What a prompt is for and how to write clear instructions · AI doesn’t always generate perfect code on the first try · good results come from several iterations · the programmer directs the AI."],
            ["🧑‍💻", "Self-study activity", "Ask the AI to change the speed of the game or add a new obstacle."],
            ["⭐", "Optional task", "Create another version of the Runner with a different visual style."]
          ],
          result: "A working Runner game (runner_v1)." },
        { n: "Lesson 2", title: "Let’s improve the game",
          details: [
            ["🎯", "Mission", "Learn to improve the game with new prompts."],
            ["🛠️", "What the student does", "Learns the rules of a good prompt, asks the AI to add new features, fixes errors through a dialogue with the AI, improves the interface, adjusts the difficulty and tests every change."],
            ["💡", "What they learn", "A good prompt gives better results · it’s better to split a complex task into small steps · the AI can modify or regenerate the code · developing a game means improving it constantly · test every change before moving on."],
            ["🧑‍💻", "Self-study activity", "Add an improvement of their own to the game."],
            ["⭐", "Optional task", "Create 2–3 new mechanics with the help of AI."]
          ],
          result: "A Runner game with new mechanics (runner_v2)." },
        { n: "Lesson 3", title: "Let’s personalise the game",
          details: [
            ["🎯", "Mission", "Get to know the structure of a web project and completely transform the look of the game."],
            ["🛠️", "What the student does", "Learns what HTML, CSS and JavaScript are, splits the project into the three files, learns the role of each one, changes the colours and styles, and replaces the main character with their own image — AI-generated or downloaded."],
            ["💡", "What they learn", "HTML holds the structure of the page, CSS the design, JavaScript the logic · separate files make a project easier to organise and edit · the look can change without changing the logic."],
            ["🧑‍💻", "Self-study activity", "Completely transform the visual style of the game."]
          ],
          result: "A personalised version of the Runner game (runner_final)." },
        { n: "Self-study", title: "Extra lesson on their own", details: [["🧑‍💻", "Self-study lesson", "An additional lesson the student completes independently, without a live session."]] }
      ],
      build: [
        ["🏃", "runner_v1", "The first working version of the Runner game, created on Kodland Sparks."],
        ["⚙️", "runner_v2", "An improved version with new features and mechanics."],
        ["📄", "index.html + css + js", "The whole game page in a single file, with CSS and JavaScript inside."],
        ["🗂️", "index.html · style.css · script.js", "The game split into three files: structure, design and logic."],
        ["🧍", "player.png", "The image of their own main character."],
        ["🏁", "runner_final", "The final, personalised version of the game, published on Kodland Sparks."]
      ],
      pl: [
        "Each lesson lasts <b>50 minutes</b>. In your opening, set the mission of the day: create, improve or personalise the game.",
        "When a student raises their hand because “the AI broke the game”, don’t fix the code for them: ask <b>what prompt they wrote</b> and help them make it clearer, or split the task into smaller steps.",
        "Remind them to <b>test every change</b> before asking for the next one — it’s the core habit of the course.",
        "In the <b>closing</b>, the student plays their game for you and you give specific feedback: what works, and one improvement for the next prompt.",
        "The final version is <b>published on Kodland Sparks</b>. The extra lesson is <b>self-study</b>: there’s no live session for it."
      ],
      platform: {
        text: "Students build the game on <b>Kodland Sparks</b> (AI Vibe Coding), in a <b>Game or web app</b> project with a live preview and the HTML, CSS and JS tabs. They can also use <b>any AI chat</b>.",
        tools: ["Kodland Sparks · Game or web app", "AI tutor", "Any AI chat", "HTML · CSS · JavaScript"],
        tour: "vibe",
        tourText: "Open Studio, start a Game or web app project, and see the live preview, the code tabs and the AI tutor."
      },
      /* Student projects published on Kodland Sparks: href, img, tag, title, by (nickname), desc */
      projects: [
        { href: "https://portfolio.kodland.org/DeBohpodast/cmrn729cf004mqv3fp20b1em3", img: "../images/proj_vibe1.webp", tag: "Web App", title: "Crystal Dash — 16-bit Runner", by: "DeBohpodast",
          desc: "A retro runner: the player runs, collects coins and dodges obstacles, with difficulty levels, jump and dash controls, and new worlds to unlock." },
        { href: "https://portfolio.kodland.org/DeBohpodast/cmrn7ywpd007yqv3fvuanrprs", img: "../images/proj_vibe2.webp", tag: "Web App", title: "Game 3 Web", by: "DeBohpodast",
          desc: "A Runner game built around clear menus, so it’s easy to play — and it can even switch between languages." }
      ]
    },

    /* ================= SCIENCE VIA MINECRAFT ================= */
    {
      id: "minecraft",
      icon: "🧪",
      name: "Science via Minecraft",
      label: "Coding & Technology course",
      tagline: "Explore, experiment and discover: Minecraft Education becomes a virtual science lab.",
      facts: [["Age", "8–9"], ["Lessons", "40 (5 modules)"], ["Lesson length", "60 min"], ["Level", "Beginner"], ["Platform", "Minecraft Education"]],
      story: "<p>This course turns <b>Minecraft Education</b> into a fully equipped <b>virtual science laboratory</b>. Students learn essential <b>physics, chemistry and biology</b> through hands-on experiments and discovery.</p><p>In the safe, playful world of Minecraft, they run experiments that would be <b>too dangerous, complex or costly</b> in a traditional classroom: they build circuits, synthesise compounds, study ecosystems, explore space and investigate the laws of our world. Step by step, they learn to <b>think like real researchers</b> — and to tell the difference between game logic and reality.</p><p>No previous knowledge of science or programming is needed; familiarity with Minecraft helps, but isn’t essential.</p>",
      programmeIntro: "5 modules. The detailed lesson list is still being finalised. Open each module:",
      programme: [
        { n: "Module 1", title: "The Science Lab — Getting Started", details: [["", "Minecraft Education’s science tools, the scientific method, elements and simple compounds."]] },
        { n: "Module 2", title: "The Physics Workshop — Building and Experimenting", details: [["", "Electricity, circuits, physical forces and motion, through Redstone and mechanical builds."]] },
        { n: "Module 3", title: "The Living World — Biology and Ecology", details: [["", "Ecosystems, habitats, food chains and sustainable design."]] },
        { n: "Module 4", title: "Advanced Science — Experiments and Exploration", details: [["", "Chemistry, physics and biology together, in complex projects that include space exploration and geology."]] },
        { n: "Module 5", title: "The Grand Science Project — Bringing Ideas to Life", details: [["", "A final, independent science project from concept to completion, presented to you and to the student’s parents."]] }
      ],
      extra: {
        title: "🔬 The scientific method — tap each step",
        intro: "Every experiment in the course follows the same four steps. They are the heart of the course:",
        hint: "Tap a step to see what the student does.",
        steps: [
          ["👀", "Observation", "The student looks at a phenomenon in the world and asks a question about it."],
          ["💡", "Hypothesis", "They make a guess they can test: “I think that… because…”."],
          ["⚗️", "Experiment", "They design and run an experiment in Minecraft Education — a circuit, a compound, a habitat."],
          ["📝", "Conclusion", "They analyse the results, record them with the in-game camera and journal, and explain what they found."]
        ]
      },
      build: [
        ["⚡", "Working circuits", "Electrical circuits built with Redstone, to understand electricity, signals and logic gates."],
        ["🧪", "Chemical compounds", "Glow sticks, ice bombs and other compounds, made with the Element Constructor and Compound Creator."],
        ["🌍", "Sustainable habitats", "Habitats and farms that give living things food, water, shelter and space."],
        ["🪨", "Rocks and minerals", "Rocks and minerals analysed and identified by their properties."],
        ["📸", "Experiment records", "Findings documented with the in-game camera and journal."],
        ["🏆", "The Grand Science Project", "A final independent project, presented to the tutor and parents."]
      ],
      pl: [
        "Students are <b>8–9 years old</b>: in the first lessons, check carefully that they can move around Minecraft Education and from one card to the next on their own.",
        "Every experiment is <b>individual</b>: each student runs and documents their own investigation.",
        "When a student calls you, <b>guide with questions</b> — “What do you think will happen? Why?” — instead of giving the result: the goal is to think like a scientist.",
        "In the <b>closing</b>, ask the student to explain their experiment and their conclusion, and point out the differences between what happens in Minecraft and in real life.",
        "Tutors need a computer with <b>16 GB of RAM or more</b> — see the technical requirements below."
      ],
      platform: {
        text: "The course takes place in <b>Minecraft Education</b>, not on Kodland Sparks. Students use its science tools: the <b>Element Constructor</b>, the <b>Material Reducer</b> and the <b>Compound Creator</b> for chemistry, <b>Redstone</b> for circuits, and the in-game <b>camera and journal</b> to document their findings.",
        tools: ["Minecraft Education", "Element Constructor", "Material Reducer", "Compound Creator", "Redstone", "Camera & journal"],
        tour: null,
        /* url: link to the launcher instructions */
        launcher: {
          title: "The Minecraft Education launcher",
          text: "Students — and you — open the course through a launcher. Follow the instructions to download and set it up. <b>Even though this course doesn’t use Kodland Sparks, the credentials to download the launcher are the same as for Kodland Sparks.</b>",
          btn: "📄 Open the launcher instructions ↗",
          url: ""
        }
      },
      /* [icon, text] */
      requirements: [
        ["🖥️", "<b>Operating system:</b> Windows 10 or later, macOS 12 (Monterey) or later, or ChromeOS 114 or later"],
        ["🌐", "<b>Browser:</b> Google Chrome"],
        ["🧠", "<b>RAM:</b> 8 GB or more for students — <b>16 GB or more for tutors</b>"],
        ["⚙️", "<b>CPU:</b> Intel Core i3-4150 / Celeron N4100 or better, or AMD A8-6600K or better"],
        ["🎮", "<b>GPU:</b> integrated Intel HD Graphics 4400 / AMD Radeon R5 (OpenGL 4.4+), or discrete Nvidia GeForce 400 / AMD Radeon HD 8000 series (OpenGL 4.4+)"]
      ]
    }
  ]
};
