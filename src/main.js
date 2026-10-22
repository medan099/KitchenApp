import './style.css';
import './refinement.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(ScrollTrigger, Flip);

const images = {
  republique: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
  carthage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
  lac: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85',
  monceau: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85',
  detail: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=85',
  studio: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
  material: 'https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1800&q=85'
};

const navItems = [
  ['01', 'Expertise', '/expertise.html'],
  ['02', 'Projets', '/projects.html'],
  ['03', 'Matières', '/materials.html'],
  ['04', 'Méthode', '/process.html'],
  ['05', 'Atelier', '/studio.html']
];

const sampleData = {
  oak: { code: 'W / 01', name: 'Chêne naturel', family: 'Bois', finish: 'Brossé mat', texture: 'Veinage régulier, toucher chaud', application: 'Façade / colonne', associations: 'Quartz · Inox · Sable', bg: 'linear-gradient(135deg,#a47b56,#5c3827 42%,#c49a6b 43%,#6b432e 73%,#af8057)' },
  walnut: { code: 'W / 02', name: 'Noyer', family: 'Bois', finish: 'Huile mate', texture: 'Fibre profonde, tonalité brune', application: 'Façade / îlot', associations: 'Pierre · Laiton · Crème', bg: 'linear-gradient(115deg,#4b2a1c,#8a5737 26%,#422319 55%,#9a6240 56%,#291711)' },
  travertine: { code: 'S / 01', name: 'Travertin', family: 'Pierre', finish: 'Adouci', texture: 'Pores ouverts, irrégularité douce', application: 'Plan / crédence', associations: 'Noyer · Laque · Inox', bg: 'linear-gradient(140deg,#d0c0a5,#9e8d72 36%,#e0d2bb 37%,#ab9c83 76%,#d5c8b3)' },
  quartz: { code: 'S / 02', name: 'Quartz clair', family: 'Minéral', finish: 'Satiné', texture: 'Surface homogène, veinage discret', application: 'Plan / retour', associations: 'Chêne · Inox · Graphite', bg: 'linear-gradient(125deg,#dddcd5,#f3f0e9 42%,#bbb9b0 43%,#ece9e0 64%,#c9c4b7)' },
  inox: { code: 'M / 01', name: 'Inox brossé', family: 'Métal', finish: 'Brossé', texture: 'Lignes fines, lumière mobile', application: 'Plan / poignée', associations: 'Noyer · Pierre · Laque', bg: 'repeating-linear-gradient(90deg,#7b8081 0,#b9bdba 2px,#707574 4px)' },
  lacquer: { code: 'L / 01', name: 'Laque graphite', family: 'Laque', finish: 'Ultra mat', texture: 'Surface calme, profondeur sourde', application: 'Façade / panneau', associations: 'Chêne · Quartz · Bleu', bg: 'linear-gradient(135deg,#262b2e,#5c6264 50%,#1b1e20)' }
};

const projects = [
  { id: 'P01', name: 'République', place: 'Paris', surface: '24 m²', year: '2026', category: ['Rénovation', 'Bois'], image: images.republique, material: 'Chêne naturel / Quartz', style: 'Contemporain' },
  { id: 'P02', name: 'Carthage', place: 'Tunis', surface: '31 m²', year: '2026', category: ['Sur-mesure', 'Pierre'], image: images.carthage, material: 'Noyer / Pierre', style: 'Minéral' },
  { id: 'P03', name: 'Le Lac', place: 'Tunis', surface: '18 m²', year: '2025', category: ['Compact', 'Couleur'], image: images.lac, material: 'Laque / Inox', style: 'Minimal' },
  { id: 'P04', name: 'Monceau', place: 'Paris', surface: '27 m²', year: '2025', category: ['Rénovation', 'Bois'], image: images.monceau, material: 'Chêne fumé', style: 'Architectural' }
];

const path = window.location.pathname;
const route = path.replace(/\/$/, '').split('/').pop() || 'index.html';
const isHome = route === 'index.html' || route === '';

function image(src, alt, className = '', loading = 'lazy') { return `<img src="${src}" alt="${alt}" class="${className}" loading="${loading}">`; }
function pageLink(href, label, code = '') { return `<a href="${href}" data-transition="true"><span>${code}</span> ${label}</a>`; }

function header() {
  const current = route.replace('.html', '');
  return `<header class="site-header" data-header>
    <div class="header-grid">
      <a class="brand" href="/index.html" data-transition="true" aria-label="Atelier 27, accueil">ATELIER <span>/</span> 27</a>
      <nav class="nav-links" aria-label="Navigation principale">
        ${navItems.map(([code, label, href]) => `<a href="${href}" data-transition="true" aria-current="${current === href.slice(1, -5) ? 'page' : 'false'}">${code} ${label}</a>`).join('')}
      </nav>
      <a class="header-action" href="/contact.html" data-transition="true">Démarrer un projet</a>
      <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="mobile-menu">Index +</button>
    </div>
    <div class="header-coordinates technical">X 48.8566 &nbsp; Y 2.3522</div>
  </header>
  <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
    <nav class="mobile-menu__links" aria-label="Navigation mobile">
      ${[['01','Accueil','/index.html'], ...navItems, ['06','Configurateur','/configurator.html'], ['07','Contact','/contact.html']].map(([code, label, href]) => `<a href="${href}" data-transition="true"><span class="technical">${code}</span><span>${label}</span><span>↗</span></a>`).join('')}
    </nav>
    <div class="technical">ATELIER / 27<br>CUISINES — ESPACES — MATIÈRES</div>
  </div>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="footer-top">
      <a class="footer-brand" href="/index.html" data-transition="true">ATELIER <span>/</span><br>27</a>
      <a class="footer-cta" href="/contact.html" data-transition="true">NOUVEAU<br>PROJET ↗</a>
    </div>
    <div class="footer-grid">
      <div><div class="technical">Navigation</div>${pageLink('/expertise.html','Expertise','01')}${pageLink('/projects.html','Projets','02')}${pageLink('/materials.html','Matières','03')}</div>
      <div><div class="technical">Contact</div><a href="tel:+33142702727">+33 1 42 70 27 27</a><a href="mailto:bonjour@atelier27.example">bonjour@atelier27.example</a></div>
      <div><div class="technical">Social</div><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">Pinterest ↗</a></div>
      <div><div class="technical">Légal</div><a href="/contact.html" data-transition="true">Mentions légales</a><a href="/contact.html" data-transition="true">Confidentialité</a></div>
    </div>
    <div class="footer-bottom technical"><span>DOCUMENT / WEB / 2026</span><span>RÉVISION / R.01</span><span>STATUS / LIVE</span></div>
  </footer>`;
}

