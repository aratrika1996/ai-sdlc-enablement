# GenAI Across the SDLC — Enablement for Technical Teams

An interactive, explorable guide to using generative AI responsibly across the software
development lifecycle, plus a full, reusable prompt library for developers, QA, and analysts.
Tuned for Claude and ChatGPT, and built around approved-tools, human-in-the-loop guardrails.

**Live site:** https://ai-sdlc-enablement.vercel.app/

## What's here

| File | Purpose |
|------|---------|
| `prompts.json` | **Single source of truth** for every prompt, tagged by SDLC stage and role. |
| `index.html` | The interactive site. Loads `prompts.json` at runtime and renders the stage explorer and the full library from it. |
| `prompt-library.md` | Standalone, readable prompt library. **Generated** from `prompts.json`. |
| `build-library.mjs` | Regenerates `prompt-library.md` from `prompts.json`. |

## Editing prompts

1. Edit `prompts.json` only.
2. Run the build to refresh the markdown:
   ```
   node build-library.mjs
   ```
3. The site (`index.html`) picks up changes automatically, since it reads `prompts.json` directly.

Because everything derives from one file, the site and the markdown never drift.

## Running locally

`index.html` fetches `prompts.json`, so open it through a local server rather than the
`file://` protocol:

```
npx serve
# or
python3 -m http.server
```

Then visit the printed `http://localhost:...` address.

## Deploying (Vercel)

This is a static site with no build step.

1. Push this folder to a GitHub repo.
2. In Vercel: **Add New → Project → Import** the repo.
3. Framework preset: **Other**. Leave the build command empty; output directory is the root.
4. Deploy. Add the resulting URL to the top of this README.

## Responsible use

Every prompt is built for approved tools and human review. Never paste confidential, personal,
regulated, or production data. AI assists; a person stays accountable for every output.

---

*Maintained by Aratrika Mukherjee.*
