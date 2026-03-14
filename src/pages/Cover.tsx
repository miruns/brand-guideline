export default function Cover() {
  return (
    <section
      id="cover"
      className="brand-page flex min-h-screen flex-col items-center justify-center bg-black px-8 text-center"
    >
      <img
        src="/miruns-icon-512.png"
        alt="Miruns logo"
        className="mb-12 h-20 w-20 rounded-2xl"
      />

      <h1 className="font-sans text-5xl font-extralight tracking-tight text-white sm:text-8xl">
        miruns
      </h1>

      <div className="mt-8 h-px w-12 bg-gradient-to-r from-[#0070f3] to-[#00e5ff]" />

      <p className="mt-8 text-base font-light text-[#ededed] sm:text-lg">
        Brand Identity Guidelines
      </p>

      <p className="mt-2 text-xs text-[#666]">v1.0 — March 2026</p>

      <div className="mt-20 max-w-md">
        <p className="text-sm leading-relaxed text-[#555]">
          Neuroscience meets sport. This document defines how Miruns looks,
          speaks, and feels across every touchpoint.
        </p>
      </div>
    </section>
  )
}