function pageHero(code, eyebrow, title, copy = '') {
  const heroImage = ({
    'expertise.html': images.detail,
    'projects.html': images.carthage,
    'project-detail.html': projects.find(project => project.id === (new URLSearchParams(window.location.search).get('id') || 'P01'))?.image || images.republique,
    'configurator.html': images.lac,
    'materials.html': images.material,
    'process.html': images.monceau,
    'studio.html': images.studio,
    'contact.html': images.republique
  })[route] || images.republique;
  return `<section class="page-hero" data-code="${code}"><div class="page-hero__intro"><div class="page-hero__heading"><div class="eyebrow technical">${eyebrow}</div><h1 class="section-title">${title}</h1></div><figure class="page-hero__visual">${image(heroImage, `Intérieur de cuisine — ${eyebrow}`, '', 'eager')}<span class="technical page-hero__measure">D.180 / 2400 MM</span><span class="page-hero__crosshair" aria-hidden="true"></span></figure>${copy ? `<p class="page-hero__copy">${copy}</p>` : ''}</div></section>`;
}

function caseStudies() {
  return projects.map((p, i) => `<article class="case-study reveal" data-category="${p.category.join(' ')}">
    <a class="case-study__media" href="/project-detail.html?id=${p.id}" data-transition="true">${image(p.image, `Projet ${p.name}`)}</a>
    <div class="case-study__info"><div class="technical case-study__number">${p.id} / ${p.place} / ${p.surface}</div><h3>${p.name}</h3><div class="case-study__meta"><div><div class="technical">Intervention</div><p>Rénovation complète</p></div><div><div class="technical">Matière</div><p>${p.material}</p></div></div></div>
  </article>`).join('');
}

function materialsRack() {
  const keys = Object.keys(sampleData);
  return keys.map((key, i) => { const s = sampleData[key]; return `<button class="sample" type="button" data-sample="${key}" style="--sample:${s.bg}; transform:translateY(${(i % 3) * 7}px) rotate(${(i % 2 ? 1 : -1) * (i + 1) * .45}deg)"><span class="technical sample__code">${s.code}</span><strong class="sample__name">${s.name}</strong><span class="technical">Inspecter ↗</span></button>`; }).join('');
}

function inspectionModal() {
  return `<div class="inspection" data-inspection aria-hidden="true"><div class="inspection__panel" role="dialog" aria-modal="true" aria-labelledby="inspection-title"><button class="inspection__close" type="button" data-inspection-close>Fermer ×</button><div class="inspection__visual" data-inspection-visual></div><div class="inspection__content"><div class="technical" data-inspection-code>W / 01</div><h3 id="inspection-title" data-inspection-name>Chêne naturel</h3><div class="inspection__data"><div><span class="technical">Famille</span><span data-inspection-family>Bois</span></div><div><span class="technical">Finition</span><span data-inspection-finish>Brossé mat</span></div><div><span class="technical">Texture</span><span data-inspection-texture>Veinage régulier</span></div><div><span class="technical">Application</span><span data-inspection-application>Façade / colonne</span></div><div><span class="technical">Associations</span><span data-inspection-associations>Quartz · Inox · Sable</span></div></div></div></div></div>`;
}

