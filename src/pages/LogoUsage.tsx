function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#666]">
      {children}
    </p>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-12 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
      {children}
    </h2>
  )
}

export default function LogoUsage() {
  return (
    <section id="logo" className="brand-page min-h-screen bg-black px-8 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionLabel>01 — Logo</SectionLabel>
        <SectionTitle>Logo Usage</SectionTitle>

        {/* Primary logos */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Dark on light */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-[#e5e5e5] bg-white p-12">
            <img src="/miruns-icon.png" alt="Miruns icon" className="mb-6 h-16 w-16 rounded-xl" />
            <span className="font-sans text-2xl font-light tracking-tight text-[#0a0a0a]">miruns</span>
            <p className="mt-4 text-xs text-[#999]">Primary — light background</p>
          </div>

          {/* Light on dark */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-[#222] bg-[#0a0a0a] p-12">
            <img src="/miruns-icon-512.png" alt="Miruns icon" className="mb-6 h-16 w-16 rounded-xl" />
            <span className="font-sans text-2xl font-light tracking-tight text-[#ededed]">miruns</span>
            <p className="mt-4 text-xs text-[#666]">Primary — dark background</p>
          </div>
        </div>

        {/* Guidelines */}
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-2 text-sm font-medium text-white">Wordmark</h3>
            <p className="text-sm leading-relaxed text-[#888]">
              Always set in <span className="text-[#ededed]">Geist</span>, lowercase, font-light.
              The wordmark is the primary representation of the brand.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-medium text-white">Clear Space</h3>
            <p className="text-sm leading-relaxed text-[#888]">
              Maintain a minimum clear space equal to the height of the "m" in
              the wordmark on all sides.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-medium text-white">Minimum Size</h3>
            <p className="text-sm leading-relaxed text-[#888]">
              The wordmark should never appear smaller than 80px wide in digital
              or 20mm in print to ensure legibility.
            </p>
          </div>
        </div>

        {/* Don'ts */}
        <div className="mt-16">
          <h3 className="mb-6 text-sm font-medium text-white">Don&apos;ts</h3>
          <div className="grid gap-4 sm:grid-cols-4">
            {[
              { text: 'Miruns', rule: 'Don\'t capitalize' },
              { text: 'MIRUNS', rule: 'Don\'t use all-caps' },
              { text: 'Miruns™', rule: 'Don\'t add symbols' },
              { text: 'm i r u n s', rule: 'Don\'t letter-space' },
            ].map((item) => (
              <div
                key={item.rule}
                className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 text-center"
              >
                <span className="block font-sans text-lg text-red-400/60 line-through">
                  {item.text}
                </span>
                <p className="mt-2 text-xs text-red-400/80">{item.rule}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
