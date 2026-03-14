import { useState } from 'react'

interface Swatch {
  name: string
  hex: string
  css: string
  text: string
}

const lightPalette: Swatch[] = [
  { name: 'Background', hex: '#FAFAFA', css: '--background', text: 'text-gray-900' },
  { name: 'Foreground', hex: '#0A0A0A', css: '--foreground', text: 'text-white' },
  { name: 'Accent', hex: '#0070F3', css: '--accent', text: 'text-white' },
  { name: 'Muted', hex: '#666666', css: '--muted', text: 'text-white' },
  { name: 'Card', hex: '#FFFFFF', css: '--card-bg', text: 'text-gray-900' },
  { name: 'Border', hex: '#E5E5E5', css: '--border', text: 'text-gray-900' },
]

const darkPalette: Swatch[] = [
  { name: 'Background', hex: '#0A0A0A', css: '--background', text: 'text-white' },
  { name: 'Foreground', hex: '#EDEDED', css: '--foreground', text: 'text-gray-900' },
  { name: 'Accent', hex: '#00E5FF', css: '--accent', text: 'text-gray-900' },
  { name: 'Muted', hex: '#888888', css: '--muted', text: 'text-white' },
  { name: 'Card', hex: '#111111', css: '--card-bg', text: 'text-white' },
  { name: 'Border', hex: '#222222', css: '--border', text: 'text-white' },
]

function SwatchCard({ swatch }: { swatch: Swatch }) {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(swatch.hex)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  return (
    <button
      onClick={copy}
      className="group flex flex-col overflow-hidden rounded-lg border border-[#222] text-left transition-all hover:border-[#444]"
    >
      <div
        className={`flex h-28 items-end p-4 ${swatch.text}`}
        style={{ backgroundColor: swatch.hex }}
      >
        <span className="text-xs font-medium opacity-60 group-hover:opacity-100 transition-opacity">
          {copied ? 'Copied!' : 'Click to copy'}
        </span>
      </div>
      <div className="bg-[#0a0a0a] p-4">
        <p className="text-sm font-medium text-[#ededed]">{swatch.name}</p>
        <p className="mt-1 font-mono text-xs text-[#888]">{swatch.hex}</p>
        <p className="font-mono text-xs text-[#555]">{swatch.css}</p>
      </div>
    </button>
  )
}

export default function ColorPalette() {
  return (
    <section id="colors" className="brand-page min-h-screen px-8 py-24 bg-[#0a0a0a]">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#666]">
          02 — Colors
        </p>
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Color Palette
        </h2>
        <p className="mb-14 max-w-lg text-sm leading-relaxed text-[#888]">
          Miruns uses a dual-theme system. The dark theme is primary — it
          reflects the product&#39;s focus on deep focus and neural signals. The
          light theme serves documentation and daylight contexts.
        </p>

        {/* Dark theme */}
        <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-[#666]">
          Dark Theme <span className="text-[#444]">— Primary</span>
        </h3>
        <div className="mb-14 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {darkPalette.map((s) => (
            <SwatchCard key={`dark-${s.name}`} swatch={s} />
          ))}
        </div>

        {/* Light theme */}
        <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-[#666]">
          Light Theme
        </h3>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {lightPalette.map((s) => (
            <SwatchCard key={`light-${s.name}`} swatch={s} />
          ))}
        </div>

        {/* Accent usage */}
        <div className="mt-16 rounded-xl border border-[#222] bg-[#111] p-8">
          <h3 className="mb-4 text-sm font-medium text-white">Accent Usage</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-[#0070f3]" />
                <span className="font-mono text-sm text-[#888]">#0070F3</span>
              </div>
              <p className="text-sm text-[#888]">
                Light-mode accent. Used for links, buttons, and interactive
                elements on light backgrounds.
              </p>
            </div>
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-[#00e5ff]" />
                <span className="font-mono text-sm text-[#888]">#00E5FF</span>
              </div>
              <p className="text-sm text-[#888]">
                Dark-mode accent (cyan). Used for highlights and data
                visualizations on dark backgrounds. Evokes neural activity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