function home() {
  return `<main>
    <section class="hero" data-hero>
      <div class="hero__blueprint" data-parallax="blueprint"><svg viewBox="0 0 1200 700" aria-label="Dessin technique d'une cuisine" role="img"><g class="draw-lines"><line x1="30" y1="110" x2="1160" y2="110"/><line x1="30" y1="585" x2="1160" y2="585"/><line x1="95" y1="100" x2="95" y2="610"/><line x1="1070" y1="100" x2="1070" y2="610"/><rect x="170" y="215" width="270" height="180"/><rect class="heavy" x="540" y="280" width="310" height="120"/><rect x="225" y="475" width="650" height="80"/><path d="M170 215h-78M170 395h-78M540 280h-54M850 400h62M225 555v55M875 555v55"/><path d="M132 215v180M495 280v120M895 280v120M210 475v80M890 475v80"/><line x1="132" y1="185" x2="895" y2="185"/><line x1="132" y1="175" x2="132" y2="195"/><line x1="895" y1="175" x2="895" y2="195"/><line x1="520" y1="250" x2="880" y2="250"/><line x1="520" y1="240" x2="520" y2="260"/><line x1="880" y1="240" x2="880" y2="260"/></g><g class="blueprint-labels"><text x="100" y="150">A / CUISINE</text><text x="550" y="445">B / ÎLOT</text><text x="915" y="320">C / RANGEMENT</text><text x="900" y="575">D / LUMIÈRE</text><text x="510" y="178">3200</text><text x="675" y="244">1800</text><text x="75" y="310" transform="rotate(-90 75 310)">2400</text><text x="500" y="410">900</text></g></svg></div>
      <div class="hero__image" data-hero-image>${image(images.republique, 'Cuisine sur mesure République', '', 'eager')}</div>
      <div class="hero__content"><div class="hero__kicker technical"><span>R.01 / ARCHITECTURE INTÉRIEURE</span><span>PARIS — TUNIS</span></div><h1 class="display"><span class="line"><span>L'ESPACE</span></span><span class="line"><span>PREND</span></span><span class="line"><span>FORME.</span></span></h1><div class="hero__bottom"><p class="hero__description">Nous concevons et rénovons des cuisines sur mesure avec la précision d'un projet d'architecture.</p><div class="hero__actions"><a class="button button--accent" href="#projets">Voir les projets ↗</a><a class="button" href="/contact.html" data-transition="true">Démarrer une étude</a></div></div></div>
    </section>
    <section class="project-index"><div class="project-index__head technical"><span>Index des projets</span><span>01 — 04</span></div>${projects.map(p => `<a class="project-row" href="/project-detail.html?id=${p.id}" data-transition="true" data-preview="${p.image}"><span class="technical">${p.id}</span><span>${p.name.toUpperCase()}</span><span class="technical">${p.surface}</span><span class="project-row__arrow">↗</span></a>`).join('')}</section>
    <section class="manifesto" id="manifeste"><div class="manifesto__pin container"><div class="manifesto__statement"><span class="eyebrow technical">Position / 01</span><p><span class="manifesto__line manifesto__first">NOUS NE<br>DÉCORONS PAS<br>DES CUISINES.</span><span class="manifesto__line manifesto__line--second">NOUS<br>ORGANISONS<br>DES ESPACES.</span></p></div><p class="manifesto__note">Circulation, lumière, matière, rangement et usage sont étudiés comme un ensemble.</p><span class="crosshair" style="right:12%;top:18%"></span></div></section>
    <section class="exploded section" id="anatomie"><div class="container exploded__layout"><div class="exploded__visual"><div class="exploded__scene" data-exploded-scene>${[1,2,3,4,5,6].map(i => `<div class="exploded__layer" data-layer="${i}"></div>`).join('')}</div><div class="exploded__labels">${['Structure','Réseaux','Mobilier','Plans','Éclairage','Matières'].map((x,i) => `<span class="exploded__label technical" data-label="${i+1}">${String(i+1).padStart(2,'0')} ${x}</span>`).join('')}</div></div><div class="exploded__copy"><div class="eyebrow technical">Séquence / P.27</div><h2 class="section-title">ANATOMIE<br>D'UN PROJET</h2><p style="max-width:25rem;color:#a9acad;line-height:1.5">Un projet de cuisine n'est jamais une façade isolée. Nous le décomposons, couche par couche, pour rendre visibles les décisions qui construisent l'espace.</p><div class="exploded__steps">${['Structure','Réseaux','Mobilier','Plans','Éclairage','Matières'].map((x,i) => `<div class="exploded__step" data-exploded-step="${i+1}"><span class="technical">${String(i+1).padStart(2,'0')}</span><span>${x}</span></div>`).join('')}</div></div></div></section>
    <section class="section container" id="projets"><div class="section-header"><div><div class="eyebrow technical">P.01 — P.04 / Sélection</div><h2 class="section-title">TRANSFORMATIONS<br>SÉLECTIONNÉES</h2></div><p>Des espaces ordinaires transformés par la précision du plan, la justesse de la matière et la qualité de l'exécution.</p></div><div class="projects-grid">${caseStudies()}</div></section>
    <section class="before-after section"><div class="container"><div class="section-header"><div><div class="eyebrow technical">État 01 → État 02</div><h2 class="section-title">LIRE<br>LA TRANSFORMATION</h2></div><p>Déplacez le repère de mesure pour parcourir le passage de l'existant au réalisé.</p></div><div class="compare" data-compare><div class="compare__image">${image(images.republique,'Configuration existante')}</div><div class="compare__image compare__after">${image(images.carthage,'Configuration réalisée')}</div><span class="compare__label compare__label--left">EXISTANT</span><span class="compare__label compare__label--right">RÉALISÉ</span><div class="compare__handle" data-compare-handle><button type="button" aria-label="Position du comparateur">50%</button></div><input class="compare__range" type="range" min="0" max="100" value="50" aria-label="Comparer l'existant et le réalisé"></div></div></section>
    <section class="principles section"><div class="container"><div class="section-header"><div><div class="eyebrow technical">04 / Paramètres non négociables</div><h2 class="section-title">CE QUI TIENT<br>LE PROJET.</h2></div><p>Les choix qui rendent une cuisine évidente à vivre, avant même de devenir belle à regarder.</p></div><div class="principles-grid">${[['01','Circulation','Chaque déplacement doit sembler évident.'],['02','Lumière','Naturelle le jour. Précise le soir.'],['03','Rangement','Chaque objet doit avoir une place.'],['04','Matière','Choisie pour être utilisée, pas seulement regardée.']].map(([n,t,d]) => `<button class="principle" type="button"><span class="technical">${n}</span><h3>${t}</h3><p>${d}</p></button>`).join('')}</div></div></section>
    <section class="section container"><div class="section-header"><div><div class="eyebrow technical">M.01 — M.06 / Échantillons</div><h2 class="section-title">BIBLIOTHÈQUE<br>MATIÈRES</h2></div><p>Des matières choisies pour leur comportement dans l'espace autant que pour leur présence.</p></div><div class="materials-rack">${materialsRack()}</div></section>${inspectionModal()}
    <section class="process-preview section"><div class="container"><div class="section-header"><div><div class="eyebrow technical">Protocole / 00 — 06</div><h2 class="section-title">DU RELEVÉ<br>À LA LIVRAISON</h2></div><p>Un seul fil de projet, des premières mesures aux derniers réglages.</p></div><div class="process-track" data-process-track>${[['00','Brief'],['01','Relevé'],['02','Conception'],['03','Validation'],['04','Chantier'],['05','Installation'],['06','Livraison']].map(([n,t],i) => `<div class="process-step ${i===0?'is-active':''}" data-process-step="${i}"><span class="technical">${n}</span><strong>${t}</strong><span>phase active</span></div>`).join('')}</div><div class="process-preview__image" data-process-image>${image(images.detail,'Détail de menuiserie')}</div></div></section>
    <section class="section container"><div class="client-note"><div><div class="eyebrow technical">Note client / P.17</div></div><div><blockquote>“Tout était pensé. Même les détails auxquels nous n'avions jamais pensé.”</blockquote><cite>Sarah & Yassine — Projet Carthage</cite></div></div></section>
    <section class="final-cta"><div class="final-cta__plan"><svg viewBox="0 0 900 500"><rect x="60" y="80" width="780" height="330"/><rect x="130" y="130" width="250" height="120"/><rect x="450" y="200" width="290" height="120"/><line x1="60" y1="50" x2="840" y2="50"/><line x1="100" y1="440" x2="800" y2="440"/></svg></div><div class="final-cta__content"><div class="eyebrow technical" style="justify-content:center">Nouveau / Projet</div><h2>VOTRE<br>PROJET<br>COMMENCE<br>ICI.</h2><a class="button button--accent" href="/contact.html" data-transition="true">Lancer l'étude ↗</a><p class="technical" style="margin-top:1.4rem">Décrivez-nous votre espace. Nous construisons la suite avec vous.</p></div></section>
  </main>`;
}

