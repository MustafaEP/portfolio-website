'use client';

import React, { FormEvent, useRef, useState } from 'react';
import { useLang } from './LangProvider';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const { lang, t } = useLang();
  const contact = t.contact;
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'loading') return;

    const form = e.currentTarget;
    const data = {
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value.trim(),
      email:   (form.elements.namedItem('email')   as HTMLInputElement).value.trim(),
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim(),
    };

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('https://formspree.io/f/mojnblzr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data),
      });

      const body = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(body?.errors?.[0]?.message || 'Bir hata oluştu.');
      }

      setStatus('success');
      formRef.current?.reset();
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Bir hata oluştu.');
    }
  };

  const isLoading = status === 'loading';

  return (
    <section className="section" id="contact">
      <div className="reveal">
        <span className="section-label">{lang === 'tr' ? 'İletişim' : 'Contact'}</span>
        <h2 className="section-title">
          {contact.title.split(' ').slice(0, -1).join(' ')}{' '}
          <span className="gradient-text">{contact.title.split(' ').slice(-1)}</span>
        </h2>
      </div>

      <div className="contact-wrapper">
        {/* Left — contact info */}
        <div className="contact-info reveal" style={{ transitionDelay: '0.1s' }}>
          <h3>
            {lang === 'tr'
              ? 'Yeni projeler için her zaman heyecanlıyım.'
              : "I'm always excited about new projects."}
          </h3>
          <p>{contact.text}</p>

          <div className="contact-links">
            <a className="contact-link-item" href="mailto:portakalm11@gmail.com">
              <div className="contact-link-icon">✉️</div>
              <div>
                <div className="contact-link-text">portakalm11@gmail.com</div>
                <div className="contact-link-label">E-posta</div>
              </div>
            </a>
            <a
              className="contact-link-item"
              href="https://github.com/MustafaEP"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-link-icon">🐙</div>
              <div>
                <div className="contact-link-text">github.com/MustafaEP</div>
                <div className="contact-link-label">GitHub</div>
              </div>
            </a>
            <a
              className="contact-link-item"
              href="https://linkedin.com/in/mustafa-erhan-portakal-2142101ba"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-link-icon">💼</div>
              <div>
                <div className="contact-link-text">Mustafa Erhan Portakal</div>
                <div className="contact-link-label">LinkedIn</div>
              </div>
            </a>
          </div>
        </div>

        {/* Right — form */}
        <form
          ref={formRef}
          className="contact-form reveal"
          style={{ transitionDelay: '0.2s' }}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="form-group">
            <input
              name="name"
              type="text"
              placeholder={lang === 'tr' ? 'Adınız' : 'Your name'}
              required
              disabled={isLoading}
            />
          </div>
          <div className="form-group">
            <input
              name="email"
              type="email"
              placeholder={lang === 'tr' ? 'E-posta adresiniz' : 'Your email'}
              required
              disabled={isLoading}
            />
          </div>
          <div className="form-group">
            <input
              name="subject"
              type="text"
              placeholder={lang === 'tr' ? 'Konu (isteğe bağlı)' : 'Subject (optional)'}
              disabled={isLoading}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder={lang === 'tr' ? 'Mesajınız...' : 'Your message...'}
              required
              disabled={isLoading}
            />
          </div>

          {/* Status messages */}
          {status === 'success' && (
            <div className="form-status form-status--success">
              {lang === 'tr'
                ? '✓ Mesajınız iletildi! En kısa sürede dönüş yapacağım.'
                : '✓ Message sent! I\'ll get back to you soon.'}
            </div>
          )}
          {status === 'error' && (
            <div className="form-status form-status--error">
              {lang === 'tr'
                ? '✗ Şu anda iletişim formu servis sağlayıcısı (Formspree) devre dışı ya da hata veriyor. Lütfen doğrudan portakalm11@gmail.com adresine e-posta gönderin.'
                : '✗ The contact form provider (Formspree) is currently unavailable or returning an error. Please email me directly at portakalm11@gmail.com.'}
              {errorMsg && (
                <span> ({errorMsg})</span>
              )}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary btn-submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="form-spinner" />
            ) : null}
            {isLoading
              ? (lang === 'tr' ? 'Gönderiliyor...' : 'Sending...')
              : `${contact.cta} →`}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
