// Program + tuition data for the Programs & Pricing page (and the homepage
// teaser, which shows names/blurbs only, never prices).
//
// Nothing here that is marked TODO(DSA-confirm) has been confirmed by the
// client. Replace the bracketed placeholders once DSA signs off.

/** Placeholder shown wherever a dollar figure is not yet confirmed. */
// TODO(DSA-confirm): every price on the site renders this until real tuition is provided.
export const PRICE_TBD = '[PRICE TBD]';

export const SESSION_LABEL = '4-Week Drum Session';

/** Unit shown next to every price. */
// TODO(DSA-confirm): confirm tuition is quoted per 4-Week Drum Session (vs. monthly, per lesson, etc.).
export const PRICE_UNIT = 'per 4-Week Drum Session';

export const programs = {
  classes: {
    id: 'classes',
    name: 'DSA Drum Classes',
    short: 'Drum Classes',
    tagline: 'Small-group education with the energy of drumming together.',
    teaser:
      'Small groups, typically 4–6 drummers, learning, playing, and building confidence together.',
    groupSize: 'Typically 4–6 drummers per class',
    benefits: [
      'Learn alongside other drummers',
      'Build performance and collaboration skills',
      'Build confidence behind the kit',
      'Be part of a drum community',
      'Feel the energy of playing together',
    ],
    // TODO(DSA-confirm): price per 4-Week Drum Session.
    price: PRICE_TBD,
  },
  pdi: {
    id: 'pdi',
    name: 'DSA PDI',
    short: 'PDI',
    fullName: 'Personal Drum Instruction',
    tagline: 'One-on-one drum education with a DSA instructor.',
    teaser: 'Personal Drum Instruction: one-on-one lessons in 30- or 60-minute formats.',
    tiers: [
      {
        name: 'DSA Basic PDI',
        length: '30-minute lessons',
        // TODO(DSA-confirm): positioning copy for Basic vs. Pro.
        suits:
          'A focused weekly lesson. A great fit for newer drummers, younger students, and anyone building a steady practice routine.',
        // TODO(DSA-confirm): Basic PDI price.
        price: PRICE_TBD,
      },
      {
        name: 'DSA Pro PDI',
        length: '60-minute lessons',
        suits:
          'Twice the lesson time to dig deeper. A great fit for experienced players, advanced material, and drummers who want more time with their instructor each week.',
        // TODO(DSA-confirm): Pro PDI price.
        price: PRICE_TBD,
      },
    ],
  },
  pack: {
    id: 'pack',
    // TODO(DSA-confirm): official name ("Education Pack" vs. "Play Pack").
    name: 'DSA Education Pack',
    short: 'Education Pack',
    tagline: 'PDI + Drum Classes for a more complete drum education.',
    teaser:
      'Individual instruction plus group participation: the most complete way to experience DSA.',
    benefits: [
      'Individual instruction plus group participation',
      // TODO(DSA-confirm): savings amount vs. buying PDI + Classes separately.
      'Saves approximately [$65 — TBD] compared with buying them separately',
      // TODO(DSA-confirm): DSA Practice Lab access terms.
      'Access to designated DSA Practice Lab playtime [terms TBD]',
    ],
    // TODO(DSA-confirm): Education Pack price.
    price: PRICE_TBD,
  },
};

/** Rows for the tuition comparison table. */
export const tuitionRows = [
  {
    program: programs.classes.name,
    format: 'Small group (typically 4–6 drummers)',
    href: '#classes',
    price: programs.classes.price,
  },
  {
    program: programs.pdi.tiers[0].name,
    format: 'One-on-one · 30-minute lessons',
    href: '#pdi',
    price: programs.pdi.tiers[0].price,
  },
  {
    program: programs.pdi.tiers[1].name,
    format: 'One-on-one · 60-minute lessons',
    href: '#pdi',
    price: programs.pdi.tiers[1].price,
  },
  {
    program: programs.pack.name,
    format: 'PDI + Drum Classes + Practice Lab playtime',
    href: '#pack',
    price: programs.pack.price,
    featured: true,
  },
];
