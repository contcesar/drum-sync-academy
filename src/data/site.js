// Site-wide business details. Edit these in one place and they update in the
// nav, footer, contact page, and meta tags.

/**
 * THE single conversion destination. Every primary CTA on the site
 * ("Request a Studio Tour", "Start Here", "Request a Tour", "Get Started",
 * "Take the First Step") links here. Change it once, it changes everywhere.
 */
export const TOUR_URL = '/studio-tour';

/** Feature flags. Flip a value here to turn a feature on or off sitewide. */
export const features = {
  // Timed popup (src/components/Popup.astro). Off for launch; kept for future
  // promotions, events, email signups, or seasonal campaigns.
  popup: false,
};

export const site = {
  // Brand name as used on the existing site. Short form: "DSA".
  // TODO(DSA-confirm): client doc says "Drum Sync Academy", meeting notes say "DrumSync".
  name: 'Drum Sync Academy',
  shortName: 'DSA',
  tagline: '100% Drums. 100% Dedicated.',
  description:
    'Drum Sync Academy is a 100% drums-only studio in Rancho Cucamonga, CA. Not just drum lessons: a drum education and a drumming experience for kids (8+), teens, and adults.',
  address: {
    line1: '9559 Center Ave',
    line2: 'Suite A',
    city: 'Rancho Cucamonga',
    region: 'CA',
    postal: '91730',
  },
  phone: '(909) 948-0212',
  phoneHref: 'tel:+19099480212',
  email: 'drum@drumsyncacademy.com',
  hours: [
    { days: 'Mon – Wed', time: '12:00 PM – 9:00 PM' },
    { days: 'Thursday', time: '1:00 PM – 9:00 PM' },
    { days: 'Friday', time: '1:00 PM – 6:30 PM' },
    { days: 'Sat – Sun', time: 'Closed' },
  ],
  social: {
    instagram: 'https://instagram.com/drumsyncacademy',
    facebook: 'https://www.facebook.com/DrumSyncAcademy',
    youtube: 'https://www.youtube.com/channel/UCc2eCkt_EnB3Lub9sSI39gw',
  },
};

/** Main navigation (header + footer). */
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Programs & Pricing', href: '/programs' },
  { label: 'Events', href: '/events' },
  { label: 'About & FAQ', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default site;
