interface NavProps {
  onExport: () => void
}

const sections = [
  { id: 'cover', label: 'Cover' },
  { id: 'logo', label: 'Logo' },
  { id: 'colors', label: 'Colors' },
  { id: 'typography', label: 'Typography' },
  { id: 'voice', label: 'Voice & Tone' },
  { id: 'iconography', label: 'Icons' },
  { id: 'spacing', label: 'Spacing' },
]

export default function Nav({ onExport }: NavProps) {
  return (
    <nav className="no-print fixed top-0 left-0 z-50 w-full bg-[#0a0a0a] border-b border-[#1a1a1a] backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#cover" className="font-sans text-sm font-medium tracking-tight text-white">
          miruns<span className="text-[#666]"> / brand</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-xs text-[#888] hover:text-white transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>

        <button
          onClick={onExport}
          className="inline-flex items-center gap-2 rounded-full border border-[#333] bg-transparent px-4 py-1.5 text-xs font-medium text-white hover:bg-[#111] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Export PDF
        </button>
      </div>
    </nav>
  )
}
