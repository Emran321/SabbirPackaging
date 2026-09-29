import { MessageCircle, Phone } from 'lucide-react'

const FloatingActions = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/8801712057525"
        target="_blank"
        rel="noreferrer"
        aria-label="Contact on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:-translate-y-1 hover:bg-green-400"
      >
        <MessageCircle size={24} />
      </a>

      <a
        href="tel:+8801712057525"
        aria-label="Call Sabbir Printing and Packaging"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-slate-950 shadow-xl transition hover:-translate-y-1 hover:bg-amber-300"
      >
        <Phone size={22} />
      </a>
    </div>
  )
}

export default FloatingActions