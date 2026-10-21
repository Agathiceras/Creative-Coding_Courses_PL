/* ============================================================
   Guida a Kodland Sparks · contenuto in ITALIANO
   Traduzione di content-en.js. Tradurre solo il testo tra virgolette / backtick. Non modificare tag HTML, segnaposto ${...}, chiavi, id, nomi di file e URL.
   Nei testi usare ’ (mai l’apostrofo dritto) e « » per le citazioni.
   ============================================================ */
window.CONTENT = { lang: 'it' };

/* ============================================================
   INTERFACE: the replicated Kodland Sparks platform + guide layer
   ============================================================ */
CONTENT.ui = {
  title: 'Guida a Kodland Sparks',

  /* ---------- top bar ---------- */
  logo: 'Kodland Sparks',
  nav: { feed:'Feed', my:'I miei progetti', publish:'Pubblica progetto', studio:'Studio', ai:'Assistente IA' },

  /* ---------- Feed ---------- */
  feed: {
    bannerTitle: 'Rendi tuo il tuo profilo',
    bannerText: 'Imposta un avatar e scegli un nome in codice — tutti lo vedono sul tuo profilo.',
    bannerBtn: 'Personalizza il profilo',
    featured: 'Ultimi progetti in evidenza',
    feed: 'Feed',
    filter: 'Tutti i progetti ˅',
    results: '(11,6 mila risultati)',
    search: '🔍 Nickname o titolo del progetto',
    feedbackWanted: 'Cerco feedback'
  },
  // text drawn inside some project thumbnails (fake game screens)
  thumbs: { coins:'🪙 79 monete', play:'▶ GIOCA', heroes:'EROI', armory:'ARSENALE', shop:'NEGOZIO', magicLab:'LAB MAGICO', neonRacer:'NEON RACER' },

  /* ---------- a published project (Creeper) ---------- */
  project: {
    title: 'Creeper',
    download: 'Scarica',
    authorName: 'Mia Torres',
    uploaded: 'Caricato il 16 ott 2026',
    desc: 'Un Creeper con il cappello di Natale si è perso!! Aiutatemi a trovarlo!!',
    showTr: 'Mostra traduzione',
    fbTitle: 'Feedback pubblicato',
    fbUpdated: 'Aggiornato il 16 ott 2026',
    fbBody: '<p>Mia, hai creato un personaggio super riconoscibile con pochissimi pixel, e il cappello di Natale dà al tuo Creeper un tocco divertente e originale.</p><p>Il tuo Creeper natalizio è pieno di personalità e creatività — si vede che ti piace inventare personaggi unici!</p>'
  },

  /* ---------- My projects ---------- */
  my: {
    name: 'Alex Tutor',
    friends: 'Amici',
    friendsTab: 'Amici (0)',
    subsTab: 'Iscritti (0)',
    noFriends: 'Ancora nessun amico',
    privateTag: 'Progetto privato',
    cardTitle: 'Disegno'
  },

  /* ---------- Publish project ---------- */
  publish: {
    title: 'Nuovo <span>progetto</span>',
    sub: 'Scegli il tipo di progetto, compila i dettagli e decidi chi può vederlo.',
    typeLabel: 'Tipo di progetto',
    // [icon, name, description] — keep the first item (icon name) unchanged
    types: [
      ['image', 'Immagine', 'Carica un disegno, un’immagine, una GIF o un WebP.'],
      ['python', 'Python', 'Incolla il tuo codice Python — i visitatori potranno eseguirlo nel browser.'],
      ['game', 'Game or Web App', '.sb3 di Scratch oppure .zip con Unity/Godot/HTML/Python.'],
      ['creeper', 'Skin di Minecraft', 'Carica una skin 64×64 e mostrala su un modello 3D.'],
      ['book', 'Storia', 'Una pagina con testo, immagini ed embed'],
      ['globe', 'Embed', 'Incolla un link di YouTube, Vimeo, Sketchfab, Tinkercad o Canva.'],
      ['github', 'GitHub', 'Collega un repository pubblico di GitHub.'],
      ['box', 'Altro', 'Se nessuno dei tipi qui sopra va bene — come un gioco di Roblox o un’app del Play Market.']
    ],
    titleLabel: 'Titolo',
    titleHint: '30 caratteri rimasti',
    descLabel: 'Descrizione',
    descHint: '240 caratteri rimasti',
    fileLabel: 'Disegno',
    chooseFile: 'Scegli file',
    fileHint: 'PNG, JPG, WebP o GIF fino a 5 MB',
    section: '📁 Sezione',
    noSection: 'Nessuna sezione',
    sectionHint: 'Le sezioni aiutano a raggruppare i tuoi progetti nella pagina del profilo.',
    reactions: 'Reazioni',
    reactionsHint: 'Scegli quali reazioni possono lasciare i visitatori su questo progetto.',
    heartAlways: '💖 Il cuore è sempre disponibile',
    appearance: 'Aspetto',
    appearanceHint: 'Scegli il colore di una cornice per mettere in risalto la scheda del tuo progetto nel feed.',
    frameSlots: '5 slot per cornici disponibili su 5',
    frameDefault: '⚫ Predefinita',
    common: 'Comuni',
    commonFrames: ['🔵 Cielo', '🟢 Smeraldo', '🟣 Viola', '🔴 Rosso'],
    rare: 'Rare',
    rareFrames: ['Lavanda', 'Rosa', 'Grigio'],
    visibility: 'Visibilità',
    // [name, description] — Public · Friends only · Only me
    vis: [
      ['Pubblico', 'Appare nel feed e nel tuo portfolio pubblico.'],
      ['Solo amici', 'Visibile ai tuoi amici, ai tuoi insegnanti e a te.'],
      ['Solo io', 'Visibile solo a te nel tuo portfolio.']
    ],
    // [label, description] — the three switches
    toggles: [
      ['Richiedi feedback', 'Altri autori potranno lasciare feedback strutturati sul tuo progetto. Disponibile solo per i progetti pubblici.'],
      ['Sono d’accordo che Kodland Sparks usi questo progetto nelle promozioni', 'Per esempio, potrebbe comparire nei nostri social, nelle pubblicità o nella pagina principale per mostrare ad altri ragazzi cosa si può fare qui. Puoi cambiare idea in qualsiasi momento.'],
      ['Partecipa alla selezione di Discord', 'Una volta al giorno pubblichiamo i migliori progetti del giorno sul nostro server Discord. Lascia questa opzione attiva e potrebbe essere scelto anche il tuo. Solo progetti pubblici.']
    ],
    publish: 'Pubblica'
  },

  /* ---------- Studio: modes and slots ---------- */
  studio: {
    modesTitle: 'Cosa vuoi creare?',
    modesSub: 'Scegli una modalità per iniziare.',
    creative: 'Modalità creativa',
    creativeText: 'Costruisci quello che vuoi — giochi, siti, arte.',
    challenges: 'Modalità sfide',
    challengesText: 'Completa i compiti e guadagna cristalli.',
    slotsTitle: 'Creative Studio',
    slotsSub: 'Scegli un progetto per continuare o inizia qualcosa di nuovo.',
    slot: n => `Slot ${n}`,
    startHere: 'Inizia qui',
    comingSoon: 'In arrivo',
    crumbBack: 'I miei progetti'
  },

  /* ---------- Studio: "What will you build?" menu ---------- */
  build: {
    title: 'Cosa costruirai?',
    sub: 'Scegli da dove iniziare.',
    back: '‹ Indietro',
    recommended: 'consigliato',
    progGroup: 'Programmazione e sviluppo',
    mediaGroup: 'Media e contenuti',
    // [name, description] of each starting card
    cards: {
      web: ['Game or web app', 'HTML, CSS, JavaScript o Python'],
      terminal: ['Terminal Python', 'Un programma nel terminale'],
      scratch: ['Scratch', 'Costruisci con i blocchi di Scratch'],
      pixel: ['Pixel Art', 'Disegna pixel per pixel'],
      anim: ['Animation', 'Disegna fotogramma per fotogramma'],
      music: ['Music', 'Un brano su una griglia'],
      skin: ['Skin Editor', 'Una skin per un modello 3D']
    },
    // [heading, description] of each group of templates
    groups: {
      webjs: ['Web App JS', 'Una pagina web creata con HTML, CSS e JavaScript. Funziona nell’anteprima dal vivo — le modifiche si vedono subito.'],
      webpy: ['Web App Python', 'Una pagina web creata con HTML e CSS, con la logica in Python. Funziona nell’anteprima dal vivo — le modifiche si vedono subito.'],
      terminal: ['Terminal Python', 'Un programma in un unico file Python. Funziona nel terminale con il pulsante Play — ci si parla con print() e input().'],
      pixel: ['Pixel Art', 'Disegna sprite e animazioni pixel per pixel. Scegli le dimensioni della tela per iniziare, poi pubblicala come immagine o animazione.'],
      anim: ['Animation', 'Disegna un breve cartone animato fotogramma per fotogramma: disegna ogni fotogramma, guarda quello precedente con l’onion skin e premi play. Scegli le dimensioni della tela per iniziare.'],
      music: ['Music', 'Costruisci un breve brano su una griglia: dipingi una melodia, aggiungi la batteria e premi play.'],
      skin: ['Skin Editor', 'Dipingi una skin di Minecraft su una mappa 2D e guardala avvolgersi su un modello 3D. La simmetria rispecchia i tratti su entrambi i lati.']
    },
    // template buttons (keys are ids — do not change them)
    tpl: {
      webjs:'Progetto vuoto', webjsb:'Progetto base', alien:'Alien Invaders', calcjs:'Calcolatrice',
      webpy:'Progetto vuoto', webpyb:'Progetto base', snake:'Gioco Snake', calcpy:'Calcolatrice',
      termempty:'Progetto vuoto', guess:'Indovina il numero',
      px16:'16 × 16', px32:'32 × 32', px64:'64 × 64', px128:'128 × 128',
      an640:'640 × 480', an960:'960 × 720', an1280:'1280 × 960',
      track:'Nuovo brano', retro:'Retro', tetris:'Tetris', kpop:'K-pop',
      steve:'Steve', alex:'Alex'
    },
    sizeHint: 'Dimensioni in pixel. Puoi cambiarle più tardi.'
  },

  /* ---------- Studio: editors ---------- */
  editor: {
    // project title shown in the editor bar ('' = empty placeholder)
    titles: { web:'', terminal:'Indovina il numero', scratch:'', pixel:'', anim:'', music:'Retro', skin:'' },
    myProjects: 'I miei progetti',
    projectTitle: 'Titolo del progetto',
    newProject: 'Nuovo progetto',
    publish: 'Pubblica',
    // AI tutor panel
    robby: 'Inimitable Robby',
    aiTutor: 'Tutor IA',
    chat: 'Chat',
    tasks: 'Compiti',
    greeting: 'Ciao! Sono il tuo compagno di coding. Cosa stai creando oggi? Chiedimi cosa aggiungere dopo o come migliorare il tuo codice — creiamo qualcosa di fantastico insieme! 🚀',
    memory: 'Ricordo solo i tuoi ultimi 10 messaggi — se ne abbiamo parlato tempo fa, fammi un breve promemoria.',
    askTip: 'Chiedi un consiglio...',
    // web app editor
    preview: 'Anteprima',
    htmlComment: '<!-- Il tuo HTML va qui -->',
    // terminal Python editor
    terminal: 'Terminale',
    stop: '▢ Stop',
    termOut: 'Ho scelto un numero da 1 a 100. Prova a indovinarlo!<br>Il tuo tentativo:',
    answer: 'La tua risposta',
    send: '➤ Invia',
    // Python code shown in the editor: translate only the comment and the text inside "double quotes"
    py: ['import random', '', '# Il computer sceglie un numero da 1 a 100', 'secret = random.randint(1, 100)', 'attempts = 0', '', 'print(\"Ho scelto un numero da 1 a 100. Prova a indovinarlo!\")', '', 'while True:', '    guess = int(input(\"Il tuo tentativo: \"))', '    attempts += 1', '', '    if guess < secret:', '        print(\"Troppo basso! Riprova.\")', '    elif guess > secret:', '        print(\"Troppo alto! Riprova.\")', '    else:', '        print(\"Ce l’hai fatta in\", attempts, \"tentativi!\")', '        break'],
    // Scratch editor
    scratch: {
      cats: ['Movimento', 'Aspetto', 'Suono', 'Eventi', 'Controllo', 'Sensori', 'Operatori', 'Variabili', 'I miei blocchi'],
      code: '▤ Codice', costumes: '🖌 Costumi', sounds: '🔊 Suoni', find: 'Cerca (Ctrl+F)',
      palette: 'Movimento',
      blocks: ['muovi di <em>10</em> passi', 'ruota ↻ di <em>15</em> gradi', 'ruota ↺ di <em>15</em> gradi', 'vai a <em class=\"ddv\">posizione casuale ▾</em>', 'vai a x: <em>0</em> y: <em>0</em>', 'scivola in <em>1</em> secondi a <em class=\"ddv\">posizione casuale ▾</em>', 'scivola in <em>1</em> secondi a x: <em>0</em> y: <em>0</em>', 'punta in direzione <em>90</em>'],
      sprite: 'Sprite', spriteName: 'Sprite1', size: 'Dimensione', direction: 'Direzione', stage: 'Palco'
    },
    // drawing editors (pixel art, animation, skin)
    draw: {
      draw: 'DISEGNA', brush: 'DIMENSIONE PENNELLO', shade: 'OMBRE E DITHER', canvas: 'TELA', history: 'CRONOLOGIA',
      dither: 'DITHER', view: 'VISTA', exportL: 'Esporta', map2d: 'Mappa 2D',
      speed: 'Velocità', firstFrame: 'Disegna il primo fotogramma, poi premi +'
    },
    // music editor
    music: { track:'Retro ˅', addTrack:'+ Traccia', tempo:'Tempo', bpm:'180 BPM', drums:'Batteria', electronic:'Elettronica', acoustic:'Acustica' }
  },

  /* ---------- AI helper ---------- */
  ai: {
    newChat: '+ Nuova chat',
    keep: 'Conservo le tue ultime 5 chat, ma ricordo i fatti importanti.',
    memory: 'Cosa ricordo di te',
    credits: '1000 crediti su 1000 rimasti',
    pictures: '0 immagini su 6 oggi',
    resets: 'Si azzera alle 00:00 UTC',
    name: 'Spark Aiko',
    role: 'Assistente IA',
    hello: 'Ciao! Sono Aiko, il tuo assistente IA. Chiedimi qualsiasi cosa sui tuoi progetti,<br>sul codice o sulle idee — oppure scegli qualcosa qui sotto.',
    chips: ['Aiutami a trovare l’idea per un gioco', 'Spiega l’errore nel mio codice', 'Non so come andare avanti, cosa faccio ora?', 'Disegnami un personaggio'],
    ask: 'Chiedi qualsiasi cosa...'
  },

  /* ---------- Rewards drawer (crystals) ---------- */
  rewards: { title:'RICOMPENSE', rarity:'COMUNE', hint:'Clicca sul forziere per aprirlo' },

  /* ---------- Coach card (guide layer) ---------- */
  coach: {
    step: (n, total) => `Guida Sparks · ${n}/${total}`,
    hint: '👆 Clicca sull’elemento evidenziato',
    next: 'Avanti →',
    backToMenu: '<br><br>Premi <b>Avanti</b> per tornare al menu dei progetti.'
  },

  /* ---------- Finish modal ---------- */
  finish: {
    kicker: 'Guida completata',
    title: '🎓 Conosci Kodland Sparks',
    intro: 'Hai fatto un giro della piattaforma che usano i tuoi studenti:',
    items: [
      '<b>Feed</b>: i progetti dei compagni, con reazioni e feedback dell’IA.',
      '<b>I miei progetti</b>: tutto ciò che è stato salvato o pubblicato, da tutor e studenti.',
      '<b>Pubblica progetto</b>: condividere un progetto finito, scegliere chi lo vede e guadagnare ricompense.',
      '<b>Studio</b>: la modalità creativa per creare codice (web app, Python, Scratch), disegni, animazioni, musica e skin, e la modalità sfide per guadagnare cristalli.',
      '<b>Assistente IA</b> e <b>tutor IA</b>: guidano e danno consigli, ma <b>l’IA propone, l’autore decide</b>.'
    ],
    codeLabel: '🔑 Il tuo codice di completamento',
    codeHint: 'Copialo nella formazione per confermare di aver completato la guida.',
    back: '← Torna alla formazione',
    closeMsg: 'Chiudi questa scheda per tornare alla formazione, poi inserisci lì il tuo codice di completamento.'
  },

  /* ---------- Welcome screen ---------- */
  welcome: {
    kicker: 'New Educational Model · Formazione tutor',
    title: 'Guida a <span>Kodland Sparks</span>',
    lead: 'Questa guida ti accompagna in <b>Kodland Sparks</b>, la piattaforma in cui i tuoi studenti pubblicano e creano i loro progetti. Ti muoverai tu stesso nella piattaforma e cliccherai dove ti indica la guida.',
    seeTitle: 'Cosa vedrai',
    see: [
      'Il <b>Feed</b>: come gli studenti vedono i progetti degli altri e reagiscono, e il feedback dell’IA che ricevono.',
      '<b>I miei progetti</b> e <b>Pubblica progetto</b>: dove si trova il lavoro salvato e come si pubblica un progetto finito.',
      '<b>Studio</b>: cosa creano gli studenti in classe — codice (web app, Python, Scratch), disegni, animazioni, musica e skin — e la modalità sfide.',
      'L’<b>assistente IA</b> e i <b>cristalli</b> che gli studenti guadagnano.'
    ],
    howTitle: 'Come usarla',
    howText: 'Questa è una guida, non una simulazione di pratica: non ci sono decisioni da prendere e niente da perdere. Clicca sull’elemento evidenziato in ogni schermata, oppure premi <b>Avanti</b> quando il passaggio ti chiede di leggere.',
    start: 'INIZIA LA GUIDA →'
  }
};