function expertise() {
  const disciplines = [['01','Conception','Un relevé précis ouvre le projet : implantation, ergonomie, circulation et volumes sont mis à plat avant de dessiner.', ['Relevé','Implantation','Ergonomie','Circulation','Volumes']], ['02','Menuiserie','Façades, rangements, îlots et colonnes sont conçus comme un seul système de mobilier sur mesure.', ['Façades','Rangements','Îlots','Colonnes','Intégration']], ['03','Technique','Les réseaux trouvent leur place dans le dessin. Électricité, plomberie, ventilation et éclairage restent lisibles.', ['Électricité','Plomberie','Ventilation','Éclairage']], ['04','Matières','Bois, pierre, métal, verre et laque composent une palette cohérente, adaptée à l’usage réel.', ['Pierre','Bois','Métal','Verre','Laque']], ['05','Exécution','Coordination, installation, réglages et contrôle qualité : la dernière couche est aussi dessinée que les premières.', ['Coordination','Installation','Réglages','Contrôle qualité']]];
  return `<main>${pageHero('/01','Expertise / 01','UNE ÉQUIPE.<br>TOUTES LES<br>COUCHES DU<br>PROJET.','De l’architecture intérieure à la menuiserie sur mesure, nous réunissons les décisions qui font tenir un projet.')}${[...Array(2)].map((_, pass) => pass === 0 ? `<section class="section container"><div class="split-section"><div class="sticky-visual"><div class="sticky-visual__canvas"><div class="diagram-room"><span></span></div><span class="technical" style="position:absolute;left:1rem;top:1rem">DRAWING / D.180</span><span class="technical" style="position:absolute;right:1rem;bottom:1rem;color:var(--accent)">24 m²</span></div></div><div class="discipline-list">${disciplines.map(([n,t,d,k]) => `<article class="discipline reveal"><div class="discipline__head"><span class="technical" style="color:var(--accent)">${n}</span><h2>${t}</h2></div><p>${d}</p><div class="keyword-list">${k.map(x => `<span>${x}</span>`).join('')}</div></article>`).join('')}</div></div></section>` : '') .join('')}<section class="section process-preview"><div class="container"><div class="section-header"><div><div class="eyebrow technical">Méthode / continuité</div><h2 class="section-title">UN SEUL<br>PROJET.</h2></div><p>Le dessin ne s’arrête pas au rendu. Il reste présent dans chaque échange, chaque coupe et chaque réglage.</p></div><div class="client-note" style="border-color:rgba(250,250,247,.2)"><div><span class="technical">P.27 / Coordination</span></div><div><blockquote>“La précision est une forme de considération pour l'espace et pour ceux qui vont l'habiter.”</blockquote></div></div></div></section></main>`;
}

function projectsPage() {
  return `<main>${pageHero('/02','Archives / 2025 — 2026','ARCHIVES<br>DE PROJETS','Un registre de rénovations cuisine et de créations sur mesure, classées par espace, usage et matière.') }<section class="section container"><div class="filter-nav" data-filters><button class="is-active" data-filter="Tous">Tous</button><button data-filter="Rénovation">Rénovation</button><button data-filter="Sur-mesure">Sur-mesure</button><button data-filter="Bois">Bois</button><button data-filter="Pierre">Pierre</button><button data-filter="Couleur">Couleur</button><button data-filter="Compact">Compact</button></div><div class="register"><div class="register__head technical"><span>ID</span><span>Projet</span><span>Lieu</span><span>Surface</span><span>Année</span></div><div data-register-rows>${projects.map(p => `<a class="register__row" data-project-row data-category="${p.category.join(' ')}" href="/project-detail.html?id=${p.id}" data-transition="true"><span class="technical">${p.id}</span><span>${p.name}</span><span class="technical">${p.place}</span><span class="technical">${p.surface}</span><span class="technical">${p.year}</span></a>`).join('')}</div></div><div class="gallery-grid">${projects.slice(0,3).map(p => `<figure>${image(p.image, `Projet ${p.name}`)}<figcaption>${p.id} / ${p.name.toUpperCase()}</figcaption></figure>`).join('')}</div></section></main>`;
}

function detailPage() {
  const id = new URLSearchParams(window.location.search).get('id') || 'P01';
  const p = projects.find(x => x.id === id) || projects[0];
  return `<main>${pageHero(`DOSSIER / ${p.id}`,'Project dossier / 2026',`${p.name.toUpperCase()}<br>EN DÉTAIL`,`Une rénovation complète pensée autour de ${p.material.toLowerCase()}, de la circulation et de la lumière.`)}<section class="section container"><div class="dossier-grid"><div><div class="technical">Dossier technique / ${p.id}</div><div class="dossier-meta"><div><span class="technical">Surface</span><p>${p.surface}</p></div><div><span class="technical">Durée</span><p>7 semaines</p></div><div><span class="technical">Intervention</span><p>Rénovation complète</p></div><div><span class="technical">Style</span><p>${p.style}</p></div><div><span class="technical">Matière</span><p>${p.material}</p></div><div><span class="technical">Lieu</span><p>${p.place}</p></div></div><a class="button button--accent" href="/contact.html" data-transition="true" style="margin-top:3rem">Parler d'un projet ↗</a></div><div class="dossier-image">${image(p.image, `Vue principale du projet ${p.name}`)}</div></div><div class="detail-sequence"><figure><div class="technical">01 / Plan de travail</div>${image(images.detail,'Détail de plan de travail')}</figure><figure><div class="technical">02 / Jonction de matière</div>${image(images.material,'Détail de matière')}</figure></div></section></main>`;
}

function configurator() {
  return `<main class="configurator">${pageHero('/03','Concept configurator / P.03','COMPOSEZ<br>UNE DIRECTION','Explorez une première combinaison de formes et de matières. Aucun prix, aucune promesse : seulement une direction à partager.') }<section class="section container"><div class="configurator__grid"><div class="configurator__stage" data-config-stage><div class="configurator__island"></div><div class="configurator__label" data-config-label>NOYER / QUARTZ / CONTRASTÉ</div></div><div class="configurator__controls"><div class="technical" style="color:#a6aaad">Configuration / 01</div>${[['facade','01 / Façade',[['oak','Chêne'],['walnut','Noyer'],['white','Blanc'],['graphite','Graphite']]],['plan','02 / Plan',[['quartz','Quartz'],['stone','Pierre'],['steel','Inox']]],['accent','03 / Accent',[['orange','Orange'],['blue','Bleu'],['sage','Sauge'],['neutral','Neutre']]],['ambiance','04 / Ambiance',[['light','Clair'],['contrast','Contrasté'],['natural','Naturel']]]].map(([key,title,opts]) => `<div class="config-group"><div class="config-group__head"><span>${title}</span><span data-config-value="${key}">${opts[1]?.[1] || opts[0][1]}</span></div><div class="config-options">${opts.map(([v,l],i) => `<button type="button" data-config-key="${key}" data-config-value-option="${v}" class="${(key==='facade'&&v==='walnut')||(key==='plan'&&v==='quartz')||(key==='accent'&&v==='orange')||(key==='ambiance'&&v==='contrast')?'is-active':''}">${l}</button>`).join('')}</div></div>`).join('')}<div class="config-summary"><div class="technical">Votre direction</div><h3>UNE PALETTE<br>QUI TIENT.</h3><dl><div><dt class="technical">Façade</dt><dd data-summary="facade">Noyer</dd></div><div><dt class="technical">Plan</dt><dd data-summary="plan">Quartz</dd></div><div><dt class="technical">Accent</dt><dd data-summary="accent">Orange</dd></div><div><dt class="technical">Ambiance</dt><dd data-summary="ambiance">Contrasté</dd></div></dl><a class="button button--accent" data-config-cta href="/contact.html" data-transition="true" style="margin-top:1.5rem">Parler de cette direction ↗</a></div></div></div></section></main>`;
}

function materialsPage() {
  const groups = [['Bois',['oak','walnut']],['Pierre',['travertine','quartz']],['Métal',['inox']],['Laque',['lacquer']]];
  return `<main>${pageHero('/04','Matériauthèque / 2026','MATÉRIAU<br>THÈQUE','Une bibliothèque de matières à regarder, toucher mentalement et associer avant de décider.') }<section class="section container"><div class="material-library"><div class="material-filter">${['Tous','Bois','Pierre','Métal','Laque'].map((x,i)=>`<button type="button" class="${i===0?'is-active':''}" data-material-filter="${x}">${x}<span>↗</span></button>`).join('')}</div><div class="material-wall" data-material-wall>${Object.keys(sampleData).map(key => { const s=sampleData[key]; return `<button class="sample" type="button" data-sample="${key}" data-material-family="${s.family}" style="--sample:${s.bg}"><span class="technical sample__code">${s.code}</span><strong class="sample__name">${s.name}</strong><span class="technical">Inspecter ↗</span></button>`; }).join('')}</div></div></section>${inspectionModal()}</main>`;
}

function processPage() {
  const steps = [['00','Contact','Nous ouvrons le dossier et cadrons le premier échange.'],['01','Brief','Le projet trouve ses priorités : usages, envies, contraintes.'],['02','Relevé','Chaque mesure devient une donnée de conception fiable.'],['03','Conception','Plans, volumes, matières et lumière prennent position.'],['04','Validation','Le projet se fixe dans des détails compréhensibles.'],['05','Chantier','Les équipes coordonnent la transformation sur place.'],['06','Livraison','Réglages, contrôle et transmission des clés.']];
  return `<main>${pageHero('/05','Protocole / 00 — 06','PROTOCOLE<br>DE PROJET','Un processus lisible, de la première question jusqu’au dernier réglage.') }<section class="section container"><div class="protocol"><div class="protocol__rail"><div><span class="technical">Phase active</span><strong data-protocol-number>00</strong></div><p data-protocol-rail-copy>Le projet commence par une question bien posée.</p></div><div class="protocol__diagram"><svg viewBox="0 0 500 500"><rect x="70" y="70" width="360" height="360"/><rect class="active" x="135" y="120" width="230" height="95"/><rect x="150" y="270" width="200" height="70"/><line x1="70" y1="50" x2="430" y2="50"/><line x1="70" y1="450" x2="430" y2="450"/><circle cx="250" cy="250" r="12"/></svg><span class="technical" style="position:absolute;left:1rem;bottom:1rem">ROUTING / D.180</span></div><div class="protocol__steps">${steps.map(([n,t,d])=>`<article class="protocol__step" data-protocol-step="${n}"><span class="technical">${n}</span><h2>${t}</h2><p>${d}</p></article>`).join('')}</div></div></section></main>`;
}

function studio() {
  return `<main>${pageHero('/06','Atelier / 27','ATELIER<br>/ 27','Nous travaillons à l’intersection du dessin, de la matière et de l’usage.') }<section class="section container"><div class="studio-intro"><div class="studio-intro__image">${image(images.studio,'Atelier de conception et matière')}</div><div><p class="studio-intro__statement">NOUS TRAVAILLONS À L'INTERSECTION DU DESSIN, DE LA MATIÈRE ET DE L'USAGE.</p><p style="max-width:27rem;line-height:1.5;margin-top:2rem">L’atelier réunit les regards qui rendent un projet juste : concevoir, dessiner, coordonner, installer et transmettre.</p></div></div><div class="credits">${[['Direction','Nina Morel'],['Conception','Samir Benali'],['Chantier','Élodie Martin'],['Menuiserie','Atelier Nord']].map(([a,b],i)=>`<div class="credit"><span class="technical">${String(i+1).padStart(2,'0')} / ${a}</span><strong>${b}</strong></div>`).join('')}</div><div class="stats">${[['10+','Années'],['150+','Projets'],['98%','Satisfaction']].map(([n,l])=>`<div class="stat"><strong data-counter="${n.replace('+','').replace('%','')}">${n}</strong><span class="technical">${l}</span></div>`).join('')}</div><div class="studio-gallery"><figure>${image(images.detail,'Détail de cuisine et menuiserie')}</figure><figure>${image(images.carthage,'Matière dans un intérieur')}</figure></div></section></main>`;
}

function contact() {
  return `<main>${pageHero('/07','New / Project','OUVRIR<br>UN NOUVEAU<br>DOSSIER.','Décrivez l’espace, les usages et le moment où vous aimeriez le voir changer.') }<section class="section container"><div class="contact-layout"><aside class="contact-direct"><div class="technical">Actions directes</div><a href="tel:+33142702727">Appeler<span>+33 1 42 70 27 27</span></a><a href="mailto:bonjour@atelier27.example">Email<span>bonjour@atelier27.example</span></a><a href="https://wa.me/33142702727" target="_blank" rel="noreferrer">WhatsApp<span>Ouvrir la conversation ↗</span></a></aside><div><form class="project-form" data-contact-form novalidate><div class="form-field"><span class="form-number">01</span><label for="name">Nom</label><input id="name" name="name" required autocomplete="family-name" /></div><div class="form-field"><span class="form-number">02</span><label for="firstName">Prénom</label><input id="firstName" name="firstName" required autocomplete="given-name" /></div><div class="form-field"><span class="form-number">03</span><label for="email">Email</label><input id="email" name="email" type="email" required autocomplete="email" /></div><div class="form-field"><span class="form-number">04</span><label for="phone">Téléphone</label><input id="phone" name="phone" type="tel" autocomplete="tel" /></div><div class="form-field"><span class="form-number">05</span><label for="location">Localisation du projet</label><input id="location" name="location" required /></div><div class="form-field"><span class="form-number">06</span><label for="type">Type de projet</label><select id="type" name="type" required><option value="">Sélectionner</option><option>Rénovation complète</option><option>Cuisine sur mesure</option><option>Transformation partielle</option><option>Nouvelle cuisine</option><option>Autre</option></select></div><div class="form-field"><span class="form-number">07</span><label for="surface">Surface approximative</label><input id="surface" name="surface" placeholder="ex. 24 m²" /></div><div class="form-field"><span class="form-number">08</span><label for="budget">Budget</label><select id="budget" name="budget"><option value="">Sélectionner</option><option>&lt; 10 000 €</option><option>10 000 — 20 000 €</option><option>20 000 — 40 000 €</option><option>40 000 €+</option></select></div><div class="form-field"><span class="form-number">09</span><label for="start">Démarrage souhaité</label><input id="start" name="start" placeholder="ex. automne 2026" /></div><div class="form-field"><span class="form-number">10</span><label for="message">Décrivez votre projet</label><textarea id="message" name="message" required></textarea></div><label class="form-check"><input type="checkbox" name="consent" required /> <span>J’accepte d’être contacté à propos de cette demande.</span></label><button class="button button--accent" type="submit">Créer le dossier ↗</button></form><div class="form-success" data-form-success><div class="technical">Dossier créé / UI confirmation</div><h2>DOSSIER<br>CRÉÉ.</h2><p>REF: NEW-027</p><p>Votre demande a été préparée avec succès.</p><a class="button" href="/index.html" data-transition="true">Retour à l'accueil</a></div></div></div></section></main>`;
}

function renderPage() {
  const views = { 'index.html': home, 'expertise.html': expertise, 'projects.html': projectsPage, 'project-detail.html': detailPage, 'configurator.html': configurator, 'materials.html': materialsPage, 'process.html': processPage, 'studio.html': studio, 'contact.html': contact };
  const view = views[route] || home;
  const pageTitles = { 'index.html': 'Cuisines, espaces, matières', 'expertise.html': 'Expertise', 'projects.html': 'Projets', 'project-detail.html': 'Dossier projet', 'configurator.html': 'Configurateur concept', 'materials.html': 'Matériauthèque', 'process.html': 'Méthode', 'studio.html': 'Atelier', 'contact.html': 'Contact' };
  document.title = `Atelier / 27 — ${pageTitles[route] || 'Cuisines sur mesure'}`;
  document.querySelector('#app').innerHTML = `<div class="page-shell">${header()}${view()}${footer()}<div class="cursor" data-cursor><span class="cursor__label"></span></div><div class="page-transition" data-page-transition><span></span></div></div>`;
}

function setupNavigation() {
  const headerEl = document.querySelector('[data-header]');
  const menu = document.querySelector('[data-menu-toggle]');
  const mobile = document.querySelector('#mobile-menu');
  let menuOpen = false;
  window.addEventListener('scroll', () => headerEl?.classList.toggle('is-scrolled', window.scrollY > 40), { passive: true });
  menu?.addEventListener('click', () => {
    menuOpen = !menuOpen;
    menu.setAttribute('aria-expanded', String(menuOpen));
    mobile.setAttribute('aria-hidden', String(!menuOpen));
    document.body.classList.toggle('menu-open', menuOpen);
    gsap.to(mobile, { autoAlpha: menuOpen ? 1 : 0, clipPath: menuOpen ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)', duration: .55, ease: 'power3.inOut', onStart: () => { mobile.style.visibility = 'visible'; } });
    if (menuOpen) gsap.fromTo('.mobile-menu__links a', { y: 28, opacity: 0 }, { y: 0, opacity: 1, stagger: .045, duration: .5, delay: .12, ease: 'power3.out' });
  });
  document.querySelectorAll('.mobile-menu a').forEach(a => a.addEventListener('click', () => { if (menuOpen) menu.click(); }));
  document.querySelectorAll('[data-transition="true"]').forEach(a => a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('tel') || href.startsWith('mailto')) return;
    e.preventDefault();
    const transition = document.querySelector('[data-page-transition]');
    const label = transition.querySelector('span');
    const next = href.split('/').pop().split('?')[0];
    label.textContent = `/${next === 'index.html' ? '01 ACCUEIL' : next.replace('.html','').toUpperCase()}`;
    gsap.to(transition, { y: 0, duration: .45, ease: 'power3.inOut', onComplete: () => { window.location.href = href; } });
  }));
}

