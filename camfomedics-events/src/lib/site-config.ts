import type { Event } from '@/types'

// ─── Contact & branding ────────────────────────────────────────────────────
export const SITE = {
  name:    'Camfomedics e.V.',
  tagline: 'Deutsch-Kamerunische Medizingesellschaft',
  email:   'service@camfomedics.org',
  phone:   '+49 157 3946 5668',
  address: 'Postfach 340213, 45074 Essen',
  bank: {
    iban: 'DE88 3006 0601 0008 7547 64',
    bic:  'DAAEDEDDXXX',
    bank: 'Deutsche Apotheker- und Ärztebank, Düsseldorf',
    name: 'Camfomedics e.V.',
  },
  paypalEmail: 'payment@camfomedics.org', // replace with real PayPal email
  impressum: {
    vorsitzende:     'M.D. Bernice .N. Ndofor',
    stellvertreterin:'M.D. Estelle Yongwa Pami',
  },
  mainSiteUrl: '', // self-hosted — all links are internal
}

// ─── Projects ──────────────────────────────────────────────────────────────
// active:true = generates a detail page at /projekte/[slug]/
// Add future projects here — the index and nav update automatically
export const PROJECTS = [
  {
    slug:      'share',
    label:     'SHARE',
    tag:       'Gesundheitsversorgung',
    active:    true,
    shortDesc: 'Supporting Healthcare Availability and Rural Expertise in Cameroon — Unterstützung der Gesundheitsversorgung in ländlichen Regionen Kameruns.',
    fullTitle: 'SHARE - Supporting Healthcare Availability and Rural Expertise in Cameroon',
    logoUrl:   null as string | null,
    heroImage: null as string | null,
    heroCaption: null as string | null,
    intro: [
      'Ziel dieses Projekts ist die Unterstützung der Gesundheitsversorgung in Kamerun. Im Fokus stehen die Menschen in den dörflichen Regionen Kameruns, die nur über begrenzte finanzielle Mittel verfügen und deren Zugang zu medizinischer Versorgung nur sehr eingeschränkt möglich ist.',
      'Das Projekt möchte daher die Entwicklung der Gesundheitseinrichtungen in dörflichen Regionen fördern. Hilfe soll in Form von Geräten, Verbrauchsmaterialien, Medikamenten und auch durch verbesserte Ausbildungsmöglichkeiten geleistet werden.',
      'Zudem sollen im Zentralkrankenhaus der Hauptstadt Yaoundé die Möglichkeiten zur Durchführung von Chemotherapien bei Kindern unterstützt werden, sodass dies insbesondere den Kindern aus dörflichen Regionen zugutekommen kann. Ein besonderes Augenmerk gilt hier den Kindern mit dem in tropischen Regionen endemischen Burkitt-Lymphom.',
    ],
    goals:          null as string[] | null,
    stepsPreamble:  'Die Unterstützung soll möglichst zielgerichtet und auf direktem und praktischem Weg erfolgen. Um dies gewährleisten zu können, werden folgende Schritte konsequent verfolgt:',
    steps: [
      'Der Bedarf wird vor Ort in Kamerun ermittelt.',
      'Art und Umfang der benötigten Hilfe wird in Form einer formalen Anfrage an die Projektleitung gerichtet.',
      'Vor Ort wird ein Koordinator ernannt, der Empfang und Verwendung der Hilfe koordiniert und überwacht.',
      'Ein Bericht über den Verbleib, den Einsatz bzw. die Verwendung empfangener Hilfe ist Voraussetzung für eine zukünftige Hilfe.',
    ],
    activities:     null as { image: string; caption: string }[] | null,
    ctaText:        'Wir freuen uns auf Ihre Unterstützung in Form von Geld, Medikamenten, Geräten oder medizinischen Verbrauchsmaterialien.',
  },
  {
    slug:        'i-med',
    label:       'iMED',
    tag:         'Bildung & Ausbildung',
    active:      true,
    shortDesc:   'Improving Medical Education and Health Care Delivery through Diaspora Engagement — Stärkung der medizinischen Ausbildung in Kamerun.',
    fullTitle:   'Improving Medical Education and Health Care Delivery through Diaspora Engagement',
    logoUrl:     'https://cloud-1de12d.becdn.net/media/iW=141&iH=92&oX=0&oY=1&cW=141&cH=90/7a1edea557bf024370e8e9bd448d07fe/image.png',
    heroImage:   'https://cloud-1de12d.becdn.net/media/iW=368&iH=368&oX=0&oY=2&cW=368&cH=364/145d3ae50b1e9d6a992fc62dd6e60ccd/image.jpg',
    heroCaption: 'iMED training — 2014 Mutengene, South West Region Cameroon',
    intro: [
      'Das größte Problem des Gesundheitssystems in Kamerun ist der Mangel an Fachpersonal. Ursache ist eine fehlende Aus-, Weiter- und Fortbildungsinfrastruktur sowie die Emigration von Personal.',
      'Viele Ärzte und Pflegepersonal klagen über schlechte Arbeitsbedingungen in den Krankenhäusern und eine mangelnde Ausstattung mit medizinischen Geräten. Zudem gibt es kaum Möglichkeiten, neue Qualifikationen zu erwerben — trotz zunehmender Innovationen in der Medizin weltweit.',
      'Ziel des Projekts ist es, eine enge Kooperation und Zusammenarbeit von Fachärzten und Fachpersonal des Gesundheitssektors in der Diaspora mit zwei ausgewählten Lehrkrankenhäusern in Kamerun zu ermöglichen.',
    ],
    goals: [
      'den Bedarf (das Angebot) an Weiter- und Fortbildung decken (vergrößern)',
      '„Training on the Job" verbessern',
      'die Ausstattung mit angepassten (nachhaltigen) „minimal invasiven" medizinischen Geräten sowie die Ausbildung zur Nutzung dieser Geräte verbessern',
      'einfache, schnelle „Point-of-Care" diagnostische Möglichkeiten einführen',
      'das Management und Organisation von klinischen Abläufen und Prozessen in der Praxis optimieren',
    ],
    stepsPreamble:  null as string | null,
    steps:          null as string[] | null,
    activities: [
      { image: 'https://cloud-1de12d.becdn.net/media/iW=375&iH=342&oX=0&oY=31&cW=375&cH=280/729d2e5357e6fd1966ab6854225a2d35/image.jpg', caption: 'iMED Wound and trauma training' },
      { image: 'https://cloud-1de12d.becdn.net/media/iW=375&iH=281&oX=0&oY=0&cW=375&cH=281/075bbba5cdc5c70192a0fdae489e67ce/image.jpg', caption: 'iMED Ultrasound training' },
    ],
    ctaText: null as string | null,
  },
]

