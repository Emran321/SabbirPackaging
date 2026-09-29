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
      'md:col-span-2 lg:col-span-7 min-h-[340px] lg:min-h-[420px]',
    imageClassName: 'object-cover object-center',
  },
  {
    title: 'Product Packaging',
    category: 'Printed Box',
    image: gallery02,
    className: 'lg:col-span-5 min-h-[200px] lg:min-h-[200px]',
    imageClassName: 'object-cover object-center',
  },
  {
    title: 'Branded Packaging',
    category: 'Custom Work',
    image: gallery03,
    className: 'lg:col-span-5 min-h-[200px] lg:min-h-[200px]',
    imageClassName: 'object-cover object-center',
  },
  {
    title: 'Pizza Box Packaging',
    category: 'Food Packaging',
    image: gallery04,
    className: 'lg:col-span-4 min-h-[210px]',
    imageClassName: 'object-cover object-center',
  },
  {
    title: 'Battery Packaging',
    category: 'Industrial Packaging',
    image: gallery05,
    className: 'lg:col-span-4 min-h-[210px]',
    imageClassName: 'object-cover object-center',
  },
  {
    title: 'Custom Product Box',
    category: 'Printed Packaging',
    image: gallery06,
    className: 'lg:col-span-4 min-h-[210px]',
    imageClassName: 'object-cover object-center',
  },
]

const GallerySection = () => {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 bg-slate-950 px-5 py-20 text-white sm:px-6 lg:py-24"
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

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {galleryItems.map((item, index) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 ${item.className}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className={`absolute inset-0 h-full w-full transition duration-700 group-hover:scale-[1.03] ${item.imageClassName}`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/5" />

              <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/35 text-xs font-bold backdrop-blur">
                0{index + 1}
              </div>

              <div className="relative flex h-full min-h-[inherit] flex-col justify-end p-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-300">
                  {item.category}
                </p>

                <h3 className="mt-1.5 max-w-lg text-xl font-bold sm:text-2xl">
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