export default function Spacing() {
  return (
    <section id="spacing" className="brand-page min-h-screen bg-gray-50 px-8 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
          06 — Layout &amp; Spacing
        </p>
        <h2 className="mb-14 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Spatial System
        </h2>

        {/* Base unit */}
        <div className="mb-16 rounded-2xl border border-gray-200 bg-white p-8 sm:p-12">
          <h3 className="mb-4 text-sm font-semibold text-gray-900">Base Unit: 4px</h3>
          <p className="mb-8 max-w-lg text-sm text-gray-500">
            All spacing derives from a 4px base grid. Common increments: 4, 8,
            12, 16, 24, 32, 48, 64, 96.
          </p>
          <div className="flex items-end gap-3">
            {[4, 8, 12, 16, 24, 32, 48, 64].map((px) => (
              <div key={px} className="flex flex-col items-center gap-2">
                <div
                  className="rounded bg-[#0070f3]"
                  style={{ width: px, height: px }}
                />
                <span className="font-mono text-[10px] text-gray-400">{px}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Border radius */}
        <div className="mb-16 rounded-2xl border border-gray-200 bg-white p-8 sm:p-12">
          <h3 className="mb-4 text-sm font-semibold text-gray-900">Border Radius</h3>
          <p className="mb-8 max-w-lg text-sm text-gray-500">
            Rounded corners are used generously. Cards and containers use large
            radius; buttons and inputs use pill or moderate radius.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {[
              { r: '4px', label: 'sm' },
              { r: '8px', label: 'md' },
              { r: '12px', label: 'lg' },
              { r: '16px', label: 'xl' },
              { r: '24px', label: '2xl' },
              { r: '9999px', label: 'full' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <div
                  className="h-16 w-16 border-2 border-gray-300 bg-gray-100"
                  style={{ borderRadius: item.r }}
                />
                <span className="font-mono text-[10px] text-gray-400">
                  {item.r}
                </span>
                <span className="text-[10px] text-gray-300">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card anatomy */}
        <div className="mb-16">
          <h3 className="mb-6 text-sm font-semibold text-gray-900">Card Anatomy</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Light card */}
            <div className="relative rounded-2xl border border-gray-200 bg-white p-8">
              <div className="absolute -top-3 left-4 rounded bg-gray-900 px-2 py-0.5 text-[10px] font-mono text-white">
                Light Theme
              </div>
              <span className="mb-4 block font-mono text-xs tracking-widest text-[#0070f3]">01</span>
              <h4 className="mb-2 text-lg font-semibold text-gray-900">Card Title</h4>
              <p className="text-sm leading-relaxed text-gray-500">
                Card body text using muted color. Padding 32px, border-radius 16px,
                border 1px solid var(--border).
              </p>
            </div>
            {/* Dark card */}
            <div className="relative rounded-2xl border border-[#222] bg-[#111] p-8">
              <div className="absolute -top-3 left-4 rounded bg-[#00e5ff] px-2 py-0.5 text-[10px] font-mono text-[#0a0a0a]">
                Dark Theme
              </div>
              <span className="mb-4 block font-mono text-xs tracking-widest text-[#00e5ff]">01</span>
              <h4 className="mb-2 text-lg font-semibold text-[#ededed]">Card Title</h4>
              <p className="text-sm leading-relaxed text-[#888]">
                Card body text using muted color. Padding 32px, border-radius 16px,
                border 1px solid var(--border).
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-12">
          <h3 className="mb-6 text-sm font-semibold text-gray-900">Buttons</h3>
          <div className="flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-[#0070f3] px-8 py-3 text-sm font-medium text-white">
              Primary
            </button>
            <button className="rounded-full border border-gray-200 bg-white px-8 py-3 text-sm font-medium text-gray-900">
              Secondary
            </button>
            <button className="rounded-full bg-[#0a0a0a] px-8 py-3 text-sm font-medium text-white">
              Dark
            </button>
            <button className="rounded-full bg-[#00e5ff] px-8 py-3 text-sm font-medium text-[#0a0a0a]">
              Accent (Dark)
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Buttons use <code className="font-mono text-xs">border-radius: 9999px</code> (pill shape),
            padding 12px 32px, font-weight 500.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-24 border-t border-gray-200 pt-8 text-center">
          <p className="font-mono text-sm text-gray-400">miruns</p>
          <p className="mt-2 text-xs text-gray-300">
            Brand Identity Guidelines v1.0 — &copy; {new Date().getFullYear()} Miruns
          </p>
        </div>
      </div>
    </section>
  )
}
