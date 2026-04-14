/* ═══════════════════════════════════════════════════════════
   LuxeEstate — main.js
   ═══════════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════════════════════
   i18n — Translations
══════════════════════════════════════════════════════════ */
const i18n = {
  en: {
    nav_properties:"Properties", nav_why:"Why Us", nav_reviews:"Reviews", nav_cta:"Free Consultation",
    hero_eyebrow:"Premium Real Estate Advisory",
    hero_title:"Find the Home<br><em>You Deserve</em>",
    hero_sub:"We connect you with exclusive properties that match your lifestyle, investment goals, and vision of the future.",
    hero_cta1:"Book Free Consultation", hero_cta2:"Browse Properties", hero_scroll:"Scroll",
    trust_homes:"Homes Sold", trust_clients:"Happy Clients", trust_rating:"Average Rating", trust_exp:"15 Years of Experience",
    prop_label:"Featured Listings", prop_title:"Exclusive Properties",
    prop_sub:"Hand-picked properties for discerning buyers. Each listing is verified, inspected and ready to visit.",
    tag_sale:"For Sale", tag_invest:"Investment", tag_new:"New",
    card1_title:"Modern Villa with Pool", card1_loc:"Miraflores, Lima",
    card2_title:"Luxury Penthouse",       card2_loc:"San Isidro, Lima",
    card3_title:"Contemporary Apartment", card3_loc:"Barranco, Lima",
    beds:"bd", baths:"ba",
    ben_label:"Our Advantages", ben_title:"Why Choose LuxeEstate?",
    ben_sub:"We go beyond listings. We guide you through every step of the process.",
    ben1_t:"Verified Properties", ben1_d:"Every property goes through a thorough legal and structural verification process before being listed.",
    ben2_t:"Market Expertise",    ben2_d:"15 years of data and insight so you can make decisions backed by real market knowledge.",
    ben3_t:"End-to-End Support",  ben3_d:"From your first inquiry to handing you the keys — we're by your side the entire way.",
    ben4_t:"Fast Response",       ben4_d:"Our advisors respond in under 30 minutes. Your time is valuable and we respect it.",
    test_label:"Client Stories", test_title:"What Our Clients Say",
    test_sub:"Real experiences from people who trusted us with one of life's biggest decisions.",
    testi1_text:'"The team at LuxeEstate made buying our first home completely stress-free. They guided us at every step and found us a property above our expectations."',
    testi1_role:"First-time Buyer · Lima",
    testi2_text:'"I sold my apartment in just 3 weeks at above asking price. Their marketing and negotiation skills are truly exceptional."',
    testi2_role:"Seller · San Isidro",
    testi3_text:'"As an investor, I needed someone who understood ROI, not just properties. LuxeEstate delivered insights I couldn\'t find anywhere else."',
    testi3_role:"Investor · Miraflores",
    cont_label:"Get in Touch",
    cont_title:"Let's Find<br><em style='font-style:italic;color:var(--gold);'>Your Next Home</em>",
    cont_sub:"Whether you're buying, selling, or investing — fill in the form and one of our advisors will contact you within 30 minutes.",
    form_title:"Free Consultation", form_sub:"No commitment. We'll reach out to you.",
    lbl_name:"Full Name", lbl_phone:"WhatsApp / Phone", lbl_interest:"I'm interested in",
    opt_select:"Select an option", opt_buy:"Buying a property", opt_sell:"Selling a property", opt_invest:"Investing",
    btn_submit:"Book My Free Consultation",
    success_title:"We received your request!",
    success_sub:"An advisor will contact you via WhatsApp within 30 minutes.",
    footer_copy:"© 2025 LuxeEstate. All rights reserved.",
    footer_privacy:"Privacy", footer_terms:"Terms", footer_contact:"Contact",
    wa_tooltip:"Chat on WhatsApp",
  },
  es: {
    nav_properties:"Propiedades", nav_why:"Por qué nosotros", nav_reviews:"Opiniones", nav_cta:"Consulta Gratis",
    hero_eyebrow:"Asesoría Inmobiliaria Premium",
    hero_title:"Encuentra el Hogar<br><em>que Mereces</em>",
    hero_sub:"Te conectamos con propiedades exclusivas que se adaptan a tu estilo de vida, objetivos de inversión y visión de futuro.",
    hero_cta1:"Reservar Consulta Gratis", hero_cta2:"Ver Propiedades", hero_scroll:"Bajar",
    trust_homes:"Hogares Vendidos", trust_clients:"Clientes Felices", trust_rating:"Calificación Promedio", trust_exp:"15 Años de Experiencia",
    prop_label:"Destacados", prop_title:"Propiedades Exclusivas",
    prop_sub:"Propiedades seleccionadas para compradores exigentes. Cada anuncio está verificado, inspeccionado y listo para visitar.",
    tag_sale:"En Venta", tag_invest:"Inversión", tag_new:"Nuevo",
    card1_title:"Villa Moderna con Piscina", card1_loc:"Miraflores, Lima",
    card2_title:"Penthouse de Lujo",          card2_loc:"San Isidro, Lima",
    card3_title:"Apartamento Contemporáneo",  card3_loc:"Barranco, Lima",
    beds:"hab", baths:"baños",
    ben_label:"Nuestras Ventajas", ben_title:"¿Por qué LuxeEstate?",
    ben_sub:"Vamos más allá de los listados. Te guiamos en cada paso del proceso.",
    ben1_t:"Propiedades Verificadas", ben1_d:"Cada propiedad pasa por un proceso exhaustivo de verificación legal y estructural antes de ser publicada.",
    ben2_t:"Experiencia de Mercado",  ben2_d:"15 años de datos e insights para que puedas tomar decisiones respaldadas por conocimiento real.",
    ben3_t:"Soporte Integral",        ben3_d:"Desde tu primera consulta hasta entregarte las llaves — estamos a tu lado en todo momento.",
    ben4_t:"Respuesta Rápida",        ben4_d:"Nuestros asesores responden en menos de 30 minutos. Tu tiempo es valioso y lo respetamos.",
    test_label:"Experiencias Reales", test_title:"Lo que Dicen Nuestros Clientes",
    test_sub:"Experiencias reales de personas que nos confiaron una de las decisiones más importantes de su vida.",
    testi1_text:'"El equipo de LuxeEstate hizo que comprar nuestra primera casa fuera completamente sin estrés. Nos guiaron en cada paso."',
    testi1_role:"Compradora · Lima",
    testi2_text:'"Vendí mi apartamento en solo 3 semanas por encima del precio pedido. Sus habilidades de negociación son excepcionales."',
    testi2_role:"Vendedor · San Isidro",
    testi3_text:'"Como inversor, necesitaba a alguien que entendiera el ROI. LuxeEstate me dio información que no encontré en otro lado."',
    testi3_role:"Inversor · Miraflores",
    cont_label:"Contáctanos",
    cont_title:"Encontremos<br><em style='font-style:italic;color:var(--gold);'>tu Próximo Hogar</em>",
    cont_sub:"Ya sea que compres, vendas o inviertas — llena el formulario y un asesor te contactará en 30 minutos.",
    form_title:"Consulta Gratuita", form_sub:"Sin compromisos. Nosotros te contactamos.",
    lbl_name:"Nombre Completo", lbl_phone:"WhatsApp / Teléfono", lbl_interest:"Me interesa",
    opt_select:"Selecciona una opción", opt_buy:"Comprar una propiedad", opt_sell:"Vender una propiedad", opt_invest:"Invertir",
    btn_submit:"Quiero mi Asesoría Gratuita",
    success_title:"¡Recibimos tu solicitud!",
    success_sub:"Un asesor te contactará por WhatsApp en menos de 30 minutos.",
    footer_copy:"© 2025 LuxeEstate. Todos los derechos reservados.",
    footer_privacy:"Privacidad", footer_terms:"Términos", footer_contact:"Contacto",
    wa_tooltip:"Chatear por WhatsApp",
  },
  pt: {
    nav_properties:"Imóveis", nav_why:"Por que nós", nav_reviews:"Avaliações", nav_cta:"Consulta Grátis",
    hero_eyebrow:"Assessoria Imobiliária Premium",
    hero_title:"Encontre o Lar<br><em>que Você Merece</em>",
    hero_sub:"Conectamos você a imóveis exclusivos que se alinham ao seu estilo de vida, objetivos de investimento e visão de futuro.",
    hero_cta1:"Agendar Consulta Grátis", hero_cta2:"Ver Imóveis", hero_scroll:"Rolar",
    trust_homes:"Imóveis Vendidos", trust_clients:"Clientes Satisfeitos", trust_rating:"Avaliação Média", trust_exp:"15 Anos de Experiência",
    prop_label:"Destaques", prop_title:"Imóveis Exclusivos",
    prop_sub:"Imóveis selecionados para compradores exigentes. Cada anúncio é verificado, inspecionado e pronto para visitar.",
    tag_sale:"À Venda", tag_invest:"Investimento", tag_new:"Novo",
    card1_title:"Villa Moderna com Piscina", card1_loc:"Miraflores, Lima",
    card2_title:"Cobertura de Luxo",          card2_loc:"San Isidro, Lima",
    card3_title:"Apartamento Contemporâneo",  card3_loc:"Barranco, Lima",
    beds:"qts", baths:"bans",
    ben_label:"Nossas Vantagens", ben_title:"Por que a LuxeEstate?",
    ben_sub:"Vamos além dos anúncios. Guiamos você em cada etapa do processo.",
    ben1_t:"Imóveis Verificados", ben1_d:"Cada imóvel passa por um processo rigoroso de verificação legal e estrutural antes de ser anunciado.",
    ben2_t:"Expertise de Mercado", ben2_d:"15 anos de dados e insights para que você tome decisões respaldadas por conhecimento real.",
    ben3_t:"Suporte Completo",     ben3_d:"Da sua primeira consulta até a entrega das chaves — estamos ao seu lado em todo momento.",
    ben4_t:"Resposta Rápida",      ben4_d:"Nossos consultores respondem em menos de 30 minutos. Seu tempo é valioso e o respeitamos.",
    test_label:"Histórias Reais", test_title:"O que Dizem Nossos Clientes",
    test_sub:"Experiências reais de pessoas que confiaram em nós em uma das maiores decisões de suas vidas.",
    testi1_text:'"A equipe da LuxeEstate tornou a compra da nossa primeira casa completamente tranquila. Nos guiaram em cada etapa."',
    testi1_role:"Compradora · Lima",
    testi2_text:'"Vendi meu apartamento em apenas 3 semanas acima do preço pedido. Suas habilidades de negociação são excepcionais."',
    testi2_role:"Vendedor · San Isidro",
    testi3_text:'"Como investidor, precisava de alguém que entendesse ROI. A LuxeEstate me deu insights que não encontrei em nenhum outro lugar."',
    testi3_role:"Investidor · Miraflores",
    cont_label:"Fale Conosco",
    cont_title:"Vamos Encontrar<br><em style='font-style:italic;color:var(--gold);'>Seu Próximo Lar</em>",
    cont_sub:"Seja para comprar, vender ou investir — preencha o formulário e um consultor entrará em contato em 30 minutos.",
    form_title:"Consulta Gratuita", form_sub:"Sem compromisso. Entramos em contato com você.",
    lbl_name:"Nome Completo", lbl_phone:"WhatsApp / Telefone", lbl_interest:"Tenho interesse em",
    opt_select:"Selecione uma opção", opt_buy:"Comprar um imóvel", opt_sell:"Vender um imóvel", opt_invest:"Investir",
    btn_submit:"Quero Minha Consulta Grátis",
    success_title:"Recebemos sua solicitação!",
    success_sub:"Um consultor entrará em contato via WhatsApp em até 30 minutos.",
    footer_copy:"© 2025 LuxeEstate. Todos os direitos reservados.",
    footer_privacy:"Privacidade", footer_terms:"Termos", footer_contact:"Contato",
    wa_tooltip:"Conversar no WhatsApp",
  }
};

