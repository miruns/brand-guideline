#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────
// Miruns Brand MCP Server
// Exposes the complete Miruns brand identity as MCP tools
// so any AI coding assistant can query colors, typography,
// logos, icons, spacing, and voice guidelines on the fly.
// ─────────────────────────────────────────────────────────────

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { brand } from "./brand-tokens.js";

const server = new McpServer({
  name: "miruns-brand",
  version: "1.0.0",
});

// ── get_brand_summary ─────────────────────────────────────────
server.tool(
  "get_brand_summary",
  "Get a high-level overview of the entire Miruns brand identity — name, tagline, description, and what's available.",
  {},
  async () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            name: brand.name,
            version: brand.version,
            tagline: brand.tagline,
            description: brand.description,
            availableSections: [
              "colors — dual-theme color palette (dark primary, light secondary)",
              "typography — Geist Sans + Geist Mono, type scale",
              "logo — wordmark rules, assets, do's and don'ts",
              "iconography — Lucide-style icons, style rules",
              "spacing — 4px base grid, border-radius, buttons, cards",
              "voiceTone — principles, tagline, do/don't examples",
            ],
          },
          null,
          2
        ),
      },
    ],
  })
);

// ── get_colors ────────────────────────────────────────────────
server.tool(
  "get_colors",
  "Get the Miruns color palette. Returns hex values and CSS custom properties for both dark and light themes, plus accent usage guidelines.",
  {
    theme: z
      .enum(["dark", "light", "all"])
      .optional()
      .describe(
        "Which theme to return: 'dark', 'light', or 'all' (default: 'all')"
      ),
  },
  async ({ theme = "all" }) => {
    let result: Record<string, unknown>;

    if (theme === "all") {
      result = {
        philosophy: brand.colors.philosophy,
        dark: brand.colors.dark,
        light: brand.colors.light,
        accentUsage: brand.colors.accentUsage,
      };
    } else {
      result = {
        philosophy: brand.colors.philosophy,
        [theme]: brand.colors[theme],
        accentUsage: brand.colors.accentUsage,
      };
    }

    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  }
);

// ── get_typography ────────────────────────────────────────────
server.tool(
  "get_typography",
  "Get Miruns typography specs — primary (Geist Sans) and secondary (Geist Mono) typefaces, font weights, CDN links, and the full type scale with Tailwind classes.",
  {},
  async () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(brand.typography, null, 2),
      },
    ],
  })
);

// ── get_logo ──────────────────────────────────────────────────
server.tool(
  "get_logo",
  "Get Miruns logo usage rules — wordmark spec, asset filenames, clear space requirements, minimum sizes, and a list of things you must NOT do.",
  {},
  async () => ({
    content: [
      { type: "text", text: JSON.stringify(brand.logo, null, 2) },
    ],
  })
);

// ── get_icons ─────────────────────────────────────────────────
server.tool(
  "get_icons",
  "Get Miruns iconography guidelines — style rules (grid, stroke, alignment), color behaviour, and the list of brand-approved icons.",
  {},
  async () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(brand.iconography, null, 2),
      },
    ],
  })
);

// ── get_spacing ───────────────────────────────────────────────
server.tool(
  "get_spacing",
  "Get Miruns spatial system — 4px base grid, spacing scale, border-radius tokens, card anatomy, and button variant specs.",
  {
    component: z
      .enum(["all", "scale", "borderRadius", "card", "buttons"])
      .optional()
      .describe(
        "Return a specific component spec or 'all' (default: 'all')"
      ),
  },
  async ({ component = "all" }) => {
    let result: unknown;

    if (component === "all") {
      result = brand.spacing;
    } else {
      result = brand.spacing[component as keyof typeof brand.spacing];
    }

    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  }
);

// ── get_voice_tone ────────────────────────────────────────────
server.tool(
  "get_voice_tone",
  "Get Miruns voice & tone guidelines — tagline, four core principles (Precise, Calm, Human, Forward), do/don't copy examples, and the standard product description.",
  {},
  async () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(brand.voiceTone, null, 2),
      },
    ],
  })
);

// ── Start ─────────────────────────────────────────────────────
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
