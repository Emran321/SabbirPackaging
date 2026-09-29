import gallery01 from '../assets/images/gallery-01.jpg'
import gallery02 from '../assets/images/gallery-02.jpg'
import gallery03 from '../assets/images/gallery-03.jpg'
import gallery04 from '../assets/images/gallery-04.jpg'
import gallery05 from '../assets/images/gallery-05.jpg'
import gallery06 from '../assets/images/gallery-06.jpg'

const galleryItems = [
  {
    title: 'Custom Printed Packaging',
    category: 'Packaging Portfolio',
    image: gallery01,
    className:
      'md:col-span-2 lg:col-span-7 lg:row-span-2 min-h-[420px] lg:min-h-[560px]',
  },
  {
    title: 'Product Packaging',
    category: 'Printed Box',
    image: gallery02,
    className: 'lg:col-span-5 min-h-[260px]',
  },
  {
    title: 'Branded Packaging',
    category: 'Custom Work',
    image: gallery03,
    className: 'lg:col-span-5 min-h-[280px]',
  },
  {
    title: 'Pizza Box Packaging',
    category: 'Food Packaging',
    image: gallery04,
    className: 'lg:col-span-4 min-h-[280px]',
  },
  {
    title: 'Battery Packaging',
    category: 'Industrial Packaging',
    image: gallery05,
    className: 'lg:col-span-4 min-h-[280px]',
  },
  {
    title: 'Custom Product Box',
    category: 'Printed Packaging',
    image: gallery06,
    className: 'lg:col-span-4 min-h-[280px]',
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
              Selected packaging work and product presentation.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-400">
            A selection of packaging designs and printed product boxes created
            for different product categories and business requirements.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {galleryItems.map((item, index) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 ${item.className}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/5" />

              <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/30 text-sm font-bold backdrop-blur">
                0{index + 1}
              </div>

              <div className="relative flex h-full min-h-[inherit] flex-col justify-end p-7 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
                  {item.category}
                </p>

                <h3 className="mt-2 max-w-lg text-2xl font-bold sm:text-3xl">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection