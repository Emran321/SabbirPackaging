import { MessageCircle, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-950 px-5 pt-16 text-white sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 text-lg font-black text-slate-950">
                SP
                <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-slate-950 bg-white" />
              </div>

              <div>
                <p className="font-extrabold tracking-tight">
                  Sabbir Printing
                </p>

                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  & Packaging
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              Printing and packaging solutions designed to help businesses
              protect their products and present their brands professionally.
            </p>

            <a
              href="https://www.facebook.com/sabbirprinting.packeging/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="mt-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-amber-400 hover:text-amber-400"
            >
              <MessageCircle size={20} />
            </a>
          </div>

          <div>
            <h3 className="font-bold">Company</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
              <a href="#about" className="transition hover:text-white">
                About Us
              </a>

              <a href="#products" className="transition hover:text-white">
                Products
              </a>

              <a href="#industries" className="transition hover:text-white">
                Industries
              </a>

              <a href="#gallery" className="transition hover:text-white">
                Our Work
              </a>

              <a href="#quote" className="transition hover:text-white">
                Request a Quote
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Contact</h3>

            <div className="mt-5 space-y-4 text-sm text-slate-400">
              <a
                href="tel:+8801712057525"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <Phone size={17} className="mt-0.5 shrink-0 text-amber-400" />
                <span>+880 1712-057525</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-amber-400"
                />

                <span>
                  Matuail / Mirdhabari
                  <br />
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Sabbir Printing & Packaging.
            All rights reserved.
          </p>

          <p>
            Printing • Packaging • Business Solutions
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer