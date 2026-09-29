import {
  ClipboardList,
  FileText,
  Palette,
  Settings,
  BadgeCheck,
  Truck,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Share Your Requirement',
    description:
      'Tell us about your product, packaging type, size, quantity and printing needs.',
    icon: ClipboardList,
  },
  {
    number: '02',
    title: 'Quotation',
    description:
      'We review the requirement and prepare a suitable quotation for your order.',
    icon: FileText,
  },
  {
    number: '03',
    title: 'Design & Approval',
    description:
      'Artwork, branding and packaging specifications are confirmed before production.',
    icon: Palette,
  },
  {
    number: '04',
    title: 'Production',
    description:
      'The approved packaging moves into production according to the agreed specification.',
    icon: Settings,
  },
  {
    number: '05',
    title: 'Quality Check',
    description:
      'Finished packaging is reviewed for consistency, print quality and presentation.',
    icon: BadgeCheck,
  },
  {
    number: '06',
    title: 'Delivery',
    description:
      'Completed orders are prepared for delivery based on the agreed schedule.',
    icon: Truck,
  },
]

const ProcessSection = () => {
  return (
    <section className="bg-white px-5 py-20 text-slate-950 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
              How We Work
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              From requirement to finished packaging.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-600">
            A clear process helps every project move from initial discussion to
            production and delivery with the right specifications.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-slate-200 md:block lg:left-1/2" />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isLeft = index % 2 === 0

              return (
                <div
                  key={step.number}
                  className="relative grid gap-6 md:grid-cols-[auto_1fr] lg:grid-cols-2 lg:gap-16"
                >
                  <div
                    className={`${
                      isLeft ? 'lg:pr-12' : 'lg:order-2 lg:pl-12'
                    }`}
                  >
                    <div className="group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-amber-400 transition group-hover:bg-amber-400 group-hover:text-slate-950">
                          <Icon size={23} strokeWidth={1.8} />
                        </div>

                        <span className="text-sm font-bold text-slate-400">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="mt-6 text-xl font-bold">
                        {step.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`hidden lg:block ${
                      isLeft ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  />

                  <div className="absolute left-0 top-7 hidden h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-amber-400 text-sm font-bold text-slate-950 shadow md:flex lg:left-1/2 lg:-translate-x-1/2">
                    {step.number}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection