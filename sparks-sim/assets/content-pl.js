/* ============================================================
   Przewodnik po Kodland Sparks · treść w języku POLSKIM
   Tłumaczenie content-en.js. Tłumaczyć tylko tekst w cudzysłowach / backtickach. Nie zmieniać tagów HTML, znaczników ${...}, kluczy, id, nazw plików ani adresów URL.
   W tekstach używać ’ (nigdy prostego apostrofu) oraz „ ” dla cytatów.
   ============================================================ */
window.CONTENT = { lang: 'pl' };

/* ============================================================
   INTERFACE: the replicated Kodland Sparks platform + guide layer
   ============================================================ */
CONTENT.ui = {
  title: 'Przewodnik po Kodland Sparks',

  /* ---------- top bar ---------- */
  logo: 'Kodland Sparks',
  nav: { feed:'Feed', my:'Moje projekty', publish:'Opublikuj projekt', studio:'Studio', ai:'Pomocnik AI' },

  /* ---------- Feed ---------- */
  feed: {
    bannerTitle: 'Spraw, by profil był twój',
    bannerText: 'Ustaw awatar i wybierz pseudonim — wszyscy zobaczą je na twoim profilu.',
    bannerBtn: 'Dostosuj profil',
    featured: 'Najnowsze wyróżnione projekty',
    feed: 'Feed',
    filter: 'Wszystkie projekty ˅',
    results: '(11,6 tys. wyników)',
    search: '🔍 Pseudonim lub tytuł projektu',
    feedbackWanted: 'Szukam opinii'
  },
  // text drawn inside some project thumbnails (fake game screens)
  thumbs: { coins:'🪙 79 monet', play:'▶ GRAJ', heroes:'BOHATEROWIE', armory:'ZBROJOWNIA', shop:'SKLEP', magicLab:'MAGICZNE LAB', neonRacer:'NEON RACER' },

  /* ---------- a published project (Creeper) ---------- */
  project: {
    title: 'Creeper',
    download: 'Pobierz',
    authorName: 'Mia Torres',
    uploaded: 'Dodano 16 paź 2026',
    desc: 'Creeper w świątecznej czapce się zgubił!! Pomóżcie mi go znaleźć!!',
    showTr: 'Pokaż tłumaczenie',
    fbTitle: 'Opublikowana opinia',
    fbUpdated: 'Zaktualizowano 16 paź 2026',
    fbBody: '<p>Mia, stworzyłaś bardzo rozpoznawalną postać zaledwie z kilku pikseli, a świąteczna czapka nadaje twojemu Creeperowi zabawny i oryginalny charakter.</p><p>Twój świąteczny Creeper jest pełen osobowości i kreatywności — widać, że lubisz wymyślać wyjątkowe postacie!</p>'
  },

  /* ---------- My projects ---------- */
  my: {
    name: 'Alex Tutor',
    friends: 'Znajomi',
    friendsTab: 'Znajomi (0)',
    subsTab: 'Obserwujący (0)',
    noFriends: 'Na razie brak znajomych',
    privateTag: 'Projekt prywatny',
    cardTitle: 'Rysunek'
  },

  /* ---------- Publish project ---------- */
  publish: {
    title: 'Nowy <span>projekt</span>',
    sub: 'Wybierz typ projektu, uzupełnij szczegóły i zdecyduj, kto może go zobaczyć.',
    typeLabel: 'Typ projektu',
    // [icon, name, description] — keep the first item (icon name) unchanged
    types: [
      ['image', 'Obraz', 'Prześlij rysunek, obraz, GIF lub WebP.'],
      ['python', 'Python', 'Wklej swój kod w Pythonie — odwiedzający będą mogli go uruchomić w przeglądarce.'],
      ['game', 'Game or Web App', '.sb3 ze Scratcha lub .zip z Unity/Godot/HTML/Python.'],
      ['creeper', 'Skin do Minecrafta', 'Prześlij skin 64×64 i pokaż go na modelu 3D.'],
      ['book', 'Historia', 'Strona z tekstem, obrazami i osadzonymi treściami'],
      ['globe', 'Embed', 'Wklej link do YouTube, Vimeo, Sketchfab, Tinkercad lub Canva.'],
      ['github', 'GitHub', 'Podlinkuj publiczne repozytorium GitHub.'],
      ['box', 'Inne', 'Jeśli żaden z powyższych typów nie pasuje — na przykład gra w Roblox lub aplikacja ze sklepu Play.']
    ],
    titleLabel: 'Tytuł',
    titleHint: 'Pozostało 30 znaków',
    descLabel: 'Opis',
    descHint: 'Pozostało 240 znaków',
    fileLabel: 'Rysunek',
    chooseFile: 'Wybierz plik',
    fileHint: 'PNG, JPG, WebP lub GIF do 5 MB',
    section: '📁 Sekcja',
    noSection: 'Bez sekcji',
    sectionHint: 'Sekcje pomagają grupować projekty na stronie twojego profilu.',
    reactions: 'Reakcje',
    reactionsHint: 'Wybierz, jakie reakcje mogą zostawiać odwiedzający pod tym projektem.',
    heartAlways: '💖 Serduszko jest zawsze dostępne',
    appearance: 'Wygląd',
    appearanceHint: 'Wybierz kolor ramki, aby wyróżnić kartę swojego projektu w feedzie.',
    frameSlots: 'Dostępne 5 z 5 miejsc na ramki',
    frameDefault: '⚫ Domyślna',
    common: 'Zwykłe',
    commonFrames: ['🔵 Niebo', '🟢 Szmaragd', '🟣 Fiolet', '🔴 Czerwień'],
    rare: 'Rzadkie',
    rareFrames: ['Lawenda', 'Róż', 'Szary'],
    visibility: 'Widoczność',
    // [name, description] — Public · Friends only · Only me
    vis: [
      ['Publiczny', 'Pojawia się w feedzie i w twoim publicznym portfolio.'],
      ['Tylko dla znajomych', 'Widoczny dla twoich znajomych, nauczycieli i dla ciebie.'],
      ['Tylko ja', 'Widoczny tylko dla ciebie w twoim portfolio.']
    ],
    // [label, description] — the three switches
    toggles: [
      ['Poproś o opinię', 'Inni autorzy będą mogli zostawić ustrukturyzowaną opinię o twoim projekcie. Dostępne tylko dla projektów publicznych.'],
      ['Zgadzam się, aby Kodland Sparks wykorzystywał ten projekt w promocji', 'Na przykład może pojawić się w naszych mediach społecznościowych, reklamach lub na stronie głównej, aby pokazać innym dzieciom, co tu można zrobić. Możesz to zmienić w dowolnym momencie.'],
      ['Weź udział w wyborze na Discordzie', 'Raz dziennie publikujemy najlepsze projekty dnia na naszym serwerze Discord. Zostaw tę opcję włączoną, a twój też może zostać wybrany. Tylko projekty publiczne.']
    ],
    publish: 'Opublikuj'
  },

  /* ---------- Studio: modes and slots ---------- */
  studio: {
    modesTitle: 'Co chcesz stworzyć?',
    modesSub: 'Wybierz tryb, aby zacząć.',
    creative: 'Tryb kreatywny',
    creativeText: 'Buduj, co tylko chcesz — gry, strony, sztukę.',
    challenges: 'Tryb wyzwań',
    challengesText: 'Wykonuj zadania i zdobywaj kryształy.',
    slotsTitle: 'Creative Studio',
    slotsSub: 'Wybierz projekt, aby kontynuować, albo zacznij coś nowego.',
    slot: n => `Slot ${n}`,
    startHere: 'Zacznij tutaj',
    comingSoon: 'Wkrótce',
    crumbBack: 'Moje projekty'
  },

  /* ---------- Studio: "What will you build?" menu ---------- */
  build: {
    title: 'Co zbudujesz?',
    sub: 'Wybierz, od czego zacząć.',
    back: '‹ Wstecz',
    recommended: 'polecane',
    progGroup: 'Programowanie i rozwój',
    mediaGroup: 'Media i treści',
    // [name, description] of each starting card
    cards: {
      web: ['Game or web app', 'HTML, CSS, JavaScript lub Python'],
      terminal: ['Terminal Python', 'Program w terminalu'],
      scratch: ['Scratch', 'Buduj z bloków Scratcha'],
      pixel: ['Pixel Art', 'Rysuj piksel po pikselu'],
      anim: ['Animation', 'Rysuj klatka po klatce'],
      music: ['Music', 'Utwór na siatce'],
      skin: ['Skin Editor', 'Skin do modelu 3D']
    },
    // [heading, description] of each group of templates
    groups: {
      webjs: ['Web App JS', 'Strona internetowa zbudowana z HTML, CSS i JavaScript. Działa w podglądzie na żywo — zmiany widać od razu.'],
      webpy: ['Web App Python', 'Strona internetowa zbudowana z HTML i CSS, z logiką w Pythonie. Działa w podglądzie na żywo — zmiany widać od razu.'],
      terminal: ['Terminal Python', 'Program w jednym pliku Pythona. Działa w terminalu po naciśnięciu przycisku Play — rozmawiasz z nim za pomocą print() i input().'],
      pixel: ['Pixel Art', 'Rysuj sprite’y i animacje piksel po pikselu. Wybierz rozmiar płótna na start, a potem opublikuj jako obraz lub animację.'],
      anim: ['Animation', 'Narysuj krótką kreskówkę klatka po klatce: rysuj każdą klatkę, zobacz poprzednią przez onion skin i naciśnij play. Wybierz rozmiar płótna na start.'],
      music: ['Music', 'Zbuduj krótki utwór na siatce: namaluj melodię, dodaj perkusję i naciśnij play.'],
      skin: ['Skin Editor', 'Namaluj skin do Minecrafta na mapie 2D i zobacz, jak owija się wokół modelu 3D. Symetria odbija twoje pociągnięcia po obu stronach.']
    },
    // template buttons (keys are ids — do not change them)
    tpl: {
      webjs:'Pusty projekt', webjsb:'Projekt podstawowy', alien:'Alien Invaders', calcjs:'Kalkulator',
      webpy:'Pusty projekt', webpyb:'Projekt podstawowy', snake:'Gra Snake', calcpy:'Kalkulator',
      termempty:'Pusty projekt', guess:'Zgadnij liczbę',
      px16:'16 × 16', px32:'32 × 32', px64:'64 × 64', px128:'128 × 128',
      an640:'640 × 480', an960:'960 × 720', an1280:'1280 × 960',
      track:'Nowy utwór', retro:'Retro', tetris:'Tetris', kpop:'K-pop',
      steve:'Steve', alex:'Alex'
    },
    sizeHint: 'Rozmiar w pikselach. Możesz go zmienić później.'
  },

  /* ---------- Studio: editors ---------- */
  editor: {
    // project title shown in the editor bar ('' = empty placeholder)
    titles: { web:'', terminal:'Zgadnij liczbę', scratch:'', pixel:'', anim:'', music:'Retro', skin:'' },
    myProjects: 'Moje projekty',
    projectTitle: 'Tytuł projektu',
    newProject: 'Nowy projekt',
    publish: 'Opublikuj',
    // AI tutor panel
    robby: 'Inimitable Robby',
    aiTutor: 'Tutor AI',
    chat: 'Czat',
    tasks: 'Zadania',
    greeting: 'Cześć! Jestem twoim kumplem od kodowania. Co dziś budujesz? Zapytaj mnie, co dodać dalej albo jak ulepszyć kod — zróbmy razem coś fajnego! 🚀',
    memory: 'Pamiętam tylko twoje ostatnie 10 wiadomości — jeśli rozmawialiśmy o czymś dawno temu, krótko mi przypomnij.',
    askTip: 'Poproś o wskazówkę...',
    // web app editor
    preview: 'Podgląd',
    htmlComment: '<!-- Tu wpisz swój HTML -->',
    // terminal Python editor
    terminal: 'Terminal',
    stop: '▢ Stop',
    termOut: 'Komputer wylosował liczbę od 1 do 100. Spróbuj ją odgadnąć!<br>Twój typ:',
    answer: 'Twoja odpowiedź',
    send: '➤ Wyślij',
    // Python code shown in the editor: translate only the comment and the text inside "double quotes"
    py: ['import random', '', '# Komputer losuje liczbę od 1 do 100', 'secret = random.randint(1, 100)', 'attempts = 0', '', 'print(\"Komputer wylosował liczbę od 1 do 100. Spróbuj ją odgadnąć!\")', '', 'while True:', '    guess = int(input(\"Twój typ: \"))', '    attempts += 1', '', '    if guess < secret:', '        print(\"Za mało! Spróbuj jeszcze raz.\")', '    elif guess > secret:', '        print(\"Za dużo! Spróbuj jeszcze raz.\")', '    else:', '        print(\"Udało się w\", attempts, \"próbach!\")', '        break'],
    // Scratch editor
    scratch: {
      cats: ['Ruch', 'Wygląd', 'Dźwięk', 'Zdarzenia', 'Sterowanie', 'Czujniki', 'Operatory', 'Zmienne', 'Moje bloki'],
      code: '▤ Kod', costumes: '🖌 Kostiumy', sounds: '🔊 Dźwięki', find: 'Szukaj (Ctrl+F)',
      palette: 'Ruch',
      blocks: ['przesuń o <em>10</em> kroków', 'obróć ↻ o <em>15</em> stopni', 'obróć ↺ o <em>15</em> stopni', 'idź do <em class=\"ddv\">losowa pozycja ▾</em>', 'idź do x: <em>0</em> y: <em>0</em>', 'płyń <em>1</em> s do <em class=\"ddv\">losowa pozycja ▾</em>', 'płyń <em>1</em> s do x: <em>0</em> y: <em>0</em>', 'ustaw kierunek <em>90</em>'],
      sprite: 'Duszek', spriteName: 'Duszek1', size: 'Rozmiar', direction: 'Kierunek', stage: 'Scena'
    },
    // drawing editors (pixel art, animation, skin)
    draw: {
      draw: 'RYSUJ', brush: 'ROZMIAR PĘDZLA', shade: 'CIENIE I DITHER', canvas: 'PŁÓTNO', history: 'HISTORIA',
      dither: 'DITHER', view: 'WIDOK', exportL: 'Eksport', map2d: 'Mapa 2D',
      speed: 'Prędkość', firstFrame: 'Narysuj pierwszą klatkę, a potem naciśnij +'
    },
    // music editor
    music: { track:'Retro ˅', addTrack:'+ Ścieżka', tempo:'Tempo', bpm:'180 BPM', drums:'Perkusja', electronic:'Elektroniczne', acoustic:'Akustyczne' }
  },

  /* ---------- AI helper ---------- */
  ai: {
    newChat: '+ Nowy czat',
    keep: 'Przechowuję twoje ostatnie 5 czatów, ale pamiętam z nich ważne fakty.',
    memory: 'Co o tobie pamiętam',
    credits: 'Zostało 1000 z 1000 kredytów',
    pictures: '0 z 6 obrazów dzisiaj',
    resets: 'Zeruje się o 00:00 UTC',
    name: 'Spark Aiko',
    role: 'Pomocnik AI',
    hello: 'Cześć! Jestem Aiko, twój pomocnik AI. Zapytaj mnie o cokolwiek dotyczącego twoich projektów,<br>kodu czy pomysłów — albo wybierz coś poniżej.',
    chips: ['Pomóż mi wymyślić pomysł na grę', 'Wyjaśnij błąd w moim kodzie', 'Nie wiem, co robić dalej?', 'Narysuj mi postać'],
    ask: 'Zapytaj o cokolwiek...'
  },

  /* ---------- Rewards drawer (crystals) ---------- */
  rewards: { title:'NAGRODY', rarity:'ZWYKŁA', hint:'Kliknij skrzynię, aby ją otworzyć' },

  /* ---------- Coach card (guide layer) ---------- */
  coach: {
    step: (n, total) => `Przewodnik Sparks · ${n}/${total}`,
    hint: '👆 Kliknij wyróżniony element',
    next: 'Dalej →',
    backToMenu: '<br><br>Naciśnij <b>Dalej</b>, aby wrócić do menu projektów.'
  },

  /* ---------- Finish modal ---------- */
  finish: {
    kicker: 'Przewodnik ukończony',
    title: '🎓 Znasz Kodland Sparks',
    intro: 'Przeszliśmy przez platformę, z której korzystają twoi uczniowie:',
    items: [
      '<b>Feed</b>: projekty kolegów i koleżanek, z reakcjami i opiniami AI.',
      '<b>Moje projekty</b>: wszystko, co zostało zapisane lub opublikowane, przez tutorów i uczniów.',
      '<b>Opublikuj projekt</b>: udostępnianie gotowego projektu, wybór, kto go widzi, i zdobywanie nagród.',
      '<b>Studio</b>: tryb kreatywny do tworzenia kodu (aplikacje webowe, Python, Scratch), rysunków, animacji, muzyki i skinów oraz tryb wyzwań do zdobywania kryształów.',
      '<b>Pomocnik AI</b> i <b>tutor AI</b>: prowadzą i dają wskazówki, ale <b>AI proponuje, autor decyduje</b>.'
    ],
    codeLabel: '🔑 Twój kod ukończenia',
    codeHint: 'Skopiuj go do szkolenia, aby potwierdzić, że ukończono przewodnik.',
    back: '← Wróć do szkolenia',
    closeMsg: 'Zamknij tę kartę, aby wrócić do szkolenia, a następnie wpisz tam swój kod ukończenia.'
  },

  /* ---------- Welcome screen ---------- */
  welcome: {
    kicker: 'New Educational Model · Szkolenie dla tutorów',
    title: 'Przewodnik po <span>Kodland Sparks</span>',
    lead: 'Ten przewodnik prowadzi przez <b>Kodland Sparks</b>, platformę, na której twoi uczniowie publikują i tworzą swoje projekty. Sam będziesz poruszać się po platformie i klikać tam, gdzie wskaże przewodnik.',
    seeTitle: 'Co zobaczysz',
    see: [
      '<b>Feed</b>: jak uczniowie widzą projekty innych i na nie reagują oraz jakie opinie AI otrzymują.',
      '<b>Moje projekty</b> i <b>Opublikuj projekt</b>: gdzie znajduje się zapisana praca i jak publikuje się gotowy projekt.',
      '<b>Studio</b>: co uczniowie tworzą na zajęciach — kod (aplikacje webowe, Python, Scratch), rysunki, animacje, muzykę i skiny — oraz tryb wyzwań.',
      '<b>Pomocnik AI</b> i <b>kryształy</b>, które zdobywają uczniowie.'
    ],
    howTitle: 'Jak z niego korzystać',
    howText: 'To przewodnik, a nie symulacja do ćwiczeń: nie ma decyzji do podjęcia i nic nie można stracić. Klikaj wyróżniony element na każdym ekranie albo naciśnij <b>Dalej</b>, gdy krok prosi o przeczytanie.',
    start: 'ZACZNIJ PRZEWODNIK →'
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
  /* 1 */ { title:'Poznaj Kodland Sparks',
    text:'<b>Kodland Sparks</b> to platforma, na której uczniowie <b>publikują swoje projekty</b>, uczą się dalej między lekcjami i otrzymują opinie od kolegów oraz od mentora AI.<br><br>Górny pasek ma wszystko: <b>Feed</b>, <b>Moje projekty</b>, <b>Opublikuj projekt</b>, <b>Studio</b>, <b>pomocnika AI</b> i <b>kryształy</b>. Odwiedzimy każdy z nich.' },
  /* 2 */ { title:'Feed',
    text:'<b>Feed</b> to strona główna: pokazuje projekty opublikowane przez uczniów. Każda karta pokazuje <b>typ projektu</b> (Web App, Scratch, PNG, Python…), otrzymane reakcje i autora.<br><br><b>Szukam opinii</b> oznacza, że autor poprosił o opinię. Pod wyróżnionymi projektami Feed wyświetla wszystkie projekty.' },
  /* 3 */ { title:'Otwórz projekt kolegi',
    text:'Uczniowie mogą wchodzić w interakcje z projektami, które opublikowali ich koledzy. Kliknij projekt <b>Creeper</b>, aby go otworzyć.' },
  /* 4 */ { title:'Opublikowany projekt',
    text:'Ten projekt to <b>rysunek</b> (PNG). Inne typy otwierają się w ten sam sposób: projekty Scratch i webowe można uruchomić od razu tutaj, a kod Pythona działa w przeglądarce.' },
  /* 5 */ { title:'Szczegóły i reakcje',
    text:'Pod projektem możesz go <b>pobrać</b> i zobaczyć jego <b>autora</b>, datę dodania, liczbę wyświetleń i otrzymane <b>reakcje</b>: 💖 👍 😁 🔥 🦄.<br><br>Reakcje to najszybszy sposób, by koledzy mogli świętować nawzajem swoje prace.' },
  /* 6 */ { title:'Opinia od AI',
    text:'Opublikowane projekty mogą otrzymywać także <b>pisemną opinię od mentora AI</b> (tutaj <b>Inimitable Robby</b>). Wskazuje, co uczeń zrobił dobrze, i zachęca go do dalszego tworzenia.<br><br>Jeśli tekst jest napisany w innym języku, <b>Pokaż tłumaczenie</b> go przetłumaczy.' },
  /* 7 */ { title:'Moje projekty',
    text:'Teraz kliknij <b>Moje projekty</b> na górnym pasku.' },
  /* 8 */ { title:'Wszystkie twoje projekty',
    text:'<b>Moje projekty</b> to lista wszystkich projektów zapisanych lub opublikowanych <b>przez ciebie jako tutora albo przez ucznia</b>.<br><br>Każda karta pokazuje typ (tutaj <b>PNG</b>) i informację, czy projekt jest prywatny. To tam uczniowie wracają, by odnaleźć swoje prace.' },
  /* 9 */ { title:'Opublikuj projekt',
    text:'Kliknij <b>Opublikuj projekt</b> na górnym pasku.' },
  /* 10 */ { title:'Opublikuj gotowy projekt',
    text:'<b>Opublikuj projekt</b> służy do projektów, które uczniowie <b>już stworzyli i zapisali na komputerze</b>. Najpierw wybierają typ: Obraz, Python, Game or Web App (plik .sb3 ze Scratcha lub .zip), Skin do Minecrafta, Historia, Embed, GitHub lub Inne.' },
  /* 11 */ { title:'Uzupełnij szczegóły',
    text:'Uczeń dodaje <b>tytuł</b> (30 znaków), <b>opis</b> (240 znaków) i <b>plik</b> (PNG, JPG, WebP lub GIF do 5 MB).<br><br>Może też grupować projekty w <b>sekcji</b> i wybrać, jakie <b>reakcje</b> mogą zostawiać odwiedzający.' },
  /* 12 */ { title:'Wybierz, kto go widzi',
    text:'<b>Wygląd</b> ustawia kolor ramki karty w Feedzie; więcej kolorów odblokowuje się później.<br><br><b>Widoczność</b>: <b>Publiczny</b>, <b>Tylko dla znajomych</b> lub <b>Tylko ja</b>.<br><br>Opcjonalne przełączniki: <b>Poproś o opinię</b>, zgoda na wykorzystanie projektu przez Kodland Sparks w promocji oraz codzienny <b>wybór na Discordzie</b>.' },
  /* 13 */ { title:'Opublikuj',
    text:'Naciśnięcie <b>Opublikuj</b> udostępnia projekt. Publikowanie może <b>przynieść nagrody</b> — przycisk pokazuje ikonę kryształu. Kryształy zobaczymy na końcu.' },
  /* 14 */ { title:'Studio',
    text:'Teraz część, z której uczniowie korzystają na zajęciach najczęściej. Kliknij <b>Studio</b>.' },
  /* 15 */ { title:'Dwa tryby',
    text:'<b>Studio</b> ma dwa tryby:<br><br>• <b>Tryb kreatywny</b>: buduj, co tylko chcesz — gry, strony, sztukę — od zera lub z gotowej bazy.<br>• <b>Tryb wyzwań</b>: wykonuj zadania i <b>zdobywaj kryształy</b>.' },
  /* 16 */ { title:'Tryb kreatywny',
    text:'Kliknij <b>Tryb kreatywny</b>.' },
  /* 17 */ { title:'Sloty projektów',
    text:'<b>Creative Studio</b> przechowuje projekty, nad którymi pracują uczniowie, w <b>slotach</b>. Sloty od 1 do 3 są otwarte; sloty od 4 do 6 pojawią się wkrótce.<br><br>Kliknij <b>Slot 1</b>, aby zacząć nowy projekt.' },
  /* 18 */ { title:'Co zbudujesz?',
    text:'Uczniowie wybierają, od czego zacząć:<br>• <b>Programowanie i rozwój</b>: Game or web app, Terminal Python, Scratch.<br>• <b>Media i treści</b>: Pixel Art, Animation, Music, Skin Editor.<br><br>To, z czego korzystają, zależy od ich kursu. Kliknij <b>Game or web app</b>.' },
  /* 19 */ { title:'Aplikacja webowa: wybierz punkt wyjścia',
    text:'Aplikację webową buduje się z <b>HTML, CSS i JavaScript</b> (Web App JS) albo z HTML i CSS oraz logiką w <b>Pythonie</b> (Web App Python).<br><br>Uczniowie zaczynają od <b>Pustego projektu</b> lub od bazy, takiej jak Alien Invaders czy Gra Snake. Kliknij <b>Pusty projekt</b> w sekcji Web App JS.' },
  /* 20 */ { title:'Edytor: podgląd i kod',
    text:'U góry <b>Podgląd</b> pokazuje wynik na żywo: zmiany pojawiają się natychmiast. Poniżej karty z kodem: <b>HTML</b>, <b>CSS</b> i <b>JS</b>.' },
  /* 21 */ { title:'Tutor AI',
    text:'Po prawej <b>tutor AI</b> (Inimitable Robby) to kumpel od kodowania z kartami <b>Czat</b> i <b>Zadania</b>. Uczniowie proszą go o wskazówkę albo o radę, jak ulepszyć kod.<br><br>Pamiętaj: <b>AI proponuje, autor decyduje</b>. Pomaga, ale nie buduje projektu za uczniów.' },
  /* 22 */ { title:'Zapisz, nazwij i opublikuj',
    text:'Górny pasek pokazuje <b>slot</b>, przycisk zapisu i <b>tytuł projektu</b>. Po prawej: <b>Nowy projekt</b>, przyciski do otwierania, przesyłania i pobierania projektu oraz <b>Opublikuj</b>, które udostępnia go w Feedzie.' },
  /* 23 */ { title:'Zacznij kolejny projekt',
    text:'Zobaczmy inne rodzaje projektów. Kliknij <b>Nowy projekt</b>.' },
  /* 24 */ { title:'Terminal Python',
    text:'<b>Terminal Python</b> to program działający w terminalu. Kliknij go.' },
  /* 25 */ { title:'Zacznij od bazy',
    text:'Program w Pythonie mieści się w jednym pliku, uruchamia się przyciskiem <b>Play</b> i rozmawia z użytkownikiem za pomocą <code>print()</code> i <code>input()</code>.<br><br>Kliknij <b>Zgadnij liczbę</b>.' },
  /* 26 */ { title:'Projekt w Pythonie',
    text:'Program działa w czarnym <b>terminalu</b>: wyświetla komunikaty i czeka na odpowiedź gracza w polu <b>Twoja odpowiedź</b>. <b>Run</b> / <b>Stop</b> uruchamia go i zatrzymuje, a <b>kod Pythona</b> jest tuż poniżej. Tutor AI jest po prawej, jak w każdym edytorze kodu.' + CONTENT.ui.coach.backToMenu },
  /* 27 */ { title:'Scratch',
    text:'<b>Scratch</b> pozwala uczniom budować z bloków Scratcha. Kliknij go.' },
  /* 28 */ { title:'Projekt w Scratchu',
    text:'<b>Edytor Scratcha</b> w Kodland Sparks: <b>kategorie bloków i paleta</b> po lewej, <b>obszar kodu</b> pośrodku oraz <b>scena</b> z duszkiem po prawej. Są też karty <b>Kostiumy</b> i <b>Dźwięki</b>. Tutor AI czeka w okrągłym przycisku po prawej.' + CONTENT.ui.coach.backToMenu },
  /* 29 */ { title:'Pixel Art',
    text:'Do rysowania uczniowie mogą użyć <b>Pixel Art</b>: rysują piksel po pikselu. Kliknij go.' },
  /* 30 */ { title:'Wybierz rozmiar płótna',
    text:'Wybierają <b>rozmiar płótna</b>; <b>32 × 32</b> jest polecany. Wynik można opublikować jako obraz lub animację.<br><br>Kliknij <b>32 × 32</b>.' },
  /* 31 */ { title:'Projekt rysunkowy',
    text:'<b>Edytor pixel artu</b>: narzędzia rysowania, rozmiary pędzla, cienie, kolory i cofanie po lewej, <b>płótno</b> pośrodku oraz <b>klatki</b> na dole, by zamienić rysunek w animację.' + CONTENT.ui.coach.backToMenu },
  /* 32 */ { title:'Animation',
    text:'<b>Animation</b> pozwala uczniom narysować krótką kreskówkę klatka po klatce. Kliknij ją.' },
  /* 33 */ { title:'Wybierz rozmiar płótna',
    text:'Płótna w Animation mają trzy rozmiary; <b>960 × 720</b> jest polecany. Kliknij go.' },
  /* 34 */ { title:'Projekt animacji',
    text:'Uczniowie rysują każdą <b>klatkę</b>, widzą poprzednią przez <b>onion skin</b> i naciskają play, by obejrzeć animację. Mogą zmieniać prędkość i zapętlić ją.' + CONTENT.ui.coach.backToMenu },
  /* 35 */ { title:'Music',
    text:'<b>Music</b> pozwala uczniom zbudować krótki utwór na siatce. Kliknij go.' },
  /* 36 */ { title:'Zacznij utwór',
    text:'Mogą zacząć <b>Nowy utwór</b> albo od bazy: Retro, Tetris lub K-pop. Kliknij <b>Retro</b>.' },
  /* 37 */ { title:'Projekt muzyczny',
    text:'Uczniowie <b>malują melodię</b> na siatce, dodają <b>ścieżki</b> i <b>perkusję</b>, zmieniają <b>tempo</b> i naciskają play.' + CONTENT.ui.coach.backToMenu },
  /* 38 */ { title:'Skin Editor',
    text:'<b>Skin Editor</b> jest do Minecrafta: uczniowie malują skin do modelu 3D. Kliknij go.' },
  /* 39 */ { title:'Wybierz postać',
    text:'Zaczynają od <b>Steve’a</b> lub <b>Alex</b>. Kliknij <b>Steve</b>.' },
  /* 40 */ { title:'Projekt skina',
    text:'Skin maluje się na <b>modelu 3D</b> albo na <b>mapie 2D</b>, a symetria odbija pociągnięcia po obu stronach. Gdy jest gotowy, można go <b>wyeksportować</b> jako PNG lub MCPACK.' },
  /* 41 */ { title:'Pomocnik AI',
    text:'Zielony przycisk <b>Pomocnik AI</b> na górnym pasku otwiera czat. Kliknij go.' },
  /* 42 */ { title:'Zapytaj Aiko',
    text:'<b>Aiko</b> to pomocnik AI uczniów: mogą pytać o swoje projekty, kod lub pomysły albo wybrać podpowiedź, np. <i>Wyjaśnij błąd w moim kodzie</i> lub <i>Nie wiem, co robić dalej?</i><br><br>Pamięta ważne fakty z ostatnich czatów, a uczniowie mogą te notatki zobaczyć i usunąć.' },
  /* 43 */ { title:'Kryształy',
    text:'Fioletowy licznik pokazuje <b>kryształy</b> zdobyte przez ucznia. Kliknij go.' },
  /* 44 */ { btn:'Zakończ ✓', title:'Nagrody',
    text:'To jest panel <b>Nagród</b>. Uczniowie zdobywają kryształy, wykonując zadania w <b>trybie wyzwań</b> i publikując projekty, a następnie otwierają <b>skrzynię</b>, by zobaczyć, co wygrali.<br><br>Na razie nie ma żadnych, więc licznik pokazuje 0.' }
];

/* ============================================================
   COURSE TOURS (multi-courses trainings): Kodland_Sparks_Tour.html?tour=<id>
   Each tour runs a few steps of the guide. "steps" = title / text of each step, in order.
   ============================================================ */
CONTENT.tours = {
  ui: {
    kicker: 'Tour ukończony',
    finishBtn: 'Zakończ ✓',
    replay: '↻ Obejrzyj tour jeszcze raz',
    continueHere: 'Kontynuuj w szkoleniu: przewiń w dół, pod to okno.',
    closeTab: 'Zamknij tę kartę, aby wrócić do szkolenia.'
  },

  /* ---------- Video Creation ---------- */
  video: {
    welcome: {
      kicker: 'Video Creation · Kodland Sparks',
      title: 'Video Creation <span>w Sparks</span>',
      lead: 'Uczniowie montują swoje filmy w CapCut Desktop, a <b>Kodland Sparks</b> to miejsce, w którym dzieje się reszta: animowane intro ich kanału, <b>Sparks AI</b> działające jako redaktor scenariusza oraz strona projektu, na której publikują film końcowy.',
      see: ['Studio i jego <b>sloty projektów</b>.', 'Edytor <b>Animation</b>: rysowanie klatka po klatce, jak intro kanału z lekcji 1.', '<b>Pomocnik AI</b>, z którego uczniowie korzystają przy pomysłach, obrazach i głosach lektorskich.'],
      howText: 'Klikaj wyróżniony element na każdym ekranie albo naciśnij <b>Dalej</b>, gdy krok prosi o przeczytanie. Nic nie może pójść źle.',
      start: 'ZACZNIJ TOUR →'
    },
    steps: [
      { title:'Studio: dwa tryby', text:'To jest <b>Studio</b>, gdzie uczniowie tworzą. Ma dwa tryby:<br><br>• <b>Tryb kreatywny</b>: buduj, co tylko chcesz — gry, sztukę, animacje.<br>• <b>Tryb wyzwań</b>: wykonuj zadania i zdobywaj kryształy.' },
      { title:'Tryb kreatywny', text:'Kliknij <b>Tryb kreatywny</b>.' },
      { title:'Sloty projektów', text:'Uczniowie przechowują projekty, nad którymi pracują, w <b>slotach</b>. Kliknij <b>Slot 1</b>, aby zacząć nowy projekt.' },
      { title:'Animation', text:'Video Creation zaczyna się od <b>intro kanału</b>: na lekcji 1 uczniowie rysują animowane intro w Animation Studio. W Sparks rysowanie klatka po klatce znajduje się w <b>Animation</b>, w sekcji Media i treści. Kliknij ją.' },
      { title:'Wybierz rozmiar płótna', text:'Płótna w Animation mają trzy rozmiary; <b>960 × 720</b> jest polecany. Kliknij go.' },
      { title:'Projekt animacji', text:'Uczniowie rysują każdą <b>klatkę</b>, widzą poprzednią przez <b>onion skin</b> i naciskają play. Mogą zmieniać prędkość i zapętlić animację.<br><br>Ta sama idea — wiele małych klatek tworzących ruch — jest podstawą każdego filmu, który będą później montować.' },
      { title:'Pomocnik AI', text:'W tym kursie AI działa jako <b>redaktor scenariusza</b>: uczniowie piszą szkic i pytają, gdzie robi się nudno. Sparks daje im też obrazy AI do ich filmów. Kliknij zielony przycisk <b>Pomocnik AI</b>.' },
      { title:'AI proponuje, uczeń decyduje', text:'Uczniowie proszą <b>Aiko</b> o opinię o scenariuszu, pomysły na hook lub obraz do kolejnego filmu. AI pomaga, ale <b>uczniowie decydują, co zostawić</b>, i sami montują.<br><br>Gdy film końcowy jest gotowy, umieszczają go na stronie projektu w Sparks.' }
    ],
    finish: { title:'🎬 Wiesz, gdzie w Sparks odbywa się Video Creation', intro:'W tym tourze pojawiły się:', items:[
      '<b>Studio</b> i jego <b>sloty</b> projektów.',
      'Edytor <b>Animation</b>, do pracy klatka po klatce.',
      '<b>Pomocnik AI</b>: redaktor scenariusza, nigdy autor.'
    ] }
  },

  /* ---------- Sound Design (Music) ---------- */
  music: {
    welcome: {
      kicker: 'Sound Design · Kodland Sparks',
      title: 'Sound Design <span>w Sparks</span>',
      lead: 'Sound Design odbywa się w <b>Music Studio</b>, prosto w przeglądarce, w ramach <b>Kodland Sparks</b>: nie trzeba niczego instalować. Otwórzmy edytor muzyczny, którego będą używać twoi uczniowie.',
      see: ['Studio i jego <b>sloty projektów</b>.', 'Edytor <b>Music</b> i jego utwory startowe.', 'Jak zbudowany jest utwór: melodia, ścieżki, perkusja i tempo.'],
      howText: 'Klikaj wyróżniony element na każdym ekranie albo naciśnij <b>Dalej</b>, gdy krok prosi o przeczytanie. Nic nie może pójść źle.',
      start: 'ZACZNIJ TOUR →'
    },
    steps: [
      { title:'Studio: dwa tryby', text:'To jest <b>Studio</b>, gdzie uczniowie tworzą. Ma dwa tryby:<br><br>• <b>Tryb kreatywny</b>: buduj, co tylko chcesz — gry, sztukę, muzykę.<br>• <b>Tryb wyzwań</b>: wykonuj zadania i zdobywaj kryształy.' },
      { title:'Tryb kreatywny', text:'Kliknij <b>Tryb kreatywny</b>.' },
      { title:'Sloty projektów', text:'Uczniowie przechowują projekty, nad którymi pracują, w <b>slotach</b>. Kliknij <b>Slot 1</b>, aby zacząć nowy projekt.' },
      { title:'Music', text:'Music znajduje się w sekcji <b>Media i treści</b>. Kliknij <b>Music</b>.' },
      { title:'Zacznij utwór', text:'Uczniowie zaczynają <b>Nowy utwór</b> albo od bazy: Retro, Tetris lub K-pop. Kliknij <b>Retro</b>.' },
      { title:'Projekt muzyczny', text:'Uczniowie <b>malują melodię</b> na siatce, dodają <b>ścieżki</b> i <b>perkusję</b>, zmieniają <b>tempo</b> i naciskają play.<br><br>Tak działa kurs: <b>najpierw tworzą</b> i odkrywają rytm, melodię i harmonię w trakcie produkcji.' }
    ],
    finish: { title:'🎶 Znasz studio Music', intro:'W tym tourze pojawiły się:', items:[
      '<b>Studio</b> i jego <b>sloty</b> projektów.',
      'Edytor <b>Music</b> i jego utwory startowe.',
      'Jak zbudowany jest utwór: melodia, ścieżki, perkusja i tempo.'
    ] }
  },

  /* ---------- Pixel Art ---------- */
  pixel: {
    welcome: {
      kicker: 'Pixel Art · Kodland Sparks',
      title: 'Pixel Art <span>w Sparks</span>',
      lead: 'Pixel Art odbywa się w <b>Pixel Studio</b>, w ramach <b>Kodland Sparks</b>. Otwórzmy go tak, jak zrobią to twoi uczniowie.',
      see: ['Studio i jego <b>sloty projektów</b>.', 'Edytor <b>Pixel Art</b> i jego rozmiary płótna.', 'Narzędzia rysowania i <b>klatki</b>, które zamieniają rysunek w animację.'],
      howText: 'Klikaj wyróżniony element na każdym ekranie albo naciśnij <b>Dalej</b>, gdy krok prosi o przeczytanie. Nic nie może pójść źle.',
      start: 'ZACZNIJ TOUR →'
    },
    steps: [
      { title:'Studio: dwa tryby', text:'To jest <b>Studio</b>, gdzie uczniowie tworzą. Ma dwa tryby:<br><br>• <b>Tryb kreatywny</b>: buduj, co tylko chcesz — gry, sztukę, animacje.<br>• <b>Tryb wyzwań</b>: wykonuj zadania i zdobywaj kryształy.' },
      { title:'Tryb kreatywny', text:'Kliknij <b>Tryb kreatywny</b>.' },
      { title:'Sloty projektów', text:'Uczniowie przechowują projekty, nad którymi pracują, w <b>slotach</b>. Kliknij <b>Slot 1</b>, aby zacząć nowy projekt.' },
      { title:'Pixel Art', text:'Pixel Art znajduje się w sekcji <b>Media i treści</b>: uczniowie rysują <b>piksel po pikselu</b>. Kliknij <b>Pixel Art</b>.' },
      { title:'Wybierz rozmiar płótna', text:'Uczniowie wybierają <b>rozmiar płótna</b>; <b>32 × 32</b> jest polecany. Małe płótno to część stylu: mało pikseli, ograniczona paleta, wyraźny kształt.<br><br>Kliknij <b>32 × 32</b>.' },
      { title:'Projekt pixel artu', text:'<b>Edytor pixel artu</b>: narzędzia rysowania, rozmiary pędzla, <b>cienie i dither</b>, kolory i cofanie po lewej, <b>płótno</b> pośrodku oraz <b>klatki</b> na dole.<br><br>Dzięki klatkom moneta zaczyna się obracać, a postać zaczyna biec: to animacja, którą uczniowie tworzą w Pixel Art.' }
    ],
    finish: { title:'👾 Znasz Pixel Studio', intro:'W tym tourze pojawiły się:', items:[
      '<b>Studio</b> i jego <b>sloty</b> projektów.',
      'Edytor <b>Pixel Art</b> i jego rozmiary płótna.',
      'Narzędzia rysowania, cieniowanie i dithering oraz <b>klatki</b> do animacji.'
    ] }
  },

  /* ---------- Vibe Coding ---------- */
  vibe: {
    welcome: {
      kicker: 'Vibe Coding · Kodland Sparks',
      title: 'Vibe Coding <span>w Sparks</span>',
      lead: 'W Vibe Coding uczniowie budują własną <b>grę typu runner</b> z pomocą AI, w ramach <b>Kodland Sparks</b>. Otwórzmy edytor, w którym gra ożywa.',
      see: ['Studio i jego <b>sloty projektów</b>.', 'Projekt <b>Game or web app</b>: HTML, CSS i JavaScript.', '<b>Podgląd</b> na żywo, karty z kodem i <b>tutor AI</b>.'],
      howText: 'Klikaj wyróżniony element na każdym ekranie albo naciśnij <b>Dalej</b>, gdy krok prosi o przeczytanie. Nic nie może pójść źle.',
      start: 'ZACZNIJ TOUR →'
    },
    steps: [
      { title:'Studio: dwa tryby', text:'To jest <b>Studio</b>, gdzie uczniowie tworzą. Ma dwa tryby:<br><br>• <b>Tryb kreatywny</b>: buduj, co tylko chcesz — gry, strony, sztukę.<br>• <b>Tryb wyzwań</b>: wykonuj zadania i zdobywaj kryształy.' },
      { title:'Tryb kreatywny', text:'Kliknij <b>Tryb kreatywny</b>.' },
      { title:'Sloty projektów', text:'Uczniowie przechowują projekty, nad którymi pracują, w <b>slotach</b> — przydatne w tym kursie, w którym gra rośnie lekcja po lekcji. Kliknij <b>Slot 1</b>.' },
      { title:'Programowanie i rozwój', text:'Vibe Coding znajduje się w sekcji <b>Programowanie i rozwój</b>. Kliknij <b>Game or web app</b>.' },
      { title:'Wybierz punkt wyjścia', text:'Aplikację webową buduje się z <b>HTML, CSS i JavaScript</b> (Web App JS) albo z logiką w Pythonie (Web App Python). Uczniowie mogą zacząć od zera lub od bazy.<br><br>Kliknij <b>Pusty projekt</b> w sekcji Web App JS.' },
      { title:'Podgląd i kod', text:'U góry <b>Podgląd</b> pokazuje grę na żywo: każda zmiana pojawia się natychmiast. Poniżej karty <b>HTML</b>, <b>CSS</b> i <b>JS</b>.<br><br>Na lekcji 3 uczniowie dowiadują się, do czego służy każda z nich: <b>struktura</b>, <b>wygląd</b> i <b>logika</b>.' },
      { title:'Tutor AI', text:'Po prawej <b>tutor AI</b> pomaga uczniom pisać prompty, dodawać funkcje i naprawiać błędy.<br><br>W tym kursie uczniowie piszą jasne prompty, testują wynik i opisują każdy błąd, aby AI mogło go naprawić.' },
      { title:'Zapisz, nazwij i opublikuj', text:'Górny pasek pokazuje <b>slot</b>, przycisk zapisu i <b>tytuł projektu</b>. <b>Opublikuj</b> udostępnia grę: końcowa gra trafia na stronę projektu w Sparks.' }
    ],
    finish: { title:'🤖 Znasz edytor Vibe Coding', intro:'W tym tourze pojawiły się:', items:[
      '<b>Studio</b> i jego <b>sloty</b> projektów.',
      'Projekt <b>Game or web app</b>, z podglądem na żywo i kartami HTML, CSS i JS.',
      '<b>Tutor AI</b>: uczniowie piszą prompty i testują wynik.',
      'Gdzie gra jest zapisywana i <b>publikowana</b>.'
    ] }
  }
};
