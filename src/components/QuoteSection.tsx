import {
  Building2,
  Mail,
  Package,
  Phone,
  Ruler,
  Upload,
  User,
} from 'lucide-react'

const inputClass =
  'w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pl-11 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100'

const QuoteSection = () => {
  return (
    <section
      id="quote"
      className="bg-slate-50 px-5 py-20 text-slate-950 sm:px-6 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            Request a Quote
          </p>

          <h2 className="mt-4 max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
            Tell us what packaging you need.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Share your product details, quantity and packaging requirements.
            Our team can review your request and discuss the right solution for
            your business.
          </p>

          <div className="mt-10 space-y-5">
            {[
              {
                number: '01',
                title: 'Share your requirement',
                text: 'Tell us about product type, size, quantity and printing needs.',
              },
              {
                number: '02',
                title: 'We review the details',
                text: 'Packaging requirements can vary, so specifications are reviewed before quotation.',
              },
              {
                number: '03',
                title: 'Discuss quotation',
                text: 'The team can contact you to confirm details and discuss your quotation.',
              },
            ].map((item) => (
              <div key={item.number} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 font-bold text-amber-400">
                  {item.number}
                </div>

                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-1 leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Your Name
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Enter your name"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Company Name
              </label>

              <div className="relative">
                <Building2
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Company name"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Phone Number
              </label>

              <div className="relative">
                <Phone
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="tel"
                  placeholder="+880 1XXXXXXXXX"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  placeholder="example@company.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Product Type
              </label>

              <div className="relative">
                <Package
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <select
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select product
                  </option>
                  <option>Corrugated Carton</option>
                  <option>Printed Packaging Box</option>
                  <option>Die-Cut Box</option>
                  <option>Food Packaging</option>
                  <option>Shipping Box</option>
                  <option>Custom Packaging</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Quantity
              </label>

              <div className="relative">
                <Package
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="number"
                  min="1"
                  placeholder="Required quantity"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Packaging Size
              </label>

              <div className="relative">
                <Ruler
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="e.g. 12 × 8 × 5 inch"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Material
              </label>

              <input
                type="text"
                placeholder="If known"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Packaging Requirement
            </label>

            <textarea
              rows={5}
              placeholder="Tell us about printing, colors, finishing, delivery date or any other requirements..."
              className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
            />
          </div>

          <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5">
            <label className="flex cursor-pointer items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-amber-400">
                <Upload size={22} />
              </div>

              <div>
                <p className="font-semibold text-slate-800">
                  Upload artwork or sample
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  PDF, JPG or PNG can be attached later when submission is connected.
                </p>
              </div>

              <input type="file" className="hidden" />
            </label>
          </div>

          <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-slate-500">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-slate-300"
            />

            <span>
              I agree to be contacted regarding this quotation request.
            </span>
          </label>

          <button
            type="button"
            className="mt-6 w-full rounded-full bg-amber-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-amber-300"
          >
            Submit Quote Request
          </button>          
        </form>
      </div>
    </section>
  )
}

export default QuoteSection