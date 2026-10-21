/* =====================================================================
   MULTI-COURSES TRAINING · CREATIVE COURSES — CONTENT FILE (English)
   ---------------------------------------------------------------------
   TRANSLATORS: this is the ONLY file to translate for this training.
   - Translate ONLY the text inside quotes.
   - Change  lang: "en"  to your language code (it, pl…). Save as content/<code>.js
   - Do not change: key names, id / tour / track values, anything in {curly braces},
     HTML tags, emojis, links, and the numbers after  a:  (index of the right answer, 0 = first).
   - Inside the texts, never use straight quotes or apostrophes: use ’ « » „ ” instead.
   ===================================================================== */
window.MC_CONTENT = {

  lang: "en",
  track: "creative",

  ui: {
    pageTitle: "Creative Courses",
    brand: "Multi-courses · Creative Courses",
    footer: "kodland · Multi-courses training · Creative Courses",
    kicker: "Tutor training · Multi-courses",
    title1: "Creative",
    title2: "Courses",
    lead: "Meet the three creative mini-courses your students can take: <b>Video Creation</b>, <b>Sound Design</b> and <b>Pixel Art</b>. For each one you’ll see the story, the lessons, the platform — and you’ll try it on Kodland Sparks.",
    strip: ["Complete the PL training first", "What mini-courses are", "Explore the 3 courses", "Take the test in the LMS"],
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
        ["🧭", "Explore", "Students can try different subjects — video, music, pixel art, coding, science — and discover what they enjoy most."],
        ["🧩", "Connected", "Some courses work together: for example, the graphics students draw in Pixel Art can become part of the game they build in Vibe Coding."]
      ],
      catsTitle: "Two categories, two trainings",
      youAreHere: "This training",
      otherTraining: "Separate training",
      cats: [
        { icon: "🎨", name: "Creative Courses", courses: ["Video Creation", "Sound Design", "Pixel Art"], current: true },
        { icon: "💻", name: "Coding & Technology Courses", courses: ["Vibe Coding", "Science via Minecraft"], current: false }
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
      toFinal: "Finish the training →"
    },

    final: {
      title: "Finish the training",
      soonTitle: "You’ve explored all the Creative Courses!",
      soon: "<p>These courses are <b>being translated</b> right now.</p><p>As soon as they’re ready, <b>the bot will notify you</b> that the courses have been <b>enabled in BO</b>. From then on, you’ll find them — and their Teacher Notes — just like your other PL courses.</p><p>Thank you for getting ready! 💜</p>",
      lmsTitle: "One last step: the test in the LMS",
      lms: "<p>Return to the <b>LMS training page</b> where you accessed this training. The <b>DST test</b> is available right below the training.</p><p>👉 You must complete and pass the DST test for the training to be considered successfully completed. If you do not complete the DST test, the training will remain incomplete and may expire.</p><p>The minimum passing score is <b>80%</b>.</p><p>Good luck! ❤️</p>"
    }
  },

  courses: [

    /* ================= VIDEO CREATION ================= */
    {
      id: "video",
      icon: "🎬",
      name: "Video Creation",
      label: "Creative course",
      tagline: "Make short videos that people want to watch to the end — about something you love, without showing your face.",
      facts: [["Age", "10–13"], ["Lessons", "5"], ["Lesson length", "60 min"], ["Level", "Beginner"], ["Platform", "CapCut Desktop + Kodland Sparks"]],
      story: "<p>Students learn to make <b>short videos that people want to watch to the end</b>. Each video is about something they love: a game, a series, a sport, music or animals. The course is about what makes a video interesting: a <b>strong hook</b>, a <b>clear script</b>, <b>good pacing</b> and a <b>story with an ending</b>. Students also learn to edit: they cut clips on the timeline and add captions, music, sound effects, voice and transitions.</p><p><b>AI works as a script editor.</b> Students write a draft, then ask Sparks AI where it gets boring and how to make the hook stronger. They decide what to keep. Students edit in <b>CapCut Desktop</b> and use stock clips, their own gameplay and AI images from Sparks. <b>They do not need to show their face.</b></p><p>No editing experience is needed. By the end, each student has <b>five short videos</b> about their interest, a <b>channel intro</b> and a <b>final video</b> on a project page in Sparks.</p>",
      outcomes: [
        "Start a video with a hook that keeps the viewer in the first seconds.",
        "Write a short script and improve it with AI feedback.",
        "Edit a video in CapCut: cut clips on the timeline, add captions, music, sound effects, a voice and transitions, and export the result.",
        "Edit for pacing: cut what is slow, add zoom and speed changes, put sounds on the key moments.",
        "Tell a short story with a beginning, a problem and an ending, without showing their face.",
        "Use only footage they may use: their own, stock clips and AI images.",
        "Publish a video and get feedback from the tutor and other students."
      ],
      programmeIntro: "5 lessons of 60 minutes. Open each lesson:",
      programme: [
        { n: "Lesson 1", title: "My Channel and the Hook", details: [["", "Students choose the topic of their channel and draw an animated intro in Animation Studio. They learn why viewers leave in the first seconds and make a first short video in CapCut that starts with a hook. On the way they learn the basics of CapCut: import clips, cut them on the timeline, add text and music, export. They publish it and learn how publishing works."]] },
        { n: "Lesson 2", title: "The Script", details: [["", "Students make a “3 facts about…” video about their game, series or sport. They write a short script, ask Sparks AI to find the weak parts and rewrite it. Then they add a CapCut voice and captions."]] },
        { n: "Lesson 3", title: "Pacing", details: [["", "Students make a highlights video from their own gameplay or stock clips. They cut slow moments, add zoom and speed changes and put sounds on the key moments. Other students watch it and say where they got bored."]] },
        { n: "Lesson 4", title: "Storytime", details: [["", "Students tell a short story about their hobby, with a beginning, a problem and an ending. They plan it with AI, then build it from a voice, stock clips and AI images. Nobody needs to show their face."]] },
        { n: "Lesson 5", title: "Final Project: My Best Video", details: [["", "Students plan, write and edit a new video on their own and use everything from lessons 1–4. They make a cover, publish the video on a project page in Sparks and show it to the tutor and other students."]] }
      ],
      build: [
        ["🎞️", "A channel intro", "An animated intro for their channel, drawn in Animation Studio in lesson 1."],
        ["🪝", "A video with a hook", "Their first short video in CapCut, starting with a hook and published in lesson 1."],
        ["🔢", "A “3 facts about…” video", "A script improved with Sparks AI feedback, with a CapCut voice and captions."],
        ["⚡", "A highlights video", "Slow moments cut, zoom and speed changes added, and sounds on the key moments."],
        ["📖", "A storytime video", "A story with a beginning, a problem and an ending, built from a voice, stock clips and AI images."],
        ["🏆", "My Best Video", "A new video planned, written and edited on their own, with a cover, on a project page in Sparks."]
      ],
      pl: [
        "Students don’t appear on camera in their videos, but they still talk with you: in the <b>connection check</b>, make sure their camera, microphone and sound work.",
        "Editing happens in <b>CapCut Desktop</b>, and the channel intro in <b>Animation Studio</b>. In the first lessons, check that the student can open the tool and move to the next card on their own.",
        "<b>AI is a script editor, not the author.</b> Students write a draft, ask Sparks AI where it gets boring, and <b>they decide what to keep</b>. Remind them of it when they call you.",
        "In the <b>closing</b>, the student shows their video and you give specific feedback: what works in the hook, the pacing, the captions — and one clear next step.",
        "Students publish a <b>link to their video</b> on a project page in Sparks. The video can be on YouTube, Vimeo or Canva; if a student is too young for an account, the video goes on a parent’s account."
      ],
      platform: {
        text: "Students edit in <b>CapCut Desktop</b> and draw their channel intro in <b>Animation Studio</b>. They use stock clips, their own gameplay and AI images from <b>Kodland Sparks</b>, where <b>Sparks AI</b> also works as a script editor and where each student builds a project page.<br><br><b>Publishing.</b> Students publish a link to their video on a project page in Sparks. The video can be on YouTube, Vimeo or Canva. If a student is too young for an account on one of these sites, the video goes on a parent’s account.",
        tools: ["CapCut Desktop", "Animation Studio", "Sparks AI", "Kodland Sparks · Project page", "Google Chrome"],
        tour: "video",
        tourText: "Open Studio, see the frame-by-frame Animation editor and the AI helper students use for ideas, images and voiceovers."
      },
      /* [icon, text] */
      requirements: [
        ["💻", "<b>Device:</b> a laptop or desktop computer with a keyboard and mouse — <b>not a tablet or a phone</b>"],
        ["🖥️", "<b>Operating system:</b> Windows 10/11 (64-bit) or macOS 11.2 and later"],
        ["🧠", "<b>RAM:</b> 8–16 GB"],
        ["⚙️", "<b>Processor:</b> at least 2 cores at 2 GHz; 4 cores at 2.5 GHz recommended"],
        ["📶", "<b>Internet:</b> a stable connection of at least 10 Mbps"],
        ["🌐", "<b>Software:</b> Google Chrome and CapCut Desktop — <b>install CapCut before the first lesson</b>"],
        ["🎙️", "<b>Microphone and camera:</b> needed for the online lesson. Students don’t record their face in the course."]
      ]
    },

    /* ================= SOUND DESIGN ================= */
    {
      id: "music",
      icon: "🎶",
      name: "Sound Design",
      label: "Creative course",
      tagline: "Make all the audio for a runner game — menu music, event sounds and level themes — without reading music.",
      facts: [["Lessons", "5"], ["Lesson length", "60 min"], ["Level", "Beginner"], ["Platform", "Music Studio (in the browser)"]],
      story: "<p>Students learn <b>sound design</b> by making all the audio for a <b>runner game</b>: menu music, event sounds, the main level theme and themes with different moods.</p><p>They <b>create first and learn the theory along the way</b>: they try rhythm, melody and chords themselves in <b>Music Studio</b>, right in the browser. <b>No music reading or instrument skills</b> are needed. By the end, each student has a <b>ready audio pack</b> for the runner and a project page in Sparks.</p>",
      outcomes: [
        "Build rhythm and melody in Music Studio without reading music.",
        "Make short sounds that tell the player what happened: a jump, a reward, a mistake.",
        "Change the mood of a track with chords and bass.",
        "Polish a track: listen, compare versions, remove what is extra.",
        "Publish the audio pack and build a project page in Sparks."
      ],
      programmeIntro: "5 lessons of 60 minutes. Open each lesson:",
      programme: [
        { n: "Lesson 1", title: "Menu Music", details: [["", "Students choose the mood of the runner and make a calm loop for the menu or pause screen. The loop must repeat without a break."]] },
        { n: "Lesson 2", title: "Event Sounds", details: [["", "Jump, coin, crash, speed boost. Students make short signals and check that you can tell them apart without the picture."]] },
        { n: "Lesson 3", title: "Main Level Theme", details: [["", "A fast loop for running: tempo, rhythm and melody give a feeling of speed. Students learn not to overload the track."]] },
        { n: "Lesson 4", title: "Level Mood: Horror and Fantasy", details: [["", "The instruments stay the same, the chords and bass change. Students make two versions of the theme, a tense one for a dark level and a bright one for a fantasy village, and hear how the mood changes."]] },
        { n: "Lesson 5", title: "Final Project: Project Page", details: [["", "Students balance the volume of the tracks, name each sound, put the audio pack on a project page in Sparks and show it to the tutor and other students."]] }
      ],
      build: [
        ["🎵", "A menu loop", "A calm loop for the menu or pause screen that repeats without a break."],
        ["🔔", "Event sounds", "Jump, coin, crash and speed boost — short signals you can tell apart without the picture."],
        ["🏃", "A main level theme", "A fast loop where tempo, rhythm and melody give a feeling of speed."],
        ["🌗", "Two level moods", "The same theme in a tense horror version and a bright fantasy version."],
        ["🎚️", "A balanced audio pack", "Tracks with balanced volume and each sound clearly named."],
        ["🗂️", "A project page in Sparks", "The whole audio pack, shown to the tutor and other students."]
      ],
      pl: [
        "In the <b>connection check</b>, test the sound both ways — students listen to their tracks and compare versions all through the lesson.",
        "Students <b>create first</b>: don’t start with theory. Your opening sets today’s creative challenge, and the cards guide the production.",
        "In lesson 2, check that the event sounds <b>can be told apart without the picture</b>. In lesson 3, remind students not to overload the track.",
        "In the <b>closing</b>, ask the student to play their track and give specific feedback — on the rhythm, the melody, the mood — with one clear next step.",
        "Everything happens in <b>Music Studio</b>, right in the browser. In lesson 5, students balance the volume, name each sound and put the audio pack on a project page in Sparks."
      ],
      platform: {
        text: "Students work in <b>Music Studio</b>, right in the browser: they try rhythm, melody and chords themselves, and put their audio pack on a project page in <b>Kodland Sparks</b>. No music reading or instrument skills are needed.",
        tools: ["Music Studio", "Kodland Sparks · Project page"],
        tour: "music",
        tourText: "Open Studio, start a track from a base and see how a melody, drums and tempo come together."
      }
    },

    /* ================= PIXEL ART ================= */
    {
      id: "pixel",
      icon: "👾",
      name: "Pixel Art",
      label: "Creative course",
      tagline: "Draw the graphics for a runner game: a hero, a reward, obstacles and enemies.",
      facts: [["Lessons", "5"], ["Lesson length", "60 min"], ["Level", "Beginner"], ["Platform", "Pixel Studio (in the browser) + Kodland Sparks"]],
      story: "<p>Students learn <b>pixel art</b> by making graphics for a <b>runner game</b>. They start with a simple animation of a reward coin. Then they design an <b>anime-style hero</b>, draw it and make it move. Next they draw obstacles and enemies, and at the end they put all the graphics on a project page in Sparks.</p><p>They work in <b>Pixel Studio</b> right in the browser. <b>No drawing experience is needed.</b> By the end, each student has a ready set of game graphics: a hero, a reward, obstacles and enemies.</p>",
      outcomes: [
        "Draw pixel objects from simple shapes and work with a limited palette.",
        "Add shadows, highlights and dithering.",
        "Design an anime-style hero whose look shows their character and abilities.",
        "Make frame-by-frame animation and export it as a GIF.",
        "Publish a set of game graphics and build a project page in Sparks."
      ],
      programmeIntro: "5 lessons of 60 minutes. Open each lesson:",
      programme: [
        { n: "Lesson 1", title: "Animating a Reward Coin", details: [["", "Students get to know Pixel Studio: outline, fill, shadows and highlights. They draw their own coin and make it spin in a few frames."]] },
        { n: "Lesson 2", title: "Anime Hero", details: [["", "Students come up with a hero, pick a palette and draw the hero on a 64×64 canvas, from a template or from scratch. They try dithering."]] },
        { n: "Lesson 3", title: "Hero Animation", details: [["", "Two step poses for a walk cycle and an idle animation where the hero stands and breathes. Students put the animation together as a GIF."]] },
        { n: "Lesson 4", title: "Obstacles and Enemies", details: [["", "Students draw an obstacle and an enemy in the style of their hero, then animate the enemy in 2–3 frames."]] },
        { n: "Lesson 5", title: "Final Project: Project Page", details: [["", "Students draw 2–3 environment items and check that all graphics use one palette and one scale. Then they put everything on a project page in Sparks and show it to the tutor and other students."]] }
      ],
      build: [
        ["🪙", "An animated reward coin", "A coin the student draws and makes spin in a few frames."],
        ["🧝", "An anime-style hero", "A hero drawn on a 64×64 canvas, whose look shows their character and abilities."],
        ["🏃", "A walk cycle and an idle animation", "Two step poses for walking, and a hero who stands and breathes — put together as a GIF."],
        ["👹", "An obstacle and an enemy", "Drawn in the style of the hero, with the enemy animated in 2–3 frames."],
        ["🌳", "Environment items", "2–3 items for the game world, checked to use one palette and one scale."],
        ["🗂️", "A project page in Sparks", "All the graphics together, shown to the tutor and other students."]
      ],
      pl: [
        "Each lesson lasts <b>60 minutes</b>. Use your opening to set the goal of today’s graphic — a coin, a hero, an animation, an enemy.",
        "Students choose their own design and palette. When they call you, <b>ask about their choices</b> before suggesting anything: it’s their character.",
        "Fast students? The cards include <b>additional challenges</b> — point them there during self-study.",
        "In the <b>closing</b>, the student shows their animation and you give specific feedback: the shape, the palette, the movement — and one next step.",
        "In lesson 5, check that all graphics use <b>one palette and one scale</b> before the student puts them on a project page in <b>Kodland Sparks</b>."
      ],
      platform: {
        text: "Students draw in <b>Pixel Studio</b>, right in the browser: they work pixel by pixel, add shadows, highlights and dithering, add frames to animate, and export GIFs. At the end they build a project page in <b>Kodland Sparks</b>.",
        tools: ["Pixel Studio", "Kodland Sparks · Pixel Art", "Frames & GIF export"],
        tour: "pixel",
        tourText: "Open Studio, pick a canvas size and see the tools students use to draw and animate their game graphics."
      },
      /* Student projects published on Kodland Sparks: href, img, tag, title, by (nickname), desc. pixel: true = show the image pixel-sharp */
      projects: [
        { href: "https://portfolio-service-production-9e98.up.railway.app/Toska/cmrlwkvqc03ohnw3fkv2hz6gn", img: "../images/proj_ruuun.gif", pixel: true, tag: "GIF", title: "Ruuun", by: "Toska",
          desc: "An anime-style pixel hero with an expressive face and a walking animation — the movement animation of Lesson 3." },
        { href: "https://portfolio-service-production-9e98.up.railway.app/Toska/cmrkfuvg70i3jp13f688lhyfs", img: "../images/pixel_3.gif", pixel: true, tag: "GIF", title: "monster", by: "Toska",
          desc: "A ghost monster for the game, in three frames: its changing expressions give it personality." }
      ],
      /* More examples: [image, caption] */
      gallery: {
        intro: "More assets from the course — rewards for the runner game:",
        items: [["../images/pixel_1.gif", "🪙 An animated coin"], ["../images/pixel_2.gif", "💎 An animated gem"]]
      }
    }
  ]
};
