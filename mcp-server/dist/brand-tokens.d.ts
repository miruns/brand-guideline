export declare const brand: {
    readonly name: "miruns";
    readonly version: "1.0";
    readonly tagline: "Neuroscience meets sport.";
    readonly description: "Miruns integrates seamlessly into everyday headphones — capturing EEG, heart rate, HRV, and environmental data without interrupting your training or your day. The companion app processes these signals with AI to deliver real-time fatigue prediction, recovery tracking, and personalised health insights.";
    readonly colors: {
        readonly philosophy: "Miruns uses a dual-theme system. The dark theme is primary — it reflects the product's focus on deep focus and neural signals. The light theme serves documentation and daylight contexts.";
        readonly dark: {
            readonly label: "Dark Theme (Primary)";
            readonly tokens: {
                readonly background: {
                    readonly hex: "#0A0A0A";
                    readonly css: "--background";
                };
                readonly foreground: {
                    readonly hex: "#EDEDED";
                    readonly css: "--foreground";
                };
                readonly accent: {
                    readonly hex: "#00E5FF";
                    readonly css: "--accent";
                };
                readonly muted: {
                    readonly hex: "#888888";
                    readonly css: "--muted";
                };
                readonly card: {
                    readonly hex: "#111111";
                    readonly css: "--card-bg";
                };
                readonly border: {
                    readonly hex: "#222222";
                    readonly css: "--border";
                };
            };
        };
        readonly light: {
            readonly label: "Light Theme";
            readonly tokens: {
                readonly background: {
                    readonly hex: "#FAFAFA";
                    readonly css: "--background";
                };
                readonly foreground: {
                    readonly hex: "#0A0A0A";
                    readonly css: "--foreground";
                };
                readonly accent: {
                    readonly hex: "#0070F3";
                    readonly css: "--accent";
                };
                readonly muted: {
                    readonly hex: "#666666";
                    readonly css: "--muted";
                };
                readonly card: {
                    readonly hex: "#FFFFFF";
                    readonly css: "--card-bg";
                };
                readonly border: {
                    readonly hex: "#E5E5E5";
                    readonly css: "--border";
                };
            };
        };
        readonly accentUsage: {
            readonly light: {
                readonly hex: "#0070F3";
                readonly usage: "Light-mode accent. Used for links, buttons, and interactive elements on light backgrounds.";
            };
            readonly dark: {
                readonly hex: "#00E5FF";
                readonly usage: "Dark-mode accent (cyan). Used for highlights and data visualizations on dark backgrounds. Evokes neural activity.";
            };
        };
    };
    readonly typography: {
        readonly primary: {
            readonly name: "Geist Sans";
            readonly family: "'Geist', sans-serif";
            readonly role: "Used for all body copy, headings, and UI text.";
            readonly cdn: "https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/style.min.css";
            readonly weights: readonly [{
                readonly name: "Light";
                readonly value: 300;
                readonly css: "font-light";
            }, {
                readonly name: "Regular";
                readonly value: 400;
                readonly css: "font-normal";
            }, {
                readonly name: "Medium";
                readonly value: 500;
                readonly css: "font-medium";
            }, {
                readonly name: "Semibold";
                readonly value: 600;
                readonly css: "font-semibold";
            }, {
                readonly name: "Bold";
                readonly value: 700;
                readonly css: "font-bold";
            }];
        };
        readonly secondary: {
            readonly name: "Geist Mono";
            readonly family: "'Geist Mono', monospace";
            readonly role: "Used for data labels, stats, code, and technical content.";
            readonly cdn: "https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-mono/style.min.css";
        };
        readonly scale: readonly [{
            readonly name: "Display";
            readonly size: "60px";
            readonly rem: "3.75rem";
            readonly tailwind: "text-6xl";
        }, {
            readonly name: "Heading 1";
            readonly size: "36px";
            readonly rem: "2.25rem";
            readonly tailwind: "text-4xl";
        }, {
            readonly name: "Heading 2";
            readonly size: "30px";
            readonly rem: "1.875rem";
            readonly tailwind: "text-3xl";
        }, {
            readonly name: "Heading 3";
            readonly size: "20px";
            readonly rem: "1.25rem";
            readonly tailwind: "text-xl";
        }, {
            readonly name: "Body";
            readonly size: "16px";
            readonly rem: "1rem";
            readonly tailwind: "text-base";
        }, {
            readonly name: "Small";
            readonly size: "14px";
            readonly rem: "0.875rem";
            readonly tailwind: "text-sm";
        }, {
            readonly name: "Label";
            readonly size: "12px";
            readonly rem: "0.75rem";
            readonly tailwind: "text-xs";
        }];
    };
    readonly logo: {
        readonly wordmark: {
            readonly text: "miruns";
            readonly font: "Geist";
            readonly weight: "font-light (300)";
            readonly case: "lowercase always";
        };
        readonly assets: {
            readonly icon: "miruns-icon.png";
            readonly icon512: "miruns-icon-512.png";
            readonly note: "Icons are rounded-xl (16px border-radius). Use miruns-icon.png for small sizes, miruns-icon-512.png for hero / large contexts.";
        };
        readonly clearSpace: "Maintain a minimum clear space equal to the height of the 'm' in the wordmark on all sides.";
        readonly minimumSize: {
            readonly digital: "80px wide minimum";
            readonly print: "20mm wide minimum";
        };
        readonly donts: readonly [{
            readonly example: "Miruns";
            readonly rule: "Don't capitalize";
        }, {
            readonly example: "MIRUNS";
            readonly rule: "Don't use all-caps";
        }, {
            readonly example: "Miruns™";
            readonly rule: "Don't add symbols";
        }, {
            readonly example: "m i r u n s";
            readonly rule: "Don't letter-space";
        }];
    };
    readonly iconography: {
        readonly style: {
            readonly library: "Lucide";
            readonly grid: "24×24px";
            readonly stroke: "2px";
            readonly lineCap: "round";
            readonly lineJoin: "round";
            readonly padding: "2px from edge";
            readonly alignment: "Optical alignment preferred over mathematical centering";
        };
        readonly colorRule: "Icons inherit currentColor. Use foreground for primary, muted for secondary, accent for interactive states.";
        readonly availableIcons: readonly ["Brain", "Activity", "Heart", "Headphones", "Zap", "Shield", "Timer", "Chart", "Eye", "Moon", "User", "Signal"];
    };
    readonly spacing: {
        readonly baseUnit: "4px";
        readonly scale: readonly [4, 8, 12, 16, 24, 32, 48, 64, 96];
        readonly borderRadius: readonly [{
            readonly value: "4px";
            readonly token: "sm";
        }, {
            readonly value: "8px";
            readonly token: "md";
        }, {
            readonly value: "12px";
            readonly token: "lg";
        }, {
            readonly value: "16px";
            readonly token: "xl";
        }, {
            readonly value: "24px";
            readonly token: "2xl";
        }, {
            readonly value: "9999px";
            readonly token: "full";
        }];
        readonly card: {
            readonly padding: "32px";
            readonly borderRadius: "12px";
            readonly border: "1px solid var(--border)";
            readonly darkTheme: {
                readonly background: "#111111";
                readonly text: "#EDEDED";
                readonly muted: "#888888";
                readonly accent: "#00E5FF";
                readonly border: "#222222";
            };
            readonly lightTheme: {
                readonly background: "#FFFFFF";
                readonly text: "#0A0A0A";
                readonly muted: "#666666";
                readonly accent: "#0070F3";
                readonly border: "#E5E5E5";
            };
        };
        readonly buttons: {
            readonly borderRadius: "9999px (pill)";
            readonly padding: "12px 32px";
            readonly fontWeight: 500;
            readonly variants: readonly [{
                readonly name: "Primary";
                readonly bg: "#FFFFFF";
                readonly text: "#000000";
                readonly border: "none";
            }, {
                readonly name: "Secondary";
                readonly bg: "transparent";
                readonly text: "#FFFFFF";
                readonly border: "1px solid #333333";
            }, {
                readonly name: "Accent";
                readonly bg: "#0070F3";
                readonly text: "#FFFFFF";
                readonly border: "none";
            }, {
                readonly name: "Cyan";
                readonly bg: "#00E5FF";
                readonly text: "#000000";
                readonly border: "none";
            }];
        };
    };
    readonly voiceTone: {
        readonly tagline: "Neuroscience meets sport.";
        readonly principles: readonly [{
            readonly name: "Precise";
            readonly description: "We use clear, specific language. No buzzwords. If we mention EEG, we explain what it does — not just that it's \"advanced.\"";
        }, {
            readonly name: "Calm";
            readonly description: "Our tone is confident but never aggressive. We inform rather than hype. Data speaks; we amplify it with clarity.";
        }, {
            readonly name: "Human";
            readonly description: "We talk to athletes, students, workers — real people. Language is accessible, warm, and avoids clinical distance.";
        }, {
            readonly name: "Forward";
            readonly description: "We look ahead. Our language reflects innovation and progress without being utopian or making unrealistic promises.";
        }];
        readonly doExamples: readonly ["Miruns captures EEG signals to measure cognitive fatigue in real time.", "Your brain data stays on your device.", "Recovery insights based on your unique patterns.", "Discreetly embedded in the headphones you already wear."];
        readonly dontExamples: readonly ["Revolutionary AI-powered brain-reading technology!", "We hack your brain for maximum performance.", "The world's most advanced neurotech.", "Unlock your brain's hidden potential!"];
        readonly standardDescription: "Miruns integrates seamlessly into everyday headphones — capturing EEG, heart rate, HRV, and environmental data without interrupting your training or your day. The companion app processes these signals with AI to deliver real-time fatigue prediction, recovery tracking, and personalised health insights.";
    };
};
