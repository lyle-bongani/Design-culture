import React from 'react';

const InfoRow: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gray-900 text-white ring-4 ring-white shadow">
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
      <div className="mt-1 text-sm text-gray-700">{children}</div>
    </div>
  </div>
);

const ContactCard: React.FC = () => {
  return (
    <section className="container mx-auto px-4 -mt-10 sm:-mt-14 md:-mt-16 pb-10 relative z-10">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white ring-1 ring-black/10 shadow-[0_12px_40px_rgba(0,0,0,0.16)]">
        <div className="grid grid-cols-1 gap-8 p-6 sm:p-8 md:grid-cols-2">
          {/* Left: contact details */}
          <div className="text-left">
            <h3 className="text-lg font-extrabold text-gray-900">Head Office</h3>
            <p className="mt-1 text-sm text-gray-600">54 Jason Moyo | Three Anchor House<br/>Harare | Zimbabwe</p>

            <div className="mt-6 space-y-6">
              <InfoRow
                title="Email Us"
                icon={
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
                  </svg>
                }
              >
                <div>
                  <div>projects@designculture.co.zw</div>
                  <div>bridget@designculture.co.zw</div>
                </div>
              </InfoRow>

              <InfoRow
                title="Call us"
                icon={
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l1.83-1.83a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.56.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C11.85 22 2 12.15 2 1a1 1 0 0 1 1-1h3.12a1 1 0 0 1 1 1c0 1.23.2 2.44.57 3.56a1 1 0 0 1-.24 1.02l-1.85 1.85Z" />
                  </svg>
                }
              >
                <div>
                  <div>+263 864 428 3067 | +263 712 557 579</div>
                  <div>+263 788 211 330</div>
                </div>
              </InfoRow>

              <div className="pt-2">
                <h4 className="text-sm font-semibold text-gray-900">Follow us on social media</h4>
                <div className="mt-3 flex items-center gap-3 text-gray-900">
                  <a href="https://facebook.com" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-black/10 hover:bg-gray-900 hover:text-white transition">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.64-1.3 1.3V12h2.3l-.37 3h-1.93v7A10 10 0 0 0 22 12Z"/></svg>
                  </a>
                  <a href="https://twitter.com" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-black/10 hover:bg-gray-900 hover:text-white transition">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.2-.7.5-1.7.9-2.6 1.1C18 4.6 17 4 15.8 4c-2.2 0-3.9 2.1-3.4 4.2-3.1-.1-5.8-1.6-7.6-3.8C4.1 6 4.6 8 6.2 9c-.6 0-1.2-.2-1.8-.5 0 1.8 1.3 3.4 3.2 3.8-.6.2-1.3.2-1.9.1.5 1.6 2 2.7 3.8 2.8C7.4 16 5.7 16.6 4 16.5c1.8 1.1 3.9 1.8 6.1 1.8 7.4 0 11.6-6.3 11.4-12 0-.2 0-.3 0-.5.8-.5 1.5-1.2 2.1-2Z"/></svg>
                  </a>
                  <a href="https://instagram.com" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-black/10 hover:bg-gray-900 hover:text-white transition">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3Zm10 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <h3 className="text-lg font-extrabold text-gray-900">Send us a message</h3>
            <form
              action="https://formsubmit.co/Info@desigculture.co.zw"
              method="POST"
              className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {/* FormSubmit config */}
              <input type="hidden" name="_subject" value="New website enquiry — Design Culture" />
              <input type="hidden" name="_captcha" value="true" />
              {/* Honeypot field */}
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
              <div>
                <label className="sr-only">Name</label>
                <input name="name" required className="w-full rounded-md ring-1 ring-black/10 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Name" />
              </div>
              <div>
                <label className="sr-only">Company</label>
                <input name="company" className="w-full rounded-md ring-1 ring-black/10 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Company" />
              </div>
              <div>
                <label className="sr-only">Phone</label>
                <input name="phone" type="tel" className="w-full rounded-md ring-1 ring-black/10 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Phone" />
              </div>
              <div>
                <label className="sr-only">Email</label>
                <input name="email" type="email" required className="w-full rounded-md ring-1 ring-black/10 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Email" />
              </div>
              <div className="sm:col-span-2">
                <label className="sr-only">Subject</label>
                <input name="subject" className="w-full rounded-md ring-1 ring-black/10 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Subject" />
              </div>
              <div className="sm:col-span-2">
                <label className="sr-only">Message</label>
                <textarea name="message" required rows={4} className="w-full rounded-md ring-1 ring-black/10 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Message" />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900">
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

export default ContactCard;