export type ProjectType = typeof PROJECTS[number]

// ─── Homepage content ──────────────────────────────────────────────────────
export const HERO_SLIDES = [
  {
    image:        'images/heroes/hero1.jpg',
    headline:     'Hoch qualifizierte Fachleute in der Medizin',
    ctaPrimary:   { label: 'Mitgliedschaft', href: '/mitgliedschaft/' },
    ctaSecondary: { label: 'Über Uns',       href: '/verein/ueber-uns/' },
  },
  {
    image:        'images/heroes/hero2.jpg',
    headline:     '32. Camfomedics Annual Meeting',
    subline:      '26. September 2026 · REFA Tagungshaus, Dortmund',
    ctaPrimary:   { label: 'Zum Programm',   href: '/veranstaltungen/32-annual-meeting-2026/' },
    ctaSecondary: { label: 'Über Uns',       href: '/verein/ueber-uns/' },
  },
   {
    image:        'images/heroes/hero3.jpg',
    headline:     '31. Camfomedics Annual Meeting (CAM)',
    subline:      '2025 in Camerooon',
    ctaPrimary:   { label: 'Zum Programm',   href: '/veranstaltungen/31-annual-meeting-2025/' },
    ctaSecondary: { label: 'Über Uns',       href: '/verein/ueber-uns/' },
  },
  {
    image:        'images/heroes/hero4.jpg',
    headline:     '3. -4. Oktober 2025 . Tübingen',
    ctaPrimary:   { label: 'Mitgliedschaft', href: '/mitgliedschaft/' },
    ctaSecondary: { label: 'Über Uns',       href: '/verein/ueber-uns/' },
  },
  {
    image:        'images/heroes/hero5.jpg',
    headline:     '3. -4. Oktober 2025 . Tübingen',
    ctaPrimary:   { label: 'Mitgliedschaft', href: '/mitgliedschaft/' },
    ctaSecondary: { label: 'Über Uns',       href: '/verein/ueber-uns/' },
  },
]

export const UPCOMING_EVENT_BANNER = {
  edition:    '32. CAMFOMEDICS',
  date:       '26. SEP 2026',
  venue:      'REFA Tagungshaus',
  street:     'Emil-Figge-Straße 43',
  city:       '44227 DORTMUND',
  address:    'Emil-Figge-Straße 43, 44227 Dortmund',
  programUrl: 'https://cloud-1de12d.becdn.net/customfile/078aeaccd81be9d5620c6a1e86e1b12182965df1577dde25f40a47ecf8c4519d/vorl-program-dortmund-2025.pdf',
  slug:       '/veranstaltungen/32-annual-meeting-2026/',
}

