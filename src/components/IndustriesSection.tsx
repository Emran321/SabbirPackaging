import {
  UtensilsCrossed,
  Shirt,
  Sparkles,
  Cpu,
  ShoppingBag,
  Store,
  Factory,
  Building2,
} from 'lucide-react'

const industries = [
  {
    title: 'Food & Beverage',
    icon: UtensilsCrossed,
  },
  {
    title: 'Garments & Fashion',
    icon: Shirt,
  },
  {
    title: 'Cosmetics',
    icon: Sparkles,
  },
  {
    title: 'Electronics',
    icon: Cpu,
  },
  {
    title: 'E-commerce',
    icon: ShoppingBag,
  },
  {
    title: 'Retail',
    icon: Store,
  },
  {
    title: 'Manufacturing',
    icon: Factory,
  },
  {
    title: 'Corporate',
    icon: Building2,
  },
]

const IndustriesSection = () => {
  return (
    <section
      id="industries"
      className="bg-slate-50 px-5 py-20 text-slate-950 sm:px-6 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            Industries We Serve
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Packaging for businesses across different industries.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you need protective cartons, branded product packaging or
            custom printed solutions, we support a wide range of business
            requirements.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon

            return (
              <div
                key={industry.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-amber-400 transition duration-300 group-hover:bg-amber-400 group-hover:text-slate-950">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-semibold text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-bold">
                  {industry.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Custom packaging solutions based on product, quantity and
                  presentation requirements.
                </p>

                <a
                  href="#quote"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:text-amber-700"
                >
                  Discuss requirements
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection