// FAQs for the About & FAQ page. `a` may contain simple HTML links; the
// FAQPage structured data (JSON-LD) uses a plain-text version automatically.
import { TOUR_URL } from './site.js';

const tourLink = (text) => `<a href="${TOUR_URL}" class="font-semibold text-white underline decoration-red underline-offset-2 hover:text-red">${text}</a>`;

export const faqs = [
  {
    q: 'How do I get started?',
    a: `Start with a ${tourLink('Studio Tour')}! This is the first step for all new DSA drummers. We’ll meet you, show you around the studio, learn a little about your goals, and walk you through the programs and next steps.`,
  },
  {
    q: 'Do I need my own drum kit?',
    a: 'Nope! You don’t need a drumset at home to get started. You’ll have access to drums during your DSA lessons, plus the opportunity to take advantage of our DSA Practice Lab.',
  },
  {
    q: 'Should I bring my own drumsticks?',
    a: 'Yes! We ask all DSA drummers to bring their own pair of drumsticks to their lessons and classes.',
  },
  {
    q: 'Do you have an age limit?',
    a: `We work with drummers across a wide range of ages. Our current availability for new students is ages 8 and up, based on current instructor and program openings. Have a younger drummer? Join our ${tourLink('Interested List')} and we’ll keep you in mind as future openings become available.`,
  },
  {
    q: 'Do you take walk-in tours?',
    a: 'We don’t offer walk-in tours. All studio visits are by appointment so we can keep classes running smoothly and give you our full attention when you visit.',
  },
  {
    q: 'How large are your group classes?',
    a: 'Our DSA Drum Classes are intentionally kept small, typically with 4–6 drummers per class. This gives instructors the opportunity to work with the group while still being able to coach each drummer throughout the class.',
  },
  {
    q: 'Can family members join the same drum class?',
    a: 'Usually, no—and there’s a good reason for that. When we build classes, we consider things like age, physical development, current ability, experience, and learning pace. Two family members may have completely different needs, even if they’re starting at the same time.',
  },
  {
    q: 'I don’t want to play in a band. Is DSA for me?',
    a: 'Absolutely! You don’t need to join a band, become a professional musician, or change careers to enjoy playing the drums. Maybe you want a new hobby, want to improve your skills, or simply think playing drums would be a lot of fun, and you’re right—it’s a lot of fun… so we’ll see you on the drum set.',
  },
  {
    q: 'Do you teach other percussion instruments?',
    a: 'Yes! We offer instruction on djembe, congas, and cajón as well. That said, drumset is our main squeeze. DSA is a 100% drums-focused studio, with the drumset at the heart of what we do.',
  },
  {
    q: 'Do you teach snare or drumline?',
    a: 'We don’t offer a dedicated snare or drumline class, but we do teach many of the fundamental techniques and skills used for snare playing. Over the years, we’ve also helped prepare several middle and high school drummers to audition for and participate in their school marching band programs.',
  },
  {
    q: 'Do you offer trial lessons?',
    a: 'We don’t offer trial lessons. Instead, DSA is structured around 4-week Drum Sessions, giving new drummers a chance to experience our teaching approach, curriculum, studio environment, and weekly routine over a real four-week session. We believe that’s a much better way to experience DSA than trying to make a decision based on one lesson.',
  },
  {
    q: 'Do you have recitals or performance opportunities?',
    a: 'We don’t follow a traditional recital format. Instead, DSA has a Gig Program that gives eligible DSA Class Drummers opportunities to prepare for and perform on stage at in-house and community events. It’s part of the larger DSA experience—learn, prepare, then get out there and play!',
  },
  {
    q: 'Do I need experience to start?',
    a: 'No, not at all! You have to start somewhere, and DSA is the spot.',
  },
  {
    q: 'I already know how to play. Is DSA right for me?',
    a: 'Absolutely. DSA is for drummers. If you already play, we can help you continue developing through more advanced grooves, technique, reading, musical concepts, coordination, and performance work. We’ll look at where you are now and help determine the best way to keep you moving forward.',
  },
  {
    q: 'Am I too old to drum?',
    a: 'Absolutely not! We’re proud to say that DSA has a large and growing number of adult drummers. It’s never too late to pick up the sticks and start playing!',
  },
];

const stripTags = (html) => html.replace(/<[^>]+>/g, '');

/** schema.org FAQPage object for JSON-LD. */
export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: stripTags(f.a) },
  })),
};
