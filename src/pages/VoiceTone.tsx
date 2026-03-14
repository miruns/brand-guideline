export default function VoiceTone() {
  return (
    <section id="voice" className="brand-page min-h-screen bg-gray-50 px-8 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
          04 — Voice &amp; Tone
        </p>
        <h2 className="mb-14 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          How we speak
        </h2>

        {/* Core tagline */}
        <div className="mb-16 rounded-2xl border border-gray-200 bg-white p-8 sm:p-12">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-gray-400">Tagline</p>
          <p className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Neuroscience meets sport.
          </p>
        </div>

        {/* Principles */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Precise',
              desc: 'We use clear, specific language. No buzzwords. If we mention EEG, we explain what it does — not just that it\'s "advanced."',
            },
            {
              title: 'Calm',
              desc: 'Our tone is confident but never aggressive. We inform rather than hype. Data speaks; we amplify it with clarity.',
            },
            {
              title: 'Human',
              desc: 'We talk to athletes, students, workers — real people. Language is accessible, warm, and avoids clinical distance.',
            },
            {
              title: 'Forward',
              desc: 'We look ahead. Our language reflects innovation and progress without being utopian or making unrealistic promises.',
            },
          ].map((p) => (
            <div key={p.title} className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Do / Don't */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8">
            <h3 className="mb-4 text-sm font-semibold text-emerald-700">Do</h3>
            <ul className="space-y-3 text-sm text-emerald-800">
              <li>&ldquo;Miruns captures EEG signals to measure cognitive fatigue in real time.&rdquo;</li>
              <li>&ldquo;Your brain data stays on your device.&rdquo;</li>
              <li>&ldquo;Recovery insights based on your unique patterns.&rdquo;</li>
              <li>&ldquo;Discreetly embedded in the headphones you already wear.&rdquo;</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-4 text-sm font-semibold text-red-700">Don&apos;t</h3>
            <ul className="space-y-3 text-sm text-red-800">
              <li>&ldquo;Revolutionary AI-powered brain-reading technology!&rdquo;</li>
              <li>&ldquo;We hack your brain for maximum performance.&rdquo;</li>
              <li>&ldquo;The world&apos;s most advanced neurotech.&rdquo;</li>
              <li>&ldquo;Unlock your brain&apos;s hidden potential!&rdquo;</li>
            </ul>
          </div>
        </div>

        {/* Description block */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 sm:p-12">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-gray-400">
            Standard Description
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Miruns integrates seamlessly into everyday headphones — capturing
            EEG, heart rate, HRV, and environmental data without interrupting
            your training or your day. The companion app processes these signals
            with AI to deliver real-time fatigue prediction, recovery tracking,
            and personalised health insights.
          </p>
        </div>
      </div>
    </section>
  )
}