function setupPreloader() {
  const seen = sessionStorage.getItem('atelier27-seen');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (seen || reduced || !isHome) return;
  const el = document.createElement('div');
  el.className = 'preloader';
  el.innerHTML = `<div class="preloader__inner"><div class="preloader__brand"><strong>ATELIER <span style="color:var(--accent)">/</span> 27</strong><span class="technical">Initialisation du projet</span></div><div class="preloader__track"><div class="preloader__bar"></div></div><div class="preloader__meta technical"><span>DRAWING → SPACE</span><span data-loader-value>00</span></div></div>`;
  document.body.appendChild(el);
  const value = el.querySelector('[data-loader-value]');
  const bar = el.querySelector('.preloader__bar');
  const obj = { v: 0 };
  gsap.to(obj, { v: 100, duration: .85, ease: 'power2.out', onUpdate: () => { value.textContent = String(Math.round(obj.v)).padStart(2,'0'); bar.style.width = `${obj.v}%`; }, onComplete: () => { sessionStorage.setItem('atelier27-seen','1'); gsap.to(el, { autoAlpha: 0, duration: .35, delay: .12, onComplete: () => el.remove() }); } });
}

function setupHero() {
  if (!document.querySelector('[data-hero]')) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.from('.hero__blueprint', { opacity: 0, duration: .6 }).from('.hero__blueprint .draw-lines', { opacity: 0, scale: .96, transformOrigin: 'center', duration: .7 }, '-=.3').from('.hero h1 .line span', { yPercent: 110, stagger: .08, duration: .8 }, '-=.25').from('.hero__image', { clipPath: 'inset(50% 50% 50% 50%)', duration: 1.15, ease: 'expo.out' }, '-=.5').from('.hero__description, .hero__actions', { y: 18, opacity: 0, stagger: .1, duration: .5 }, '-=.55');
  if (!reduce) {
    const blueprint = document.querySelector('[data-parallax="blueprint"]');
    const imageEl = document.querySelector('[data-hero-image]');
    const moveX = gsap.quickTo(blueprint, 'x', { duration: .5, ease: 'power3' });
    const moveY = gsap.quickTo(blueprint, 'y', { duration: .5, ease: 'power3' });
    const imageX = gsap.quickTo(imageEl, 'x', { duration: .7, ease: 'power3' });
    const imageY = gsap.quickTo(imageEl, 'y', { duration: .7, ease: 'power3' });
    document.querySelector('[data-hero]').addEventListener('pointermove', e => { const x = (e.clientX / innerWidth - .5); const y = (e.clientY / innerHeight - .5); moveX(x*8); moveY(y*5); imageX(x*-10); imageY(y*-6); });
  }
}