/* ============================================================
   FEED CARDS: title and project type of each card, in order
   ============================================================ */
CONTENT.cards = {
  featured: [
    { t:'Creeper', type:'PNG' },
    { t:'Galaxy Gem Hunter', type:'Web App' },
    { t:'Survivor Island', type:'Web App' },
    { t:'Magic Lab', type:'Scratch' },
    { t:'Neon Racer', type:'Web App' },
    { t:'Mini Snake', type:'Python' }
  ],
  feed: [
    { t:'Crystal Catcher', type:'Scratch' },
    { t:'My Pet Shop', type:'Web App' },
    { t:'Pixel Garden', type:'PNG' },
    { t:'Space Quiz', type:'Python' },
    { t:'Chill Beats', type:'Music' },
    { t:'Dragon Flight', type:'GIF' }
  ]
};

/* ============================================================
   GUIDED TOUR: title and text of the 44 steps, in order
   ============================================================ */
CONTENT.steps = [
  /* 1 */ { title:'Conosci Kodland Sparks',
    text:'<b>Kodland Sparks</b> è la piattaforma in cui gli studenti <b>pubblicano i loro progetti</b>, continuano a imparare tra una lezione e l’altra e ricevono feedback dai compagni e da un mentore IA.<br><br>La barra in alto ha tutto: <b>Feed</b>, <b>I miei progetti</b>, <b>Pubblica progetto</b>, <b>Studio</b>, l’<b>assistente IA</b> e i <b>cristalli</b>. Li visiteremo uno per uno.' },
  /* 2 */ { title:'Il Feed',
    text:'Il <b>Feed</b> è la pagina iniziale: mostra i progetti pubblicati dagli studenti. Ogni scheda indica il <b>tipo di progetto</b> (Web App, Scratch, PNG, Python…), le reazioni ricevute e il suo autore.<br><br><b>Cerco feedback</b> significa che l’autore ha chiesto un feedback. Sotto i progetti in evidenza, il Feed elenca tutti i progetti.' },
  /* 3 */ { title:'Apri il progetto di un compagno',
    text:'Gli studenti possono interagire con i progetti pubblicati dai loro compagni. Clicca sul progetto <b>Creeper</b> per aprirlo.' },
  /* 4 */ { title:'Un progetto pubblicato',
    text:'Questo progetto è un <b>disegno</b> (PNG). Gli altri tipi si aprono allo stesso modo: i progetti Scratch e web si possono giocare direttamente qui e il codice Python viene eseguito nel browser.' },
  /* 5 */ { title:'Dettagli e reazioni',
    text:'Sotto il progetto puoi <b>scaricarlo</b> e vedere il suo <b>autore</b>, la data di caricamento, le visualizzazioni e le <b>reazioni</b> ricevute: 💖 👍 😁 🔥 🦄.<br><br>Le reazioni sono il modo più rapido per i compagni di celebrare il lavoro degli altri.' },
  /* 6 */ { title:'Feedback dell’IA',
    text:'I progetti pubblicati possono ricevere anche un <b>feedback scritto da un mentore IA</b> (qui, <b>Inimitable Robby</b>). Indica cosa lo studente ha fatto bene e lo incoraggia a continuare a creare.<br><br>Se un testo è scritto in un’altra lingua, <b>Mostra traduzione</b> lo traduce.' },
  /* 7 */ { title:'I miei progetti',
    text:'Ora clicca su <b>I miei progetti</b> nella barra in alto.' },
  /* 8 */ { title:'Tutto ciò che hai creato',
    text:'<b>I miei progetti</b> elenca tutti i progetti salvati o pubblicati <b>da te, come tutor, o da uno studente</b>.<br><br>Ogni scheda mostra il tipo (qui, <b>PNG</b>) e se il progetto è privato. È il posto dove gli studenti tornano a ritrovare il loro lavoro.' },
  /* 9 */ { title:'Pubblica progetto',
    text:'Clicca su <b>Pubblica progetto</b> nella barra in alto.' },
  /* 10 */ { title:'Pubblicare un progetto finito',
    text:'<b>Pubblica progetto</b> serve per i progetti che gli studenti hanno <b>già creato e salvato sul computer</b>. Prima scelgono il tipo: Immagine, Python, Game or Web App (un .sb3 di Scratch o uno .zip), Skin di Minecraft, Storia, Embed, GitHub o Altro.' },
  /* 11 */ { title:'Compila i dettagli',
    text:'Lo studente aggiunge un <b>titolo</b> (30 caratteri), una <b>descrizione</b> (240 caratteri) e il <b>file</b> (PNG, JPG, WebP o GIF fino a 5 MB).<br><br>Può anche raggruppare i progetti in una <b>sezione</b> e scegliere quali <b>reazioni</b> possono lasciare i visitatori.' },
  /* 12 */ { title:'Scegli chi lo vede',
    text:'<b>Aspetto</b> imposta il colore della cornice della scheda nel Feed; altri colori si sbloccano più avanti.<br><br><b>Visibilità</b>: <b>Pubblico</b>, <b>Solo amici</b> o <b>Solo io</b>.<br><br>Opzioni facoltative: <b>Richiedi feedback</b>, consentire a Kodland Sparks di usare il progetto nelle promozioni e la <b>selezione di Discord</b> giornaliera.' },
  /* 13 */ { title:'Pubblica',
    text:'Premendo <b>Pubblica</b> il progetto viene condiviso. Pubblicare può <b>far guadagnare ricompense</b> — il pulsante mostra l’icona del cristallo. I cristalli li vedremo alla fine.' },
  /* 14 */ { title:'Studio',
    text:'Ora la parte che gli studenti usano di più in classe. Clicca su <b>Studio</b>.' },
  /* 15 */ { title:'Due modalità',
    text:'<b>Studio</b> ha due modalità:<br><br>• <b>Modalità creativa</b>: costruisci quello che vuoi — giochi, siti, arte — da zero o da una base.<br>• <b>Modalità sfide</b>: completa i compiti e <b>guadagna cristalli</b>.' },
  /* 16 */ { title:'Modalità creativa',
    text:'Clicca su <b>Modalità creativa</b>.' },
  /* 17 */ { title:'Slot dei progetti',
    text:'Il <b>Creative Studio</b> conserva i progetti a cui gli studenti stanno lavorando negli <b>slot</b>. Gli slot da 1 a 3 sono aperti; gli slot da 4 a 6 arriveranno presto.<br><br>Clicca su <b>Slot 1</b> per iniziare un nuovo progetto.' },
  /* 18 */ { title:'Cosa costruirai?',
    text:'Gli studenti scelgono da dove iniziare:<br>• <b>Programmazione e sviluppo</b>: Game or web app, Terminal Python, Scratch.<br>• <b>Media e contenuti</b>: Pixel Art, Animation, Music, Skin Editor.<br><br>Cosa usano dipende dal loro corso. Clicca su <b>Game or web app</b>.' },
  /* 19 */ { title:'Web app: scegli un punto di partenza',
    text:'Una web app si crea con <b>HTML, CSS e JavaScript</b> (Web App JS), oppure con HTML e CSS e la logica in <b>Python</b> (Web App Python).<br><br>Gli studenti partono da un <b>Progetto vuoto</b> o da una base, come Alien Invaders o il Gioco Snake. Clicca su <b>Progetto vuoto</b> sotto Web App JS.' },
  /* 20 */ { title:'L’editor: anteprima e codice',
    text:'In alto, l’<b>Anteprima</b> mostra il risultato dal vivo: le modifiche compaiono subito. Sotto, le schede del codice: <b>HTML</b>, <b>CSS</b> e <b>JS</b>.' },
  /* 21 */ { title:'Il tutor IA',
    text:'A destra, il <b>tutor IA</b> (Inimitable Robby) è un compagno di coding con una scheda <b>Chat</b> e una scheda <b>Compiti</b>. Gli studenti gli chiedono un consiglio o come migliorare il loro codice.<br><br>Ricorda: <b>l’IA propone, l’autore decide</b>. Aiuta, ma non costruisce il progetto al posto loro.' },
  /* 22 */ { title:'Salva, dai un nome e pubblica',
    text:'La barra in alto mostra lo <b>slot</b>, un pulsante di salvataggio e il <b>titolo del progetto</b>. A destra: <b>Nuovo progetto</b>, i pulsanti per aprire, caricare e scaricare un progetto e <b>Pubblica</b>, che lo condivide nel Feed.' },
  /* 23 */ { title:'Inizia un altro progetto',
    text:'Vediamo altri tipi di progetti. Clicca su <b>Nuovo progetto</b>.' },
  /* 24 */ { title:'Terminal Python',
    text:'<b>Terminal Python</b> è un programma che funziona in un terminale. Cliccaci sopra.' },
  /* 25 */ { title:'Parti da una base',
    text:'Un programma Python sta in un unico file, si esegue con il pulsante <b>Play</b> e parla con l’utente con <code>print()</code> e <code>input()</code>.<br><br>Clicca su <b>Indovina il numero</b>.' },
  /* 26 */ { title:'Un progetto Python',
    text:'Il programma funziona nel <b>terminale</b> nero: stampa messaggi e aspetta la risposta del giocatore nella casella <b>La tua risposta</b>. <b>Run</b> / <b>Stop</b> lo avvia e lo ferma e il <b>codice Python</b> è subito sotto. Il tutor IA è a destra, come in ogni editor di codice.' + CONTENT.ui.coach.backToMenu },
  /* 27 */ { title:'Scratch',
    text:'<b>Scratch</b> permette agli studenti di creare con i blocchi di Scratch. Cliccaci sopra.' },
  /* 28 */ { title:'Un progetto Scratch',
    text:'L’<b>editor di Scratch</b> dentro Kodland Sparks: le <b>categorie di blocchi e la palette</b> a sinistra, l’<b>area del codice</b> al centro e il <b>palco</b> con lo sprite a destra. Ci sono anche le schede <b>Costumi</b> e <b>Suoni</b>. Il tutor IA aspetta nel pulsante rotondo a destra.' + CONTENT.ui.coach.backToMenu },
  /* 29 */ { title:'Pixel Art',
    text:'Per disegnare, gli studenti possono usare <b>Pixel Art</b>: disegnano pixel per pixel. Cliccaci sopra.' },
  /* 30 */ { title:'Scegli le dimensioni della tela',
    text:'Scelgono le <b>dimensioni della tela</b>; <b>32 × 32</b> è quella consigliata. Il risultato si può pubblicare come immagine o animazione.<br><br>Clicca su <b>32 × 32</b>.' },
  /* 31 */ { title:'Un progetto di disegno',
    text:'L’<b>editor di pixel art</b>: strumenti di disegno, dimensioni del pennello, ombre, colori e annulla a sinistra, la <b>tela</b> al centro e i <b>fotogrammi</b> in basso per trasformare il disegno in un’animazione.' + CONTENT.ui.coach.backToMenu },
  /* 32 */ { title:'Animation',
    text:'<b>Animation</b> permette agli studenti di disegnare un breve cartone animato fotogramma per fotogramma. Cliccaci sopra.' },
  /* 33 */ { title:'Scegli le dimensioni della tela',
    text:'Le tele di Animation hanno tre dimensioni; <b>960 × 720</b> è quella consigliata. Cliccaci sopra.' },
  /* 34 */ { title:'Un progetto di animazione',
    text:'Gli studenti disegnano ogni <b>fotogramma</b>, vedono il precedente attraverso l’<b>onion skin</b> e premono play per guardare l’animazione. Possono cambiare la velocità e ripeterla in loop.' + CONTENT.ui.coach.backToMenu },
  /* 35 */ { title:'Music',
    text:'<b>Music</b> permette agli studenti di costruire un breve brano su una griglia. Cliccaci sopra.' },
  /* 36 */ { title:'Inizia un brano',
    text:'Possono iniziare un <b>Nuovo brano</b> o partire da una base: Retro, Tetris o K-pop. Clicca su <b>Retro</b>.' },
  /* 37 */ { title:'Un progetto musicale',
    text:'Gli studenti <b>dipingono una melodia</b> sulla griglia, aggiungono <b>tracce</b> e <b>batteria</b>, cambiano il <b>tempo</b> e premono play.' + CONTENT.ui.coach.backToMenu },
  /* 38 */ { title:'Skin Editor',
    text:'<b>Skin Editor</b> è per Minecraft: gli studenti dipingono una skin per un modello 3D. Cliccaci sopra.' },
  /* 39 */ { title:'Scegli un personaggio',
    text:'Partono da <b>Steve</b> o da <b>Alex</b>. Clicca su <b>Steve</b>.' },
  /* 40 */ { title:'Un progetto di skin',
    text:'La skin viene dipinta su un <b>modello 3D</b>, oppure sulla <b>mappa 2D</b>, e la simmetria rispecchia i tratti su entrambi i lati. Quando è pronta, si può <b>esportare</b> in PNG o MCPACK.' },
  /* 41 */ { title:'Assistente IA',
    text:'Il pulsante verde <b>Assistente IA</b> nella barra in alto apre una chat. Cliccaci sopra.' },
  /* 42 */ { title:'Chiedi ad Aiko',
    text:'<b>Aiko</b> è l’assistente IA degli studenti: possono chiedere dei loro progetti, del codice o di idee, oppure scegliere un suggerimento come <i>Spiega l’errore nel mio codice</i> o <i>Non so come andare avanti, cosa faccio ora?</i><br><br>Ricorda i fatti importanti delle ultime chat e gli studenti possono vedere ed eliminare quegli appunti.' },
  /* 43 */ { title:'Cristalli',
    text:'Il contatore viola mostra i <b>cristalli</b> guadagnati dallo studente. Cliccaci sopra.' },
  /* 44 */ { btn:'Fine ✓', title:'Ricompense',
    text:'Questo è il pannello delle <b>Ricompense</b>. Gli studenti guadagnano cristalli completando i compiti nella <b>modalità sfide</b> e pubblicando progetti, e aprono un <b>forziere</b> per vedere cosa hanno vinto.<br><br>Per ora non ce n’è nessuno, quindi il contatore mostra 0.' }
];

