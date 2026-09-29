import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Industries', href: '#industries' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ]

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] border-b border-white/10 bg-slate-950/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">
          <a
            href="#"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400 text-lg font-black tracking-tight text-slate-950 shadow-lg shadow-amber-400/20">
              SP
              <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-slate-950 bg-white" />
            </div>

            <div className="leading-tight">
              <p className="font-extrabold tracking-tight text-white">
                Sabbir Printing
              </p>

              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                & Packaging
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#quote"
            className="hidden rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 lg:inline-flex"
          >
            Request a Quote
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative z-[120] flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white transition hover:bg-white/5 lg:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm lg:hidden"
          />

          <div className="fixed inset-x-0 top-20 z-[90] px-4 lg:hidden">
            <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl">
              <nav className="flex flex-col p-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-4 font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="#quote"
                  onClick={closeMenu}
                  className="mt-3 flex justify-center rounded-xl bg-amber-400 px-5 py-4 font-semibold text-slate-950 transition hover:bg-amber-300"
                >
                  Request a Quote
                </a>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Navbar