function setupScrollScenes() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible')); return; }
  gsap.utils.toArray('.reveal').forEach(el => gsap.fromTo(el, { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 84%', once: true } }));
  const manifesto = document.querySelector('.manifesto');
  if (manifesto) { gsap.timeline({ scrollTrigger: { trigger: manifesto, start: 'top top', end: 'bottom bottom', scrub: 1 } }).to('.manifesto__first', { yPercent: -100, opacity: 0, ease: 'none' }).fromTo('.manifesto__line--second', { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, ease: 'none' }, '<'); }
  const exploded = document.querySelector('.exploded');
  if (exploded) { const layers = gsap.utils.toArray('[data-layer]'); const labels = gsap.utils.toArray('[data-label]'); const steps = gsap.utils.toArray('[data-exploded-step]'); const tl = gsap.timeline({ scrollTrigger: { trigger: exploded, start: 'top top', end: '+=2100', scrub: 1, pin: true, anticipatePin: 1 } }); tl.to(layers, { y: (i) => (i - 2.5) * 30, x: (i) => (i % 2 ? 16 : -16), rotate: (i) => (i - 2.5) * .7, duration: 1.4, stagger: .03 }, 0).to(labels, { opacity: 1, duration: .5, stagger: .12 }, .7).to(steps, { color: '#ffffff', paddingLeft: '.7rem', stagger: { each: .35, onStart: function(){ this.targets().forEach((el, idx) => { if (idx === this._targets[0]?.dataset?.explodedStep - 1) el.classList.add('is-active'); }); } }, duration: .2 }, 1.2).to(layers, { y: 0, x: 0, rotate: 0, duration: 1.2 }, 2.5); }
  const track = document.querySelector('[data-process-track]');
  if (track) { ScrollTrigger.create({ trigger: track, start: 'top 75%', end: 'bottom 45%', scrub: true, onUpdate: self => { const idx = Math.min(6, Math.floor(self.progress * 7)); track.style.setProperty('--progress', `${Math.max(15, self.progress * 100)}%`); document.querySelectorAll('[data-process-step]').forEach((el, i) => el.classList.toggle('is-active', i <= idx)); const imgs=[images.detail,images.republique,images.carthage,images.lac,images.monceau,images.material,images.studio]; const img=track.parentElement.querySelector('[data-process-image] img'); if (img && img.dataset.step !== String(idx)) { img.dataset.step=idx; img.src=imgs[idx]; } } }); }
  const protocol = document.querySelector('.protocol');
  if (protocol) { const steps = gsap.utils.toArray('[data-protocol-step]'); steps.forEach((step, i) => ScrollTrigger.create({ trigger: step, start: 'top 45%', end: 'bottom 45%', onEnter: () => updateProtocol(i, step), onEnterBack: () => updateProtocol(i, step) })); }
}

function updateProtocol(i, step) { const n = document.querySelector('[data-protocol-number]'); const copy = document.querySelector('[data-protocol-rail-copy]'); if (n) n.textContent = step.dataset.protocolStep; if (copy) copy.textContent = step.querySelector('p')?.textContent || ''; document.querySelectorAll('[data-protocol-step]').forEach((s, idx) => s.style.opacity = idx === i ? '1' : '.38'); }

function setupCompare() { const range = document.querySelector('.compare__range'); const after = document.querySelector('.compare__after'); const handle = document.querySelector('.compare__handle'); if (!range) return; const update = () => { const v = Number(range.value); after.style.clipPath=`inset(0 ${100-v}% 0 0)`; handle.style.left=`${v}%`; handle.querySelector('button').textContent=`${v}%`; }; range.addEventListener('input', update); update(); }

function setupMaterials() {
  document.querySelectorAll('[data-sample]').forEach(button => button.addEventListener('click', () => { const data = sampleData[button.dataset.sample]; const modal=document.querySelector('[data-inspection]'); if(!data||!modal)return; modal.querySelector('[data-inspection-visual]').style.background=data.bg; modal.querySelector('[data-inspection-code]').textContent=data.code; modal.querySelector('[data-inspection-name]').textContent=data.name; modal.querySelector('[data-inspection-family]').textContent=data.family; modal.querySelector('[data-inspection-finish]').textContent=data.finish; modal.querySelector('[data-inspection-texture]').textContent=data.texture; modal.querySelector('[data-inspection-application]').textContent=data.application; modal.querySelector('[data-inspection-associations]').textContent=data.associations; modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false'); modal.querySelector('[data-inspection-close]').focus(); }));
  document.querySelector('[data-inspection-close]')?.addEventListener('click', closeInspection);
  document.querySelector('[data-inspection]')?.addEventListener('click', e => { if(e.target.matches('[data-inspection]')) closeInspection(); });
  document.querySelectorAll('[data-material-filter]').forEach(btn => btn.addEventListener('click', () => { document.querySelectorAll('[data-material-filter]').forEach(b=>b.classList.toggle('is-active',b===btn)); document.querySelectorAll('[data-material-family]').forEach(item => { const show=btn.dataset.materialFilter==='Tous'||item.dataset.materialFamily===btn.dataset.materialFilter; item.style.display=show?'flex':'none'; }); }));
}
function closeInspection(){ const modal=document.querySelector('[data-inspection]'); if(modal){modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');} }

function setupPrinciples() { document.querySelectorAll('.principle').forEach(el => el.addEventListener('click', () => { document.querySelectorAll('.principle').forEach(x=>x.classList.remove('is-open')); el.classList.add('is-open'); })); }

function setupFilters() { const filters=document.querySelector('[data-filters]'); if(!filters)return; filters.addEventListener('click', e => { if(!e.target.matches('button'))return; const state=Flip.getState('[data-project-row]'); filters.querySelectorAll('button').forEach(b=>b.classList.toggle('is-active',b===e.target)); const filter=e.target.dataset.filter; document.querySelectorAll('[data-project-row]').forEach(row=>{const show=filter==='Tous'||row.dataset.category.includes(filter);row.style.display=show?'grid':'none';}); Flip.from(state,{duration:.55,ease:'power2.inOut',absolute:true,stagger:.04}); }); }

function setupConfigurator() { const stage=document.querySelector('[data-config-stage]'); if(!stage)return; const state={facade:'walnut',plan:'quartz',accent:'orange',ambiance:'contrast'}; const labels={facade:{oak:'Chêne',walnut:'Noyer',white:'Blanc',graphite:'Graphite'},plan:{quartz:'Quartz',stone:'Pierre',steel:'Inox'},accent:{orange:'Orange',blue:'Bleu',sage:'Sauge',neutral:'Neutre'},ambiance:{light:'Clair',contrast:'Contrasté',natural:'Naturel'}}; const styles={walnut:'#64402d',oak:'#a47a52',white:'#dddcd5',graphite:'#303436',quartz:'#ddd9cf',stone:'#9e8d72',steel:'#878c8b'}; document.querySelectorAll('[data-config-key]').forEach(btn=>btn.addEventListener('click',()=>{const key=btn.dataset.configKey;state[key]=btn.dataset.configValueOption;document.querySelectorAll(`[data-config-key="${key}"]`).forEach(b=>b.classList.toggle('is-active',b===btn));document.querySelector(`[data-config-value="${key}"]`).textContent=labels[key][state[key]];document.querySelector(`[data-summary="${key}"]`).textContent=labels[key][state[key]]; if(key==='facade')stage.style.setProperty('--config-cabinet',styles[state[key]]);if(key==='plan')stage.style.setProperty('--config-stone',styles[state[key]]);if(key==='accent')stage.style.setProperty('--accent',state[key]==='blue'?'#3157e3':state[key]==='sage'?'#9baa84':state[key]==='neutral'?'#dad7cc':'#ff5a2f');document.querySelector('[data-config-label]').textContent=Object.values(state).map((v,i)=>labels[Object.keys(state)[i]][v]).join(' / ').toUpperCase();const params=new URLSearchParams(state);document.querySelector('[data-config-cta]').href=`/contact.html?direction=${params.toString()}`;})); }

function setupForm() { const form=document.querySelector('[data-contact-form]'); if(!form)return; form.addEventListener('submit', e=>{e.preventDefault(); let valid=true; form.querySelectorAll('[required]').forEach(field=>{ if((field.type==='checkbox'&&!field.checked)||!field.value.trim()){valid=false;field.setAttribute('aria-invalid','true');field.closest('.form-field')?.insertAdjacentHTML('beforeend','<span class="form-error">Champ requis</span>');} else {field.removeAttribute('aria-invalid');field.closest('.form-field')?.querySelector('.form-error')?.remove();} }); if(!valid){form.querySelector('[aria-invalid]')?.focus();return;} gsap.to(form,{opacity:0,y:-15,duration:.35,onComplete:()=>{form.style.display='none';const s=document.querySelector('[data-form-success]');s.classList.add('is-visible');gsap.from(s,{opacity:0,y:20,duration:.6});}}); }); form.querySelectorAll('input,textarea,select').forEach(field=>field.addEventListener('input',()=>{field.closest('.form-field')?.querySelector('.form-error')?.remove();field.removeAttribute('aria-invalid');})); }

function setupCursor() { const fine=window.matchMedia('(pointer:fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches; const cursor=document.querySelector('[data-cursor]'); if(!fine||!cursor)return; let x=0,y=0; const tx=gsap.quickTo(cursor,'x',{duration:.35,ease:'power3'}),ty=gsap.quickTo(cursor,'y',{duration:.35,ease:'power3'}); window.addEventListener('pointermove',e=>{x=e.clientX;y=e.clientY;tx(x);ty(y);cursor.classList.add('is-visible');}); document.querySelectorAll('a,button').forEach(el=>el.addEventListener('mouseenter',()=>{const label=el.closest('.sample')?'Inspecter':el.closest('.compare')?'Glisser':el.closest('.configurator')?'Choisir':el.matches('.case-study__media,.project-row')?'Ouvrir':'';cursor.querySelector('.cursor__label').textContent=label;})); }

renderPage();
setupPreloader();
setupNavigation();
setupHero();
setupScrollScenes();
setupCompare();
setupMaterials();
setupPrinciples();
setupFilters();
setupConfigurator();
setupForm();
setupCursor();
window.addEventListener('load', () => ScrollTrigger.refresh());
