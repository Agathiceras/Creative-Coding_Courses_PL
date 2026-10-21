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
    lead: "Meet the three creative mini-courses your students can take: <b>Video Editing</b>, <b>Music</b> and <b>Pixel Lab</b>. For each one you’ll see the story, the lessons, the platform — and you’ll try it on Kodland Sparks.",
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
        ["🧩", "Connected", "Some courses work together: for example, the graphics students draw in Pixel Lab can become part of the game they build in Vibe Coding."]
      ],
      catsTitle: "Two categories, two trainings",
      youAreHere: "This training",
      otherTraining: "Separate training",
      cats: [
        { icon: "🎨", name: "Creative Courses", courses: ["Video Editing", "Music", "Pixel Lab"], current: true },
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
      lmsTitle: "You’ve finished reviewing the Creative Courses!",
      lms: "<p>Return to the <b>LMS training page</b> where you accessed this training. The <b>DST test</b> is available right below the training.</p><p>👉 You must complete and pass the DST test for the training to be considered successfully completed. If you do not complete the DST test, the training will remain incomplete and may expire.</p><p>The minimum passing score is <b>80%</b>.</p><p>Good luck! ❤️</p>"
    }
  },

  courses: [

    /* ================= VIDEO EDITING ================= */
    {
      id: "video",
      icon: "🎬",
      name: "Video Editing",
      label: "Creative course",
      tagline: "The School of Bloggers: become a confident young creator — without showing your face.",
      facts: [["Age", "10–13"], ["Lessons", "32 (8 modules)"], ["Lesson length", "60 min"], ["Level", "Beginner"], ["Platform", "Kodland Sparks + Canva + CapCut"]],
      story: "<p>Students join a <b>School of Bloggers</b>. They invent a <b>faceless creator identity</b> and build short vertical videos inspired by the trends they already watch on YouTube Shorts and TikTok: hooks, fact reels, gaming clips, storytime, greenscreen commentary, AI cinematic stories and channel branding.</p><p>They start with a frame-by-frame animation of their name and a first vertical video, <i>“What’s in my head”</i>, and finish with a <b>portfolio showcase</b> of their journey as young video creators. <b>Students never need to appear on camera.</b></p>",
      programmeIntro: "8 modules of 4 lessons. Each module ends with a video published on Kodland Sparks. Open each module:",
      programme: [
        { n: "Module 1", title: "Welcome to the School of Bloggers. What’s in my head?", lessons: ["Getting to know the course. Animating your name in FlipAnim", "Signing up for Canva. First scene of the video “My name is…”", "Canva AI magic: creating an animated avatar", "Final edit and premiere on Kodland Sparks!"], result: "Students learn the basic Classroom tools, create a frame-by-frame name GIF in FlipAnim, build a multi-scene vertical video in Canva with AI tools, and publish “What’s in my head” on Kodland Sparks." },
        { n: "Module 2", title: "CapCut bootcamp. Making a viral fact reel!", lessons: ["First steps in CapCut Desktop. Building a quick working prototype", "Mastering the hook, captions and free sound effects", "Adding free AI voiceover and improving the pacing", "Final fact reel — publish to Sparks and collect feedback!"], result: "Students get to know CapCut Desktop and short-form editing basics — hooks, captions, free text-to-speech and pacing — and publish their own fact reel." },
        { n: "Module 3", title: "Gaming clip factory. Faceless highlights!", lessons: ["Creating version 1 of a gaming highlight", "Improving the picture: punch-ins, speed and overlays", "Improving sound, captions and “streamer-style” lines with AI help", "Shipping version 2 to Kodland Sparks!"], result: "Students learn to edit faceless gaming highlights in CapCut, improve a project from version 1 to version 2, and use OBS or ready-made clips as source material." },
        { n: "Module 4", title: "Storytime short. Tell it without showing your face!", lessons: ["Building the story spine with Sparks AI coaching questions", "Assembling the first storytime prototype in CapCut", "Adding B-roll, emotion pacing and free AI voice", "Finishing the payoff, adding a CTA and publishing to Sparks!"], result: "Students learn the narrative structure of a short video and create their own storytime short with AI voice and B-roll." },
        { n: "Module 5", title: "Greenscreen commentary. React, explain, persuade!", lessons: ["Copying a greenscreen commentary format", "Understanding layout, safe zones and readable captions", "Creating an original kid-safe commentary take", "Publishing to Sparks and practising respectful feedback"], result: "Students learn greenscreen and overlay commentary techniques in CapCut and create their own reaction-style short with a faceless host." },
        { n: "Module 6", title: "AI cinematic mini-story. Wow production with free AI!", lessons: ["Storyboarding six beats with the Sparks AI agent and generating AI stills", "Turning stills into motion and adding free AI video fragments when possible", "Scoring the film with free music, text-to-speech and tighter pacing", "Premiere of the AI cinematic mini-story on Kodland Sparks!"], result: "Students combine AI assets with CapCut editing to create a cinematic mini-story — and learn to finish the project even when AI video generation is limited." },
        { n: "Module 7", title: "Creator brand pack. Look like a real channel!", lessons: ["Studying consistent creator brands and extracting visual rules", "Building a brand sheet: colours, fonts, mascot and hook formulas", "Editing a new niche short that follows the brand rules", "Designing a thumbnail or cover and publishing the brand pack to Sparks!"], result: "Students learn brand consistency for young creators and produce a brand pack: a new short, a thumbnail or cover, and clear brand rules." },
        { n: "Module 8", title: "Portfolio showcase. The final creative journey!", lessons: ["Portfolio audit and choosing the final independent brief", "Creating the final independent short (tutor as coach)", "Editing the showcase reel of the creative journey", "Sharing the results of your blogging journey on Kodland Sparks!"], result: "Students refresh the skills they’ve learned, complete an independent final project, and present a portfolio showcase of their work as young video creators." }
      ],
      build: [
        ["🔤", "An animated name", "A frame-by-frame GIF of their name, made in FlipAnim in the very first lesson."],
        ["🧠", "“What’s in my head”", "A multi-scene vertical video in Canva, with an AI-animated avatar."],
        ["⚡", "A viral fact reel", "Hook, captions, sound effects and AI voiceover, edited in CapCut Desktop."],
        ["🎮", "Gaming highlights", "Faceless gaming clips, improved from version 1 to version 2."],
        ["📖", "A storytime short", "A story told without showing their face, with B-roll and AI voice."],
        ["🟩", "Greenscreen commentary", "A kid-safe reaction-style short with a faceless host."],
        ["🎞️", "An AI cinematic mini-story", "Six story beats turned into a short film with AI stills, motion and music."],
        ["🏷️", "A creator brand pack", "Brand rules, a new niche short and a thumbnail — like a real channel."]
      ],
      pl: [
        "Students don’t appear on camera, but they still talk with you: in the <b>connection check</b>, make sure their camera, microphone and sound work.",
        "Editing happens in <b>Canva</b> and <b>CapCut Desktop</b>. In the first lessons, check that the student can open the tool and move to the next card on their own.",
        "<b>AI is a production partner</b> in every module — ideas, images, voiceovers, short clips — but the student keeps the editing decisions and the final montage. Remind them of it when they call you.",
        "In the <b>closing</b>, the student shows their video and you give specific feedback: what works in the hook, the pacing, the captions — and one clear next step.",
        "At the end of each module the video is <b>published on Kodland Sparks</b>. In Module 8 you act as a <b>coach</b> while the student creates their final independent short."
      ],
      platform: {
        text: "Students edit in free tools and publish everything on <b>Kodland Sparks</b>, where they also use the <b>AI agent</b> as a production partner and collect their portfolio.",
        tools: ["Kodland Sparks", "Sparks AI agent", "FlipAnim", "Canva", "CapCut Desktop", "OBS (optional)"],
        tour: "video",
        tourText: "Open Studio, see the frame-by-frame Animation editor and the AI helper students use for ideas, images and voiceovers."
      },
      /* [icon, text] */
      requirements: [
        ["💻", "<b>A laptop or computer</b> with a keyboard and mouse — <b>not a tablet or a phone</b>"],
        ["🎙️", "<b>A microphone and a camera</b>"],
        ["📶", "<b>Internet:</b> a stable connection of at least 10 Mbit/s"],
        ["⚙️", "<b>Processor:</b> 64-bit — minimum 2 cores, 2 GHz; recommended 4 cores, 2.5 GHz"],
        ["🧠", "<b>RAM:</b> 8–16 GB"],
        ["🖥️", "<b>Operating system:</b> Windows 10/11 x64 or macOS 11.2 or later"],
        ["🌐", "<b>Browser:</b> Google Chrome installed"]
      ]
    },

    /* ================= MUSIC ================= */
    {
      id: "music",
      icon: "🎶",
      name: "Music",
      label: "Creative course",
      tagline: "Create beats, songs and game soundtracks — and think like a young music producer.",
      facts: [["Age", "10–16"], ["Lessons", "20 (5 modules)"], ["Lesson length", "60 min"], ["Level", "Beginner"], ["Platform", "Kodland Sparks"]],
      story: "<p>Music is everywhere — in games, YouTube videos, movies, apps and social media. In this course, students become <b>music producers</b>: they create their own beats, songs and soundtracks from the very first lesson.</p><p>Instead of memorising music theory first, they <b>create first and learn through practice</b>, discovering how rhythm, melody, harmony and sound design work while they produce. Each module is a new stage of their journey: <b>Beat Maker → Composer → Sound Designer → Producer → Artist</b>. They finish with a portfolio of original tracks and a <b>mini-album (EP)</b>.</p><p><b>No previous music education and no instrument</b> are needed.</p>",
      programmeIntro: "5 modules of 4 lessons. Every lesson starts with a creative challenge and ends with a finished project. Open each module:",
      programme: [
        { n: "Module 1", title: "Beat Maker — learn how music begins", lessons: ["My First Beat", "Rhythm & Groove", "Creating Melodies", "Building Chords"] },
        { n: "Module 2", title: "Composer — learn how songs are built", lessons: ["Bass Lines", "Song Structure", "Transitions & Energy", "Sound Design Basics"] },
        { n: "Module 3", title: "Music for Games & Media — create music for interactive experiences", lessons: ["Game Soundtrack", "Horror Theme", "Fantasy Adventure Music", "YouTube Intro Music"] },
        { n: "Module 4", title: "Producer — think like a real music producer", lessons: ["Sampling", "Recording Vocals & Sounds", "Remix Challenge", "Mixing & Polish"] },
        { n: "Module 5", title: "Artist — create your final release", lessons: ["Planning Your Final Track", "Production Sprint", "Final Mix & Master", "Release Party & Showcase"] }
      ],
      build: [
        ["🥁", "Their first beat", "From Lesson 1: drum patterns and rhythm, built on the grid."],
        ["🎮", "A game soundtrack", "Music for games like Roblox — plus a horror theme and a fantasy adventure."],
        ["🎬", "A YouTube intro", "A short soundtrack for a video intro."],
        ["🎤", "A remix", "A remix challenge, with sampling and recorded sounds."],
        ["🎼", "An original song", "A complete song with melody, chords, bass and structure."],
        ["💿", "A mini-album (EP)", "Their final release, presented in a showcase — and 8–10 original projects in their portfolio."]
      ],
      pl: [
        "<b>Headphones are recommended.</b> In the connection check, test the sound both ways — the student will play music during the lesson.",
        "Students <b>create first</b>: don’t start with theory. Your opening sets today’s creative challenge, and the cards guide the production.",
        "In the <b>closing</b>, ask the student to play their track and give specific feedback — on the rhythm, the melody, the energy — with one clear next step.",
        "Everything happens in the browser on <b>Kodland Sparks</b>: there’s nothing to install. Students can share their work with you and their parents.",
        "The last lesson is a <b>Release Party & Showcase</b>: the student presents their mini-album to you."
      ],
      platform: {
        text: "All projects are created inside <b>Kodland Sparks</b>, a browser-based creative platform: students create beats and songs, experiment with loops and virtual instruments, compose melodies, record sounds and vocals, edit their projects and share them. <b>No installation is needed.</b>",
        tools: ["Kodland Sparks · Music", "Loops & virtual instruments", "Microphone recording"],
        tour: "music",
        tourText: "Open Studio, start a track from a base and see how a melody, drums and tempo come together."
      },
      /* [icon, text] */
      requirements: [
        ["💻", "<b>A Windows or macOS computer</b>"],
        ["📶", "<b>Internet:</b> a stable connection"],
        ["🎧", "<b>Headphones</b> (recommended)"],
        ["🎙️", "<b>A microphone:</b> built-in or external"],
        ["🌐", "<b>Browser:</b> Chrome or another modern browser"]
      ]
    },

    /* ================= PIXEL LAB ================= */
    {
      id: "pixel",
      icon: "👾",
      name: "Pixel Lab",
      label: "Creative course",
      tagline: "Game illustrations and animations in Pixel Art style — the job of a real game artist.",
      facts: [["Age", "10+"], ["Lessons", "3 with a tutor + 1 gift self-study lesson"], ["Lesson length", "50 min"], ["Level", "Beginner"], ["Platform", "Pixel Studio on Kodland Sparks"]],
      story: "<p>Pixel Lab is a short, project-based course where students take on a <b>real game artist’s task</b>: creating the graphics for an <b>original runner game</b>.</p><p>Lesson by lesson, they go from a simple pixel object to their own animated character. They don’t copy finished images: <b>they choose the design, the colour palette, the character’s look and the style of movement</b>. They discover how a limited palette creates a consistent style, how a few frames create the illusion of movement, and how a character’s look can show their personality and abilities.</p><p>Pixel Lab is part of a bigger programme: the <b>runner game</b>, its <b>graphics</b> (Pixel Lab) and its <b>music and sound effects</b> (Sound Lab) come together in a <b>gift self-study lesson</b>, with a step-by-step video guide to combine them into the student’s own game.</p>",
      programmeIntro: "3 lessons with you, plus a gift lesson the student does on their own. Open each lesson:",
      programme: [
        { n: "Lesson 1", title: "An animated reward for the game", details: [["🛠️", "What the student does", "Creates and animates a reward for the game — a coin or another type of reward."]], result: "An animated reward, published on Kodland Sparks." },
        { n: "Lesson 2", title: "An anime-style pixel character", details: [["🛠️", "What the student does", "Designs and draws their own anime-style pixel character, connecting the character’s abilities with their look."]], result: "An original pixel character, published on Kodland Sparks." },
        { n: "Lesson 3", title: "Bring the character to life", details: [["🛠️", "What the student does", "Creates a movement animation of the character, drawing the different phases of movement, and exports it as a GIF."]], result: "A character movement animation, published on Kodland Sparks." },
        { n: "Gift lesson", title: "Self-study: build your own game", details: [["🧑‍💻", "Self-study lesson", "The student follows a step-by-step video guide to combine the graphics, the runner game and the sound into one original game."]] }
      ],
      build: [
        ["🪙", "An animated reward", "A spinning coin or another reward for the game."],
        ["🧝", "An anime-style character", "A pixel hero whose look shows their personality and abilities."],
        ["🏃", "A movement animation", "The character running, exported as a GIF."],
        ["😴", "An idle animation", "The character breathing or waiting when it isn’t moving."],
        ["🌳", "Environment elements", "Extra elements for the game world."],
        ["👹", "An obstacle or monster", "Something the hero has to avoid or defeat."]
      ],
      pl: [
        "Each lesson lasts <b>50 minutes</b>. Use your opening to set the goal of today’s asset — a reward, a character, a movement.",
        "Students choose their own design and palette. When they call you, <b>ask about their choices</b> before suggesting anything: it’s their character.",
        "Fast students? The cards include <b>additional challenges</b> — point them there during self-study.",
        "In the <b>closing</b>, the student shows their animation and you give specific feedback: the shape, the palette, the movement — and one next step.",
        "Every project is <b>published on Kodland Sparks</b>. The gift lesson is <b>self-study</b>: there’s no live session for it."
      ],
      platform: {
        text: "Pixel Lab is taught in <b>Pixel Studio</b>, inside <b>Kodland Sparks</b>: students draw pixel by pixel, shade and dither, add frames to animate, and publish each project.",
        tools: ["Kodland Sparks · Pixel Art", "Frames & GIF export"],
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
