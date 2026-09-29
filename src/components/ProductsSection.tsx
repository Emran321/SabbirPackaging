import {
  Box,
  PackageCheck,
  Scissors,
  Utensils,
  Truck,
  Boxes,
} from 'lucide-react'

const products = [
  {
    title: 'Corrugated Cartons',
    description:
      'Strong and reliable corrugated packaging for shipping, storage and product protection.',
    tag: 'Industrial',
    icon: Box,
  },
  {
    title: 'Printed Packaging Boxes',
    description:
      'Custom printed boxes that help your products look professional and strengthen your brand.',
    tag: 'Branding',
    icon: PackageCheck,
  },
  {
    title: 'Die-Cut Boxes',
    description:
      'Custom-shaped packaging solutions designed around your product size and presentation needs.',
    tag: 'Custom',
    icon: Scissors,
  },
  {
    title: 'Food Packaging',
    description:
      'Practical and attractive packaging solutions for food, bakery and consumer products.',
    tag: 'Food & FMCG',
    icon: Utensils,
  },
  {
    title: 'Shipping Boxes',
    description:
      'Durable shipping cartons made for e-commerce, logistics and business deliveries.',
    tag: 'E-commerce',
    icon: Truck,
  },
  {
    title: 'Custom Packaging',
    description:
      'Tailored packaging based on your required size, material, print and finishing.',
    tag: 'Made to Order',
    icon: Boxes,
  },
]

const ProductsSection = () => {
  return (
    <section
      id="products"
      className="bg-white px-5 py-20 text-slate-950 sm:px-6 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
              Our Products
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Packaging solutions built around your product.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-600">
            From protective cartons to custom printed packaging, we help
            businesses create packaging that looks professional and performs
            reliably.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => {
            const Icon = product.icon

            return (
              <article
                key={product.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-amber-800">
                    {product.tag}
                  </span>

                  <span className="text-sm font-semibold text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-12">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-amber-400 transition duration-300 group-hover:scale-105 group-hover:bg-amber-400 group-hover:text-slate-950">
                    <Icon size={28} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
                    {product.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {product.description}
                  </p>

                  <a
                    href="#quote"
                    className="mt-7 inline-flex items-center gap-2 font-semibold text-slate-950 transition group-hover:text-amber-700"
                  >
                    Request this product
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection