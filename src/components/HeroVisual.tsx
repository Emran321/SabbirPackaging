import heroPackaging from '../assets/images/hero-packaging.jpg'

const HeroVisual = () => {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur">
        <div className="relative overflow-hidden rounded-[1.6rem]">
          <img
            src={heroPackaging}
            alt="Custom packaging work by Sabbir Printing and Packaging"
            className="h-[520px] w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

          <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-slate-950/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 backdrop-blur">
            Featured Packaging
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Custom Printed Packaging
            </p>

            <h3 className="mt-2 max-w-md text-3xl font-bold text-white">
              Packaging designed to protect products and strengthen brands.
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroVisual