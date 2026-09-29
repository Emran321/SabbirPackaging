import {
  Package,
  Factory,
  Palette,
  BadgeCheck,
} from 'lucide-react'

const capabilities = [
  {
    title: 'Custom Packaging',
    description:
      'Packaging solutions tailored around your product size, material, print and presentation requirements.',
    icon: Package,
  },
  {
    title: 'Bulk Production',
    description:
      'Reliable production support for businesses that need consistent packaging in larger quantities.',
    icon: Factory,
  },
  {
    title: 'Printing & Branding',
    description:
      'Custom printing options to help your packaging communicate your brand clearly and professionally.',
    icon: Palette,
  },
  {
    title: 'Quality Focus',
    description:
      'A production approach focused on consistency, presentation and dependable packaging quality.',
    icon: BadgeCheck,
  },
]

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-slate-950 px-5 py-20 text-white sm:px-6 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            About Us
          </p>

          <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Packaging solutions designed for real business needs.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Sabbir Printing & Packaging provides custom printing and packaging
            solutions for businesses that need practical, professional and
            brand-focused packaging.
          </p>

          <p className="mt-5 max-w-xl leading-7 text-slate-400">
            From product protection to presentation, our goal is to help
            businesses create packaging that supports both their operations
            and their brand identity.
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            <div>
              <p className="text-3xl font-black text-amber-400">B2B</p>
              <p className="mt-1 text-sm text-slate-400">
                Business focused
              </p>
            </div>

            <div className="h-12 w-px bg-white/10" />

            <div>
              <p className="text-3xl font-black text-amber-400">Custom</p>
              <p className="mt-1 text-sm text-slate-400">
                Made to requirement
              </p>
            </div>

            <div className="h-12 w-px bg-white/10" />

            <div>
              <p className="text-3xl font-black text-amber-400">Quality</p>
              <p className="mt-1 text-sm text-slate-400">
                Production focused
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              Discuss Your Packaging
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {capabilities.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-amber-400/40 hover:bg-white/[0.07]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 text-slate-950 transition group-hover:scale-105">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AboutSection