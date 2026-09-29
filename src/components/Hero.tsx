import HeroVisual from './HeroVisual'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-28 text-white">
      <div className="absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="text-sm font-medium text-slate-300">
              Custom Printing & Packaging Solutions
            </span>
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Packaging That
            <span className="block text-amber-400">
              Builds Your Brand.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Professional printing and packaging solutions designed for
            businesses that care about presentation, protection and quality.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#products"
              className="rounded-full bg-amber-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-300"
            >
              Explore Products
            </a>

            <a
              href="#quote"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
            >
              Request a Quote
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-bold text-white">Custom</p>
              <p className="mt-1 text-sm text-slate-400">
                Packaging Solutions
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-bold text-white">Quality</p>
              <p className="mt-1 text-sm text-slate-400">
                Focused Production
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-bold text-white">B2B</p>
              <p className="mt-1 text-sm text-slate-400">
                Business Support
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <HeroVisual />
        </div>


      </div>
    </section>
  )
}

export default Hero