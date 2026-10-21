/* =====================================================================
   MULTI-COURSES TRAINING · CODING & TECHNOLOGY COURSES — CONTENT FILE (Polski)
   ---------------------------------------------------------------------
   Tłumaczenie content/en.js. Nie zmieniać: nazw kluczy, wartości id / tour / track,
   niczego w {nawiasach klamrowych}, tagów HTML, emoji, linków, nazw plików ani liczb po  a:
   W tekstach nigdy nie używać prostych cudzysłowów ani apostrofów: używać ’ « » „ ” .
   ===================================================================== */
window.MC_CONTENT = {

  lang: "pl",
  track: "coding",
  region: "Polska",

  ui: {
    pageTitle: "Coding & Technology Courses",
    brand: "Multi-courses · Coding & Technology",
    footer: "kodland · Szkolenie Multi-courses · Coding & Technology Courses",
    kicker: "Szkolenie dla tutorów · Multi-courses",
    title1: "Coding & Technology",
    title2: "Courses",
    lead: "Poznaj dwa mini-kursy z programowania i technologii, które mogą wybrać twoi uczniowie: <b>Vibe Coding</b> i <b>Science via Minecraft</b>. Przy każdym zobaczysz opowieść o kursie, lekcje i platformę — i sam go wypróbujesz.",
    strip: ["Najpierw ukończ szkolenie PL", "Czym są mini-kursy", "Poznaj 2 kursy", "Rozwiąż test w LMS"],
    flipHint: "Dotknij, aby obrócić",
    progress: "{done}/{total} obejrzanych kursów",

    pl: {
      title: "Zanim zaczniesz",
      text: "Wszystkie te kursy są prowadzone w formacie <b>Parallel Lessons (PL)</b>: ty otwierasz i zamykasz lekcję każdego ucznia, a uczniowie w międzyczasie pracują samodzielnie z kartami. To szkolenie nie tłumaczy formatu ponownie, więc <b>najpierw ukończ szkolenie Parallel Lessons</b>.",
      check: "Mam ukończone szkolenie Parallel Lessons",
      ok: "✅ Świetnie — szkolenie zostało odblokowane. Przewiń w dół, aby zacząć.",
      locked: "Najpierw ukończ szkolenie Parallel Lessons, a potem zaznacz pole powyżej, aby odblokować to szkolenie."
    },

    mini: {
      title: "Czym są mini-kursy?",
      intro: "<b>Multi-courses</b> dają uczniom możliwość poznawania różnych dziedzin dzięki <b>krótszym kursom skupionym na jednym temacie</b>, zamiast wiązania się z jednym długim programem nauczania. Obróć karty:",
      cards: [
        ["⏱️", "Krótsze", "Każdy kurs jest krótki i skupiony na jednym temacie, dzięki czemu uczniowie szybko dochodzą do gotowego, prawdziwego projektu."],
        ["🧭", "Odkrywaj", "Uczniowie mogą wypróbować różne dziedziny — programowanie, naukę, wideo, muzykę, pixel art — i odkryć, co lubią najbardziej."],
        ["🧩", "Połączone", "Niektóre kursy ze sobą współpracują: na przykład gra typu runner, którą uczniowie budują w Vibe Coding, może wykorzystać grafikę, którą narysują w Pixel Art."]
      ],
      catsTitle: "Dwie kategorie, dwa szkolenia",
      youAreHere: "To szkolenie",
      otherTraining: "Osobne szkolenie",
      cats: [
        { icon: "🎨", name: "Creative Courses", courses: ["Video Creation", "Sound Design", "Pixel Art"], current: false },
        { icon: "💻", name: "Coding & Technology Courses", courses: ["Vibe Coding", "Science via Minecraft"], current: true }
      ],
      pl: "<b>Prowadzone w formacie PL.</b> Wszystko ze szkolenia Parallel Lessons obowiązuje także tutaj: indywidualne otwarcia i zamknięcia, samodzielna praca z kartami, pomoc, gdy uczeń podniesie rękę, oraz informacja zwrotna na zakończenie."
    },

    courses: {
      title: "Poznaj kursy",
      intro: "Otwórz każdy kurs i przejdź przez jego sekcje: opowieść, lekcje, projekty, platformę i wymagania techniczne.",
      seen: "✓ Obejrzano",
      toSee: "Poznaj →"
    },

    course: {
      story: "📖 O kursie",
      programme: "🗂️ Lekcje",
      outcomes: "🎯 Efekty nauczania",
      build: "🏆 Co tworzą uczniowie",
      pl: "⚡ W twoich lekcjach równoległych",
      platform: "🖥️ Platforma i narzędzia",
      requirements: "Wymagania techniczne",
      requirementsIntro: "Sprawdź je przed pierwszą lekcją — a także podczas sprawdzania połączenia, jeśli coś nie działa.",
      examples: "👀 Projekty stworzone przez uczniów",
      projOpen: "Otwórz projekt ↗",
      tourTitle: "Wypróbuj na Kodland Sparks",
      tourTodo: "Jeszcze nie zrobiono",
      tourDone: "✓ Tour ukończony",
      tourStart: "▶ Uruchom tour po Sparks",
      tourHint: "W tym oknie otworzy się interaktywna replika Kodland Sparks.",
      tourFull: "Otwórz tour na pełnym ekranie ↗",
      endText: "To już koniec kursu {name}.",
      next: "Następny kurs: {name} →",
      toFinal: "Zakończ szkolenie →",
      boTitle: "Kurs w BO",
      boText: "Link do tego kursu w BO (region: {region}).",
      boBtn: "🔗 Otwórz kurs {id} w BO ↗"
    },

    final: {
      title: "Zakończ szkolenie",
      soonTitle: "Wszystkie Coding & Technology Courses zostały omówione!",
      soon: "<p>Te kursy są właśnie <b>tłumaczone</b>.</p><p>Gdy tylko będą gotowe, <b>bot powiadomi cię</b>, że kursy zostały <b>włączone w BO</b>. Od tego momentu znajdziesz je — razem z ich Teacher Notes — tak samo jak swoje pozostałe kursy PL.</p><p>Dziękujemy za przygotowanie! 💙</p>",
      lmsTitle: "Ostatni krok: test w LMS",
      lms: "<p>Wróć na <b>stronę szkolenia w LMS</b>, z której otwarto to szkolenie. <b>Test DST</b> znajdziesz tuż pod szkoleniem.</p><p>👉 Aby szkolenie zostało uznane za pomyślnie ukończone, musisz wypełnić i zaliczyć test DST. Jeśli nie wypełnisz testu DST, szkolenie pozostanie nieukończone i może wygasnąć.</p><p>Minimalny wynik zaliczający to <b>80%</b>.</p><p>Powodzenia! ❤️</p>"
    }
  },

  courses: [

    /* ================= VIBE CODING ================= */
    {
      id: "vibe",
      icon: "🤖",
      name: "Vibe Coding",
      label: "Kurs programowania i technologii",
      tagline: "Zbuduj swoją pierwszą grę typu runner z pomocą AI — i dowiedz się, jak działa programowanie z AI.",
      facts: [["Lekcje", "5"], ["Czas lekcji", "60 min"], ["Poziom", "Początkujący — bez doświadczenia w programowaniu"], ["Platforma", "AI Vibe Coding w Kodland Sparks"]],
      story: "<p>Uczniowie budują swoją <b>pierwszą grę typu runner z pomocą AI</b> i uczą się, jak działa programowanie z AI. Uczą się pisać <b>jasne prompty</b>, które AI zamienia w kod, i dodają do gry nowe funkcje.</p><p><b>Nie trzeba uczyć się składni</b>: uczniowie testują wynik, opisują błąd i proszą AI o jego poprawienie. Wszystko dzieje się w <b>AI Vibe Coding w Kodland Sparks</b>. Nie trzeba mieć doświadczenia w programowaniu. Na koniec każdy uczeń ma grę z własnym stylem, bohaterem i otoczeniem, podzieloną na <b>HTML, CSS i JavaScript</b>, oraz stronę projektu w Sparks.</p>",
      outcomes: [
        "Pisać jasne prompty i dzielić duże zadanie na małe.",
        "Zbudować z pomocą AI działającą grę w przeglądarce: skok, przeszkody, wynik, Game Over i Restart.",
        "Znajdować błędy i naprawiać je w rozmowie z AI.",
        "Rozumieć, do czego służą HTML, CSS i JavaScript.",
        "Opublikować grę i stworzyć stronę projektu w Sparks."
      ],
      bo: { id: "2101", url: "https://bo.kodland.org/courses/2101" },
      programmeIntro: "5 lekcji po 60 minut. Otwórz każdą lekcję:",
      programme: [
        { n: "Lekcja 1", title: "Pierwszy runner z AI", details: [["", "Uczniowie dowiadują się, czym jest vibe coding, piszą swój pierwszy prompt i dostają działającą grę z bohaterem, przeszkodami i wynikiem. Uruchamiają ją w przeglądarce i poprawiają pierwsze błędy z pomocą AI."]] },
        { n: "Lekcja 2", title: "Prompty i nowe funkcje", details: [["", "Zasady dobrego promptu. Uczniowie dodają mechaniki, dostrajają poziom trudności i interfejs oraz testują każdą zmianę."]] },
        { n: "Lekcja 3", title: "Styl, struktura i bohater", details: [["", "Uczniowie dzielą projekt na HTML, CSS i JavaScript i uczą się, do czego służy każdy plik. Zmieniają kolory i style oraz wstawiają do gry własnego bohatera."]] },
        { n: "Lekcja 4", title: "Otoczenie gry", details: [["", "Uczniowie dodają tło i nowe przeszkody: generują obrazy lub je rysują i podłączają do projektu. Potem sprawdzają, czy mechaniki nadal działają."]] },
        { n: "Lekcja 5", title: "Projekt końcowy: strona projektu", details: [["", "Uczniowie dopracowują grę: sprawdzają, czy wszystko działa, piszą opis i zasady, publikują grę na stronie projektu w Sparks i pokazują ją tutorowi i innym uczniom."]] }
      ],
      build: [
        ["🏃", "Pierwsza gra typu runner", "Działająca gra z bohaterem, przeszkodami i wynikiem, stworzona z pierwszego promptu i uruchomiona w przeglądarce."],
        ["⚙️", "Nowe mechaniki", "Funkcje dodane za pomocą promptów, z dostrojonym poziomem trudności i interfejsem — a każda zmiana przetestowana."],
        ["🗂️", "HTML, CSS i JavaScript", "Projekt podzielony na trzy pliki, aby każda część miała swoje zadanie."],
        ["🧍", "Własny bohater", "Własna postać, z własnymi kolorami i stylami, wstawiona do gry."],
        ["🌄", "Otoczenie gry", "Tło i nowe przeszkody, wygenerowane lub narysowane i podłączone do projektu."],
        ["🏁", "Strona projektu w Sparks", "Końcowa gra, z opisem i zasadami, pokazana tutorowi i innym uczniom."]
      ],
      pl: [
        "Każda lekcja trwa <b>60 minut</b>. Na otwarciu wyznacz cel dnia: pierwsza gra, nowe funkcje, styl i struktura, otoczenie lub projekt końcowy.",
        "Gdy uczeń podnosi rękę, bo „AI zepsuło grę”, nie poprawiaj kodu za niego: zapytaj, <b>jaki prompt napisał</b>, i pomóż mu go doprecyzować albo podzielić zadanie na mniejsze kroki.",
        "Przypominaj, żeby <b>testowali każdą zmianę</b>, zanim poproszą o następną — to podstawowy nawyk kursu.",
        "Na <b>zakończenie</b> uczeń pokazuje ci swoją grę, a ty dajesz konkretną informację zwrotną: co działa i jedno ulepszenie do następnego promptu.",
        "Na lekcji 5 uczniowie dopracowują grę, piszą opis i zasady i publikują ją na stronie projektu w <b>Kodland Sparks</b>."
      ],
      platform: {
        text: "Uczniowie budują grę w <b>AI Vibe Coding</b>, w <b>Kodland Sparks</b>, w projekcie <b>Game or web app</b> z podglądem na żywo i kartami HTML, CSS i JS. Piszą prompty, testują grę, opisują błędy i proszą AI o ich poprawienie. Końcowa gra trafia na stronę projektu w Sparks.",
        tools: ["Kodland Sparks · Game or web app", "Tutor AI", "HTML · CSS · JavaScript"],
        tour: "vibe",
        tourText: "Otwórz Studio, zacznij projekt Game or web app i zobacz podgląd na żywo, karty z kodem i tutora AI."
      },
      /* Projekty uczniów opublikowane w Kodland Sparks: href, img, tag, title, by (nickname), desc */
      projects: [
        { href: "https://portfolio.kodland.org/DeBohpodast/cmrn729cf004mqv3fp20b1em3", img: "../images/proj_vibe1.webp", tag: "Web App", title: "Crystal Dash — 16-bit Runner", by: "DeBohpodast",
          desc: "Retro runner: gracz biegnie, zbiera monety i unika przeszkód, z poziomami trudności, sterowaniem skokiem i zrywem oraz nowymi światami do odblokowania." },
        { href: "https://portfolio.kodland.org/DeBohpodast/cmrn7ywpd007yqv3fvuanrprs", img: "../images/proj_vibe2.webp", tag: "Web App", title: "Game 3 Web", by: "DeBohpodast",
          desc: "Gra typu runner zbudowana wokół czytelnych menu, więc łatwo się w nią gra — a nawet potrafi zmieniać języki." }
      ]
    },

    /* ================= SCIENCE VIA MINECRAFT ================= */
    {
      id: "minecraft",
      icon: "🧪",
      name: "Science via Minecraft",
      label: "Kurs programowania i technologii",
      tagline: "Zadaj pytanie, zgadnij odpowiedź, przeprowadź eksperyment i sprawdź wynik — w Minecrafcie.",
      facts: [["Wiek", "8–9"], ["Lekcje", "5"], ["Czas lekcji", "60 min"], ["Poziom", "Początkujący"], ["Platforma", "Minecraft Java Edition (launcher Kodland)"]],
      story: "<p>Uczniowie uczą się <b>nauki, przeprowadzając eksperymenty w Minecrafcie</b>. W jednym świecie kampusu zamieniają piasek w szkło, a lawę w kamień, sprawdzają, jak rzeczy się ślizgają i spadają, uprawiają rośliny i skaczą po Księżycu. Za każdym razem stosują <b>metodę naukową</b>: zadają pytanie, zgadują odpowiedź, przeprowadzają eksperyment i sprawdzają wynik.</p><p>Na niektórych lekcjach uczniowie używają <b>artefaktów</b>. Artefakt to mały datapack, który zmienia jedną z zasad świata, na przykład tempo czasu lub grawitację. Uczniowie zmieniają jedną liczbę i patrzą, co się dzieje. Na ostatniej lekcji tworzą własny artefakt z szablonu.</p><p>Uczniowie grają w <b>Minecraft Java Edition</b> w launcherze Kodland. Nie trzeba mieć doświadczenia w naukach ani w programowaniu. Na koniec każdy uczeń ma własny eksperyment, artefakt i raport na stronie projektu w Sparks.</p>",
      outcomes: [
        "Stosować metodę naukową: zadać pytanie, postawić hipotezę, przeprowadzić eksperyment i wyciągnąć wniosek.",
        "Wyjaśniać, jak zmieniają się materiały, gdy je podgrzewamy lub mieszamy z wodą.",
        "Badać siły i ruch: tarcie, spadanie, odbijanie się i prędkość.",
        "Wyjaśniać, czego potrzebują rośliny do wzrostu i jak zwierzęta w łańcuchu pokarmowym od siebie zależą.",
        "Porównywać grawitację na Ziemi, Księżycu i Marsie oraz sprawdzać, jakie skały i rudy leżą na jakiej głębokości.",
        "Stworzyć artefakt z szablonu i opublikować go z raportem z eksperymentu w Sparks."
      ],
      bo: { id: "2186", url: "https://bo.kodland.org/courses/2186", note: "W BO pierwsze lekcje tego kursu zostaną dodane 2 listopada 2026 r." },
      programmeIntro: "5 lekcji po 60 minut. Otwórz każdą lekcję:",
      programme: [
        { n: "Lekcja 1", title: "Laboratorium naukowe", details: [["", "Uczniowie, którzy nie zainstalowali jeszcze launchera, robią to z tutorem. Potem wszyscy wchodzą do świata kampusu i poznają metodę naukową. Uczniowie badają, jak zmieniają się materiały: piasek zamienia się w szkło, lawa i woda tworzą kamień, proszek betonowy twardnieje w wodzie. Przy każdym teście zapisują hipotezę i wynik w zeszycie laboratoryjnym."]] },
        { n: "Lekcja 2", title: "Siły i ruch", details: [["", "Uczniowie badają tarcie: jak daleko się ślizgają po lodzie, niebieskim lodzie i ziemi. Obserwują spadający piasek i żwir, odbijają się na blokach szlamu i puszczają wagoniki po zasilanych torach. Potem porównują wyniki i wyjaśniają, jaka siła zmienia ruch."]] },
        { n: "Lekcja 3", title: "Świat żywy", details: [["", "Uczniowie uprawiają rośliny na świetle i w ciemności, z wodą i bez niej. Artefakt czasu przyspiesza czas, więc wynik widzą w ciągu jednej lekcji. Na końcu przyglądają się krótkim łańcuchom pokarmowym: wilki i owce, lisy i kury, pszczoły i kwiaty."]] },
        { n: "Lekcja 4", title: "Kosmos i Ziemia", details: [["", "Uczniowie używają artefaktu grawitacji, by skakać na Ziemi, Księżycu i Marsie i porównać, jak wysoko docierają. Potem schodzą do kopalni i sprawdzają, jakie skały i rudy leżą na jakiej głębokości."]] },
        { n: "Lekcja 5", title: "Wielki projekt naukowy", details: [["", "Uczniowie wybierają temat z lekcji 1–4, tworzą własny artefakt z szablonu i przeprowadzają własny eksperyment. Publikują artefakt i raport na stronie projektu w Sparks i pokazują je tutorowi i innym uczniom."]] }
      ],
      extra: {
        title: "🔬 Metoda naukowa — dotknij każdego kroku",
        intro: "Każdy eksperyment na kursie przebiega według tych samych czterech kroków. To serce kursu:",
        hint: "Dotknij kroku, aby zobaczyć, co robi uczeń.",
        steps: [
          ["❓", "Pytanie", "Uczeń obserwuje coś w świecie i zadaje na ten temat pytanie."],
          ["💡", "Hipoteza", "Zgaduje odpowiedź w taki sposób, by dało się ją sprawdzić: „Myślę, że… ponieważ…”."],
          ["⚗️", "Eksperyment", "Przeprowadza eksperyment w Minecrafcie — podgrzewa materiał, sprawdza zjeżdżalnię, uprawia roślinę, skacze po Księżycu."],
          ["📝", "Wniosek", "Porównuje wynik ze swoją hipotezą, zapisuje go w zeszycie laboratoryjnym i wyjaśnia swoje odkrycia."]
        ]
      },
      build: [
        ["📒", "Zeszyt laboratoryjny", "Hipoteza i wynik przy każdym teście, począwszy od lekcji 1."],
        ["🔥", "Eksperymenty z materiałami", "Piasek zamieniony w szkło, lawa i woda tworzące kamień, proszek betonowy twardniejący w wodzie."],
        ["🛷", "Testy sił i ruchu", "Ślizganie się po lodzie, niebieskim lodzie i ziemi, spadający piasek i żwir, bloki szlamu i wagoniki na zasilanych torach."],
        ["🌱", "Eksperyment ze wzrostem roślin", "Rośliny uprawiane na świetle i w ciemności, z wodą i bez niej, z artefaktem czasu, który przyspiesza proces."],
        ["🌙", "Skoki z grawitacją i kopalnia", "Skoki na Ziemi, Księżycu i Marsie oraz zejście do kopalni, by sprawdzić, jakie skały i rudy leżą na jakiej głębokości."],
        ["🏆", "Własny artefakt i raport", "Artefakt stworzony z szablonu, opublikowany z raportem z eksperymentu na stronie projektu w Sparks."]
      ],
      pl: [
        "Uczniowie mają <b>8–9 lat</b>: na pierwszych lekcjach dokładnie sprawdź, czy potrafią sami poruszać się po Minecrafcie i przechodzić z jednej karty do następnej. Uczniowie, którzy przyjdą bez launchera, instalują go <b>razem z tobą na lekcji 1</b>.",
        "Każdy eksperyment jest <b>indywidualny</b>: każdy uczeń przeprowadza własne testy i prowadzi własny zeszyt laboratoryjny.",
        "Gdy uczeń cię woła, <b>prowadź pytaniami</b> — „Jak myślisz, co się stanie? Dlaczego?” — zamiast podawać wynik: celem jest myślenie jak naukowiec.",
        "Na <b>zakończenie</b> poproś ucznia, by wyjaśnił swój eksperyment i wniosek, i zwróć uwagę na różnice między tym, co dzieje się w Minecrafcie, a w prawdziwym życiu.",
        "Tablety, telefony i Chromebooki <b>nie są obsługiwane</b>: przed pierwszą lekcją sprawdź poniższe wymagania techniczne."
      ],
      platform: {
        text: "Uczniowie grają w <b>Minecraft Java Edition</b> w <b>launcherze Kodland</b>, w jednym świecie kampusu. Na niektórych lekcjach używają <b>artefaktów</b> — małych datapacków, które zmieniają jedną z zasad świata, jak tempo czasu czy grawitacja — a na ostatniej lekcji tworzą własny z szablonu. Ich eksperyment, artefakt i raport trafiają na stronę projektu w <b>Kodland Sparks</b>.",
        tools: ["Minecraft Java Edition", "Launcher Kodland", "Artefakty (datapacki)", "Zeszyt laboratoryjny", "Kodland Sparks · Strona projektu"],
        tour: null,
        /* url: link do instrukcji launchera */
        launcher: {
          title: "Launcher Kodland",
          text: "Uczniowie — i ty — otwierają kurs przez launcher Kodland. Link wysyłamy przed pierwszą lekcją; postępuj zgodnie z instrukcją, aby go pobrać i skonfigurować. <b>Dane logowania do pobrania launchera są takie same jak do Kodland Sparks.</b>",
          btn: "📄 Otwórz instrukcję launchera ↗",
          url: "https://portfolio.kodland.org/launcher/download#guide"
        }
      },
      /* [icon, text] */
      requirements: [
        ["💻", "<b>Urządzenie:</b> laptop lub komputer stacjonarny z klawiaturą i myszą — <b>tablety, telefony i Chromebooki nie są obsługiwane</b>"],
        ["🖥️", "<b>System operacyjny:</b> Windows 10 lub nowszy, macOS 13 lub nowszy"],
        ["🧠", "<b>RAM:</b> 8 GB lub więcej"],
        ["🚀", "<b>Oprogramowanie:</b> launcher Kodland. Link wysyłamy przed pierwszą lekcją; uczniowie, którzy przyjdą bez niego, instalują go z tutorem na lekcji 1."]
      ]
    }
  ]
};