export const ABOUT_SECTION = {
  image: 'https://cloud-1de12d.becdn.net/media/iW=819&iH=690&oX=146&oY=0&cW=478&cH=690/bd6508daaad63255ddee7474c794292a/image.png',
  heading: 'Camfomedics e.V. für die Fort- und Weiterbildung',
  goals: [
    { title: 'Unsere Hingabe',   text: 'Wir setzen uns für die Förderung der medizinischen Ausbildung ein; in Kamerun und darüber hinaus.' },
    { title: 'Unsere Aufgaben',  text: 'Camfomedics e.V., als Organisation von Medizinern verpflichten wir uns, in Kamerun, Afrika und darüber hinaus...' },
    { title: 'Unsere Geschichte',text: 'Die Medizinstudenten aus Kamerun — damals überwiegend Stipendiaten des Staates — hatten bereits einen regen Austausch untereinander.' },
    { title: 'Die Gründung',     text: 'Camfomedics wurde am 7. Mai 1994 in Tübingen, Deutschland von kamerunischen Studenten der Medizin, Pharmazie und Zahnheilkunde gegründet.' },
  ],
}

export const STATS = [
  { value: 23400, label: 'Gesamtzahl der Freiwilligenstunden' },
  { value: 647,   label: 'E-Mail-Abonnenten' },
  { value: 1531,  label: 'Facebook Followers' },
  { value: 31,    label: 'Organisationsalter' },
]

export const MEMBERSHIP_SECTION = {
  heading:    'Wir können uns alle anstrengen, etwas zu verändern',
  subheading: 'Mitglied werden',
  body:       'Unsere Organisation besteht zurzeit aus Ärzten, Apothekern, Krankenschwestern, Pfleger, Studenten im Bereich der Medizin, Pharmazie, Zahnheilkunde, biomedizinischer Technologie sowie Ehrenmitglieder.',
  ctaHref:    '/mitgliedschaft/',
  ctaLabel:   'Mitglied Werden',
  image:      'https://cloud-1de12d.becdn.net/media/iW=819&iH=690&oX=146&oY=0&cW=478&cH=690/bd6508daaad63255ddee7474c794292a/image.png',
}

export const FEATURED_EVENTS_SLUGS = [
  '32-annual-meeting-2026',
  'endometriose-webinar-2024',
  'african-health-day-2024',
]

export const NEWS_ARTICLES = [
  {
    title:    'Bericht Camfomedics Meet the Experts am 20. Mai 2023',
    image:    'https://cloud-1de12d.becdn.net/media/iW=394&iH=263&oX=22&oY=0&cW=350&cH=263/38ac60aca192f51efbb421911823120e/Meet-The-Experts-Camfomedics-20Mai2023.jpg',
    href:     'https://www.camfomedics.org/bericht-camfomedics-meet-the-experts-am-20-mai-2023',
  },
  {
    title:    'Projekt IMED & Tumorboard',
    image:    'https://cloud-1de12d.becdn.net/media/iW=467&iH=263&oX=58&oY=0&cW=350&cH=263/6d47e7ee1f24a0a3ba6d3b312844eeed/image.jpg',
    href:     'https://www.camfomedics.org/projekt-imed-and-tumorboard',
  },
  {
    title:    'Bericht Camfomedics Meet the Experts 04.10.2019 in Essen',
    image:    'https://cloud-1de12d.becdn.net/media/iW=496&iH=263&oX=73&oY=0&cW=350&cH=263/7d9fcb8fc9a82ea1b747c04791574f63/image.jpg',
    href:     'https://www.camfomedics.org/bericht-camfomedics-meet-the-experts-04-10-2019-in-essen',
  },
]

export const CONTACT_SECTION = {
  backgroundImage: 'https://cloud-1de12d.becdn.net/media/iW=819&iH=690&oX=146&oY=0&cW=478&cH=690/bd6508daaad63255ddee7474c794292a/image.png',
  vorstand: {
    title: 'Vorstand',
    text:  'Der Vorstand besteht aus drei Mitgliedern',
  },
  sekretariat: {
    title: 'Das Sekretariat',
    text:  'Der Vorstandsvorsitzende leitet das Sekretariat.',
  },
}

export const YOUTUBE_CHANNEL = 'https://www.youtube.com/channel/UCEhOMfk1k7mSosu5j-Vfjeg'

