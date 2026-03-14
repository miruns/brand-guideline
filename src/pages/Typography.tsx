export default function Typography() {
  return (
    <section id="typography" className="brand-page min-h-screen bg-black px-8 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#666]">
          03 — Typography
        </p>
        <h2 className="mb-14 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Typefaces
        </h2>

        {/* Geist Sans */}
        <div className="mb-16 rounded-xl border border-[#222] bg-[#111] p-8 sm:p-12">
          <div className="mb-8 flex items-baseline gap-4">
            <span className="text-xs font-medium uppercase tracking-widest text-[#666]">Primary</span>
            <span className="font-mono text-xs text-[#444]">font-family: 'Geist', sans-serif</span>
          </div>

          <p className="mb-2 font-sans text-6xl font-semibold tracking-tight text-white sm:text-7xl">
            Geist Sans
          </p>
          <p className="mb-8 text-lg text-[#888]">
            The primary typeface. Used for all body copy, headings, and UI text.
          </p>

          <p className="mb-6 font-sans text-2xl text-[#ededed]">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </p>
          <p className="mb-6 font-sans text-2xl text-[#ededed]">
            abcdefghijklmnopqrstuvwxyz
          </p>
          <p className="mb-8 font-sans text-2xl text-[#ededed]">
            0123456789 !@#$%^&amp;*()
          </p>

          {/* Weights */}
          <div className="grid gap-4">
            {[
              { weight: 'font-light', label: 'Light (300)', sample: 'Neuroscience meets sport.' },
              { weight: 'font-normal', label: 'Regular (400)', sample: 'Neuroscience meets sport.' },
              { weight: 'font-medium', label: 'Medium (500)', sample: 'Neuroscience meets sport.' },
              { weight: 'font-semibold', label: 'Semibold (600)', sample: 'Neuroscience meets sport.' },
              { weight: 'font-bold', label: 'Bold (700)', sample: 'Neuroscience meets sport.' },
            ].map((w) => (
              <div key={w.label} className="flex items-baseline gap-6 border-t border-[#222] pt-3">
                <span className="w-32 shrink-0 text-xs text-[#555]">{w.label}</span>
                <span className={`font-sans text-xl text-white ${w.weight}`}>{w.sample}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Geist Mono */}
        <div className="rounded-xl border border-[#222] bg-[#111] p-8 sm:p-12">
          <div className="mb-8 flex items-baseline gap-4">
            <span className="text-xs font-medium uppercase tracking-widest text-[#666]">Secondary</span>
            <span className="font-mono text-xs text-[#444]">font-family: 'Geist Mono', monospace</span>
          </div>

          <p className="mb-2 font-mono text-6xl font-semibold tracking-tight text-white sm:text-7xl">
            Geist Mono
          </p>
          <p className="mb-8 text-lg text-[#888]">
            Used for data labels, stats, code, and technical content.
          </p>

          <p className="mb-6 font-mono text-2xl text-[#ededed]">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </p>
          <p className="mb-6 font-mono text-2xl text-[#ededed]">
            abcdefghijklmnopqrstuvwxyz
          </p>
          <p className="mb-8 font-mono text-2xl text-[#ededed]">
            0123456789 !@#$%^&amp;*()
          </p>

          <div className="rounded-lg bg-black p-6 border border-[#222]">
            <p className="font-mono text-sm leading-relaxed text-[#ededed]">
              <span className="text-[#00e5ff]">const</span> fatigue = <span className="text-[#00e5ff]">await</span> miruns.<span className="text-[#0070f3]">analyze</span>(eegSignal);<br />
              <span className="text-[#555]">// cognitive_load: 0.72, recovery: 0.85</span>
            </p>
          </div>
        </div>

        {/* Scale */}
        <div className="mt-16">
          <h3 className="mb-6 text-sm font-medium text-white">Type Scale</h3>
          <div className="space-y-4">
            {[
              { size: 'text-6xl', label: '60px / 3.75rem', sample: 'Display' },
              { size: 'text-4xl', label: '36px / 2.25rem', sample: 'Heading 1' },
              { size: 'text-3xl', label: '30px / 1.875rem', sample: 'Heading 2' },
              { size: 'text-xl', label: '20px / 1.25rem', sample: 'Heading 3' },
              { size: 'text-base', label: '16px / 1rem', sample: 'Body text for paragraphs and content' },
              { size: 'text-sm', label: '14px / 0.875rem', sample: 'Small text for captions and secondary info' },
              { size: 'text-xs', label: '12px / 0.75rem', sample: 'LABELS AND METADATA' },
            ].map((t) => (
              <div key={t.label} className="flex items-baseline gap-6 border-t border-[#222] pt-4">
                <span className="w-40 shrink-0 font-mono text-xs text-[#555]">{t.label}</span>
                <span className={`font-sans text-white ${t.size}`}>{t.sample}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
