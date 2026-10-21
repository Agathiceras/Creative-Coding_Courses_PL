/* =====================================================================
   MULTI-COURSES TRAINING · CREATIVE COURSES — CONTENT FILE (Polski)
   ---------------------------------------------------------------------
   Tłumaczenie content/en.js. Nie zmieniać: nazw kluczy, wartości id / tour / track,
   niczego w {nawiasach klamrowych}, tagów HTML, emoji, linków ani liczb po  a:
   W tekstach nigdy nie używać prostych cudzysłowów ani apostrofów: używać ’ « » „ ” .
   ===================================================================== */
window.MC_CONTENT = {

  lang: "pl",
  track: "creative",
  region: "Polska",
  tourLang: "en", /* the Sparks tour is still in English: change to "pl" once assets/content-pl.js exists */

  ui: {
    pageTitle: "Creative Courses",
    brand: "Multi-courses · Creative Courses",
    footer: "kodland · Szkolenie Multi-courses · Creative Courses",
    kicker: "Szkolenie dla tutorów · Multi-courses",
    title1: "Creative",
    title2: "Courses",
    lead: "Poznaj trzy kreatywne mini-kursy, które mogą wybrać twoi uczniowie: <b>Video Creation</b>, <b>Sound Design</b> i <b>Pixel Art</b>. Przy każdym zobaczysz opowieść o kursie, lekcje, platformę — i wypróbujesz go na Kodland Sparks.",
    strip: ["Najpierw ukończ szkolenie PL", "Czym są mini-kursy", "Poznaj 3 kursy", "Rozwiąż test w LMS"],
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
        ["🧭", "Odkrywaj", "Uczniowie mogą wypróbować różne dziedziny — wideo, muzykę, pixel art, programowanie, naukę — i odkryć, co lubią najbardziej."],
        ["🧩", "Połączone", "Niektóre kursy ze sobą współpracują: na przykład grafika, którą uczniowie narysują w Pixel Art, może stać się częścią gry, którą zbudują w Vibe Coding."]
      ],
      catsTitle: "Dwie kategorie, dwa szkolenia",
      youAreHere: "To szkolenie",
      otherTraining: "Osobne szkolenie",
      cats: [
        { icon: "🎨", name: "Creative Courses", courses: ["Video Creation", "Sound Design", "Pixel Art"], current: true },
        { icon: "💻", name: "Coding & Technology Courses", courses: ["Vibe Coding", "Science via Minecraft"], current: false }
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
      soonTitle: "Wszystkie Creative Courses zostały omówione!",
      soon: "<p>Te kursy są właśnie <b>tłumaczone</b>.</p><p>Gdy tylko będą gotowe, <b>bot powiadomi cię</b>, że kursy zostały <b>włączone w BO</b>. Od tego momentu znajdziesz je — razem z ich Teacher Notes — tak samo jak swoje pozostałe kursy PL.</p><p>Dziękujemy za przygotowanie! 💜</p>",
      lmsTitle: "Ostatni krok: test w LMS",
      lms: "<p>Wróć na <b>stronę szkolenia w LMS</b>, z której otwarto to szkolenie. <b>Test DST</b> znajdziesz tuż pod szkoleniem.</p><p>👉 Aby szkolenie zostało uznane za pomyślnie ukończone, musisz wypełnić i zaliczyć test DST. Jeśli nie wypełnisz testu DST, szkolenie pozostanie nieukończone i może wygasnąć.</p><p>Minimalny wynik zaliczający to <b>80%</b>.</p><p>Powodzenia! ❤️</p>"
    }
  },

  courses: [

    /* ================= VIDEO CREATION ================= */
    {
      id: "video",
      icon: "🎬",
      name: "Video Creation",
      label: "Kurs kreatywny",
      tagline: "Twórz krótkie filmy, które ludzie chcą oglądać do końca — o czymś, co kochasz, bez pokazywania twarzy.",
      facts: [["Wiek", "10–13"], ["Lekcje", "5"], ["Czas lekcji", "60 min"], ["Poziom", "Początkujący"], ["Platforma", "CapCut Desktop + Kodland Sparks"]],
      story: "<p>Uczniowie uczą się tworzyć <b>krótkie filmy, które ludzie chcą oglądać do końca</b>. Każdy film jest o czymś, co kochają: grze, serialu, sporcie, muzyce lub zwierzętach. Kurs dotyczy tego, co sprawia, że film jest ciekawy: <b>mocny hook</b>, <b>czytelny scenariusz</b>, <b>dobre tempo</b> i <b>historia z zakończeniem</b>. Uczniowie uczą się też montażu: tną klipy na osi czasu i dodają napisy, muzykę, efekty dźwiękowe, głos i przejścia.</p><p><b>AI działa jak redaktor scenariusza.</b> Uczniowie piszą szkic, a potem pytają Sparks AI, gdzie robi się nudno i jak wzmocnić hook. To oni decydują, co zostawić. Uczniowie montują w <b>CapCut Desktop</b> i korzystają z klipów stockowych, własnego gameplayu oraz obrazów AI ze Sparks. <b>Nie muszą pokazywać twarzy.</b></p><p>Nie trzeba mieć doświadczenia w montażu. Na koniec każdy uczeń ma <b>pięć krótkich filmów</b> o swoim zainteresowaniu, <b>intro kanału</b> i <b>film finałowy</b> na stronie projektu w Sparks.</p>",
      outcomes: [
        "Zacząć film od hooka, który zatrzymuje widza w pierwszych sekundach.",
        "Napisać krótki scenariusz i ulepszyć go dzięki opinii AI.",
        "Zmontować film w CapCut: ciąć klipy na osi czasu, dodawać napisy, muzykę, efekty dźwiękowe, głos i przejścia oraz wyeksportować wynik.",
        "Montować z myślą o tempie: wycinać to, co wolne, dodawać zbliżenia i zmiany prędkości, umieszczać dźwięki w kluczowych momentach.",
        "Opowiedzieć krótką historię z początkiem, problemem i zakończeniem, nie pokazując twarzy.",
        "Używać tylko materiałów, z których wolno korzystać: własnych, klipów stockowych i obrazów AI.",
        "Opublikować film i otrzymać opinię od tutora i innych uczniów."
      ],
      bo: { id: "2189", url: "https://bo.kodland.org/courses/2189", note: "W BO pierwsze lekcje tego kursu zostaną dodane w tygodniu rozpoczynającym się 19 października 2026 r." },
      programmeIntro: "5 lekcji po 60 minut. Otwórz każdą lekcję:",
      programme: [
        { n: "Lekcja 1", title: "Mój kanał i hook", details: [["", "Uczniowie wybierają temat swojego kanału i rysują animowane intro w Animation Studio. Dowiadują się, dlaczego widzowie odchodzą w pierwszych sekundach, i tworzą w CapCut pierwszy krótki film, który zaczyna się od hooka. Przy okazji poznają podstawy CapCut: import klipów, cięcie ich na osi czasu, dodawanie tekstu i muzyki, eksport. Publikują film i dowiadują się, jak działa publikowanie."]] },
        { n: "Lekcja 2", title: "Scenariusz", details: [["", "Uczniowie tworzą film „3 fakty o…” o swojej grze, serialu lub sporcie. Piszą krótki scenariusz, proszą Sparks AI o znalezienie słabych miejsc i przepisują go. Potem dodają głos z CapCut i napisy."]] },
        { n: "Lekcja 3", title: "Tempo", details: [["", "Uczniowie tworzą film z najlepszymi momentami (highlights) z własnego gameplayu lub klipów stockowych. Wycinają wolne momenty, dodają zbliżenia i zmiany prędkości oraz umieszczają dźwięki w kluczowych momentach. Pozostali uczniowie oglądają go i mówią, gdzie się nudzili."]] },
        { n: "Lekcja 4", title: "Storytime", details: [["", "Uczniowie opowiadają krótką historię o swoim hobby, z początkiem, problemem i zakończeniem. Planują ją z pomocą AI, a następnie budują z głosu, klipów stockowych i obrazów AI. Nikt nie musi pokazywać twarzy."]] },
        { n: "Lekcja 5", title: "Projekt końcowy: Mój najlepszy film", details: [["", "Uczniowie samodzielnie planują, piszą i montują nowy film, wykorzystując wszystko z lekcji 1–4. Tworzą okładkę, publikują film na stronie projektu w Sparks i pokazują go tutorowi i innym uczniom."]] }
      ],
      build: [
        ["🎞️", "Intro kanału", "Animowane intro do ich kanału, narysowane w Animation Studio na lekcji 1."],
        ["🪝", "Film z hookiem", "Ich pierwszy krótki film w CapCut, zaczynający się od hooka i opublikowany na lekcji 1."],
        ["🔢", "Film „3 fakty o…”", "Scenariusz ulepszony dzięki opinii Sparks AI, z głosem z CapCut i napisami."],
        ["⚡", "Film z najlepszymi momentami", "Wycięte wolne momenty, dodane zbliżenia i zmiany prędkości oraz dźwięki w kluczowych momentach."],
        ["📖", "Film storytime", "Historia z początkiem, problemem i zakończeniem, zbudowana z głosu, klipów stockowych i obrazów AI."],
        ["🏆", "Mój najlepszy film", "Nowy film zaplanowany, napisany i zmontowany samodzielnie, z okładką, na stronie projektu w Sparks."]
      ],
      pl: [
        "Uczniowie nie pojawiają się na kamerze w swoich filmach, ale nadal rozmawiają z tobą: podczas <b>sprawdzania połączenia</b> upewnij się, że ich kamera, mikrofon i dźwięk działają.",
        "Montaż odbywa się w <b>CapCut Desktop</b>, a intro kanału w <b>Animation Studio</b>. Na pierwszych lekcjach sprawdź, czy uczeń potrafi sam otworzyć narzędzie i przejść do następnej karty.",
        "<b>AI jest redaktorem scenariusza, a nie autorem.</b> Uczniowie piszą szkic, pytają Sparks AI, gdzie robi się nudno, i <b>sami decydują, co zostawić</b>. Przypomnij im o tym, gdy cię zawołają.",
        "Na <b>zakończenie</b> uczeń pokazuje swój film, a ty dajesz konkretną informację zwrotną: co działa w hooku, tempie i napisach — oraz jeden jasny następny krok.",
        "Uczniowie publikują <b>link do swojego filmu</b> na stronie projektu w Sparks. Film może być na YouTube, Vimeo lub Canva; jeśli uczeń jest za młody na własne konto, film trafia na konto rodzica."
      ],
      platform: {
        text: "Uczniowie montują w <b>CapCut Desktop</b> i rysują intro kanału w <b>Animation Studio</b>. Korzystają z klipów stockowych, własnego gameplayu i obrazów AI z <b>Kodland Sparks</b>, gdzie <b>Sparks AI</b> działa także jako redaktor scenariusza i gdzie każdy uczeń tworzy stronę projektu.<br><br><b>Publikowanie.</b> Uczniowie publikują link do swojego filmu na stronie projektu w Sparks. Film może być na YouTube, Vimeo lub Canva. Jeśli uczeń jest za młody na konto na jednej z tych stron, film trafia na konto rodzica.",
        tools: ["CapCut Desktop", "Animation Studio", "Sparks AI", "Kodland Sparks · Strona projektu", "Google Chrome"],
        tour: "video",
        tourText: "Otwórz Studio, zobacz edytor animacji klatka po klatce oraz pomocnika AI, z którego uczniowie korzystają przy pomysłach, obrazach i głosach lektorskich."
      },
      /* [icon, text] */
      requirements: [
        ["💻", "<b>Urządzenie:</b> laptop lub komputer stacjonarny z klawiaturą i myszą — <b>nie tablet ani telefon</b>"],
        ["🖥️", "<b>System operacyjny:</b> Windows 10/11 (64-bitowy) lub macOS 11.2 i nowszy"],
        ["🧠", "<b>RAM:</b> 8–16 GB"],
        ["⚙️", "<b>Procesor:</b> co najmniej 2 rdzenie 2 GHz; zalecane 4 rdzenie 2,5 GHz"],
        ["📶", "<b>Internet:</b> stabilne połączenie co najmniej 10 Mb/s"],
        ["🌐", "<b>Oprogramowanie:</b> Google Chrome i CapCut Desktop — <b>CapCut należy zainstalować przed pierwszą lekcją</b>"],
        ["🎙️", "<b>Mikrofon i kamera:</b> potrzebne na lekcji online. Na kursie uczniowie nie nagrywają swojej twarzy."]
      ]
    },

    /* ================= SOUND DESIGN ================= */
    {
      id: "music",
      icon: "🎶",
      name: "Sound Design",
      label: "Kurs kreatywny",
      tagline: "Stwórz cały dźwięk do gry typu runner — muzykę menu, dźwięki zdarzeń i motywy poziomów — bez czytania nut.",
      facts: [["Lekcje", "5"], ["Czas lekcji", "60 min"], ["Poziom", "Początkujący"], ["Platforma", "Music Studio (w przeglądarce)"]],
      story: "<p>Uczniowie uczą się <b>projektowania dźwięku</b>, tworząc cały dźwięk do <b>gry typu runner</b>: muzykę menu, dźwięki zdarzeń, główny motyw poziomu i motywy o różnym nastroju.</p><p><b>Najpierw tworzą, a teorię poznają przy okazji</b>: sami wypróbowują rytm, melodię i akordy w <b>Music Studio</b>, prosto w przeglądarce. <b>Nie trzeba umieć czytać nut ani grać na instrumencie.</b> Na koniec każdy uczeń ma <b>gotowy pakiet audio</b> do runnera i stronę projektu w Sparks.</p>",
      outcomes: [
        "Budować rytm i melodię w Music Studio bez czytania nut.",
        "Tworzyć krótkie dźwięki, które mówią graczowi, co się stało: skok, nagrodę, błąd.",
        "Zmieniać nastrój utworu za pomocą akordów i basu.",
        "Dopracowywać utwór: słuchać, porównywać wersje, usuwać to, co zbędne.",
        "Opublikować pakiet audio i stworzyć stronę projektu w Sparks."
      ],
      bo: { id: "2105", url: "https://bo.kodland.org/courses/2105" },
      programmeIntro: "5 lekcji po 60 minut. Otwórz każdą lekcję:",
      programme: [
        { n: "Lekcja 1", title: "Muzyka menu", details: [["", "Uczniowie wybierają nastrój runnera i tworzą spokojną pętlę do menu lub ekranu pauzy. Pętla musi się powtarzać bez przerwy."]] },
        { n: "Lekcja 2", title: "Dźwięki zdarzeń", details: [["", "Skok, moneta, zderzenie, przyspieszenie. Uczniowie tworzą krótkie sygnały i sprawdzają, czy można je rozróżnić bez obrazu."]] },
        { n: "Lekcja 3", title: "Główny motyw poziomu", details: [["", "Szybka pętla do biegu: tempo, rytm i melodia dają poczucie szybkości. Uczniowie uczą się nie przeładowywać utworu."]] },
        { n: "Lekcja 4", title: "Nastrój poziomu: horror i fantasy", details: [["", "Instrumenty zostają te same, zmieniają się akordy i bas. Uczniowie tworzą dwie wersje motywu: napiętą na mroczny poziom i jasną do wioski fantasy, i słyszą, jak zmienia się nastrój."]] },
        { n: "Lekcja 5", title: "Projekt końcowy: strona projektu", details: [["", "Uczniowie wyrównują głośność utworów, nazywają każdy dźwięk, umieszczają pakiet audio na stronie projektu w Sparks i pokazują go tutorowi i innym uczniom."]] }
      ],
      build: [
        ["🎵", "Pętla do menu", "Spokojna pętla do menu lub ekranu pauzy, która powtarza się bez przerwy."],
        ["🔔", "Dźwięki zdarzeń", "Skok, moneta, zderzenie i przyspieszenie — krótkie sygnały, które da się rozróżnić bez obrazu."],
        ["🏃", "Główny motyw poziomu", "Szybka pętla, w której tempo, rytm i melodia dają poczucie szybkości."],
        ["🌗", "Dwa nastroje poziomu", "Ten sam motyw w napiętej wersji horror i jasnej wersji fantasy."],
        ["🎚️", "Wyważony pakiet audio", "Utwory z wyrównaną głośnością i wyraźnie nazwanym każdym dźwiękiem."],
        ["🗂️", "Strona projektu w Sparks", "Cały pakiet audio, pokazany tutorowi i innym uczniom."]
      ],
      pl: [
        "Podczas <b>sprawdzania połączenia</b> przetestuj dźwięk w obie strony — uczniowie przez całą lekcję słuchają swoich utworów i porównują wersje.",
        "Uczniowie <b>najpierw tworzą</b>: nie zaczynaj od teorii. Twoje otwarcie wyznacza dzisiejsze kreatywne wyzwanie, a karty prowadzą przez produkcję.",
        "Na lekcji 2 sprawdź, czy dźwięki zdarzeń <b>da się rozróżnić bez obrazu</b>. Na lekcji 3 przypomnij uczniom, żeby nie przeładowywali utworu.",
        "Na <b>zakończenie</b> poproś ucznia o odtworzenie utworu i daj konkretną informację zwrotną — o rytmie, melodii, nastroju — z jednym jasnym następnym krokiem.",
        "Wszystko dzieje się w <b>Music Studio</b>, prosto w przeglądarce. Na lekcji 5 uczniowie wyrównują głośność, nazywają każdy dźwięk i umieszczają pakiet audio na stronie projektu w Sparks."
      ],
      platform: {
        text: "Uczniowie pracują w <b>Music Studio</b>, prosto w przeglądarce: sami wypróbowują rytm, melodię i akordy, a swój pakiet audio umieszczają na stronie projektu w <b>Kodland Sparks</b>. Nie trzeba umieć czytać nut ani grać na instrumencie.",
        tools: ["Music Studio", "Kodland Sparks · Strona projektu"],
        tour: "music",
        tourText: "Otwórz Studio, zacznij utwór od podkładu i zobacz, jak łączą się melodia, perkusja i tempo."
      }
    },

    /* ================= PIXEL ART ================= */
    {
      id: "pixel",
      icon: "👾",
      name: "Pixel Art",
      label: "Kurs kreatywny",
      tagline: "Narysuj grafikę do gry typu runner: bohatera, nagrodę, przeszkody i przeciwników.",
      facts: [["Lekcje", "5"], ["Czas lekcji", "60 min"], ["Poziom", "Początkujący"], ["Platforma", "Pixel Studio (w przeglądarce) + Kodland Sparks"]],
      story: "<p>Uczniowie uczą się <b>pixel artu</b>, tworząc grafikę do <b>gry typu runner</b>. Zaczynają od prostej animacji monety-nagrody. Potem projektują <b>bohatera w stylu anime</b>, rysują go i animują. Następnie rysują przeszkody i przeciwników, a na końcu umieszczają całą grafikę na stronie projektu w Sparks.</p><p>Pracują w <b>Pixel Studio</b> prosto w przeglądarce. <b>Nie trzeba umieć rysować.</b> Na koniec każdy uczeń ma gotowy zestaw grafik do gry: bohatera, nagrodę, przeszkody i przeciwników.</p>",
      outcomes: [
        "Rysować obiekty z pikseli na podstawie prostych kształtów i pracować z ograniczoną paletą.",
        "Dodawać cienie, światła i dithering.",
        "Zaprojektować bohatera w stylu anime, którego wygląd pokazuje jego charakter i zdolności.",
        "Tworzyć animację klatka po klatce i eksportować ją jako GIF.",
        "Opublikować zestaw grafik do gry i stworzyć stronę projektu w Sparks."
      ],
      bo: { id: "2103", url: "https://bo.kodland.org/courses/2103" },
      programmeIntro: "5 lekcji po 60 minut. Otwórz każdą lekcję:",
      programme: [
        { n: "Lekcja 1", title: "Animowana moneta-nagroda", details: [["", "Uczniowie poznają Pixel Studio: kontur, wypełnienie, cienie i światła. Rysują własną monetę i sprawiają, że obraca się w kilku klatkach."]] },
        { n: "Lekcja 2", title: "Bohater w stylu anime", details: [["", "Uczniowie wymyślają bohatera, wybierają paletę i rysują go na płótnie 64×64, z szablonu lub od zera. Wypróbowują dithering."]] },
        { n: "Lekcja 3", title: "Animacja bohatera", details: [["", "Dwie pozy kroku do cyklu chodzenia oraz animacja idle, w której bohater stoi i oddycha. Uczniowie łączą animację w GIF."]] },
        { n: "Lekcja 4", title: "Przeszkody i przeciwnicy", details: [["", "Uczniowie rysują przeszkodę i przeciwnika w stylu swojego bohatera, a potem animują przeciwnika w 2–3 klatkach."]] },
        { n: "Lekcja 5", title: "Projekt końcowy: strona projektu", details: [["", "Uczniowie rysują 2–3 elementy otoczenia i sprawdzają, czy cała grafika używa jednej palety i jednej skali. Potem umieszczają wszystko na stronie projektu w Sparks i pokazują ją tutorowi i innym uczniom."]] }
      ],
      build: [
        ["🪙", "Animowana moneta-nagroda", "Moneta, którą uczeń rysuje i sprawia, że obraca się w kilku klatkach."],
        ["🧝", "Bohater w stylu anime", "Bohater narysowany na płótnie 64×64, którego wygląd pokazuje jego charakter i zdolności."],
        ["🏃", "Cykl chodzenia i animacja idle", "Dwie pozy kroku do chodzenia oraz bohater, który stoi i oddycha — połączone w GIF."],
        ["👹", "Przeszkoda i przeciwnik", "Narysowani w stylu bohatera, z przeciwnikiem animowanym w 2–3 klatkach."],
        ["🌳", "Elementy otoczenia", "2–3 elementy do świata gry, sprawdzone pod kątem jednej palety i jednej skali."],
        ["🗂️", "Strona projektu w Sparks", "Cała grafika razem, pokazana tutorowi i innym uczniom."]
      ],
      pl: [
        "Każda lekcja trwa <b>60 minut</b>. Wykorzystaj otwarcie, by wyznaczyć cel dzisiejszej grafiki — moneta, bohater, animacja, przeciwnik.",
        "Uczniowie wybierają własny projekt i paletę. Gdy cię wołają, <b>zapytaj o ich wybory</b>, zanim cokolwiek zaproponujesz: to ich postać.",
        "Szybcy uczniowie? Karty zawierają <b>dodatkowe wyzwania</b> — skieruj ich do nich podczas pracy samodzielnej.",
        "Na <b>zakończenie</b> uczeń pokazuje swoją animację, a ty dajesz konkretną informację zwrotną: kształt, paleta, ruch — i jeden następny krok.",
        "Na lekcji 5 sprawdź, czy cała grafika używa <b>jednej palety i jednej skali</b>, zanim uczeń umieści ją na stronie projektu w <b>Kodland Sparks</b>."
      ],
      platform: {
        text: "Uczniowie rysują w <b>Pixel Studio</b>, prosto w przeglądarce: pracują piksel po pikselu, dodają cienie, światła i dithering, dodają klatki, by animować, i eksportują GIF-y. Na końcu tworzą stronę projektu w <b>Kodland Sparks</b>.",
        tools: ["Pixel Studio", "Kodland Sparks · Pixel Art", "Klatki i eksport GIF"],
        tour: "pixel",
        tourText: "Otwórz Studio, wybierz rozmiar płótna i zobacz narzędzia, których uczniowie używają do rysowania i animowania grafiki do swojej gry."
      },
      /* Projekty uczniów opublikowane w Kodland Sparks: href, img, tag, title, by (nickname), desc. pixel: true = ostry obraz */
      projects: [
        { href: "https://portfolio-service-production-9e98.up.railway.app/Toska/cmrlwkvqc03ohnw3fkv2hz6gn", img: "../images/proj_ruuun.gif", pixel: true, tag: "GIF", title: "Ruuun", by: "Toska",
          desc: "Piksel-artowy bohater w stylu anime z wyrazistą twarzą i animacją chodzenia — animacja ruchu z lekcji 3." },
        { href: "https://portfolio-service-production-9e98.up.railway.app/Toska/cmrkfuvg70i3jp13f688lhyfs", img: "../images/pixel_3.gif", pixel: true, tag: "GIF", title: "monster", by: "Toska",
          desc: "Duch-potwór do gry, w trzech klatkach: zmieniające się wyrazy twarzy nadają mu osobowość." }
      ],
      /* Więcej przykładów: [obraz, podpis] */
      gallery: {
        intro: "Więcej elementów z kursu — nagrody do gry typu runner:",
        items: [["../images/pixel_1.gif", "🪙 Animowana moneta"], ["../images/pixel_2.gif", "💎 Animowany klejnot"]]
      }
    }
  ]
};
