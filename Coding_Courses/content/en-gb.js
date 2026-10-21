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
  region: "UK",

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
        ["🧩", "Connected", "Some courses work together: for example, the runner game students build in Vibe Coding can use the graphics they draw in Pixel Art."]
      ],
      catsTitle: "Two categories, two trainings",
      youAreHere: "This training",
      otherTraining: "Separate training",
      cats: [
        { icon: "🎨", name: "Creative Courses", courses: ["Video Creation", "Sound Design", "Pixel Art"], current: false },
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
      outcomes: "🎯 Learning outcomes",
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
      toFinal: "Finish the training →",
      boTitle: "The course in the BO",
      boText: "Link to this course in the BO (region: {region}).",
      boBtn: "🔗 Open course {id} in the BO ↗"
    },

    final: {
      title: "Finish the training",
      soonTitle: "You’ve explored all the Coding & Technology Courses!",
      soon: "<p>These courses are <b>being translated</b> right now.</p><p>As soon as they’re ready, <b>the bot will notify you</b> that the courses have been <b>enabled in BO</b>. From then on, you’ll find them — and their Teacher Notes — just like your other PL courses.</p><p>Thank you for getting ready! 💙</p>",
      lmsTitle: "One last step: the test in the LMS",
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
      tagline: "Build your first runner game with AI — and learn how coding with AI works.",
      facts: [["Lessons", "5"], ["Lesson length", "60 min"], ["Level", "Beginner — no coding experience"], ["Platform", "AI Vibe Coding in Kodland Sparks"]],
      story: "<p>Students build their <b>first runner game with AI</b> and learn how coding with AI works. They learn to write <b>clear prompts</b> that AI turns into code, and they add new features to the game.</p><p>There is <b>no need to learn syntax</b>: students test the result, describe the bug and ask AI to fix it. Everything happens in <b>AI Vibe Coding in Kodland Sparks</b>. No coding experience is needed. By the end, each student has a game with their own style, hero and environment, split into <b>HTML, CSS and JavaScript</b>, and a project page in Sparks.</p>",
      outcomes: [
        "Write clear prompts and split a big task into small ones.",
        "Build a working browser game with AI: jump, obstacles, score, Game Over and Restart.",
        "Find bugs and fix them by talking to AI.",
        "Understand what HTML, CSS and JavaScript do.",
        "Publish the game and build a project page in Sparks."
      ],
      bo: { id: "2149", url: "https://bo.kodland.org/courses/2149" },
      programmeIntro: "5 lessons of 60 minutes. Open each lesson:",
      programme: [
        { n: "Lesson 1", title: "First Runner with AI", details: [["", "Students learn what vibe coding is, write their first prompt and get a working game with a hero, obstacles and a score. They run it in the browser and fix the first bugs with AI."]] },
        { n: "Lesson 2", title: "Prompts and New Features", details: [["", "The rules of a good prompt. Students add mechanics, tune the difficulty and the interface, and test every change."]] },
        { n: "Lesson 3", title: "Style, Structure and Hero", details: [["", "Students split the project into HTML, CSS and JavaScript and learn what each file does. They change colours and styles and put their own hero into the game."]] },
        { n: "Lesson 4", title: "Game Environment", details: [["", "Students add a background and new obstacles: they generate images or draw them and connect them to the project. Then they check that the mechanics still work."]] },
        { n: "Lesson 5", title: "Final Project: Project Page", details: [["", "Students polish the game: they check that everything works, write a description and rules, publish the game on a project page in Sparks and show it to the tutor and other students."]] }
      ],
      build: [
        ["🏃", "A first runner game", "A working game with a hero, obstacles and a score, made from their first prompt and run in the browser."],
        ["⚙️", "New mechanics", "Features added with prompts, with the difficulty and the interface tuned — and every change tested."],
        ["🗂️", "HTML, CSS and JavaScript", "The project split into three files, so each part has its own job."],
        ["🧍", "Their own hero", "Their own character, with their own colours and styles, put into the game."],
        ["🌄", "A game environment", "A background and new obstacles, generated or drawn and connected to the project."],
        ["🏁", "A project page in Sparks", "The final game, with a description and rules, shown to the tutor and other students."]
      ],
      pl: [
        "Each lesson lasts <b>60 minutes</b>. In your opening, set the goal of the day: the first game, new features, style and structure, the environment or the final project.",
        "When a student raises their hand because “the AI broke the game”, don’t fix the code for them: ask <b>what prompt they wrote</b> and help them make it clearer, or split the task into smaller steps.",
        "Remind them to <b>test every change</b> before asking for the next one — it’s the core habit of the course.",
        "In the <b>closing</b>, the student plays their game for you and you give specific feedback: what works, and one improvement for the next prompt.",
        "In lesson 5, students polish the game, write a description and rules, and publish it on a project page in <b>Kodland Sparks</b>."
      ],
      platform: {
        text: "Students build the game in <b>AI Vibe Coding</b>, inside <b>Kodland Sparks</b>, in a <b>Game or web app</b> project with a live preview and the HTML, CSS and JS tabs. They write prompts, test the game, describe the bugs and ask AI to fix them. The final game goes on a project page in Sparks.",
        tools: ["Kodland Sparks · Game or web app", "AI tutor", "HTML · CSS · JavaScript"],
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
      tagline: "Ask a question, guess the answer, run an experiment and check the result — in Minecraft.",
      facts: [["Age", "8–9"], ["Lessons", "5"], ["Lesson length", "60 min"], ["Level", "Beginner"], ["Platform", "Minecraft Java Edition (Kodland launcher)"]],
      story: "<p>Students learn <b>science by running experiments in Minecraft</b>. In one campus world they turn sand into glass and lava into stone, test how things slide and fall, grow plants and jump on the Moon. Each time they use the <b>scientific method</b>: ask a question, guess the answer, run an experiment and check the result.</p><p>In some lessons students use <b>artifacts</b>. An artifact is a small datapack that changes a rule of the world, such as the speed of time or gravity. Students change one number and see what happens. In the last lesson they make their own artifact from a template.</p><p>Students play <b>Minecraft Java Edition</b> in the Kodland launcher. No science or programming experience is needed. By the end, each student has their own experiment, an artifact and a report on a project page in Sparks.</p>",
      outcomes: [
        "Use the scientific method: ask a question, make a hypothesis, run an experiment and draw a conclusion.",
        "Explain how materials change when we heat them or mix them with water.",
        "Test forces and motion: friction, falling, bouncing and speed.",
        "Explain what plants need to grow and how animals in a food chain depend on each other.",
        "Compare gravity on the Earth, the Moon and Mars, and find which rocks and ores lie at which depth.",
        "Make an artifact from a template and publish it with an experiment report in Sparks."
      ],
      bo: { id: "2187", url: "https://bo.kodland.org/courses/2187", note: "In the BO, the first lessons of this course will be added on 2 November 2026." },
      programmeIntro: "5 lessons of 60 minutes. Open each lesson:",
      programme: [
        { n: "Lesson 1", title: "The Science Lab", details: [["", "Students who have not installed the launcher yet do it with the tutor. Then everyone enters the campus world and learns the scientific method. Students test how materials change: sand turns into glass, lava and water make stone, concrete powder hardens in water. For each test they write a hypothesis and a result in a lab book."]] },
        { n: "Lesson 2", title: "Forces and Motion", details: [["", "Students test friction: how far they slide on ice, blue ice and dirt. They watch sand and gravel fall, bounce on slime blocks and send minecarts down powered rails. Then they compare the results and explain which force changes the motion."]] },
        { n: "Lesson 3", title: "The Living World", details: [["", "Students grow plants in light and in darkness, with water and without it. The time artifact speeds up time, so they see the result within one lesson. At the end they look at short food chains: wolves and sheep, foxes and chickens, bees and flowers."]] },
        { n: "Lesson 4", title: "Space and Earth", details: [["", "Students use the gravity artifact to jump on the Earth, the Moon and Mars and compare how high they go. Then they go down a mine and find which rocks and ores lie at which depth."]] },
        { n: "Lesson 5", title: "The Grand Science Project", details: [["", "Students choose a topic from lessons 1–4, make their own artifact from a template and run their own experiment. They publish the artifact and a report on a project page in Sparks and show it to the tutor and other students."]] }
      ],
      extra: {
        title: "🔬 The scientific method — tap each step",
        intro: "Every experiment in the course follows the same four steps. They are the heart of the course:",
        hint: "Tap a step to see what the student does.",
        steps: [
          ["❓", "Question", "The student looks at something in the world and asks a question about it."],
          ["💡", "Hypothesis", "They guess the answer in a way they can test: “I think that… because…”."],
          ["⚗️", "Experiment", "They run an experiment in Minecraft — heat a material, test a slope, grow a plant, jump on the Moon."],
          ["📝", "Conclusion", "They check the result against their guess, write it in the lab book and explain what they found."]
        ]
      },
      build: [
        ["📒", "A lab book", "A hypothesis and a result for every test, starting in lesson 1."],
        ["🔥", "Material experiments", "Sand turned into glass, lava and water turned into stone, concrete powder hardening in water."],
        ["🛷", "Forces and motion tests", "Sliding on ice, blue ice and dirt, falling sand and gravel, slime blocks and minecarts on powered rails."],
        ["🌱", "A plant-growth experiment", "Plants grown in light and darkness, with and without water, with the time artifact speeding things up."],
        ["🌙", "Gravity jumps and a mine", "Jumps on the Earth, the Moon and Mars, and a trip down a mine to find which rocks and ores lie at which depth."],
        ["🏆", "Their own artifact and report", "An artifact made from a template, published with an experiment report on a project page in Sparks."]
      ],
      pl: [
        "Students are <b>8–9 years old</b>: in the first lessons, check carefully that they can move around Minecraft and from one card to the next on their own. Students who come without the launcher install it <b>with you in lesson 1</b>.",
        "Every experiment is <b>individual</b>: each student runs their own tests and keeps their own lab book.",
        "When a student calls you, <b>guide with questions</b> — “What do you think will happen? Why?” — instead of giving the result: the goal is to think like a scientist.",
        "In the <b>closing</b>, ask the student to explain their experiment and their conclusion, and point out the differences between what happens in Minecraft and in real life.",
        "Tablets, phones and Chromebooks are <b>not supported</b>: check the technical requirements below before the first lesson."
      ],
      platform: {
        text: "Students play <b>Minecraft Java Edition</b> in the <b>Kodland launcher</b>, in one campus world. In some lessons they use <b>artifacts</b> — small datapacks that change a rule of the world, like the speed of time or gravity — and in the last lesson they make their own from a template. Their experiment, artifact and report go on a project page in <b>Kodland Sparks</b>.",
        tools: ["Minecraft Java Edition", "Kodland launcher", "Artifacts (datapacks)", "Lab book", "Kodland Sparks · Project page"],
        tour: null,
        /* url: link to the launcher instructions */
        launcher: {
          title: "The Kodland launcher",
          text: "Students — and you — open the course through the Kodland launcher. We send the link before the first lesson; follow the instructions to download and set it up. <b>The credentials to download the launcher are the same as for Kodland Sparks.</b>",
          btn: "📄 Open the launcher instructions ↗",
          url: "https://portfolio.kodland.org/launcher/download#guide"
        }
      },
      /* [icon, text] */
      requirements: [
        ["💻", "<b>Device:</b> a laptop or desktop computer with a keyboard and mouse — <b>tablets, phones and Chromebooks are not supported</b>"],
        ["🖥️", "<b>Operating system:</b> Windows 10 or later, macOS 13 or later"],
        ["🧠", "<b>RAM:</b> 8 GB or more"],
        ["🚀", "<b>Software:</b> the Kodland launcher. We send the link before the first lesson; students who come without it install it with the tutor in lesson 1."]
      ]
    }
  ]
};
