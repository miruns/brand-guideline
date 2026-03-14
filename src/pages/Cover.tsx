export default function Cover() {
  return (
    <section
      id="cover"
      className="brand-page flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-8 text-center"
    >
      <img
        src="/miruns-icon-512.png"
        alt="Miruns logo"
        className="mb-10 h-24 w-24 rounded-2xl"
      />

      <h1 className="font-sans text-5xl font-light tracking-tight text-white sm:text-7xl">
        miruns
      </h1>

      <div className="mt-6 h-px w-16 bg-[#00e5ff]" />

      <p className="mt-6 text-lg text-[#888] sm:text-xl">
        Brand Identity Guidelines
      </p>

      <p className="mt-3 text-sm text-[#555]">v1.0 — March 2026</p>

      <div className="mt-16 max-w-md">
        <p className="text-sm leading-relaxed text-[#666]">
          Neuroscience meets sport. This document defines how Miruns looks,
          speaks, and feels across every touchpoint.
        </p>
      </div>
    </section>
  )
}
