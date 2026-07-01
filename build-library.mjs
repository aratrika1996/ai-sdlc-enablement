#!/usr/bin/env node
/**
 * build-library.mjs
 * Regenerates prompt-library.md from prompts.json (the single source of truth).
 * Run after editing prompts.json:   node build-library.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";

const data = JSON.parse(readFileSync(new URL("./prompts.json", import.meta.url)));
const { meta, stages } = data;

const out = [];
out.push(`# ${meta.title}`, "");
out.push(meta.subtitle, "");
out.push(`> Tuned for ${meta.tools.join(" and ")}, but tool-agnostic in structure. Fill in the \`[BRACKETED]\` parts, treat every output as a first draft, and review before you use it.`, "");

out.push("## Responsible-use guardrails (read first)", "");
for (const g of meta.guardrails) out.push(`- ${g}`);
out.push("");

out.push("## The 4-part prompt pattern", "");
out.push("Every prompt here follows the same shape:", "");
out.push("- **Context** — the system, constraints, and any examples");
out.push("- **Role** — the expertise you want the model to adopt");
out.push("- **Task** — one clear ask, plus the output format you want");
out.push("- **Check** — ask it to flag assumptions, risks, or uncertainty", "");

for (const stage of stages) {
  out.push(`## ${stage.name}`, "");
  for (const p of stage.prompts) {
    const roles = p.roles.map(r => meta.roleLabels[r] || r.toUpperCase()).join(", ");
    out.push(`### ${p.title}`);
    out.push(`*Roles: ${roles}. When: ${p.when}*`, "");
    out.push("```");
    out.push(p.text);
    out.push("```", "");
  }
}

out.push("## Contributing", "");
out.push("Add prompts to `prompts.json` (not this file), then run `node build-library.mjs` to regenerate. Keep every example free of real or sensitive data.", "");
out.push("---", "");
out.push("*Generated from `prompts.json`. Maintained by Aratrika Mukherjee.*", "");

writeFileSync(new URL("./prompt-library.md", import.meta.url), out.join("\n"));
console.log(`Wrote prompt-library.md (${stages.reduce((n, s) => n + s.prompts.length, 0)} prompts across ${stages.length} stages).`);
