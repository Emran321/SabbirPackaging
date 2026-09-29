const galleryItems = [
  {
    title: 'Custom Printed Packaging',
    category: 'Product',
    className:
      'md:col-span-2 lg:col-span-7 lg:row-span-2 min-h-[420px] lg:min-h-[560px]',
    gradient: 'from-amber-400 via-amber-500 to-orange-500',
  },
  {
    title: 'Corrugated Carton',
    category: 'Packaging',
    className: 'lg:col-span-5 min-h-[260px]',
    gradient: 'from-slate-700 to-slate-900',
  },
  {
    title: 'Production Process',
    category: 'Factory',
    className: 'lg:col-span-5 min-h-[280px]',
    gradient: 'from-slate-800 via-slate-900 to-black',
  },
  {
    title: 'Finished Packaging',
    category: 'Quality',
    className: 'lg:col-span-4 min-h-[280px]',
    gradient: 'from-amber-500 to-yellow-600',
  },
  {
    title: 'Brand Packaging',
    category: 'Printing',
    className: 'lg:col-span-4 min-h-[280px]',
    gradient: 'from-zinc-700 to-slate-950',
  },
  {
    title: 'Custom Box Solutions',
    category: 'Custom Work',
    className: 'lg:col-span-4 min-h-[280px]',
    gradient: 'from-orange-500 to-amber-700',
  },
]

const GallerySection = () => {
  return (
    <section
      id="gallery"
      className="bg-slate-950 px-5 py-20 text-white sm:px-6 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              Our Work
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              A closer look at our packaging and production work.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-400">
            Product, factory and finished-work photography will be displayed
            here to give buyers a clear view of our packaging capabilities.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {galleryItems.map((item, index) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${item.gradient} ${item.className}`}
            >
              <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/20" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/20 text-sm font-bold backdrop-blur">
                0{index + 1}
              </div>

              <div className="relative flex h-full min-h-[inherit] flex-col justify-end p-7 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
                  {item.category}
                </p>

                <h3 className="mt-2 max-w-lg text-2xl font-bold sm:text-3xl">
                  {item.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-white/80">
                  View work
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-6 text-slate-400">
          Current visuals are placeholders. Final website photography should use
          real product, factory, machinery and completed packaging images.
        </div>
      </div>
    </section>
  )
}

export default GallerySection