export const YOUTUBE_VIDEOS = [
  { id: 'ZDDrphEv_II', title: '29. Deutsch-kamerunisches Ärztetreffen' },
  { id: 'KxrfPkEyXmk', title: '30. Jul — Meet the Experts' },
  { id: 'Wd8sV2_XUPE', title: 'Meet the Experts' },
]
// When the backend is ready, replace this array with a fetch() call.
export const PAST_EVENTS: Event[] = [
  // ── Past / smaller events ─────────────────────────────────────────────
  {
    slug:     '31-jahrestagung',
    menuName: '31. Jahrestagung (2025)',
    type:     'jahrestagung',
    year:     2025,
    upcoming: false,
    title:    '31. Camfomedics Annual Meeting',
    date:     '3. - 4. Oktober 2025',
    location: 'Tübingen',
    heroImage :'/images/events/jahrestagung/2025/hero1.jpg',
    thumbnailImage: '/images/events/jahrestagung/2025/hero1.jpg',
    excerpt:  'Das 31. Deutsch-kamerunische Ärztetreffen in Tübingen. Nachbericht, Fotogalerie und Dokumentation sind verfügbar.',
  },
  {
    slug:     '30-jahrestagung',
    menuName: '30. Jahrestagung (2024)',
    type:     'jahrestagung',
    year:     2024, 
    upcoming: false,
    title:    '30. Camfomedics Annual Meeting',
    date:     '05. Oktober 2024',
    location: 'Stadthaus Laatzen, Marktpl. 2, 30880 Laatzen, Hannover',
    heroImage :'/images/events/jahrestagung/2024/hero1.jpg',
    thumbnailImage: 'https://cloud-1de12d.becdn.net/media/iW=359&iH=255&oX=9&oY=0&cW=340&cH=255/2cf2d5197eb860a4e3ed6ce5b5101492/dc3102d8-8858-407b-b9f8-0e852e79c950.jpg',
    excerpt: '30. Deutsch-kamerunisches Ärztetreffen — Schwerpunkt Lungenerkrankungen: Prävention, Pneumologie und Onkologie. Stadthaus Laatzen, Hannover.',
    edition: '30. Jahrestagung · 2024',
    format:  'Symposium + Karriere-Workshop',
    registrationFormUrl: 'https://res.cloudinary.com/woureesystems/image/upload/v1715010286/Camfomedics/documents/Anmeldung_Hannover2024.pdf',
    description: `30. Camfomedics Annual Meeting am 05. Oktober 2024, Stadthaus Laatzen. Schwerpunkte: benigne und maligne Lungenerkrankungen, Prävention, Infektiologie. Am Vorabend (04.10.) Meet the Experts in der Mendelssohnstraße 26, Hannover.`,
    programBlocks: [
      { label: 'Block I',   title: 'Benigne Lungenerkrankungen',  description: 'Überblick über die Entwicklung benigner Lungenerkrankungen' },
      { label: 'Block II',  title: 'Pneumologie & Infektiologie', description: 'Klinische Fälle: Pneumologie, akute pulmonale Tumorblutung, Tuberkulose' },
      { label: 'Block III', title: 'Maligne Lungenerkrankungen',  description: 'Onkologische Behandlungskonzepte' },
      { label: 'Parallel',  title: 'Karriere-Workshop',           description: 'Karrierewege in Deutschland für Studierende und junge Ärzte' },
      { label: 'Vorabend',  title: 'Meet the Experts',            description: 'Fr 04.10. · Mendelssohnstr. 26, 30173 Hannover · 09:00–17:00' },
    ],
    speakers: [
    // — with photos —
    { initials: 'CK', name: 'Prof. Dr. Christian Karagiannidis', role: 'Leiter ECMO-Zentrum, Kliniken Stadt Köln',                          colour: '#0c1a3c', photoUrl: 'https://cloud-1de12d.becdn.net/media/iW=283&iH=283&oX=0&oY=5&cW=283&cH=271/808f14d6fd6edcef85f1ca5347801257/-0000-Prof-Dr-med-Christian-Karagiannidis-Bil2.jpg' },
    { initials: 'SK', name: 'Dr. Stephanie Keymel',               role: 'Leitende Ärztin Pneumologie, Uni Düsseldorf',                      colour: '#d41e44', photoUrl: 'https://cloud-1de12d.becdn.net/media/iW=283&iH=283&oX=0&oY=5&cW=283&cH=271/fa40d2de7498deacd36b21e0f4f29acb/-0006-Frau-Dr-med-Stephanie-Keymel.jpg' },
    { initials: 'SF', name: 'PD Dr. Stephen Fung',                role: 'Viszeral- & Thoraxchirurgie, Uni Düsseldorf',                     colour: '#0c1a3c', photoUrl: 'https://cloud-1de12d.becdn.net/media/iW=283&iH=283&oX=0&oY=5&cW=283&cH=271/fa322a49755791f5395f1dc4b755b57d/-0003-Bild-Stephen-Fung.jpg' },
    { initials: 'TA', name: 'Dr. Terence Afube',                  role: 'Innere Medizin, Infektiologie & Pneumologie',                     colour: '#0c1a3c', photoUrl: 'https://cloud-1de12d.becdn.net/media/iW=283&iH=283&oX=0&oY=5&cW=283&cH=271/f77f7a0d7ec7ae341fe9deb5863cef6b/-0009-Terence-Afube.jpg' },
    { initials: 'BS', name: 'Prof. Dr. Benedikt Schaarschmidt',   role: 'Diagnostische & interventionelle Radiologie, Uni Essen',           colour: '#0c1a3c', photoUrl: 'https://cloud-1de12d.becdn.net/media/iW=283&iH=283&oX=0&oY=5&cW=283&cH=271/74abab1236360c211b377285a6824613/-0008-Schaarschmidt-Benedikt-MAK1874.jpg' },
    { initials: 'EP', name: 'Prof. Dr. Eric Walter Pefura-Yone',  role: 'Innere Medizin & Infektiologie, Kamerun',                         colour: '#1a4a38', photoUrl: 'https://cloud-1de12d.becdn.net/media/iW=283&iH=283&oX=0&oY=5&cW=283&cH=271/68b6b1919d6182b7a9a06d067a84353c/Eric-Walter-Pefura-Yone-MD-PhD.jpg' },
    { initials: 'IA', name: 'Dr. Ivo Azeh',                       role: 'Hämatoonkologie, Onkologische Tagesklinik Gelsenkirchen',         colour: '#0c1a3c', photoUrl: 'https://cloud-1de12d.becdn.net/media/iW=283&iH=283&oX=0&oY=5&cW=283&cH=271/6450036347e3d5ca227303de2f7cce90/-0002-Dr-med-Ivo-Azeh.jpg' },
    { initials: 'FD', name: 'Dr. Freddy-Joel Djiepmo Njanang',    role: 'Strahlentherapie & Palliativmedizin, MVZ CDT Köln',               colour: '#0c1a3c', photoUrl: 'https://cloud-1de12d.becdn.net/media/iW=283&iH=283&oX=0&oY=5&cW=283&cH=271/55bd6d4cbbbf793c5d8daabbd258f8f2/-0001-Dr-med-Freddy-Joel-Djiepmo.jpg' },
    { initials: 'SC', name: 'Prof. Dr. Stepháne Collaud',         role: 'Chefarzt Thoraxchirurgie, Klinikum Merheim-Köln',                colour: '#0c1a3c', photoUrl: 'https://cloud-1de12d.becdn.net/media/iW=283&iH=283&oX=0&oY=5&cW=283&cH=271/d849a0fe010f155c263f8c0324dbb5b7/-0007-Prof-Dr-med-Collaud-Stephane.jpg' },
    { initials: 'VT', name: 'Vanessa Fese Tansi',                  role: 'Wissenschaftliche Mitarbeiterin Anatomie, UKE Hamburg',           colour: '#d41e44', photoUrl: 'https://cloud-1de12d.becdn.net/media/iW=283&iH=283&oX=0&oY=5&cW=283&cH=271/3f7e040d689916f87a6ccb610f3cca1e/-0004-Bild-Frau-Vanessa-Tansi.jpg' },
    { initials: 'BM', name: 'Cand. Med. Bores Manfouo Keugue',    role: 'Medizinstudent',                                                  colour: '#0c1a3c', photoUrl: 'https://cloud-1de12d.becdn.net/media/iW=283&iH=283&oX=0&oY=5&cW=283&cH=271/062a93e320acbfde9f617a997ae7c87b/-0005-Herr-Cand-Med-Bores-Manfouo-Keugue.jpg' },
    { initials: 'JN', name: 'Dr. Joseph Nounla',                   role: 'Kinderchirurgie & -urologie, Hannover (Wissenschaftliche Leitung)', colour: '#0c1a3c', photoUrl: 'https://cloud-1de12d.becdn.net/media/iW=300&iH=440&oX=0&oY=0&cW=300&cH=225/f7e0611b09f9ced08eeb1e9b54300358/-.png' },
    { initials: 'RB', name: 'Dr. Rebecca Bücker',                  role: 'Strahlentherapie, Klinikum Lippe',                                colour: '#d41e44', photoUrl: 'https://cloud-1de12d.becdn.net/media/iW=300&iH=400&oX=0&oY=60&cW=300&cH=225/a43e46d9e4493f5df75e56ff151288ae/2.jpg' },
    { initials: 'SO', name: 'Dr. Sadrack Oumbe Tiam',              role: 'Innere Medizin & Kardiologie, Datteln',                           colour: '#0c1a3c', photoUrl: 'https://cloud-1de12d.becdn.net/media/iW=301&iH=445&oX=0&oY=0&cW=301&cH=226/bba94670e5295b24759c8461d35e21b7/3.jpg' },
    { initials: 'YK', name: 'Dr. Yvette Kibuh',                    role: 'Gynäkologie & Geburtshilfe, Hamburg',                             colour: '#d41e44', photoUrl: 'https://cloud-1de12d.becdn.net/media/iW=360&iH=380&oX=30&oY=12&cW=293&cH=220/d5cbf9b1cf3973dbb1c3060639b18166/4.png' },
    { initials: 'MT', name: 'Dr. Marceau Tchudjin Chedjou',        role: 'Radiologie, Kreiskrankenhaus Lörrach',                            colour: '#0c1a3c', photoUrl: 'https://cloud-1de12d.becdn.net/media/iW=498&iH=307&oX=147&oY=28&cW=294&cH=221/b23c1d2ce038d94716d83eccc35c3156/5.jpg' },
    { initials: 'SD', name: 'med. dent. Stéphanie Djipsu',         role: 'Zahnmedizin',                                                     colour: '#d41e44', photoUrl: 'https://cloud-1de12d.becdn.net/media/iW=445&iH=297&oX=49&oY=0&cW=293&cH=220/3eefbf6a8b75294678e665d2da2f87b1/8.jpg' },
    { initials: 'SH', name: 'Dr. Stefanie Holm',                   role: 'Infektiologie & Geriatrie, Hannover',                             colour: '#d41e44', photoUrl: 'https://cloud-1de12d.becdn.net/media/iW=415&iH=425&oX=35&oY=0&cW=294&cH=221/657dd29934105540f84688fe11fbf805/9.jpg' },
    { initials: 'DU', name: 'Cand. Med. Daniel Um Um',             role: 'Medizinstudent, Universität Bochum',                              colour: '#0c1a3c', photoUrl: 'https://cloud-1de12d.becdn.net/media/iW=431&iH=242&oX=60&oY=18&cW=293&cH=220/eeffb130e27dae61a3371393f57530d3/10.jpg' },
    { initials: 'TS', name: 'Dr. Thierry Siemeni',                  role: 'Herzchirurgie, Leiter Lungentransplantation, UKJ Jena',           colour: '#0c1a3c', photoUrl: 'https://cloud-1de12d.becdn.net/media/iW=324&iH=437&oX=29&oY=34&cW=294&cH=221/4d8ecb814e5bc204b4def8f9b37776cc/pho.jpg' },
    // — no photos on live site —
    { initials: 'NP', name: 'Dr. Natalia Prodan',                  role: 'Pränataldiagnostik, Universitätsfrauenklinik Tübingen',           colour: '#d41e44' },
    { initials: 'ND', name: 'Prof. Dr. Nektarios Dikopoulos',      role: 'Gastroenterologie, Universitätsklinikum Ulm',                    colour: '#0c1a3c' },
    { initials: 'RM', name: 'Dr. Ricardo Mbou',                    role: 'Arzt i.W. Gynäkologie & Geburtshilfe, Tübingen',                 colour: '#0c1a3c' },
    { initials: 'TS2', name: 'Dr. Titus Sabi',                     role: 'Herzchirurgie, Leiter Lungentransplantation, UKJ Jena',           colour: '#0c1a3c' },
  ],
    schedule: [
    {
      date: 'Freitag, 04. Oktober 2024', label: 'Meet the Experts Day',
      blocks: [{ items: [
        { time: '09:00–17:00', title: 'Meet the Experts', speaker: 'Mendelssohnstraße 26, 30173 Hannover' },
      ]}],
    },
    {
      date: 'Samstag, 05. Oktober 2024', label: '30. Jahrestagung',
      blocks: [
        { items: [
          { time: '07:30–08:45', title: 'Ankunft und Anmeldung', speaker: 'Akkreditierung', isBreak: true },
          { time: '08:45–09:00', title: 'Begrüßung und Einführung', speaker: 'Durch die Tagungspräsidentin', isBreak: true },
        ]},
        { blockLabel: 'Block I — Präventionsmedizin', items: [
          { time: '09:00–09:25', title: 'Kardio-Update: Endstation Herzinsuffizienz', speaker: 'Dr. Sadrack Oumbe Tiam' },
          { time: '09:25–09:50', title: 'Zervixkarzinomprävention durch HPV-Impfung und Früherkennung', speaker: 'Dr. Yvette Kibuh' },
          { time: '09:50–10:15', title: 'Prävention und Früherkennung von Krebs', speaker: 'Dr. Ivo Azeh' },
          { time: '10:15–10:40', title: 'Impfung gegen Malaria', speaker: 'TBC' },
          { time: '10:40–11:10', title: 'Kaffeepause & Networking', isBreak: true },
        ]},
        { blockLabel: 'Block II — Infektiologie', items: [
          { time: '11:10–11:35', title: 'Diagnostik und Therapie: erworbene und angeborene Immundefekte', speaker: 'Dr. Ivo Azeh' },
          { time: '11:35–12:00', title: 'Fetale und konnatale Infektionen', speaker: 'Dr. Natalia Prodan' },
          { time: '12:00–12:25', title: 'Postoperative Infektionen', speaker: 'TBC' },
          { time: '12:25–12:50', title: 'Infektionskrankheiten in der Pädiatrie', speaker: 'TBC' },
          { time: '12:50–13:15', title: 'Zahnfleischinfektionen — Wurzelkanalbehandlung', speaker: 'TBC' },
          { time: '13:15–14:15', title: 'Mittagspause', isBreak: true },
        ]},
        { blockLabel: 'Block III — Tropenmedizin & Onkologie', items: [
          { time: '13:30–14:00', title: 'PET-CT vs. Ganzkörper-MRT im Staging des Lungenkarzinoms', speaker: 'Dr. T. Kwadwo Antwi, Nuklearmedizin Claraspital Basel' },
          { time: '14:00–14:30', title: 'Systemische Therapie des Lungenkarzinoms', speaker: 'Dr. Ivo Azeh' },
          { time: '14:15–14:40', title: 'Die Bedeutung von Vereinen (Karriere-Workshop, parallel)', speaker: 'Vanessa Fese Tansi' },
          { time: '14:30–15:00', title: 'Strahlentherapeutische Ansätze beim Lungenkarzinom', speaker: 'Dr. Freddy-Joel Djiepmo Njanang' },
          { time: '15:00–15:30', title: 'Chirurgische Therapie des Early Stage Lung Cancer', speaker: 'Prof. Dr. Stepháne Collaud' },
          { time: '15:30–16:00', title: 'Kaffeepause', isBreak: true },
          { time: '16:00–17:30', title: 'Mitgliederversammlung Camfomedics e.V.', speaker: 'Alle Mitglieder eingeladen' },
          { time: '20:00',       title: 'Ausklang — Traditionelle Abendveranstaltung', speaker: 'GRANDE ÉTOILE, Derendorfer Allee 26, 40476 Düsseldorf' },
        ]},
      ],
    },
  ],
    tickets: [],
    sponsors: [],
  },
  {
    slug:     '29-jahrestagung',
    menuName: '29. Jahrestagung (2023)',
    type:     'jahrestagung',
    year:     2023,
    upcoming: false,
    title:    '29. Deutsch-kamerunisches Ärztetreffen',
    date:     '30. September 2023',
    location: 'Düsseldorf',
    heroImage :'/images/events/jahrestagung/2023/hero1.jpg',
    thumbnailImage: 'https://cloud-1de12d.becdn.net/media/iW=473&iH=336&oX=62&oY=0&cW=347&cH=336/2cf2d5197eb860a4e3ed6ce5b5101492/dc3102d8-8858-407b-b9f8-0e852e79c950.jpg',
    excerpt:  'Das 29. Deutsch-kamerunische Ärztetreffen in Düsseldorf. Nachbericht, Fotogalerie und Dokumentation sind verfügbar.',
  },
  {
    slug:     '28-jahrestagung',
    menuName: '28. Jahrestagung (2022)',
    type:     'jahrestagung',
    year:     2022,
    upcoming: false,
    title:    '28. Deutsch-kamerunisches Ärztetreffen',
    date:     '1. Oktober 2022',
    location: 'Mannheim',
    heroImage :'/images/events/jahrestagung/2022/hero1.jpg',
    thumbnailImage: 'https://cloud-1de12d.becdn.net/media/iW=473&iH=336&oX=62&oY=0&cW=347&cH=336/2cf2d5197eb860a4e3ed6ce5b5101492/dc3102d8-8858-407b-b9f8-0e852e79c950.jpg',
    excerpt:  'Das 28. Deutsch-kamerunische Ärztetreffen in Mannheim. Nachbericht, Fotogalerie und Dokumentation sind verfügbar.',
  },
  {
    slug:     '27-jahrestagung',
    menuName: '27. Jahrestagung (2021)',
    type:     'jahrestagung',
    year:     2021,
    upcoming: false,
    title:    '27. Deutsch-kamerunisches Ärztetreffen',
    date:     '2. Oktober 2021',
    location: 'Dortmund',
    heroImage :'/images/events/jahrestagung/2021/hero1.jpg',
    thumbnailImage: 'https://cloud-1de12d.becdn.net/media/iW=473&iH=336&oX=62&oY=0&cW=347&cH=336/2cf2d5197eb860a4e3ed6ce5b5101492/dc3102d8-8858-407b-b9f8-0e852e79c950.jpg',
    excerpt:  'Das 27. Deutsch-kamerunische Ärztetreffen in Dortmund. Nachbericht, Fotogalerie und Dokumentation sind verfügbar.',
  },
  {
    slug:     'endometriose-webinar-2024',
    type:     'webinar',
    year:     2024,    
    upcoming: false,
    title:    'Endometriose — Webinar',
    date:     '10. Januar 2024',
    location: 'Online (Zoom)',
    thumbnailImage: 'https://cloud-1de12d.becdn.net/media/iW=453&iH=255&oX=56&oY=0&cW=340&cH=255/e10ab91d37192759d1457e98398a65c1/Endometriose-Digitale-Akademie.jpg',
    excerpt:  'Zoom-Webinar über Endometriose: Symptome, Diagnose und Behandlungsmöglichkeiten von Fachärztinnen und Fachärzten auf dem Gebiet.',
  },
  {
    slug:     'african-health-day-2024',
    type:     'meet-experts',
    year:     2024,
    upcoming: false,
    title:    'African Health Day — Meet the Experts',
    date:     'Oktober 2024',
    location: 'Hannover',
    thumbnailImage: 'https://cloud-1de12d.becdn.net/media/iW=340&iH=279&oX=0&oY=11&cW=340&cH=255/126d3fa70a6f086b6dc707390cf45145/012.jpg',
    excerpt:  'Kostenlose Gesundheitsberatung durch Fachärztinnen und Fachärzte für die breite Öffentlichkeit. Kardiologie, Gynäkologie, Urologie und mehr.',
  },
  {
    slug:     'coloncarcinom-webinar-2024',
    type:     'webinar',
    year:     2024,
    upcoming: false,
    title:    'Coloncarcinom: ist CME standard',
    date:     '2024',
    location: 'Online (Zoom)',
    thumbnailImage: 'https://cloud-1de12d.becdn.net/media/iW=550&iH=336&oX=101&oY=0&cW=347&cH=336/b12301bada17f01412ab8bad9dba8147/webinar-on-gastro-interstinal-cancer.jpg',
    excerpt:  'Referent: Dr. C. Ondo Meva Chefarzt, Klinik für Allgemein-, Viszeral- und onkologische Chirurgie, Dill-Kliniken Dillenburg.',
  },
  {
    slug:     'meet-experts-may-2023',
    type:     'meet-experts',
    year:     2023,
    upcoming: false,
    title:    'Meet the Experts — Mai 2023',
    date:     '20. Mai 2023',
    location: 'Essen',
    thumbnailImage: 'https://cloud-1de12d.becdn.net/media/iW=347&iH=616&oX=0&oY=140&cW=347&cH=336/598f9c3d352437f05bbb253a187ff869/poster-template-mtemay2023-.png',
    excerpt:  'Öffentlicher Gesundheitstag mit kostenloser Fachberatung. Kardiologie, Urologie, Gynäkologie und mehr im direkten Gespräch.',
  },
  {
    slug:     'pink-praktikum-kamerun-2023',
    type:     'workshop',
    year:     2023,
    upcoming: false,
    title:    'PinK — Praktikum in Kamerun',
    date:     '2023',
    location: 'Yaoundé, Kamerun',
    thumbnailImage: 'https://cloud-1de12d.becdn.net/media/iW=504&iH=336&oX=78&oY=0&cW=347&cH=336/f8d718f70e5b7f87823de04bbbb40fd3/digitaall-image-service02.png',
    excerpt:  'Medizinisches Auslandspraktikum in Kamerun: MICEI, Hôpital Bethesda, BettaHealth und weitere renommierte Einrichtungen.',
  },
  {
    slug:     'emergency-training-kamerun',
    type:     'workshop',
    year:     2022,
    upcoming: false,
    title:    'Emergency Training in Kamerun',
    date:     '2022',
    location: 'Kamerun',
    thumbnailImage: 'https://cloud-1de12d.becdn.net/media/iW=504&iH=336&oX=78&oY=0&cW=347&cH=336/06a2940299fc74611b51b1c938866d42/digitaall-image-service01.png',
    excerpt:  'Resuscitation Managements — Theory and practices. Notfalltraining für medizinisches Personal vor Ort in Kamerun.',
  },
]

// Colour per event type — used for card thumbnail backgrounds
export const EVENT_TYPE_COLOURS: Record<string, string> = {
  'jahrestagung': '#0c1a3c',
  'meet-experts': '#1a4a38',
  'webinar':      '#183060',
  'workshop':     '#3d2a0a',
}

export const EVENT_TYPE_LABELS: Record<string, string> = {
  'jahrestagung': 'Jahrestagung',
  'meet-experts': 'Meet the Experts',
  'webinar':      'Webinar',
  'workshop':     'Workshop',
}
