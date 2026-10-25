/* Sofia Larraggione — Portfolio editorial · v3.13 */
(() => {
  const d = document, b = d.body, $ = (s, c = d) => c.querySelector(s), $$ = (s, c = d) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const store = { get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} } };

  /* ---------- Idioma ES / EN ---------- */
  const EN = {
    'v.model': 'Modeling', 'v.content': 'Content', 'v.act': 'Acting', 'v.all': 'All', 'nav.contact': 'Contact',
    'cover.hi': 'Model, creator &amp; actress', 'cover.roles': 'Modeling · Content · Acting',
    'pick.title': 'What would you like to see?', 'pick.sub': 'This portfolio brings together everything I do. Choose what interests you and I’ll show you just that.',
    'c.model': 'Model', 'c.model.l': 'Measurements · Polas · Editorials',
    'c.content': 'Content', 'c.content.l': 'Media kit · Audience · Beauty',
    'c.act': 'Actress', 'c.act.l': 'CV · Training · Experience', 'pick.all': 'See full portfolio',
    'm.kick': 'Section one', 'm.kick2': 'Modeling — fashion, editorial and campaigns', 'm.title': 'Model', 'm.h': 'Measurements',
    'm.sub': 'Natural on-camera presence for fashion, editorial, e-commerce and campaigns. Based in Madrid, available worldwide.',
    'm.h1': 'Height', 'm.h2': 'Bust', 'm.h3': 'Waist', 'm.h4': 'Hips', 'm.h5': 'Shoes (EU)', 'm.note': 'Unretouched polas',
    'pol.r': 'Natural · no make-up · no retouching', 'pol.s': 'as I am', 'pol.c': 'Height 1.66 m · Bust 90 · Waist 70 · Hips 100 · Shoes 38 EU',
    'test.r': 'Pose, expression and movement', 'ed.l': 'Editorial projects', 'ed.hint': 'Hover or tap the book to turn the page', 'be.r': 'Close-up · real skin, gloss', 'pol.h': 'Polas',
    'ed.1': 'Pink &amp; cherries · pearls, backstage', 'ed.2': 'Studio · denim, white backdrop', 'ed.3': 'Mallorca · sun, stone, sea', 'ed.4': 'Swimwear · garden, warm light',
    'ed.5': 'Beauty · glow, graphic liner', 'ed.6': 'Colour · print, flash', 'ed.7': '', 'cc.pill': 'Fashion · Luxury →', 'cc.f1': 'Style with history', 'cc.kick': 'Section two — Content creation',
    'cc.h': 'Fashion, style &amp; <em>luxury</em> culture',
    'cc.lede': 'Argentine actress, model and content creator based in Madrid. I share fashion through opinion and recommendation: my own styling, style analysis and historical facts about luxury fashion.',
    'cc.ig': 'Instagram — Jul 21 to Oct 18, 2026 (90 days)', 'st.1': 'Followers', 'st.1s': '+34.5% in 90 days', 'st.2': 'Views', 'st.2s': '98.7K in the last 30 days', 'st.3': 'Accounts reached', 'st.3s': 'Unique viewers', 'st.4': 'Interactions', 'st.4s': 'Likes, comments, shares', 'st.5': 'Views from non-followers', 'st.5s': 'Reaches beyond her community', 'st.6': 'New followers', 'st.6s': '4.1K profile visits', 'se.k': 'Signature series', 'se.p': 'Her strongest format: fashion history, facts and context before giving an opinion. Since September it has driven the account’s growth.', 'se.1': 'Plays', 'se.2': 'Likes', 'se.3': 'Shares', 'au.fm': 'Formats', 'au.st': 'Stories', 'au.po': 'Posts', 'vd.h': 'Latest videos', 'vd.r': 'Tap to play', 'vd.open': 'Watch on Instagram', 'r.h': 'Most viewed reels', 'r.h2': 'Last year · plays', 'r.l5': 'Comedy', 'r.cta': 'Watch reels on Instagram', 'lf.h': 'Beauty &amp; lifestyle', 'ex.h': 'Expressive range', 'ex.h2': 'One face, three registers', 'r.l1': '73K likes', 'r.l2': '1.2K comments', 'r.l3': '4.3K likes', 'r.l4': '1.6K likes',
    'cc.note': 'Reels are the top-reach format: 277K views in 90 days.',
    'au.g': 'Gender', 'au.f': 'women', 'au.m': 'men', 'au.a': 'Age', 'au.c': 'Countries', 'au.mx': 'Mexico', 'au.es': 'Spain', 'au.us': 'USA',
    'pi.1': 'Antes de opinar de moda', 'pi.1t': 'A series on fashion history, facts and stories behind the great houses.', 'pi.2': 'Opinion &amp; debate', 'pi.2t': 'Does fashion lead or follow? Industry takes in her own voice.', 'pi.3': 'Film, books &amp; culture', 'pi.3t': 'Reviews and recommendations, from Lorca to cinema, with an actor’s on-camera presence.',
    'r.v': 'views', 'r.v2': 'views', 'r.v3': 'views', 'r.v4': 'views',
    'ac.kick': 'Section three — Acting CV', 'ac.h': 'Actress —<span>on stage since the age of 4.</span>',
    'ac.l1': 'Taller Locomun<br>Dir. Carlos Torreiro', 'ac.l2': 'Mar del Plata, Argentina<br>Now: Madrid, Spain',
    'ac.bio': 'I am an actress born in Mar del Plata, Argentina. My career began on stage at the age of 4, inspired by my paternal grandfather, a theatre director in my hometown. I trained until I was 20, performing in a wide range of plays, from dramas and comedies to sainetes and works by Federico García Lorca. Later I expanded into film and advertising, working on projects with companies such as Netflix, Volkswagen and Schneider. I now live in Madrid, Spain, fully available to travel anywhere in the world, looking for a new artistic awakening.',
    'ac.f': 'Biography',
    'ex.1': 'Netflix feature film — cast member.', 'ex.2h': 'Blood Wedding', 'ex.2': 'By Federico García Lorca. The Bride, at the Teatro Municipal de Mar del Plata.',
    'ex.3h': 'International series', 'ex.3': 'Netflix production, supporting role.', 'ex.t1': 'Experience', 'ex.t1b': 'Experience',
    'ex.4h': 'Sainetes and contemporary plays', 'ex.4': 'Collective creation at Taller Locomun. Roles: the Italian and the Spaniard.',
    'ex.5': 'Advertising campaigns as supporting character and extra.',
    'fo.h': 'Training —<span>comprehensive stage acting.</span>',
    'fo.1h': 'Poetry', 'fo.1': 'analysis and recitation as an expressive tool.',
    'fo.2h': 'Improvisation', 'fo.2': 'spontaneous creation of scenes and characters.',
    'fo.3h': 'Interpretation', 'fo.3': 'dramatic construction across genres: drama, comedy, sainete, Lorca.',
    'fo.4h': 'Physical expression', 'fo.4': 'command of stage movement and physical language.',
    'fo.5h': 'Voice', 'fo.5': 'vocal technique, projection and interpretive nuance.', 'fo.f': 'Training',
    'sk.h': 'Skills —<span>additional.</span>', 'sk.1': 'Contemporary dance', 'sk.2': 'Theatre improvisation', 'sk.3': 'Puppetry', 'sk.4': 'Swimming', 'sk.5': 'Modeling',
    'sk.f': 'Available: worldwide', 'sk.q': '“a new artistic awakening”',
    'ct.k': 'Collaborations · Castings · Campaigns', 'ct.h': 'Let’s talk', 'ct.t': 'Phone', 'ct.m': 'Based in Madrid · Available worldwide', 'ct.back': 'Choose another section ↑'
  };
  const ES = {};
  const nodes = $$('[data-i18n]');
  nodes.forEach(n => { ES[n.dataset.i18n] = n.innerHTML; });
  const setLang = l => {
    const dict = l === 'en' ? EN : ES;
    nodes.forEach(n => { const v = dict[n.dataset.i18n]; if (v != null) n.innerHTML = v; });
    d.documentElement.lang = l;
    $$('[data-lang]').forEach(x => x.setAttribute('aria-pressed', x.dataset.lang === l));
    store.set('sl-lang', l);
  };
  $$('[data-lang]').forEach(x => x.addEventListener('click', () => setLang(x.dataset.lang)));
  const saved = store.get('sl-lang') || 'es';
  if (saved === 'en') setLang('en');

  /* ---------- ¿Qué querés ver? ---------- */
  const secs = $$('[data-sec]'), views = $('#views');
  let ioReady = false;
  const VALID = ['modelaje', 'contenido', 'actuacion', 'todo'];
  const setView = (v, scroll = true) => {
    secs.forEach(s => { s.hidden = !(v === 'todo' || s.dataset.sec === v || s.dataset.sec === 'contacto'); });
    views.hidden = false; views.classList.add('show-m');
    $$('[data-view]').forEach(x => x.setAttribute('aria-pressed', x.dataset.view === v));
    try { history.replaceState(null, '', '#' + v); } catch (e) {}
    if (scroll) {
      const first = secs.find(s => !s.hidden);
      requestAnimationFrame(() => first && first.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }));
    }
    if (ioReady) observeAll();
  };
  $$('[data-view]').forEach(x => x.addEventListener('click', () => setView(x.dataset.view)));
  const h = location.hash.slice(1);
  if (VALID.includes(h)) setView(h, false);
  else secs.forEach(s => s.hidden = true);

  /* ---------- Barra superior ---------- */
  const top = $('#top');
  addEventListener('scroll', () => top.classList.toggle('solid', scrollY > innerHeight * .6), { passive: true });

  /* ---------- Cursor ---------- */
  if (fine && !reduce) {
    const c = d.createElement('div'); c.className = 'cur'; c.innerHTML = '<span>Ver</span>'; b.append(c);
    let mx = -100, my = -100, rx = mx, ry = my;
    addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; b.classList.add('has-cur'); }, { passive: true });
    d.addEventListener('mouseleave', () => b.classList.remove('has-cur'));
    (function loop() { rx += (mx - rx) * .2; ry += (my - ry) * .2; c.style.transform = `translate(${rx}px,${ry}px)`; requestAnimationFrame(loop); })();
    d.addEventListener('mouseover', e => {
      const t = e.target;
      const view = !!t.closest('[data-lb]');
      b.classList.toggle('c-view', view);
      b.classList.toggle('c-link', !view && !!t.closest('a,button'));
      b.classList.toggle('c-dark', !!t.closest('.ac,.lb'));
      $('span', c).textContent = d.documentElement.lang === 'en' ? 'View' : 'Ver';
    });
  }

  /* ---------- Parallax con el mouse (portada y títulos) ---------- */
  if (fine && !reduce) {
    const par = $$('[data-par]');
    let tx = 0, ty = 0, cx = 0, cy = 0;
    addEventListener('mousemove', e => { tx = e.clientX / innerWidth - .5; ty = e.clientY / innerHeight - .5; }, { passive: true });
    (function loop() {
      cx += (tx - cx) * .06; cy += (ty - cy) * .06;
      par.forEach(el => { const k = +el.dataset.par; el.style.translate = `${cx * k}px ${cy * k}px`; });
      requestAnimationFrame(loop);
    })();
    $$('[data-tilt]').forEach(el => {
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        el.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
      });
      el.addEventListener('mouseleave', () => el.style.transform = '');
    });
  }

  /* ---------- Números que cuentan ---------- */
  const fmt = (v, dec) => { const [i, f] = v.toFixed(dec).split('.'); return i.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + (f ? ',' + f : ''); };
  const count = el => {
    if (el.dataset.done) return; el.dataset.done = 1;
    const to = +el.dataset.to, dec = +(el.dataset.dec || 0), pre = el.dataset.pre || '', suf = el.dataset.suf || '';
    if (reduce) return;
    const t0 = performance.now();
    (function step(now) { const p = Math.min(1, (now - t0) / 1800), e = 1 - Math.pow(1 - p, 4); el.textContent = pre + fmt(to * e, dec) + suf; if (p < 1) requestAnimationFrame(step); })(t0);
  };

  /* ---------- Apariciones al hacer scroll ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    $$('[data-to]', e.target).forEach(count);
    io.unobserve(e.target);
  }), { threshold: .12 });
  /* Los títulos caligráficos se revelan cuando aparece su contenedor (el recorte los hace invisibles para el observador) */
  const io2 = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    $$(':scope > .draw', e.target).forEach(x => x.classList.add('in'));
    io2.unobserve(e.target);
  }), { threshold: .05 });
  function observeAll() {
    $$('.rv:not(.in)').forEach(el => io.observe(el));
    new Set($$('.draw:not(.in)').map(x => x.parentElement)).forEach(p => io2.observe(p));
  }
  ioReady = true;
  observeAll();

  /* ---------- Cuaderno de espiral: pasa arriba y enseguida abajo, misma foto ---------- */
  const touchOnly = matchMedia('(hover: none)').matches;
  $$('.book').forEach((bk, bi) => {
    const imgs = bk.dataset.imgs.split(',');
    let i = 0, busy = false;
    const paint = (layer, idx) => layer.style.backgroundImage = `url(${imgs[idx]})`;
    const halves = ['t', 'b'].map(cls => {
      const el = $('.half.' + cls, bk);
      el.innerHTML = '<span class="pg"></span><span class="leaf"></span>';
      const h = { pg: $('.pg', el), leaf: $('.leaf', el) };
      paint(h.pg, 0); paint(h.leaf, 0);
      return h;
    });
    const DUR = 620, GAP = 140;
    const turn = (h, from, to, delay) => setTimeout(() => {
      paint(h.pg, to); paint(h.leaf, from);
      h.leaf.classList.remove('go'); void h.leaf.offsetWidth; h.leaf.classList.add('go');
      setTimeout(() => { paint(h.leaf, to); h.leaf.classList.remove('go'); }, DUR);
    }, delay);
    const flip = () => {
      if (busy || imgs.length < 2) return; busy = true;
      const next = (i + 1) % imgs.length;
      turn(halves[0], i, next, 0); turn(halves[1], i, next, GAP);
      setTimeout(() => { i = next; busy = false; }, DUR + GAP + 20);
    };
    /* con el cursor encima: pasa de página solo, sin hacer clic */
    let hov = null, auto = null;
    const startHover = () => { if (hov) return; clearInterval(auto); flip(); hov = setInterval(flip, 900); };
    const stopHover = () => { clearInterval(hov); hov = null; };
    bk.addEventListener('pointerenter', e => { if (e.pointerType !== 'touch') startHover(); });
    bk.addEventListener('pointermove', e => { if (e.pointerType !== 'touch') startHover(); });
    bk.addEventListener('pointerleave', stopHover);
    /* en el celular (sin cursor): se toca para pasar, y además pasa solo cuando está a la vista */
    bk.addEventListener('click', flip);
    bk.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); } });
    const vis = new IntersectionObserver(es => es.forEach(en => { clearInterval(auto); if (en.isIntersecting && !hov) { if (touchOnly) flip(); auto = setInterval(flip, (touchOnly ? 1600 : 3200) + bi * (touchOnly ? 90 : 230)); } }), { threshold: .35 });
    vis.observe(bk);
  });

  if (reduce) $$('video[autoplay]').forEach(v => { v.removeAttribute('autoplay'); v.pause(); });

  /* ---------- Videos: el reel se carga solo al tocarlo (la web sigue liviana) ---------- */
  $$('.vid-ph').forEach(btn => btn.addEventListener('click', () => {
    const f = d.createElement('iframe');
    f.src = 'https://www.instagram.com/p/' + btn.dataset.ig + '/embed/captioned/';
    f.title = 'Video de Instagram'; f.loading = 'lazy'; f.allow = 'autoplay; encrypted-media; picture-in-picture'; f.allowFullscreen = true;
    const box = d.createElement('div'); box.className = 'vid-frame'; box.append(f);
    btn.replaceWith(box);
  }));

  /* ---------- Galería a pantalla completa ---------- */
  const items = $$('[data-lb]');
  const lb = d.createElement('div'); lb.className = 'lb'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true');
  lb.innerHTML = '<img alt=""><button class="x" type="button">✕</button><button class="p" type="button" aria-label="Anterior">←</button><button class="n" type="button" aria-label="Siguiente">→</button>';
  b.append(lb);
  const li = $('img', lb); let group = [], idx = 0;
  const show = () => { const im = $('img', group[idx]) || group[idx]; li.src = im.currentSrc || im.src; li.alt = im.alt; };
  const open = el => { group = items.filter(x => x.dataset.lb === el.dataset.lb); idx = group.indexOf(el); show(); lb.classList.add('open'); b.style.overflow = 'hidden'; };
  const close = () => { lb.classList.remove('open'); b.style.overflow = ''; };
  const go = s => { idx = (idx + s + group.length) % group.length; show(); };
  items.forEach(el => { el.tabIndex = 0; el.addEventListener('click', () => open(el)); el.addEventListener('keydown', e => { if (e.key === 'Enter') open(el); }); });
  $('.x', lb).onclick = close; $('.p', lb).onclick = () => go(-1); $('.n', lb).onclick = () => go(1);
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  d.addEventListener('keydown', e => { if (!lb.classList.contains('open')) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1); });
  let sx = 0;
  lb.addEventListener('touchstart', e => sx = e.touches[0].clientX, { passive: true });
  lb.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1); });
})();
