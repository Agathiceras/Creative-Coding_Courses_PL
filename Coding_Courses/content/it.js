/* =====================================================================
   MULTI-COURSES TRAINING · CODING & TECHNOLOGY COURSES — CONTENT FILE (Italiano)
   ---------------------------------------------------------------------
   Traduzione di content/en.js. Non modificare: nomi delle chiavi, valori id / tour / track,
   nulla tra {parentesi graffe}, tag HTML, emoji, link, nomi di file, né i numeri dopo  a:
   Nei testi non usare mai virgolette o apostrofi dritti: usare ’ « » „ ” .
   ===================================================================== */
window.MC_CONTENT = {

  lang: "it",
  track: "coding",
  region: "Italia",

  ui: {
    pageTitle: "Coding & Technology Courses",
    brand: "Multi-courses · Coding & Technology",
    footer: "kodland · Formazione Multi-courses · Coding & Technology Courses",
    kicker: "Formazione tutor · Multi-courses",
    title1: "Coding & Technology",
    title2: "Courses",
    lead: "Scopri i due mini-corsi di coding e tecnologia che i tuoi studenti possono frequentare: <b>Vibe Coding</b> e <b>Science via Minecraft</b>. Per ognuno vedrai la storia, le lezioni e la piattaforma — e lo proverai tu stesso.",
    strip: ["Completa prima la formazione sulle Parallel Lessons", "Cosa sono i mini-corsi", "Esplora i 2 corsi", "Svolgi il test nell’LMS"],
    flipHint: "Tocca per girare",
    progress: "{done}/{total} corsi visti",

    pl: {
      title: "Prima di iniziare",
      text: "Tutti questi corsi si svolgono nel formato <b>Parallel Lessons (PL)</b>: tu conduci la fase iniziale e quella conclusiva della lezione di ogni studente, mentre nella fase centrale gli studenti lavorano in autonomia con le schede. Questa formazione non riprende la spiegazione del formato, quindi <b>completa prima la formazione</b> sulle Parallel Lessons.",
      check: "Ho completato la formazione sulle Parallel Lessons",
      ok: "✅ Perfetto — la formazione è sbloccata. Scorri verso il basso per iniziare.",
      locked: "Completa prima la formazione sulle Parallel Lessons, poi spunta la casella qui sopra per sbloccare questa formazione."
    },

    mini: {
      title: "Cosa sono i mini-corsi?",
      intro: "I <b>Multi-courses</b> offrono agli studenti la possibilità di esplorare materie diverse attraverso <b>corsi più brevi e incentrati su un tema</b>, invece di impegnarsi in un unico percorso formativo più lungo. Gira le carte:",
      cards: [
        ["⏱️", "Più brevi", "Ogni corso è breve e incentrato su un solo tema, così gli studenti arrivano in fretta a un progetto concreto e finito."],
        ["🧭", "Esplora", "Gli studenti possono provare materie diverse — coding, scienze, video, musica, pixel art — e scoprire cosa piace loro di più."],
        ["🧩", "Collegati", "Alcuni corsi si integrano tra loro: per esempio, il gioco runner che gli studenti costruiscono in Vibe Coding può usare la grafica che disegnano in Pixel Art."]
      ],
      catsTitle: "Due categorie, due formazioni",
      youAreHere: "Questa formazione",
      otherTraining: "Formazione separata",
      cats: [
        { icon: "🎨", name: "Creative Courses", courses: ["Video Creation", "Sound Design", "Pixel Art"], current: false },
        { icon: "💻", name: "Coding & Technology Courses", courses: ["Vibe Coding", "Science via Minecraft"], current: true }
      ],
      pl: "<b>Si svolgono nel formato PL.</b> Tutto ciò che hai imparato nella formazione sulle Parallel Lessons vale anche qui: fasi iniziali e conclusive individuali, lavoro autonomo con le schede, aiuto quando uno studente alza la mano e feedback nella fase conclusiva."
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
      requirementsIntro: "Verifica i requisiti prima della prima lezione e assicurati di non avere problemi di connessione.",
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
      soonTitle: "Hai esplorato tutti i Coding & Technology Courses!",
      soon: "Questi corsi sono <b>in fase di traduzione</b> proprio ora.</p><p>Non appena saranno pronti, <b>il bot ti avviserà</b> che i corsi sono stati <b>abilitati nel BO</b>. Da quel momento li troverai — insieme alle loro Teacher Notes — come gli altri tuoi corsi PL.</p><p>Grazie per esserti preparato! 💙</p>",
      lmsTitle: "Ultimo passo: il test nell’LMS",
      lms: "<p>Torna alla <b>pagina della formazione nell’LMS</b> da cui hai aperto questa formazione. Subito sotto la formazione trovi il <b>test DST</b>.</p><p>👉 Devi completare e superare il test DST perché la formazione sia considerata completata con successo. Se non completi il test DST, la formazione resterà incompleta e potrebbe scadere.Il punteggio minimo per superarlo è l’<b>80%</b>.</p><p>Buona fortuna! ❤️</p>"
    }
  },

  courses: [

    /* ================= VIBE CODING ================= */
    {
      id: "vibe",
      icon: "🤖",
      name: "Vibe Coding",
      label: "Corso di coding e tecnologia",
      tagline: "Crea il tuo primo gioco runner con l’IA e scopri come si programma con l’IA.",
      facts: [["Lezioni", "5"], ["Durata della lezione", "60 min"], ["Livello", "Principiante — non è richiesta esperienza di programmazione"], ["Piattaforma", "AI Vibe Coding in Kodland Sparks"]],
      story: "Gli studenti costruiscono il loro <b>primo gioco runner con l’IA</b> e scoprono come si programma con l’IA. Imparano a scrivere <b>prompt chiari</b> che l’IA trasforma in codice e aggiungono nuove funzioni al gioco.</p><p><b>Non serve imparare la sintassi</b>: gli studenti provano il risultato, descrivono il bug e chiedono all’IA di correggerlo. Tutto avviene in <b>AI Vibe Coding in Kodland Sparks</b>. Non serve alcuna esperienza di programmazione. Alla fine, ogni studente ha un gioco con il proprio stile, il proprio eroe e il proprio ambiente, il cui codice è suddiviso in <b>HTML, CSS e JavaScript</b>, e una pagina del progetto in Sparks.</p>",
      outcomes: [
        "Scrivere prompt chiari e suddividere un compito complesso in passaggi più semplici.",
        "Creare con l’IA un gioco funzionante nel browser: salto, ostacoli, punteggio, Game Over e Restart.",
        "Trovare i bug e correggerli dialogando con l’IA.",
        "Capire a cosa servono HTML, CSS e JavaScript.",
        "Pubblicare il gioco e creare una pagina del progetto in Sparks."
      ],
      bo: { id: "2102", url: "https://bo.kodland.org/courses/2102" },
      programmeIntro: "5 lezioni da 60 minuti. Apri ogni lezione:",
      programme: [
        { n: "Lezione 1", title: "Il primo runner con l’IA", details: [["", "Gli studenti scoprono cos’è il vibe coding, scrivono il loro primo prompt e ottengono un gioco funzionante con un eroe, ostacoli e un punteggio. Lo eseguono nel browser e correggono i primi bug con l’IA."]] },
        { n: "Lezione 2", title: "Prompt e nuove funzioni", details: [["", "Le regole di un buon prompt. Gli studenti aggiungono nuove meccaniche di gioco, regolano la difficoltà, adattano l’interfaccia e verificano ogni modifica."]] },
        { n: "Lezione 3", title: "Stile, struttura ed eroe", details: [["", "Gli studenti suddividono il progetto in HTML, CSS e JavaScript e scoprono a cosa serve ogni file. Cambiano colori e stili e inseriscono nel gioco il proprio eroe."]] },
        { n: "Lezione 4", title: "L’ambiente del gioco", details: [["", "Gli studenti aggiungono uno sfondo e nuovi ostacoli: generano le immagini o le disegnano e le collegano al progetto. Poi verificano che le meccaniche funzionino ancora."]] },
        { n: "Lezione 5", title: "Progetto finale: pagina del progetto", details: [["", "Gli studenti rifiniscono il gioco: controllano che tutto funzioni, scrivono una descrizione e le regole, pubblicano il gioco su una pagina del progetto in Sparks e lo mostrano al tutor e agli altri studenti."]] }
      ],
      build: [
        ["🏃", "Un primo gioco runner", "Un gioco funzionante con un eroe, ostacoli e un punteggio, creato dal primo prompt ed eseguito nel browser."],
        ["⚙️", "Nuove meccaniche", "Nuove funzioni aggiunte tramite prompt, con il livello di difficoltà e l’interfaccia adattati e ogni modifica verificata."],
        ["🗂️", "HTML, CSS e JavaScript", "Il progetto suddiviso in tre file, in modo che ogni parte abbia il suo compito."],
        ["🧍", "Il proprio eroe", "Il proprio personaggio, con i propri colori e stili, inserito nel gioco."],
        ["🌄", "Un ambiente di gioco", "Uno sfondo e nuovi ostacoli, generati o disegnati e collegati al progetto."],
        ["🏁", "Una pagina del progetto in Sparks", "Il gioco finale, con descrizione e regole, mostrato al tutor e agli altri studenti."]
      ],
      pl: [
        "Ogni lezione dura <b>60 minuti</b>. Nella fase iniziale, definisci l’obiettivo del giorno: il primo gioco, le nuove funzioni, lo stile e la struttura, l’ambiente di gioco o il progetto finale.",
        "Quando uno studente alza la mano perché «l’IA ha rotto il gioco», non correggere il codice al suo posto: chiedi <b>quale prompt ha scritto</b> e aiutalo a renderlo più chiaro, oppure a suddividere il compito in passaggi più piccoli.",
        "Ricordagli di <b>provare ogni modifica</b> prima di chiedere la successiva — è l’abitudine fondamentale del corso.",
        "Nella <b>fase conclusiva</b>, lo studente ti mostra il suo gioco giocandoci e tu fornisci un feedback specifico: cosa funziona e un miglioramento da introdurre nel prossimo prompt.",
        "Nella lezione 5 gli studenti rifiniscono il gioco, scrivono una descrizione e le regole e lo pubblicano su una pagina del progetto in <b>Kodland Sparks</b>."
      ],
      platform: {
        text: "Gli studenti costruiscono il gioco in <b>AI Vibe Coding</b>, dentro <b>Kodland Sparks</b>, in un progetto <b>Game or web app</b> con un’anteprima in tempo reale e le schede HTML, CSS e JS. Scrivono prompt, provano il gioco, descrivono i bug e chiedono all’IA di correggerli. Il gioco finale va su una pagina del progetto in Sparks.",
        tools: ["Kodland Sparks · Game or web app", "Tutor IA", "HTML · CSS · JavaScript"],
        tour: "vibe",
        tourText: "Apri Studio, avvia un progetto Game or web app e guarda l’anteprima in tempo reale, le schede del codice e il tutor IA."
      },
      /* Progetti degli studenti pubblicati su Kodland Sparks: href, img, tag, title, by (nickname), desc */
      projects: [
        { href: "https://portfolio.kodland.org/DeBohpodast/cmrn729cf004mqv3fp20b1em3", img: "../images/proj_vibe1.webp", tag: "Web App", title: "Crystal Dash — 16-bit Runner", by: "DeBohpodast",
          desc: "Un runner retrò: il giocatore corre, raccoglie monete e schiva gli ostacoli, con livelli di difficoltà, comandi di salto e scatto e nuovi mondi da sbloccare." },
        { href: "https://portfolio.kodland.org/DeBohpodast/cmrn7ywpd007yqv3fvuanrprs", img: "../images/proj_vibe2.webp", tag: "Web App", title: "Game 3 Web", by: "DeBohpodast",
          desc: "Un gioco runner costruito attorno a menu chiari, così è facile da giocare — e può persino cambiare lingua." }
      ]
    },

    /* ================= SCIENCE VIA MINECRAFT ================= */
    {
      id: "minecraft",
      icon: "🧪",
      name: "Science via Minecraft",
      label: "Corso di coding e tecnologia",
      tagline: "Fai una domanda, formula un’ipotesi, svolgi un esperimento e verifica il risultato in Minecraft.",
      facts: [["Età", "8–9"], ["Lezioni", "5"], ["Durata della lezione", "60 min"], ["Livello", "Principiante"], ["Piattaforma", "Minecraft Java Edition (launcher Kodland)"]],
      story: "Gli studenti imparano le <b>scienze svolgendo esperimenti in Minecraft</b>. In un unico mondo del campus trasformano la sabbia in vetro e la lava in pietra, osservano come gli oggetti scivolano e cadono, fanno crescere piante e saltano sulla Luna. Ogni volta usano il <b>metodo scientifico</b>: fanno una domanda, formulano un’ipotesi, svolgono un esperimento e verificano il risultato.</p><p>In alcune lezioni gli studenti usano gli <b>artefatti</b>. Un artefatto è un piccolo datapack che cambia una regola del mondo, come la velocità con cui scorre il tempo o la gravità. Gli studenti cambiano un numero e vedono cosa succede. Nell’ultima lezione creano il proprio artefatto a partire da un modello.</p><p>Gli studenti giocano a <b>Minecraft Java Edition</b>, avviandolo tramite il launcher Kodland. Non sono richieste conoscenze pregresse di scienze o di programmazione. Alla fine, ogni studente ha il proprio esperimento, un artefatto e una relazione sull’esperimento su una pagina del progetto in Sparks.</p>",
      outcomes: [
        "Usare il metodo scientifico: fare una domanda, formulare un’ipotesi, svolgere un esperimento e trarre una conclusione.",
        "Spiegare come cambiano i materiali quando li scaldiamo o li mescoliamo con l’acqua.",
        "Sperimentare gli effetti delle forze sul movimento: attrito, caduta, rimbalzo e velocità.",
        "Spiegare di cosa hanno bisogno le piante per crescere e come gli animali di una catena alimentare dipendono gli uni dagli altri.",
        "Confrontare la gravità sulla Terra, sulla Luna e su Marte e scoprire quali rocce e minerali si trovano a quale profondità.",
        "Creare un artefatto a partire da un modello e pubblicarlo su Sparks insieme a una relazione sull’esperimento."
      ],
      bo: { id: "2185", url: "https://bo.kodland.org/courses/2185", note: "Nel BO, le prime lezioni di questo corso verranno aggiunte il 2 novembre 2026." },
      programmeIntro: "5 lezioni da 60 minuti. Apri ogni lezione:",
      programme: [
        { n: "Lezione 1", title: "Il laboratorio scientifico", details: [["", "Gli studenti che non hanno ancora installato il launcher lo fanno con il tutor. Poi tutti entrano nel mondo del campus e scoprono il metodo scientifico. Gli studenti osservano come cambiano i materiali: la sabbia diventa vetro, lava e acqua formano la pietra, il cemento in polvere si indurisce nell’acqua. Per ogni prova annotano un’ipotesi e il risultato nel quaderno di laboratorio."]] },
        { n: "Lezione 2", title: "Forze e movimento", details: [["", "Gli studenti sperimentano gli effetti dell’attrito osservando quanto lontano scivolano su ghiaccio, ghiaccio blu e terra. Osservano la caduta di sabbia e ghiaia, rimbalzano sui blocchi di slime e fanno viaggiare i carrelli da miniera lungo le rotaie alimentate. Poi confrontano i risultati e spiegano quale forza modifica il movimento."]] },
        { n: "Lezione 3", title: "Il mondo dei viventi", details: [["", "Gli studenti fanno crescere piante alla luce e al buio, con acqua e senza. L’artefatto del tempo accelera il tempo, così vedono il risultato nell’arco di una lezione. Alla fine osservano brevi catene alimentari: lupi e pecore, volpi e galline, api e fiori."]] },
        { n: "Lezione 4", title: "Spazio e Terra", details: [["", "Gli studenti usano l’artefatto della gravità per saltare sulla Terra, sulla Luna e su Marte e confrontare quanto in alto arrivano. Poi scendono in una miniera e scoprono quali rocce e minerali si trovano a quale profondità."]] },
        { n: "Lezione 5", title: "Il grande progetto scientifico", details: [["", "Gli studenti scelgono un argomento tra quelli delle lezioni 1–4, creano il proprio artefatto a partire da un modello e svolgono il proprio esperimento. Pubblicano l’artefatto e una relazione sull’esperimento su una pagina del progetto in Sparks e presentano il lavoro al tutor e agli altri studenti."]] }
      ],
      extra: {
        title: "🔬 Il metodo scientifico — tocca ogni passaggio",
        intro: "Ogni esperimento del corso segue gli stessi quattro passaggi. Sono il cuore del corso:",
        hint: "Tocca un passaggio per vedere cosa fa lo studente.",
        steps: [
          ["❓", "Domanda", "Lo studente osserva qualcosa nel mondo e si fa una domanda."],
          ["💡", "Ipotesi", "Formula un’ipotesi che possa essere verificata: «Penso che… perché…»."],
          ["⚗️", "Esperimento", "Svolge un esperimento in Minecraft: scalda un materiale, verifica cosa succede su una pendenza, fa crescere una pianta o salta sulla Luna."],
          ["📝", "Conclusione", "Confronta il risultato con la sua ipotesi, lo scrive nel quaderno di laboratorio e spiega cosa ha scoperto."]
        ]
      },
      build: [
        ["📒", "Un quaderno di laboratorio", "Un’ipotesi e un risultato per ogni prova, a partire dalla lezione 1."],
        ["🔥", "Esperimenti sui materiali", "La sabbia che diventa vetro, lava e acqua che formano la pietra, il cemento in polvere che si indurisce nell’acqua."],
        ["🛷", "Prove su forze e movimento", "Scivolate su ghiaccio, ghiaccio blu e terra, sabbia e ghiaia che cadono, blocchi di slime e carrelli da miniera sulle rotaie alimentate."],
        ["🌱", "Un esperimento sulla crescita delle piante", "Piante fatte crescere alla luce e al buio, con e senza acqua, grazie all’artefatto del tempo che ne accelera la crescita."],
        ["🌙", "Salti con gravità diverse ed esplorazione di una miniera", "Salti sulla Terra, sulla Luna e su Marte e una discesa in miniera per scoprire quali rocce e minerali si trovano a quale profondità."],
        ["🏆", "Il proprio artefatto e la relazione sull’esperimento", "Un artefatto creato a partire da un modello e pubblicato insieme a una relazione sull’esperimento su una pagina del progetto in Sparks."]
      ],
      pl: [
        "Gli studenti hanno <b>8–9 anni</b>: nelle prime lezioni verifica con attenzione che riescano a muoversi in Minecraft e a passare autonomamente da una scheda didattica alla successiva. Gli studenti che non hanno ancora installato il launcher lo installano <b>con te nella lezione 1</b>.",
        "Ogni esperimento è <b>individuale</b>: ogni studente svolge le proprie prove e tiene il proprio quaderno di laboratorio.",
        "Quando uno studente ti chiama, guidalo <b>con le domande</b> — «Cosa pensi che succederà? Perché?» — invece di anticipargli il risultato: l’obiettivo è aiutarlo a pensare come uno scienziato.",
        "Nella <b>fase conclusiva</b>, chiedi allo studente di spiegare il suo esperimento e la conclusione a cui è arrivato, e fai notare le differenze tra ciò che succede in Minecraft e nella vita reale.",
        "Tablet, smartphone e Chromebook <b>non sono supportati</b>: prima della prima lezione controlla i requisiti tecnici qui sotto."
      ],
      platform: {
        text: "Gli studenti giocano a <b>Minecraft Java Edition</b>, avviandolo tramite il <b>launcher Kodland</b>, in un unico mondo del campus. In alcune lezioni usano gli <b>artefatti</b> — piccoli datapack che cambiano una regola del mondo, come la velocità con cui scorre il tempo o la gravità — e nell’ultima lezione creano il proprio da un modello. Il loro esperimento, l’artefatto e la relazione sull’esperimento vengono pubblicati su una pagina del progetto in <b>Kodland Sparks</b>.",
        tools: ["Minecraft Java Edition", "Launcher Kodland", "Artefatti (datapack)", "Quaderno di laboratorio", "Kodland Sparks · Pagina del progetto"],
        tour: null,
        /* url: link alle istruzioni del launcher */
        launcher: {
          title: "Il launcher Kodland",
          text: "Tu e gli studenti accedete al corso tramite il launcher Kodland. Inviamo il link prima della prima lezione; segui le istruzioni per scaricarlo e configurarlo. <b>Per scaricare il launcher si usano le stesse credenziali di Kodland Sparks.</b>",
          btn: "📄 Apri le istruzioni del launcher ↗",
          url: "https://portfolio.kodland.org/launcher/download#guide"
        }
      },
      /* [icon, text] */
      requirements: [
        ["💻", "<b>Dispositivo:</b> un computer portatile o fisso con tastiera e mouse — <b>tablet, smartphone e Chromebook non sono supportati</b>"],
        ["🖥️", "<b>Sistema operativo:</b> Windows 10 o versioni successive; macOS 13 o versioni successive"],
        ["🧠", "<b>RAM:</b> 8 GB o più"],
        ["🚀", "<b>Software:</b> il launcher Kodland. Inviamo il link prima della prima lezione; gli studenti che non lo hanno ancora installato lo installano con il tutor nella lezione 1."]
      ]
    }
  ]
};
