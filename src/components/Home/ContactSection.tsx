import React from 'react';

type ContactSectionProps = {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

const CircleIcon: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="flex h-12 w-12 items-center justify-center rounded-full ring-4 ring-white bg-[#1F2429] text-white shadow">
    {children ?? (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2C7.03 2 3 6.03 3 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 4a2 2 0 110 4 2 2 0 010-4zm0 12a7 7 0 01-6-3.3c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1A7 7 0 0112 18z" />
      </svg>
    )}
  </div>
);

const Field: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input
    {...props}
    className={
      'w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F2429]/60 focus:border-[#1F2429]/60 shadow-sm placeholder:text-gray-400 ' +
      (props.className || '')
    }
  />
);

const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => (
  <textarea
    {...props}
    className={
      'w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F2429]/60 focus:border-[#1F2429]/60 shadow-sm placeholder:text-gray-400 ' +
      (props.className || '')
    }
  />
);

const ContactSection: React.FC<ContactSectionProps> = ({ onSubmit }) => {
  return (
    <section className="container mx-auto px-4 py-10 sm:py-12">
      <div className="max-w-5xl mx-auto rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/10 p-6 sm:p-8 md:p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left info */}
          <div className="space-y-8 text-left">
            <div className="flex items-start gap-4">
              <CircleIcon />
              <div>
                <div className="font-extrabold text-gray-900 text-left">Head Office</div>
                <div className="mt-1 text-sm text-gray-700 text-left">54 Jason Moyo | Three Anchor House<br/>Harare | Zimbabwe</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CircleIcon>
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 4h16v16H4z" />
                  <path d="M4 6l8 7 8-7" />
                </svg>
              </CircleIcon>
              <div className="text-left">
                <div className="font-extrabold text-gray-900 text-left">Email Us</div>
                <div className="mt-1 text-sm text-gray-700 text-left">projects@designculture.co.zw<br/>brian@designculture.co.zw</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CircleIcon>
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011.1-.2c1 .4 2 .6 3 .6a1 1 0 011 1V20a1 1 0 01-1 1C11.4 21 3 12.6 3 2a1 1 0 011-1h2.4a1 1 0 011 1c0 1 .2 2 .6 3a1 1 0 01-.2 1.1L6.6 10.8z" />
                </svg>
              </CircleIcon>
              <div className="text-left">
                <div className="font-extrabold text-gray-900 text-left">Call Us</div>
                <div className="mt-1 text-sm text-gray-700 text-left">+263 864 428 3067 | +263 712 257 579<br/>+263 788 261 330</div>
              </div>
            </div>

            <div className="text-left">
              <div className="font-extrabold text-gray-900 text-left">Follow us on social media</div>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/designculturezw/reels/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full ring-4 ring-white bg-[#111827] text-white shadow"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3Zm10 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"/></svg>
                </a>
                <a
                  href="https://www.tiktok.com/@design.culture.zw"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex h-10 w-10 items-center justify-center rounded-full ring-4 ring-white bg-[#111827] text-white shadow"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M14.5 2h2.2c.2 1.2 1 2.3 2.1 3 1 .6 2 .8 3.2.8v2.2c-1.4 0-2.8-.4-4.1-1.2v6.8c0 3.7-3 6.6-6.6 6.6S4.7 17.3 4.7 13.6c0-3.1 2.1-5.7 5-6.4v2.4c-1.6.6-2.7 2.1-2.7 4 0 2.3 1.9 4.2 4.2 4.2s4.2-1.9 4.2-4.2V2z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/p/Design-Culture-ZW-100063802613214/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full ring-4 ring-white bg-[#111827] text-white shadow"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.64-1.3 1.3V12h2.3l-.37 3h-1.93v7A10 10 0 0 0 22 12Z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div>
            <h3 className="text-center text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">Send us a message</h3>
            <form
              action="https://formsubmit.co/Info@desigculture.co.zw"
              method="POST"
              className="mt-6 space-y-4 text-left"
              onSubmit={onSubmit}
            >
              {/* FormSubmit config */}
              <input type="hidden" name="_subject" value="New website enquiry — Design Culture" />
              <input type="hidden" name="_captcha" value="true" />
              {/* Honeypot */}
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-semibold text-gray-800 text-left">Name</label>
                  <Field placeholder="Name" name="name" required />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-gray-800 text-left">Company</label>
                  <Field placeholder="Company" name="company" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-semibold text-gray-800 text-left">Phone</label>
                  <Field placeholder="Phone" name="phone" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-gray-800 text-left">Email</label>
                  <Field placeholder="Email" name="email" type="email" required />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-800 text-left">Subject</label>
                <Field placeholder="Subject" name="subject" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-800 text-left">Message</label>
                <TextArea placeholder="Message" name="message" rows={5} required />
              </div>
              <div className="pt-2">
                <button type="submit" className="w-full rounded-full bg-[#1F2429] px-6 py-3 text-white font-semibold shadow hover:bg-[#1A1E22]">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