/* ============================================================
   COURSE TOURS (multi-courses trainings): Kodland_Sparks_Tour.html?tour=<id>
   Each tour runs a few steps of the guide. "steps" = title / text of each step, in order.
   ============================================================ */
CONTENT.tours = {
  ui: {
    kicker: 'Tour completato',
    finishBtn: 'Fine ✓',
    replay: '↻ Rivedi il tour',
    continueHere: 'Continua nella formazione: scorri verso il basso, sotto questa finestra.',
    closeTab: 'Chiudi questa scheda per tornare alla formazione.'
  },

  /* ---------- Video Creation ---------- */
  video: {
    welcome: {
      kicker: 'Video Creation · Kodland Sparks',
      title: 'Video Creation <span>su Sparks</span>',
      lead: 'Gli studenti montano i loro video in CapCut Desktop e <b>Kodland Sparks</b> è il luogo in cui avviene il resto: l’intro animata del loro canale, <b>Sparks AI</b> che funziona come editor dello script e la pagina del progetto in cui pubblicano il video finale.',
      see: ['Studio e i suoi <b>slot dei progetti</b>.', 'L’editor <b>Animation</b>: disegnare fotogramma per fotogramma, come l’intro del canale della Lezione 1.', 'L’<b>assistente IA</b> che gli studenti usano per idee, immagini e voci fuori campo.'],
      howText: 'Clicca sull’elemento evidenziato in ogni schermata, oppure premi <b>Avanti</b> quando il passaggio ti chiede di leggere. Non può andare storto niente.',
      start: 'INIZIA IL TOUR →'
    },
    steps: [
      { title:'Studio: due modalità', text:'Questo è <b>Studio</b>, dove gli studenti creano. Ha due modalità:<br><br>• <b>Modalità creativa</b>: costruisci quello che vuoi — giochi, arte, animazioni.<br>• <b>Modalità sfide</b>: completa i compiti e guadagna cristalli.' },
      { title:'Modalità creativa', text:'Clicca su <b>Modalità creativa</b>.' },
      { title:'Slot dei progetti', text:'Gli studenti conservano i progetti a cui stanno lavorando negli <b>slot</b>. Clicca su <b>Slot 1</b> per iniziare un nuovo progetto.' },
      { title:'Animation', text:'Video Creation inizia con l’<b>intro del canale</b>: nella Lezione 1 gli studenti disegnano un’intro animata in Animation Studio. Su Sparks il disegno fotogramma per fotogramma si trova in <b>Animation</b>, sotto Media e contenuti. Cliccaci sopra.' },
      { title:'Scegli le dimensioni della tela', text:'Le tele di Animation hanno tre dimensioni; <b>960 × 720</b> è quella consigliata. Cliccaci sopra.' },
      { title:'Un progetto di animazione', text:'Gli studenti disegnano ogni <b>fotogramma</b>, vedono il precedente attraverso l’<b>onion skin</b> e premono play. Possono cambiare la velocità e ripetere l’animazione in loop.<br><br>La stessa idea — tanti piccoli fotogrammi che creano movimento — è alla base di ogni video che monteranno in seguito.' },
      { title:'L’assistente IA', text:'In questo corso l’IA funziona come <b>editor dello script</b>: gli studenti scrivono una bozza e chiedono dove diventa noiosa. Sparks dà loro anche immagini IA per i loro video. Clicca sul pulsante verde <b>Assistente IA</b>.' },
      { title:'L’IA propone, lo studente decide', text:'Gli studenti chiedono ad <b>Aiko</b> un feedback sul loro script, idee per l’hook o un’immagine per il prossimo video. L’IA aiuta, ma <b>gli studenti decidono cosa tenere</b> e fanno il montaggio da soli.<br><br>Quando il video finale è pronto, lo mettono su una pagina del progetto in Sparks.' }
    ],
    finish: { title:'🎬 Sai dove avviene Video Creation su Sparks', intro:'In questo tour hai visto:', items:[
      '<b>Studio</b> e i suoi <b>slot</b> dei progetti.',
      'L’editor <b>Animation</b>, per il lavoro fotogramma per fotogramma.',
      'L’<b>assistente IA</b>: un editor dello script, mai l’autore.'
    ] }
  },

  /* ---------- Sound Design (Music) ---------- */
  music: {
    welcome: {
      kicker: 'Sound Design · Kodland Sparks',
      title: 'Sound Design <span>su Sparks</span>',
      lead: 'Sound Design si svolge in <b>Music Studio</b>, direttamente nel browser, dentro <b>Kodland Sparks</b>: nessun software da installare. Apriamo l’editor musicale che useranno i tuoi studenti.',
      see: ['Studio e i suoi <b>slot dei progetti</b>.', 'L’editor <b>Music</b> e i suoi brani di partenza.', 'Come si costruisce un brano: melodia, tracce, batteria e tempo.'],
      howText: 'Clicca sull’elemento evidenziato in ogni schermata, oppure premi <b>Avanti</b> quando il passaggio ti chiede di leggere. Non può andare storto niente.',
      start: 'INIZIA IL TOUR →'
    },
    steps: [
      { title:'Studio: due modalità', text:'Questo è <b>Studio</b>, dove gli studenti creano. Ha due modalità:<br><br>• <b>Modalità creativa</b>: costruisci quello che vuoi — giochi, arte, musica.<br>• <b>Modalità sfide</b>: completa i compiti e guadagna cristalli.' },
      { title:'Modalità creativa', text:'Clicca su <b>Modalità creativa</b>.' },
      { title:'Slot dei progetti', text:'Gli studenti conservano i progetti a cui stanno lavorando negli <b>slot</b>. Clicca su <b>Slot 1</b> per iniziare un nuovo progetto.' },
      { title:'Music', text:'Music si trova sotto <b>Media e contenuti</b>. Clicca su <b>Music</b>.' },
      { title:'Inizia un brano', text:'Gli studenti iniziano un <b>Nuovo brano</b> o partono da una base: Retro, Tetris o K-pop. Clicca su <b>Retro</b>.' },
      { title:'Un progetto musicale', text:'Gli studenti <b>dipingono una melodia</b> sulla griglia, aggiungono <b>tracce</b> e <b>batteria</b>, cambiano il <b>tempo</b> e premono play.<br><br>È così che funziona il corso: <b>creano prima</b> e scoprono ritmo, melodia e armonia mentre producono.' }
    ],
    finish: { title:'🎶 Conosci lo studio Music', intro:'In questo tour hai visto:', items:[
      '<b>Studio</b> e i suoi <b>slot</b> dei progetti.',
      'L’editor <b>Music</b> e i suoi brani di partenza.',
      'Come si costruisce un brano: melodia, tracce, batteria e tempo.'
    ] }
  },

  /* ---------- Pixel Art ---------- */
  pixel: {
    welcome: {
      kicker: 'Pixel Art · Kodland Sparks',
      title: 'Pixel Art <span>su Sparks</span>',
      lead: 'Pixel Art si svolge in <b>Pixel Studio</b>, dentro <b>Kodland Sparks</b>. Apriamolo come lo useranno i tuoi studenti.',
      see: ['Studio e i suoi <b>slot dei progetti</b>.', 'L’editor <b>Pixel Art</b> e le sue dimensioni della tela.', 'Gli strumenti di disegno e i <b>fotogrammi</b> che trasformano un disegno in un’animazione.'],
      howText: 'Clicca sull’elemento evidenziato in ogni schermata, oppure premi <b>Avanti</b> quando il passaggio ti chiede di leggere. Non può andare storto niente.',
      start: 'INIZIA IL TOUR →'
    },
    steps: [
      { title:'Studio: due modalità', text:'Questo è <b>Studio</b>, dove gli studenti creano. Ha due modalità:<br><br>• <b>Modalità creativa</b>: costruisci quello che vuoi — giochi, arte, animazioni.<br>• <b>Modalità sfide</b>: completa i compiti e guadagna cristalli.' },
      { title:'Modalità creativa', text:'Clicca su <b>Modalità creativa</b>.' },
      { title:'Slot dei progetti', text:'Gli studenti conservano i progetti a cui stanno lavorando negli <b>slot</b>. Clicca su <b>Slot 1</b> per iniziare un nuovo progetto.' },
      { title:'Pixel Art', text:'Pixel Art si trova sotto <b>Media e contenuti</b>: gli studenti disegnano <b>pixel per pixel</b>. Clicca su <b>Pixel Art</b>.' },
      { title:'Scegli le dimensioni della tela', text:'Gli studenti scelgono le <b>dimensioni della tela</b>; <b>32 × 32</b> è quella consigliata. Una tela piccola fa parte dello stile: pochi pixel, una palette limitata, una forma chiara.<br><br>Clicca su <b>32 × 32</b>.' },
      { title:'Un progetto di pixel art', text:'L’<b>editor di pixel art</b>: strumenti di disegno, dimensioni del pennello, <b>ombre e dither</b>, colori e annulla a sinistra, la <b>tela</b> al centro e i <b>fotogrammi</b> in basso.<br><br>Con i fotogrammi, una moneta inizia a girare e un personaggio inizia a correre: è l’animazione che gli studenti creano in Pixel Art.' }
    ],
    finish: { title:'👾 Conosci Pixel Studio', intro:'In questo tour hai visto:', items:[
      '<b>Studio</b> e i suoi <b>slot</b> dei progetti.',
      'L’editor <b>Pixel Art</b> e le sue dimensioni della tela.',
      'Gli strumenti di disegno, le ombre e il dithering e i <b>fotogrammi</b> per l’animazione.'
    ] }
  },

  /* ---------- Vibe Coding ---------- */
  vibe: {
    welcome: {
      kicker: 'Vibe Coding · Kodland Sparks',
      title: 'Vibe Coding <span>su Sparks</span>',
      lead: 'In Vibe Coding gli studenti costruiscono il loro <b>gioco runner</b> con l’aiuto dell’IA, dentro <b>Kodland Sparks</b>. Apriamo l’editor in cui il gioco prende vita.',
      see: ['Studio e i suoi <b>slot dei progetti</b>.', 'Un progetto <b>Game or web app</b>: HTML, CSS e JavaScript.', 'L’<b>anteprima</b> dal vivo, le schede del codice e il <b>tutor IA</b>.'],
      howText: 'Clicca sull’elemento evidenziato in ogni schermata, oppure premi <b>Avanti</b> quando il passaggio ti chiede di leggere. Non può andare storto niente.',
      start: 'INIZIA IL TOUR →'
    },
    steps: [
      { title:'Studio: due modalità', text:'Questo è <b>Studio</b>, dove gli studenti creano. Ha due modalità:<br><br>• <b>Modalità creativa</b>: costruisci quello che vuoi — giochi, siti, arte.<br>• <b>Modalità sfide</b>: completa i compiti e guadagna cristalli.' },
      { title:'Modalità creativa', text:'Clicca su <b>Modalità creativa</b>.' },
      { title:'Slot dei progetti', text:'Gli studenti conservano i progetti a cui stanno lavorando negli <b>slot</b> — utile in questo corso, in cui il gioco cresce lezione dopo lezione. Clicca su <b>Slot 1</b>.' },
      { title:'Programmazione e sviluppo', text:'Vibe Coding si trova sotto <b>Programmazione e sviluppo</b>. Clicca su <b>Game or web app</b>.' },
      { title:'Scegli un punto di partenza', text:'Una web app si crea con <b>HTML, CSS e JavaScript</b> (Web App JS), oppure con la logica in Python (Web App Python). Gli studenti possono partire da zero o da una base.<br><br>Clicca su <b>Progetto vuoto</b> sotto Web App JS.' },
      { title:'Anteprima e codice', text:'In alto, l’<b>Anteprima</b> mostra il gioco dal vivo: ogni modifica compare subito. Sotto, le schede <b>HTML</b>, <b>CSS</b> e <b>JS</b>.<br><br>Nella Lezione 3 gli studenti scoprono a cosa serve ciascuna: <b>struttura</b>, <b>aspetto</b> e <b>logica</b>.' },
      { title:'Il tutor IA', text:'A destra, il <b>tutor IA</b> aiuta gli studenti a scrivere prompt, aggiungere funzioni e correggere errori.<br><br>In questo corso gli studenti scrivono prompt chiari, provano il risultato e descrivono ogni bug perché l’IA possa correggerlo.' },
      { title:'Salva, dai un nome e pubblica', text:'La barra in alto mostra lo <b>slot</b>, il pulsante di salvataggio e il <b>titolo del progetto</b>. <b>Pubblica</b> condivide il gioco: il gioco finale va su una pagina del progetto in Sparks.' }
    ],
    finish: { title:'🤖 Conosci l’editor di Vibe Coding', intro:'In questo tour hai visto:', items:[
      '<b>Studio</b> e i suoi <b>slot</b> dei progetti.',
      'Un progetto <b>Game or web app</b>, con l’anteprima dal vivo e le schede HTML, CSS e JS.',
      'Il <b>tutor IA</b>: gli studenti scrivono i prompt e provano il risultato.',
      'Dove il gioco viene salvato e <b>pubblicato</b>.'
    ] }
  }
};
