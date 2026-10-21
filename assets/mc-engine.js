/* =====================================================================
   MULTI-COURSES TRAINING — ENGINE (no texts here: they are in content/<lang>.js)
   Used by Creative_Courses and Coding_Courses.
   ===================================================================== */
(function(){
  const C = window.MC_CONTENT, U = C.ui;
  const $ = s => document.querySelector(s);
  const SPARKS_TOUR = '../sparks-sim/Kodland_Sparks_Tour.html';
  const KEY = 'mc-training-' + C.track;
  const fill = (s, v) => String(s).replace(/\{(\w+)\}/g, (m, k) => v[k] !== undefined ? v[k] : m);

  /* ---------- progress (saved in this browser) ---------- */
  let S = { pl:false, open:0, seen:{}, tours:{}, finished:false };
  try { const saved = JSON.parse(localStorage.getItem(KEY) || 'null'); if (saved) S = Object.assign(S, saved); } catch(e){}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e){} };
  const seenCount = () => C.courses.filter(c => S.seen[c.id]).length;

  document.title = U.pageTitle;
  document.body.classList.add('track-' + C.track);

  /* ---------- page skeleton ---------- */
  $('#app').innerHTML = `
    <nav class="nav"><span class="logo">kodland</span><span class="brand">${U.brand}</span><span class="pill" id="pill"></span></nav>
    <main>
      <header class="hero">
        <span class="kicker">${U.kicker}</span>
        <h1>${U.title1} <span>${U.title2}</span></h1>
        <p class="lead">${U.lead}</p>
        <div class="steps-strip">${U.strip.map((s, i) => `<div><b>${i + 1}</b><span>${s}</span></div>`).join('')}</div>
      </header>

      <section class="sec" id="sec-pl">
        <h2><i>1</i>${U.pl.title}</h2>
        <div class="card pl-card">
          <div class="pl-ic">⚡</div>
          <div>
            <p>${U.pl.text}</p>
            <label class="check"><input type="checkbox" id="plCheck"><span>${U.pl.check}</span></label>
            <p class="pl-note" id="plNote"></p>
          </div>
        </div>
      </section>

      <div id="gated">
        <div class="gate-msg">🔒 ${U.pl.locked}</div>

        <section class="sec" id="sec-mini">
          <h2><i>2</i>${U.mini.title}</h2>
          <p class="intro">${U.mini.intro}</p>
          <div class="flips">${U.mini.cards.map(c => flip(c[0], c[1], c[2])).join('')}</div>
          <h3 class="sub">${U.mini.catsTitle}</h3>
          <div class="cats">${U.mini.cats.map(cat => `
            <div class="cat ${cat.current ? 'current' : ''}">
              <div class="cat-h"><span>${cat.icon}</span><b>${cat.name}</b>${cat.current ? `<em>${U.mini.youAreHere}</em>` : `<small>${U.mini.otherTraining}</small>`}</div>
              <ul>${cat.courses.map(n => `<li>${n}</li>`).join('')}</ul>
            </div>`).join('')}</div>
          <div class="callout">${U.mini.pl}</div>
        </section>

        <section class="sec" id="sec-courses">
          <h2><i>3</i>${U.courses.title}</h2>
          <p class="intro">${U.courses.intro}</p>
          <div class="tabs" id="tabs"></div>
          <div id="course"></div>
        </section>

        <section class="sec" id="sec-final">
          <h2><i>4</i>${U.final.title}</h2>
          <div class="card soon-card"><div class="soon-ic">🎉</div><div><h3>${U.final.soonTitle}</h3>${U.final.soon}</div></div>
          <div class="card lms-card"><div class="final-ic">📝</div><h3>${U.final.lmsTitle}</h3>${U.final.lms}</div>
        </section>
      </div>
    </main>
    <footer class="foot">${U.footer}</footer>`;

  function flip(icon, title, text){
    return `<button class="flip" data-act="flip"><span class="flip-in">
      <span class="front"><span class="f-ic">${icon}</span><b>${title}</b><small>${U.flipHint}</small></span>
      <span class="back">${text}</span></span></button>`;
  }

  /* ---------- PL prerequisite ---------- */
  function renderGate(){
    $('#plCheck').checked = S.pl;
    $('#gated').classList.toggle('locked', !S.pl);
    $('#plNote').innerHTML = S.pl ? U.pl.ok : '';
  }

  /* ---------- progress pill + course tabs ---------- */
  function renderPill(){ $('#pill').textContent = fill(U.progress, { done:seenCount(), total:C.courses.length }); }
  function renderTabs(){
    $('#tabs').innerHTML = C.courses.map((c, i) => `
      <button class="tab ${i === S.open ? 'on' : ''} ${S.seen[c.id] ? 'done' : ''}" data-act="open" data-i="${i}">
        <span class="t-ic">${c.icon}</span><b>${c.name}</b><small>${S.seen[c.id] ? U.courses.seen : U.courses.toSee}</small>
      </button>`).join('');
  }

  /* ---------- pieces of a course ---------- */
  // A lesson stage: [icon, label, text] (or [label, text] for a plain line)
  const detail = d => d.length === 3
    ? `<div class="dt"><span class="dt-ic">${d[0]}</span><div><b>${d[1]}</b><p>${d[2]}</p></div></div>`
    : `<p>${d[0] ? `<b>${d[0]}</b> ` : ''}${d[1]}</p>`;
  const projects = list => `<div class="projs">${list.map(p => `
      <a class="pjc" href="${p.href}" target="_blank" rel="noopener">
        <div class="th ${p.pixel ? 'px' : ''}">${p.img ? `<img src="${p.img}" alt="" loading="lazy">` : `<div class="thf">${p.e || '🎮'}</div>`}<span class="tag">${p.tag}</span></div>
        <div class="bd"><span class="t">${p.title}</span><span class="by"><i>${p.by[0].toUpperCase()}</i>${p.by}</span><span class="ds">${p.desc}</span><span class="op">${U.course.projOpen}</span></div>
      </a>`).join('')}</div>`;
  const gallery = g => `<p class="muted">${g.intro}</p><div class="gal">${g.items.map(x => `<figure><img src="${x[0]}" alt=""><figcaption>${x[1]}</figcaption></figure>`).join('')}</div>`;

  /* ---------- one course ---------- */
  function renderCourse(){
    const c = C.courses[S.open], L = U.course;
    S.seen[c.id] = true; save(); renderPill(); renderTabs();

    const facts = c.facts.map(f => `<div class="fact"><span>${f[0]}</span><b>${f[1]}</b></div>`).join('');
    const prog = c.programme.map((m, i) => `
      <div class="acc ${i === 0 ? 'open' : ''}">
        <button class="acc-h" data-act="acc"><span class="acc-n">${m.n}</span><b>${m.title}</b><span class="acc-x">＋</span></button>
        <div class="acc-b">
          ${m.lessons ? `<ol class="lessons">${m.lessons.map(l => `<li>${l}</li>`).join('')}</ol>` : ''}
          ${m.details ? `<div class="dts">${m.details.map(detail).join('')}</div>` : ''}
          ${m.result ? `<p class="result">🏁 ${m.result}</p>` : ''}
        </div>
      </div>`).join('');
    const P = c.platform;
    const tools = P.tools.map(t => `<span class="tool">${t}</span>`).join('');
    const tour = P.tour ? `
      <div class="tour">
        <div class="tour-head">
          <div><b>${L.tourTitle}</b><p>${P.tourText}</p></div>
          <span class="tour-badge ${S.tours[c.id] ? 'on' : ''}" id="tourBadge">${S.tours[c.id] ? L.tourDone : L.tourTodo}</span>
        </div>
        <div class="tour-frame" id="tourFrame">
          <button class="btn-y" data-act="tour">${L.tourStart}</button>
          <small>${L.tourHint}</small>
        </div>
        <a class="tour-full" target="_blank" rel="noopener" href="${tourUrl(c)}">${L.tourFull}</a>
      </div>` : '';
    const launcher = P.launcher ? `
      <div class="launcher">
        <div class="l-ic">📥</div>
        <div><b>${P.launcher.title}</b><p>${P.launcher.text}</p>
          ${P.launcher.url ? `<a class="btn-y" target="_blank" rel="noopener" href="${P.launcher.url}">${P.launcher.btn}</a>` : `<span class="btn-y off">${P.launcher.btn}</span>`}
        </div>
      </div>` : '';
    const extra = c.extra ? `
      <div class="block"><h4>${c.extra.title}</h4><p>${c.extra.intro}</p>
        <div class="method">${c.extra.steps.map((s, i) => `<button class="m-step" data-act="mstep" data-i="${i}"><span>${s[0]}</span><b>${s[1]}</b></button>`).join('<i>→</i>')}</div>
        <div class="m-text" id="mText">${c.extra.hint}</div>
      </div>` : '';
    const req = c.requirements ? `
      <div class="block req">
        <div class="req-h"><span>💻</span><div><h4>${L.requirements}</h4><p>${L.requirementsIntro}</p></div></div>
        <div class="req-grid">${c.requirements.map(r => `<div class="req-i"><span>${r[0]}</span><p>${r[1]}</p></div>`).join('')}</div>
      </div>` : '';
    const ex = (c.projects && c.projects.length) || c.gallery ? `
      <div class="block"><h4>${L.examples}</h4>${c.projects ? projects(c.projects) : ''}${c.gallery ? gallery(c.gallery) : ''}</div>` : '';
    // Link to the course in the BO (only when the content file defines `bo`, i.e. regional versions)
    const bo = c.bo ? `
      <div class="launcher bo">
        <div class="l-ic">🔗</div>
        <div><b>${L.boTitle}</b><p>${fill(L.boText, { region:C.region || '' })}</p>
          ${c.bo.note ? `<p class="bo-note">⏳ ${c.bo.note}</p>` : ''}
          <a class="btn-y" target="_blank" rel="noopener" href="${c.bo.url}">${fill(L.boBtn, { id:c.bo.id })}</a>
        </div>
      </div>` : '';
    const nxt = S.open + 1 < C.courses.length
      ? `<button class="btn-y" data-act="open" data-i="${S.open + 1}">${fill(L.next, { name:C.courses[S.open + 1].name })}</button>`
      : `<button class="btn-y" data-act="final">${L.toFinal}</button>`;

    $('#course').innerHTML = `
      <article class="course">
        <div class="c-head"><span class="c-ic">${c.icon}</span><div><small>${c.label}</small><h3>${c.name}</h3><p>${c.tagline}</p></div></div>
        <div class="facts">${facts}</div>

        <div class="block story"><h4>${L.story}</h4>${c.story}</div>

        ${c.outcomes ? `<div class="block outcomes"><h4>${L.outcomes}</h4><ul class="outs">${c.outcomes.map(o => `<li>${o}</li>`).join('')}</ul></div>` : ''}

        <div class="block"><h4>${L.programme}</h4><p class="muted">${c.programmeIntro}</p>${prog}</div>

        <div class="block"><h4>${L.build}</h4><div class="flips small">${c.build.map(b => flip(b[0], b[1], b[2])).join('')}</div></div>

        ${ex}

        ${extra}

        <div class="block pl"><h4>${L.pl}</h4><ul>${c.pl.map(p => `<li>${p}</li>`).join('')}</ul></div>

        <div class="block"><h4>${L.platform}</h4><p>${P.text}</p><div class="tools">${tools}</div>${launcher}${tour}</div>

        ${req}

        ${bo}

        <div class="c-end"><span>${fill(L.endText, { name:c.name })}</span>${nxt}</div>
      </article>`;
  }
  const tourUrl = c => SPARKS_TOUR + '?tour=' + c.platform.tour + '&lang=' + encodeURIComponent(C.tourLang || C.lang || 'en');

  /* ---------- clicks ---------- */
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-act]'); if (!el) return;
    const act = el.dataset.act;
    if (act === 'flip') el.classList.toggle('on');
    if (act === 'acc') el.parentElement.classList.toggle('open');
    if (act === 'open'){
      S.open = +el.dataset.i; save(); renderCourse();
      $('#sec-courses').scrollIntoView({ behavior:'smooth', block:'start' });
    }
    if (act === 'tour'){
      $('#tourFrame').innerHTML = `<iframe src="${tourUrl(C.courses[S.open])}" title="Kodland Sparks"></iframe>`;
      $('#tourFrame').classList.add('live');
    }
    if (act === 'mstep'){
      const c = C.courses[S.open], i = +el.dataset.i;
      document.querySelectorAll('.m-step').forEach((b, k) => b.classList.toggle('on', k === i));
      $('#mText').innerHTML = `<b>${c.extra.steps[i][1]}</b> ${c.extra.steps[i][2]}`;
    }
    // The final messages appear only after "Finish the training" in the last course
    if (act === 'final'){ S.finished = true; save(); renderFinal(); $('#sec-final').scrollIntoView({ behavior:'smooth', block:'start' }); }
  });
  $('#plCheck').addEventListener('change', e => { S.pl = e.target.checked; save(); renderGate(); });

  /* ---------- the Sparks tour tells us when it's finished ---------- */
  window.addEventListener('message', e => {
    const d = e.data; if (!d || d.type !== 'sparks-tour-done') return;
    const c = C.courses.find(x => x.platform.tour === d.tour); if (!c) return;
    S.tours[c.id] = true; save();
    const b = $('#tourBadge'); if (b && C.courses[S.open].id === c.id){ b.classList.add('on'); b.textContent = U.course.tourDone; }
  });

  function renderFinal(){ $('#sec-final').style.display = S.finished ? '' : 'none'; }

  if (S.open >= C.courses.length) S.open = 0;
  renderGate(); renderCourse(); renderFinal();
})();