let currentLang = 'en';

/* ══════════════════════════════════════════════════════════
   Language Switcher
══════════════════════════════════════════════════════════ */
function setLang(lang) {
  currentLang = lang;
  const t = i18n[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim().toLowerCase() === lang);
  });

  // Update html lang attribute
  document.documentElement.lang = lang;
}

/* ══════════════════════════════════════════════════════════
   Scroll Reveal (IntersectionObserver)
══════════════════════════════════════════════════════════ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ══════════════════════════════════════════════════════════
   Mobile Menu Toggle
══════════════════════════════════════════════════════════ */
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

/* ══════════════════════════════════════════════════════════
   Form Submit  (EmailJS-ready)
══════════════════════════════════════════════════════════ */
async function handleSubmit() {
  const t     = i18n[currentLang];
  const btn   = document.getElementById('submitBtn');
  const name  = document.getElementById('f_name').value.trim();
  const phone = document.getElementById('f_phone').value.trim();
  const interest = document.getElementById('f_interest').value;

  const requiredMsg = {
    en: 'Please fill in all fields.',
    es: 'Por favor completa todos los campos.',
    pt: 'Por favor preencha todos os campos.',
  };

  if (!name || !phone || !interest) {
    alert(requiredMsg[currentLang]);
    return;
  }

  // Show spinner
  btn.disabled = true;
  btn.innerHTML = '<div class="spinner"></div>';

  // ── EmailJS integration ─────────────────────────────────
  // Uncomment and replace IDs when ready:
  //
  // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', {
  //   from_name: name,
  //   phone:     phone,
  //   interest:  interest,
  // });
  // ────────────────────────────────────────────────────────

  // Simulate network delay (remove in production)
  await new Promise(r => setTimeout(r, 1800));

  // GA4 conversion event
  if (typeof gtag !== 'undefined') {
    gtag('event', 'form_submit', {
      event_category: 'Lead',
      event_label: interest,
    });
  }

  // Show success message
  document.getElementById('formArea').style.display = 'none';
  const successEl = document.getElementById('successMsg');
  successEl.style.display = 'block';

  // Re-render Lucide icons inside success block
  lucide.createIcons();
}

/* ══════════════════════════════════════════════════════════
   Theme Toggle (dark / light + system default)
══════════════════════════════════════════════════════════ */
const sunIcon = `<path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/><circle cx="12" cy="12" r="5"/>`;
const moonIcon = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;

function getSystemPreference() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  const icon = document.getElementById('themeIcon');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    if (icon) icon.innerHTML = sunIcon;
  } else {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    if (icon) icon.innerHTML = moonIcon;
  }
}

function toggleTheme() {
  const isDark = document.body.classList.contains('dark-mode');
  const next = isDark ? 'light' : 'dark';
  localStorage.setItem('luxe-theme', next);
  applyTheme(next);
}

// Init: saved preference → system preference
(function initTheme() {
  const saved = localStorage.getItem('luxe-theme');
  applyTheme(saved || getSystemPreference());
})();

// Listen for system changes (if user has no manual preference saved)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (!localStorage.getItem('luxe-theme')) {
    applyTheme(e.matches ? 'dark' : 'light');
  }
});

/* ══════════════════════════════════════════════════════════
   Init Lucide Icons
══════════════════════════════════════════════════════════ */
lucide.createIcons();
