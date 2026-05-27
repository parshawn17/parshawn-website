const form   = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        status.textContent = 'Message sent. I'll be in touch soon.';
        form.reset();
      } else {
        status.textContent = 'Something went wrong. Please try emailing directly.';
      }
    } catch {
      status.textContent = 'Network error. Please try again.';
    } finally {
      btn.textContent = 'Send message';
      btn.disabled = false;
    }
  });
}
