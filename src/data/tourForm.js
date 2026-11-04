// Studio Tour request form: field names, labels, and option values.
// Edit here to change what the form asks. The `name` values are what show up
// in Netlify Forms submissions, so changing a name starts a new column there.
// TODO(DSA-confirm): final field list and option wording.

export const TOUR_FORM_NAME = 'studio-tour';

/** Under this age, the form shows the Interested List note. */
export const MIN_AGE = 8;

export const tourForm = {
  contactName: {
    name: 'name',
    label: 'Your name',
    hint: 'Parent or prospective student',
  },
  email: { name: 'email', label: 'Email' },
  phone: { name: 'phone', label: 'Phone' },
  drummer: {
    name: 'drummer',
    label: 'Who is the drummer?',
    options: [
      { value: 'Myself', label: 'Myself' },
      { value: 'My child', label: 'My child' },
      { value: 'Other', label: 'Other' },
    ],
  },
  age: {
    name: 'student_age',
    // Label changes with the "Who is the drummer?" answer.
    labels: {
      default: "Student's age",
      Myself: 'Your age',
      'My child': "Your child's age",
      Other: "Student's age",
    },
    underMinNote:
      'Our current availability is ages 8 and up. Submit anyway and we’ll add you to our Interested List.',
  },
  experience: {
    name: 'experience',
    label: 'Drumming experience',
    options: [
      'Completely new to drumming',
      'Beginner with some experience',
      'Returning to drumming after a break',
      'Currently playing and looking to improve',
      'Experienced drummer seeking advanced instruction',
    ],
  },
  reason: {
    name: 'reason',
    label: 'Primary reason for wanting lessons',
    options: [
      'New hobby',
      'Build skills',
      'Prepare for school band or audition',
      'Get back into drumming',
      'Other',
    ],
    otherName: 'reason_other',
    otherLabel: 'Tell us your reason',
  },
  programs: {
    name: 'program_interest',
    label: 'Program interest',
    options: [
      'Drum Classes',
      'PDI',
      // TODO(DSA-confirm): pack name.
      'Education/Play Pack',
      'Not sure yet — help me decide',
    ],
  },
  availability: {
    name: 'availability',
    label: 'General availability',
    options: ['Weekday afternoons', 'Weekday evenings', 'Weekends'],
  },
  notes: { name: 'notes', label: 'Anything else we should know?' },
};

export const tourFormCopy = {
  success: 'Thanks! Kyle or Karina will reach out personally, usually within 48 hours.',
  error:
    'Something went wrong sending your request. Please try again, or call or email us directly.',
};
