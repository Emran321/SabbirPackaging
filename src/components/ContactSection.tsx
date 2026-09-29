import {
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white px-5 py-20 text-slate-950 sm:px-6 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            Contact Us
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s discuss your packaging requirements.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Contact Sabbir Printing & Packaging to discuss custom packaging,
            printing, quantities and other business requirements.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <a
            href="tel:+8801712057525"
            className="group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-amber-400 hover:bg-white hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-amber-400">
              <Phone size={22} />
            </div>

            <h3 className="mt-5 text-lg font-bold">Call Us</h3>

            <p className="mt-2 text-slate-600">
              +880 1712-057525
            </p>
          </a>

          <a
            href="https://wa.me/8801712057525"
            target="_blank"
            rel="noreferrer"
            className="group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-amber-400 hover:bg-white hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-amber-400">
              <MessageCircle size={22} />
            </div>

            <h3 className="mt-5 text-lg font-bold">WhatsApp</h3>

            <p className="mt-2 text-slate-600">
              Message us directly
            </p>
          </a>

          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-amber-400">
              <MapPin size={22} />
            </div>

            <h3 className="mt-5 text-lg font-bold">Location</h3>

            <p className="mt-2 leading-7 text-slate-600">
              Matuail / Mirdhabari
              <br />
              Dhaka, Bangladesh
            </p>
          </div>

          <a
            href="https://www.facebook.com/sabbirprinting.packeging/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-amber-400 hover:bg-white hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-amber-400">
              <ExternalLink size={22} />
            </div>

            <h3 className="mt-5 text-lg font-bold">Facebook</h3>

            <p className="mt-2 text-slate-600">
              Visit our Facebook page
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection