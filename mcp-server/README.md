# @miruns/brand-mcp

An MCP (Model Context Protocol) server that exposes the **Miruns brand identity** as queryable tools for AI coding assistants.

Instead of copy-pasting hex codes from a PDF, any AI agent (GitHub Copilot, Claude, Cursor, etc.) can programmatically query the brand system while writing code.

## Available Tools

| Tool | Description |
|---|---|
| `get_brand_summary` | High-level overview — name, tagline, description, available sections |
| `get_colors` | Full color palette for dark + light themes, hex values, CSS vars, accent usage rules |
| `get_typography` | Geist Sans + Geist Mono specs, font weights, CDN links, full type scale with Tailwind classes |
| `get_logo` | Wordmark rules, asset filenames, clear space, minimum sizes, do's and don'ts |
| `get_icons` | Lucide-style icon guidelines, grid/stroke specs, approved icon list |
| `get_spacing` | 4px base grid, spacing scale, border-radius tokens, card anatomy, button variants |
| `get_voice_tone` | Tagline, four principles (Precise/Calm/Human/Forward), do/don't examples, standard description |

## Quick Start

```bash
cd mcp-server
npm install
npm run build
```

## Configuration

### VS Code (GitHub Copilot)

Add to your `.vscode/mcp.json` in any project:

```json
{
  "servers": {
    "miruns-brand": {
      "type": "stdio",
      "command": "node",
      "args": ["/absolute/path/to/miruns-brand/mcp-server/dist/index.js"]
    }
  }
}
```

### Claude Desktop

Add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "miruns-brand": {
      "command": "node",
      "args": ["/absolute/path/to/miruns-brand/mcp-server/dist/index.js"]
    }
  }
}
```

### Cursor

Add to `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "miruns-brand": {
      "command": "node",
      "args": ["/absolute/path/to/miruns-brand/mcp-server/dist/index.js"]
    }
  }
}
```

## Example Usage

Once connected, an AI assistant can:

- **"Use the Miruns dark theme colors for this page"** → calls `get_colors` with `theme: "dark"` and gets exact hex values
- **"Style this button to match the Miruns brand"** → calls `get_spacing` with `component: "buttons"` and gets pill radius, padding, variants
- **"What font should I use?"** → calls `get_typography` and gets Geist Sans/Mono with CDN links and weight specs
- **"Write a product description"** → calls `get_voice_tone` and gets the tone principles + approved copy examples

## Updating Brand Tokens

All brand data lives in `src/brand-tokens.ts`. Edit that file, rebuild, and every connected AI agent gets the updated values immediately.
