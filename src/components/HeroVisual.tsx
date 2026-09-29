const HeroVisual = () => {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      {/* background glow */}
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur">
        <div className="relative min-h-[520px] overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 sm:p-8">

          {/* top label */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
                Featured Packaging
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Custom printed product box
              </p>
            </div>

            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
              Premium
            </div>
          </div>

          {/* packaging mockup */}
          <div className="relative mt-12 flex min-h-[300px] items-center justify-center">

            {/* back box */}
            <div className="absolute left-[10%] top-[12%] h-56 w-40 rotate-[-10deg] rounded-xl border border-white/10 bg-slate-700/70 shadow-2xl sm:h-64 sm:w-48">
              <div className="p-5">
                <div className="h-2 w-12 rounded-full bg-white/20" />
                <div className="mt-3 h-2 w-20 rounded-full bg-white/10" />
              </div>
            </div>

            {/* main box */}
            <div className="relative z-10 h-64 w-48 rotate-[5deg] rounded-2xl bg-amber-400 shadow-[0_30px_70px_rgba(0,0,0,0.45)] sm:h-72 sm:w-56">
              <div className="flex h-full flex-col justify-between p-6 text-slate-950">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.25em]">
                    Custom
                  </span>

                  <span className="text-xs font-semibold">
                    01
                  </span>
                </div>

                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-amber-400">
                    SP
                  </div>

                  <h3 className="mt-4 text-3xl font-black leading-none">
                    YOUR
                    <br />
                    BRAND
                  </h3>

                  <p className="mt-4 max-w-[150px] text-xs font-medium leading-5 text-slate-800">
                    Packaging designed around your product.
                  </p>
                </div>
              </div>
            </div>

            {/* side box */}
            <div className="absolute bottom-[5%] right-[7%] h-40 w-32 rotate-[12deg] rounded-xl border border-white/10 bg-white/10 shadow-xl backdrop-blur sm:h-44 sm:w-36">
              <div className="flex h-full items-end p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                  Print
                  <br />
                  Pack
                  <br />
                  Deliver
                </p>
              </div>
            </div>
          </div>

          {/* bottom info */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs text-slate-500">Size</p>
              <p className="mt-1 text-sm font-semibold text-white">
                Custom
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs text-slate-500">Printing</p>
              <p className="mt-1 text-sm font-semibold text-white">
                Branded
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs text-slate-500">Order</p>
              <p className="mt-1 text-sm font-semibold text-white">
                Flexible
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* floating badge */}
      <div className="absolute -bottom-4 left-6 z-20 hidden rounded-2xl border border-white/10 bg-slate-900/95 px-5 py-4 shadow-xl backdrop-blur sm:block">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
          Built for
        </p>

        <p className="mt-1 font-bold text-white">
          Modern Businesses
        </p>
      </div>
    </div>
  )
}

export default HeroVisual