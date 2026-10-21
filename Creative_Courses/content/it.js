/* =====================================================================
   MULTI-COURSES TRAINING · CREATIVE COURSES — CONTENT FILE (Italiano)
   ---------------------------------------------------------------------
   Traduzione di content/en.js. Non modificare: nomi delle chiavi, valori id / tour / track,
   nulla tra {parentesi graffe}, tag HTML, emoji, link, né i numeri dopo  a:
   Nei testi non usare mai virgolette o apostrofi dritti: usare ’ « » „ ” .
   ===================================================================== */
window.MC_CONTENT = {

  lang: "it",
  track: "creative",
  region: "Italia",

  ui: {
    pageTitle: "Creative Courses",
    brand: "Multi-courses · Creative Courses",
    footer: "kodland · Formazione Multi-courses · Creative Courses",
    kicker: "Formazione tutor · Multi-courses",
    title1: "Creative",
    title2: "Courses",
    lead: "Scopri i tre mini-corsi creativi che i tuoi studenti possono frequentare: <b>Video Creation</b>, <b>Sound Design</b> e <b>Pixel Art</b>. Per ognuno vedrai la storia, le lezioni, la piattaforma — e li proverai su Kodland Sparks.",
    strip: ["Completa prima la formazione sul PL", "Cosa sono i mini-corsi", "Esplora i 3 corsi", "Svolgi il test nell’LMS"],
    flipHint: "Tocca per girare",
    progress: "{done}/{total} corsi visti",

    pl: {
      title: "Prima di iniziare",
      text: "Tutti questi corsi si svolgono nel formato <b>Parallel Lessons (PL)</b>: tu apri e chiudi la lezione di ogni studente, e gli studenti lavorano in autonomia con le schede nel mezzo. Questa formazione non spiega di nuovo il formato, quindi <b>completa prima la formazione su Parallel Lessons</b>.",
      check: "Ho completato la formazione su Parallel Lessons",
      ok: "✅ Perfetto — la formazione è sbloccata. Scorri verso il basso per iniziare.",
      locked: "Completa prima la formazione su Parallel Lessons, poi spunta la casella qui sopra per sbloccare questa formazione."
    },

    mini: {
      title: "Cosa sono i mini-corsi?",
      intro: "I <b>Multi-courses</b> offrono agli studenti la possibilità di esplorare materie diverse attraverso <b>corsi più brevi e incentrati su un tema</b>, invece di impegnarsi in un unico programma educativo lungo. Gira le carte:",
      cards: [
        ["⏱️", "Più brevi", "Ogni corso è breve e incentrato su un solo tema, così gli studenti arrivano in fretta a un progetto concreto e finito."],
        ["🧭", "Esplora", "Gli studenti possono provare materie diverse — video, musica, pixel art, coding, scienze — e scoprire cosa piace loro di più."],
        ["🧩", "Collegati", "Alcuni corsi lavorano insieme: per esempio, la grafica che gli studenti disegnano in Pixel Art può diventare parte del gioco che costruiscono in Vibe Coding."]
      ],
      catsTitle: "Due categorie, due formazioni",
      youAreHere: "Questa formazione",
      otherTraining: "Formazione separata",
      cats: [
        { icon: "🎨", name: "Creative Courses", courses: ["Video Creation", "Sound Design", "Pixel Art"], current: true },
        { icon: "💻", name: "Coding & Technology Courses", courses: ["Vibe Coding", "Science via Minecraft"], current: false }
      ],
      pl: "<b>Si svolgono nel formato PL.</b> Tutto ciò che hai imparato nella formazione su Parallel Lessons vale anche qui: aperture e chiusure individuali, lavoro autonomo con le schede, aiuto quando uno studente alza la mano e feedback nella chiusura."
    },

    courses: {
      title: "Esplora i corsi",
      intro: "Apri ogni corso e scorri le sue sezioni: la storia, le lezioni, i progetti, la piattaforma e i requisiti tecnici.",
      seen: "✓ Visto",
      toSee: "Esplora →"
    },

    course: {
      story: "📖 La storia del corso",
      programme: "🗂️ Lezioni",
      outcomes: "🎯 Obiettivi di apprendimento",
      build: "🏆 Cosa creano gli studenti",
      pl: "⚡ Nelle tue lezioni parallele",
      platform: "🖥️ Piattaforma e strumenti",
      requirements: "Requisiti tecnici",
      requirementsIntro: "Verificali prima della prima lezione — e nel controllo della connessione, se qualcosa non funziona.",
      examples: "👀 Progetti realizzati dagli studenti",
      projOpen: "Apri il progetto ↗",
      tourTitle: "Provalo su Kodland Sparks",
      tourTodo: "Non ancora fatto",
      tourDone: "✓ Tour completato",
      tourStart: "▶ Avvia il tour di Sparks",
      tourHint: "In questa finestra si apre una replica interattiva di Kodland Sparks.",
      tourFull: "Apri il tour a schermo intero ↗",
      endText: "Hai raggiunto la fine di {name}.",
      next: "Corso successivo: {name} →",
      toFinal: "Concludi la formazione →",
      boTitle: "Il corso nel BO",
      boText: "Link a questo corso nel BO (regione: {region}).",
      boBtn: "🔗 Apri il corso {id} nel BO ↗"
    },

    final: {
      title: "Concludi la formazione",
      soonTitle: "Hai esplorato tutti i Creative Courses!",
      soon: "<p>Questi corsi sono <b>in fase di traduzione</b> proprio ora.</p><p>Non appena saranno pronti, <b>il bot ti avviserà</b> che i corsi sono stati <b>abilitati nel BO</b>. Da quel momento li troverai — insieme alle loro Teacher Notes — come gli altri tuoi corsi PL.</p><p>Grazie per la tua preparazione! 💜</p>",
      lmsTitle: "Ultimo passo: il test nell’LMS",
      lms: "<p>Torna alla <b>pagina della formazione nell’LMS</b> da cui hai aperto questa formazione. Subito sotto la formazione trovi il <b>test DST</b>.</p><p>👉 Devi completare e superare il test DST perché la formazione sia considerata completata con successo. Se non completi il test DST, la formazione resterà incompleta e potrebbe scadere.</p><p>Il punteggio minimo per superarlo è <b>80%</b>.</p><p>Buona fortuna! ❤️</p>"
    }
  },

  courses: [

    /* ================= VIDEO CREATION ================= */
    {
      id: "video",
      icon: "🎬",
      name: "Video Creation",
      label: "Corso creativo",
      tagline: "Crea video brevi che le persone vogliono guardare fino alla fine — su qualcosa che ami, senza mostrare il tuo volto.",
      facts: [["Età", "10–13"], ["Lezioni", "5"], ["Durata della lezione", "60 min"], ["Livello", "Principiante"], ["Piattaforma", "CapCut Desktop + Kodland Sparks"]],
      story: "<p>Gli studenti imparano a creare <b>video brevi che le persone vogliono guardare fino alla fine</b>. Ogni video parla di qualcosa che amano: un gioco, una serie, uno sport, la musica o gli animali. Il corso riguarda ciò che rende interessante un video: un <b>hook forte</b>, uno <b>script chiaro</b>, un <b>buon ritmo</b> e una <b>storia con un finale</b>. Gli studenti imparano anche a montare: tagliano le clip sulla timeline e aggiungono sottotitoli, musica, effetti sonori, voce e transizioni.</p><p><b>L’IA funziona come editor dello script.</b> Gli studenti scrivono una bozza, poi chiedono a Sparks AI dove diventa noiosa e come rendere l’hook più forte. Sono loro a decidere cosa tenere. Gli studenti montano in <b>CapCut Desktop</b> e usano clip stock, il proprio gameplay e immagini IA di Sparks. <b>Non devono mostrare il proprio volto.</b></p><p>Non serve alcuna esperienza di montaggio. Alla fine, ogni studente ha <b>cinque video brevi</b> sul proprio interesse, un’<b>intro del canale</b> e un <b>video finale</b> su una pagina del progetto in Sparks.</p>",
      outcomes: [
        "Iniziare un video con un hook che trattiene lo spettatore nei primi secondi.",
        "Scrivere un breve script e migliorarlo con il feedback dell’IA.",
        "Montare un video in CapCut: tagliare le clip sulla timeline, aggiungere sottotitoli, musica, effetti sonori, una voce e transizioni, ed esportare il risultato.",
        "Montare pensando al ritmo: tagliare ciò che è lento, aggiungere zoom e cambi di velocità, mettere i suoni sui momenti chiave.",
        "Raccontare una breve storia con un inizio, un problema e un finale, senza mostrare il proprio volto.",
        "Usare solo materiale che si può usare: il proprio, clip stock e immagini IA.",
        "Pubblicare un video e ricevere feedback dal tutor e dagli altri studenti."
      ],
      bo: { id: "2188", url: "https://bo.kodland.org/courses/2188", note: "Nel BO, le prime lezioni di questo corso verranno aggiunte durante la settimana del 19 ottobre 2026." },
      programmeIntro: "5 lezioni da 60 minuti. Apri ogni lezione:",
      programme: [
        { n: "Lezione 1", title: "Il mio canale e l’hook", details: [["", "Gli studenti scelgono l’argomento del loro canale e disegnano un’intro animata in Animation Studio. Scoprono perché gli spettatori se ne vanno nei primi secondi e realizzano in CapCut un primo video breve che inizia con un hook. Lungo il percorso imparano le basi di CapCut: importare le clip, tagliarle sulla timeline, aggiungere testo e musica, esportare. Lo pubblicano e scoprono come funziona la pubblicazione."]] },
        { n: "Lezione 2", title: "Lo script", details: [["", "Gli studenti realizzano un video «3 fatti su…» sul loro gioco, serie o sport. Scrivono un breve script, chiedono a Sparks AI di trovare i punti deboli e lo riscrivono. Poi aggiungono una voce di CapCut e i sottotitoli."]] },
        { n: "Lezione 3", title: "Il ritmo", details: [["", "Gli studenti realizzano un video di highlights con il proprio gameplay o con clip stock. Tagliano i momenti lenti, aggiungono zoom e cambi di velocità e mettono i suoni sui momenti chiave. Gli altri studenti lo guardano e dicono dove si sono annoiati."]] },
        { n: "Lezione 4", title: "Storytime", details: [["", "Gli studenti raccontano una breve storia sul loro hobby, con un inizio, un problema e un finale. La pianificano con l’IA, poi la costruiscono con una voce, clip stock e immagini IA. Nessuno deve mostrare il proprio volto."]] },
        { n: "Lezione 5", title: "Progetto finale: il mio video migliore", details: [["", "Gli studenti pianificano, scrivono e montano da soli un nuovo video, usando tutto ciò che hanno imparato nelle lezioni 1–4. Creano una copertina, pubblicano il video su una pagina del progetto in Sparks e lo mostrano al tutor e agli altri studenti."]] }
      ],
      build: [
        ["🎞️", "Un’intro del canale", "Un’intro animata per il loro canale, disegnata in Animation Studio nella lezione 1."],
        ["🪝", "Un video con un hook", "Il loro primo video breve in CapCut, che inizia con un hook e viene pubblicato nella lezione 1."],
        ["🔢", "Un video «3 fatti su…»", "Uno script migliorato con il feedback di Sparks AI, con una voce di CapCut e i sottotitoli."],
        ["⚡", "Un video di highlights", "Momenti lenti tagliati, zoom e cambi di velocità aggiunti e suoni sui momenti chiave."],
        ["📖", "Un video storytime", "Una storia con un inizio, un problema e un finale, costruita con una voce, clip stock e immagini IA."],
        ["🏆", "Il mio video migliore", "Un nuovo video pianificato, scritto e montato da soli, con una copertina, su una pagina del progetto in Sparks."]
      ],
      pl: [
        "Gli studenti non compaiono davanti alla camera nei loro video, ma parlano comunque con te: nel <b>controllo della connessione</b> verifica che la loro videocamera, il microfono e l’audio funzionino.",
        "Il montaggio avviene in <b>CapCut Desktop</b>, e l’intro del canale in <b>Animation Studio</b>. Nelle prime lezioni verifica che lo studente riesca ad aprire lo strumento e a passare alla scheda successiva da solo.",
        "<b>L’IA è un editor dello script, non l’autore.</b> Gli studenti scrivono una bozza, chiedono a Sparks AI dove diventa noiosa e <b>decidono loro cosa tenere</b>. Ricordaglielo quando ti chiamano.",
        "Nella <b>chiusura</b>, lo studente mostra il suo video e tu dai un feedback specifico: cosa funziona nell’hook, nel ritmo, nei sottotitoli — e un chiaro passo successivo.",
        "Gli studenti pubblicano un <b>link al loro video</b> su una pagina del progetto in Sparks. Il video può essere su YouTube, Vimeo o Canva; se uno studente è troppo giovane per avere un account, il video va sull’account di un genitore."
      ],
      platform: {
        text: "Gli studenti montano in <b>CapCut Desktop</b> e disegnano l’intro del canale in <b>Animation Studio</b>. Usano clip stock, il proprio gameplay e immagini IA di <b>Kodland Sparks</b>, dove <b>Sparks AI</b> funziona anche come editor dello script e dove ogni studente crea una pagina del progetto.<br><br><b>Pubblicazione.</b> Gli studenti pubblicano un link al loro video su una pagina del progetto in Sparks. Il video può essere su YouTube, Vimeo o Canva. Se uno studente è troppo giovane per avere un account su uno di questi siti, il video va sull’account di un genitore.",
        tools: ["CapCut Desktop", "Animation Studio", "Sparks AI", "Kodland Sparks · Pagina del progetto", "Google Chrome"],
        tour: "video",
        tourText: "Apri Studio, guarda l’editor di animazione fotogramma per fotogramma e l’assistente IA che gli studenti usano per idee, immagini e voci fuori campo."
      },
      /* [icon, text] */
      requirements: [
        ["💻", "<b>Dispositivo:</b> un computer portatile o fisso con tastiera e mouse — <b>non un tablet né uno smartphone</b>"],
        ["🖥️", "<b>Sistema operativo:</b> Windows 10/11 (64 bit) o macOS 11.2 e successivi"],
        ["🧠", "<b>RAM:</b> 8–16 GB"],
        ["⚙️", "<b>Processore:</b> almeno 2 core a 2 GHz; consigliati 4 core a 2,5 GHz"],
        ["📶", "<b>Internet:</b> connessione stabile di almeno 10 Mbps"],
        ["🌐", "<b>Software:</b> Google Chrome e CapCut Desktop — <b>CapCut va installato prima della prima lezione</b>"],
        ["🎙️", "<b>Microfono e videocamera:</b> necessari per la lezione online. Nel corso gli studenti non registrano il proprio volto."]
      ]
    },

    /* ================= SOUND DESIGN ================= */
    {
      id: "music",
      icon: "🎶",
      name: "Sound Design",
      label: "Corso creativo",
      tagline: "Crea tutto l’audio di un gioco runner — musica del menu, suoni degli eventi e temi dei livelli — senza saper leggere la musica.",
      facts: [["Lezioni", "5"], ["Durata della lezione", "60 min"], ["Livello", "Principiante"], ["Piattaforma", "Music Studio (nel browser)"]],
      story: "<p>Gli studenti imparano il <b>sound design</b> creando tutto l’audio di un <b>gioco runner</b>: la musica del menu, i suoni degli eventi, il tema principale del livello e temi con atmosfere diverse.</p><p><b>Prima creano e imparano la teoria strada facendo</b>: sperimentano da soli ritmo, melodia e accordi in <b>Music Studio</b>, direttamente nel browser. <b>Non servono né la lettura della musica né la conoscenza di uno strumento.</b> Alla fine, ogni studente ha un <b>pacchetto audio pronto</b> per il runner e una pagina del progetto in Sparks.</p>",
      outcomes: [
        "Costruire ritmo e melodia in Music Studio senza leggere la musica.",
        "Creare suoni brevi che dicono al giocatore cosa è successo: un salto, una ricompensa, un errore.",
        "Cambiare l’atmosfera di un brano con accordi e basso.",
        "Rifinire un brano: ascoltare, confrontare le versioni, eliminare il superfluo.",
        "Pubblicare il pacchetto audio e creare una pagina del progetto in Sparks."
      ],
      bo: { id: "2106", url: "https://bo.kodland.org/courses/2106" },
      programmeIntro: "5 lezioni da 60 minuti. Apri ogni lezione:",
      programme: [
        { n: "Lezione 1", title: "Musica del menu", details: [["", "Gli studenti scelgono l’atmosfera del runner e creano un loop calmo per la schermata del menu o della pausa. Il loop deve ripetersi senza interruzioni."]] },
        { n: "Lezione 2", title: "Suoni degli eventi", details: [["", "Salto, moneta, schianto, turbo di velocità. Gli studenti creano brevi segnali e verificano che si distinguano anche senza vedere l’immagine."]] },
        { n: "Lezione 3", title: "Tema principale del livello", details: [["", "Un loop veloce per la corsa: tempo, ritmo e melodia danno la sensazione di velocità. Gli studenti imparano a non sovraccaricare il brano."]] },
        { n: "Lezione 4", title: "Atmosfera del livello: horror e fantasy", details: [["", "Gli strumenti restano gli stessi, cambiano gli accordi e il basso. Gli studenti creano due versioni del tema, una tesa per un livello buio e una luminosa per un villaggio fantasy, e sentono come cambia l’atmosfera."]] },
        { n: "Lezione 5", title: "Progetto finale: pagina del progetto", details: [["", "Gli studenti bilanciano il volume dei brani, danno un nome a ogni suono, mettono il pacchetto audio su una pagina del progetto in Sparks e lo mostrano al tutor e agli altri studenti."]] }
      ],
      build: [
        ["🎵", "Un loop per il menu", "Un loop calmo per la schermata del menu o della pausa, che si ripete senza interruzioni."],
        ["🔔", "Suoni degli eventi", "Salto, moneta, schianto e turbo di velocità — segnali brevi che si distinguono anche senza vedere l’immagine."],
        ["🏃", "Un tema principale del livello", "Un loop veloce in cui tempo, ritmo e melodia danno la sensazione di velocità."],
        ["🌗", "Due atmosfere del livello", "Lo stesso tema in una versione horror tesa e in una versione fantasy luminosa."],
        ["🎚️", "Un pacchetto audio bilanciato", "Brani con il volume bilanciato e ogni suono con un nome chiaro."],
        ["🗂️", "Una pagina del progetto in Sparks", "L’intero pacchetto audio, mostrato al tutor e agli altri studenti."]
      ],
      pl: [
        "Nel <b>controllo della connessione</b> prova l’audio in entrambe le direzioni — gli studenti ascoltano i loro brani e confrontano le versioni per tutta la lezione.",
        "Gli studenti <b>creano prima</b>: non iniziare con la teoria. La tua apertura propone la sfida creativa di oggi e le schede guidano la produzione.",
        "Nella lezione 2 verifica che i suoni degli eventi <b>si distinguano anche senza vedere l’immagine</b>. Nella lezione 3 ricorda agli studenti di non sovraccaricare il brano.",
        "Nella <b>chiusura</b> chiedi allo studente di far ascoltare il suo brano e dai un feedback specifico — su ritmo, melodia, atmosfera — con un chiaro passo successivo.",
        "Tutto avviene in <b>Music Studio</b>, direttamente nel browser. Nella lezione 5 gli studenti bilanciano il volume, danno un nome a ogni suono e mettono il pacchetto audio su una pagina del progetto in Sparks."
      ],
      platform: {
        text: "Gli studenti lavorano in <b>Music Studio</b>, direttamente nel browser: sperimentano da soli ritmo, melodia e accordi e mettono il loro pacchetto audio su una pagina del progetto in <b>Kodland Sparks</b>. Non servono né la lettura della musica né la conoscenza di uno strumento.",
        tools: ["Music Studio", "Kodland Sparks · Pagina del progetto"],
        tour: "music",
        tourText: "Apri Studio, avvia un brano da una base e guarda come si uniscono melodia, batteria e tempo."
      }
    },

    /* ================= PIXEL ART ================= */
    {
      id: "pixel",
      icon: "👾",
      name: "Pixel Art",
      label: "Corso creativo",
      tagline: "Disegna la grafica di un gioco runner: un eroe, una ricompensa, ostacoli e nemici.",
      facts: [["Lezioni", "5"], ["Durata della lezione", "60 min"], ["Livello", "Principiante"], ["Piattaforma", "Pixel Studio (nel browser) + Kodland Sparks"]],
      story: "<p>Gli studenti imparano la <b>pixel art</b> realizzando la grafica di un <b>gioco runner</b>. Iniziano con una semplice animazione di una moneta-ricompensa. Poi progettano un <b>eroe in stile anime</b>, lo disegnano e lo fanno muovere. Quindi disegnano ostacoli e nemici e, alla fine, mettono tutta la grafica su una pagina del progetto in Sparks.</p><p>Lavorano in <b>Pixel Studio</b> direttamente nel browser. <b>Non serve alcuna esperienza di disegno.</b> Alla fine, ogni studente ha una serie completa di grafiche di gioco: un eroe, una ricompensa, ostacoli e nemici.</p>",
      outcomes: [
        "Disegnare oggetti in pixel a partire da forme semplici e lavorare con una palette limitata.",
        "Aggiungere ombre, luci e dithering.",
        "Progettare un eroe in stile anime il cui aspetto mostri il suo carattere e le sue abilità.",
        "Creare un’animazione fotogramma per fotogramma ed esportarla come GIF.",
        "Pubblicare un set di grafiche di gioco e creare una pagina del progetto in Sparks."
      ],
      bo: { id: "2104", url: "https://bo.kodland.org/courses/2104" },
      programmeIntro: "5 lezioni da 60 minuti. Apri ogni lezione:",
      programme: [
        { n: "Lezione 1", title: "Animare una moneta-ricompensa", details: [["", "Gli studenti conoscono Pixel Studio: contorno, riempimento, ombre e luci. Disegnano la propria moneta e la fanno girare in pochi fotogrammi."]] },
        { n: "Lezione 2", title: "Eroe in stile anime", details: [["", "Gli studenti inventano un eroe, scelgono una palette e lo disegnano su una tela 64×64, partendo da un modello o da zero. Provano il dithering."]] },
        { n: "Lezione 3", title: "Animazione dell’eroe", details: [["", "Due pose di passo per un ciclo di camminata e un’animazione idle in cui l’eroe sta fermo e respira. Gli studenti mettono insieme l’animazione come GIF."]] },
        { n: "Lezione 4", title: "Ostacoli e nemici", details: [["", "Gli studenti disegnano un ostacolo e un nemico nello stile del loro eroe, poi animano il nemico in 2–3 fotogrammi."]] },
        { n: "Lezione 5", title: "Progetto finale: pagina del progetto", details: [["", "Gli studenti disegnano 2–3 elementi dell’ambiente e verificano che tutta la grafica usi una sola palette e una sola scala. Poi mettono tutto su una pagina del progetto in Sparks e la mostrano al tutor e agli altri studenti."]] }
      ],
      build: [
        ["🪙", "Una moneta-ricompensa animata", "Una moneta che lo studente disegna e fa girare in pochi fotogrammi."],
        ["🧝", "Un eroe in stile anime", "Un eroe disegnato su una tela 64×64, il cui aspetto mostra il suo carattere e le sue abilità."],
        ["🏃", "Un ciclo di camminata e un’animazione idle", "Due pose di passo per camminare e un eroe che sta fermo e respira — messi insieme come GIF."],
        ["👹", "Un ostacolo e un nemico", "Disegnati nello stile dell’eroe, con il nemico animato in 2–3 fotogrammi."],
        ["🌳", "Elementi dell’ambiente", "2–3 elementi per il mondo di gioco, verificati per usare una sola palette e una sola scala."],
        ["🗂️", "Una pagina del progetto in Sparks", "Tutta la grafica insieme, mostrata al tutor e agli altri studenti."]
      ],
      pl: [
        "Ogni lezione dura <b>60 minuti</b>. Usa la tua apertura per fissare l’obiettivo della grafica di oggi — una moneta, un eroe, un’animazione, un nemico.",
        "Gli studenti scelgono il proprio design e la propria palette. Quando ti chiamano, <b>chiedi delle loro scelte</b> prima di suggerire qualsiasi cosa: è il loro personaggio.",
        "Studenti veloci? Le schede includono <b>sfide aggiuntive</b> — indirizzali lì durante il lavoro autonomo.",
        "Nella <b>chiusura</b> lo studente mostra la sua animazione e tu dai un feedback specifico: la forma, la palette, il movimento — e un passo successivo.",
        "Nella lezione 5 verifica che tutta la grafica usi <b>una sola palette e una sola scala</b> prima che lo studente la metta su una pagina del progetto in <b>Kodland Sparks</b>."
      ],
      platform: {
        text: "Gli studenti disegnano in <b>Pixel Studio</b>, direttamente nel browser: lavorano pixel per pixel, aggiungono ombre, luci e dithering, aggiungono fotogrammi per animare ed esportano GIF. Alla fine creano una pagina del progetto in <b>Kodland Sparks</b>.",
        tools: ["Pixel Studio", "Kodland Sparks · Pixel Art", "Fotogrammi ed esportazione GIF"],
        tour: "pixel",
        tourText: "Apri Studio, scegli le dimensioni della tela e guarda gli strumenti che gli studenti usano per disegnare e animare la grafica del loro gioco."
      },
      /* Progetti degli studenti pubblicati su Kodland Sparks: href, img, tag, title, by (nickname), desc. pixel: true = immagine nitida */
      projects: [
        { href: "https://portfolio-service-production-9e98.up.railway.app/Toska/cmrlwkvqc03ohnw3fkv2hz6gn", img: "../images/proj_ruuun.gif", pixel: true, tag: "GIF", title: "Ruuun", by: "Toska",
          desc: "Un eroe pixel in stile anime con un volto espressivo e un’animazione di camminata — l’animazione di movimento della Lezione 3." },
        { href: "https://portfolio-service-production-9e98.up.railway.app/Toska/cmrkfuvg70i3jp13f688lhyfs", img: "../images/pixel_3.gif", pixel: true, tag: "GIF", title: "monster", by: "Toska",
          desc: "Un mostro fantasma per il gioco, in tre fotogrammi: le espressioni che cambiano gli danno personalità." }
      ],
      /* Altri esempi: [immagine, didascalia] */
      gallery: {
        intro: "Altri elementi del corso — ricompense per il gioco runner:",
        items: [["../images/pixel_1.gif", "🪙 Una moneta animata"], ["../images/pixel_2.gif", "💎 Una gemma animata"]]
      }
    }
  ]
};
