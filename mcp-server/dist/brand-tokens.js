// ─────────────────────────────────────────────────────────────
// Miruns Brand Tokens — Single source of truth for the MCP server
// ─────────────────────────────────────────────────────────────
export const brand = {
    name: "miruns",
    version: "1.0",
    tagline: "Neuroscience meets sport.",
    description: "Miruns integrates seamlessly into everyday headphones — capturing EEG, heart rate, HRV, and environmental data without interrupting your training or your day. The companion app processes these signals with AI to deliver real-time fatigue prediction, recovery tracking, and personalised health insights.",
    // ── Colors ──────────────────────────────────────────────────
    colors: {
        philosophy: "Miruns uses a dual-theme system. The dark theme is primary — it reflects the product's focus on deep focus and neural signals. The light theme serves documentation and daylight contexts.",
        dark: {
            label: "Dark Theme (Primary)",
            tokens: {
                background: { hex: "#0A0A0A", css: "--background" },
                foreground: { hex: "#EDEDED", css: "--foreground" },
                accent: { hex: "#00E5FF", css: "--accent" },
                muted: { hex: "#888888", css: "--muted" },
                card: { hex: "#111111", css: "--card-bg" },
                border: { hex: "#222222", css: "--border" },
            },
        },
        light: {
            label: "Light Theme",
            tokens: {
                background: { hex: "#FAFAFA", css: "--background" },
                foreground: { hex: "#0A0A0A", css: "--foreground" },
                accent: { hex: "#0070F3", css: "--accent" },
                muted: { hex: "#666666", css: "--muted" },
                card: { hex: "#FFFFFF", css: "--card-bg" },
                border: { hex: "#E5E5E5", css: "--border" },
            },
        },
        accentUsage: {
            light: {
                hex: "#0070F3",
                usage: "Light-mode accent. Used for links, buttons, and interactive elements on light backgrounds.",
            },
            dark: {
                hex: "#00E5FF",
                usage: "Dark-mode accent (cyan). Used for highlights and data visualizations on dark backgrounds. Evokes neural activity.",
            },
        },
    },
    // ── Typography ──────────────────────────────────────────────
    typography: {
        primary: {
            name: "Geist Sans",
            family: "'Geist', sans-serif",
            role: "Used for all body copy, headings, and UI text.",
            cdn: "https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/style.min.css",
            weights: [
                { name: "Light", value: 300, css: "font-light" },
                { name: "Regular", value: 400, css: "font-normal" },
                { name: "Medium", value: 500, css: "font-medium" },
                { name: "Semibold", value: 600, css: "font-semibold" },
                { name: "Bold", value: 700, css: "font-bold" },
            ],
        },
        secondary: {
            name: "Geist Mono",
            family: "'Geist Mono', monospace",
            role: "Used for data labels, stats, code, and technical content.",
            cdn: "https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-mono/style.min.css",
        },
        scale: [
            { name: "Display", size: "60px", rem: "3.75rem", tailwind: "text-6xl" },
            { name: "Heading 1", size: "36px", rem: "2.25rem", tailwind: "text-4xl" },
            { name: "Heading 2", size: "30px", rem: "1.875rem", tailwind: "text-3xl" },
            { name: "Heading 3", size: "20px", rem: "1.25rem", tailwind: "text-xl" },
            { name: "Body", size: "16px", rem: "1rem", tailwind: "text-base" },
            { name: "Small", size: "14px", rem: "0.875rem", tailwind: "text-sm" },
            { name: "Label", size: "12px", rem: "0.75rem", tailwind: "text-xs" },
        ],
    },
    // ── Logo ────────────────────────────────────────────────────
    logo: {
        wordmark: {
            text: "miruns",
            font: "Geist",
            weight: "font-light (300)",
            case: "lowercase always",
        },
        assets: {
            icon: "miruns-icon.png",
            icon512: "miruns-icon-512.png",
            note: "Icons are rounded-xl (16px border-radius). Use miruns-icon.png for small sizes, miruns-icon-512.png for hero / large contexts.",
        },
        clearSpace: "Maintain a minimum clear space equal to the height of the 'm' in the wordmark on all sides.",
        minimumSize: {
            digital: "80px wide minimum",
            print: "20mm wide minimum",
        },
        donts: [
            { example: "Miruns", rule: "Don't capitalize" },
            { example: "MIRUNS", rule: "Don't use all-caps" },
            { example: "Miruns™", rule: "Don't add symbols" },
            { example: "m i r u n s", rule: "Don't letter-space" },
        ],
    },
    // ── Iconography ─────────────────────────────────────────────
    iconography: {
        style: {
            library: "Lucide",
            grid: "24×24px",
            stroke: "2px",
            lineCap: "round",
            lineJoin: "round",
            padding: "2px from edge",
            alignment: "Optical alignment preferred over mathematical centering",
        },
        colorRule: "Icons inherit currentColor. Use foreground for primary, muted for secondary, accent for interactive states.",
        availableIcons: [
            "Brain",
            "Activity",
            "Heart",
            "Headphones",
            "Zap",
            "Shield",
            "Timer",
            "Chart",
            "Eye",
            "Moon",
            "User",
            "Signal",
        ],
    },
    // ── Spacing & Layout ────────────────────────────────────────
    spacing: {
        baseUnit: "4px",
        scale: [4, 8, 12, 16, 24, 32, 48, 64, 96],
        borderRadius: [
            { value: "4px", token: "sm" },
            { value: "8px", token: "md" },
            { value: "12px", token: "lg" },
            { value: "16px", token: "xl" },
            { value: "24px", token: "2xl" },
            { value: "9999px", token: "full" },
        ],
        card: {
            padding: "32px",
            borderRadius: "12px",
            border: "1px solid var(--border)",
            darkTheme: {
                background: "#111111",
                text: "#EDEDED",
                muted: "#888888",
                accent: "#00E5FF",
                border: "#222222",
            },
            lightTheme: {
                background: "#FFFFFF",
                text: "#0A0A0A",
                muted: "#666666",
                accent: "#0070F3",
                border: "#E5E5E5",
            },
        },
        buttons: {
            borderRadius: "9999px (pill)",
            padding: "12px 32px",
            fontWeight: 500,
            variants: [
                {
                    name: "Primary",
                    bg: "#FFFFFF",
                    text: "#000000",
                    border: "none",
                },
                {
                    name: "Secondary",
                    bg: "transparent",
                    text: "#FFFFFF",
                    border: "1px solid #333333",
                },
                {
                    name: "Accent",
                    bg: "#0070F3",
                    text: "#FFFFFF",
                    border: "none",
                },
                {
                    name: "Cyan",
                    bg: "#00E5FF",
                    text: "#000000",
                    border: "none",
                },
            ],
        },
    },
    // ── Voice & Tone ────────────────────────────────────────────
    voiceTone: {
        tagline: "Neuroscience meets sport.",
        principles: [
            {
                name: "Precise",
                description: 'We use clear, specific language. No buzzwords. If we mention EEG, we explain what it does — not just that it\'s "advanced."',
            },
            {
                name: "Calm",
                description: "Our tone is confident but never aggressive. We inform rather than hype. Data speaks; we amplify it with clarity.",
            },
            {
                name: "Human",
                description: "We talk to athletes, students, workers — real people. Language is accessible, warm, and avoids clinical distance.",
            },
            {
                name: "Forward",
                description: "We look ahead. Our language reflects innovation and progress without being utopian or making unrealistic promises.",
            },
        ],
        doExamples: [
            "Miruns captures EEG signals to measure cognitive fatigue in real time.",
            "Your brain data stays on your device.",
            "Recovery insights based on your unique patterns.",
            "Discreetly embedded in the headphones you already wear.",
        ],
        dontExamples: [
            "Revolutionary AI-powered brain-reading technology!",
            "We hack your brain for maximum performance.",
            "The world's most advanced neurotech.",
            "Unlock your brain's hidden potential!",
        ],
        standardDescription: "Miruns integrates seamlessly into everyday headphones — capturing EEG, heart rate, HRV, and environmental data without interrupting your training or your day. The companion app processes these signals with AI to deliver real-time fatigue prediction, recovery tracking, and personalised health insights.",
    },
};
