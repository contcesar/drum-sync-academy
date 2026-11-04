/**
 * forms.ts: the single integration point for form submissions.
 *
 * Today every form posts to Netlify Forms (the site's existing handler):
 * the form markup is in the static HTML with data-netlify="true", so Netlify
 * detects it at deploy time, and we POST url-encoded data to "/".
 *
 * To move to another service (Formspree, Basin, a CRM webhook, etc.), change
 * ENDPOINT and/or the body format in `submitForm` below. Nothing else needs to change.
 *
 * TODO(DSA-form-endpoint): confirm the site is hosted on Netlify with form
 * detection on, and set up email notifications for the "studio-tour" form
 * (Netlify → Forms → Form notifications) so Kyle and Karina get each request.
 */

const ENDPOINT = '/';

/**
 * Serialize a form. Checkbox groups (several inputs with the same name) are
 * joined into one comma-separated value so they read cleanly in Netlify's
 * submission view.
 */
export function serializeForm(form: HTMLFormElement): URLSearchParams {
  const data = new FormData(form);
  const out = new URLSearchParams();
  for (const key of new Set(data.keys())) {
    const values = data.getAll(key).map(String).filter((v) => v !== '');
    out.set(key, values.join(', '));
  }
  return out;
}

/** True if the honeypot was filled in (i.e. probably a bot). */
export function isBot(form: HTMLFormElement): boolean {
  const trap = form.querySelector<HTMLInputElement>('input[name="bot-field"]');
  return !!trap && trap.value.trim() !== '';
}

export async function submitForm(form: HTMLFormElement): Promise<void> {
  // Quietly "succeed" for bots without sending anything.
  if (isBot(form)) return;

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: serializeForm(form).toString(),
  });
  if (!res.ok) throw new Error(`Form submit failed: ${res.status}`);
}
