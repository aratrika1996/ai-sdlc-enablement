# GenAI Prompt Library for Technical Teams

Reusable prompts across the software development lifecycle, for developers, QA, and analysts.

> Tuned for Claude and ChatGPT, but tool-agnostic in structure. Fill in the `[BRACKETED]` parts, treat every output as a first draft, and review before you use it.

## Responsible-use guardrails (read first)

- Never paste confidential, client, personal, regulated, or production data, including credentials and keys.
- Use only approved tools and accounts, and follow your organization's approved-tools list.
- You stay accountable. AI assists; a human owns every output that ships.
- Verify facts against a source of truth. Models can be confidently wrong.
- Do not assume internal knowledge. The model does not know your proprietary systems unless you give it context.

## The 4-part prompt pattern

Every prompt here follows the same shape:

- **Context** — the system, constraints, and any examples
- **Role** — the expertise you want the model to adopt
- **Task** — one clear ask, plus the output format you want
- **Check** — ask it to flag assumptions, risks, or uncertainty

## Plan & Analyze

### User stories from a requirement
*Roles: BA. When: Turning a raw requirement into structured backlog items.*

```
You are a business analyst. From the requirement below, write 3-5 user
stories ("As a [role], I want [goal] so that [benefit]"), each with
Given/When/Then acceptance criteria. Then list your assumptions and any
ambiguous points. Requirement: [PASTE NON-CONFIDENTIAL TEXT]
```

### Summarize a long requirements document
*Roles: BA. When: Getting the essence of a long spec quickly.*

```
Summarize the document below for a [DEV / QA / STAKEHOLDER] audience in
under 200 words. Lead with the core goal, then list key requirements,
constraints, and open questions as bullets. Flag anything contradictory.
[PASTE NON-CONFIDENTIAL TEXT]
```

### Use-case / flow diagram (Mermaid)
*Roles: BA, DEV. When: Producing a first-draft diagram to refine in draw.io.*

```
From this process description, produce a Mermaid flowchart (graph TD)
showing the main steps, decision points, and outcomes. Keep labels short.
After the diagram, list any steps you inferred so I can correct them.
Process: [DESCRIBE THE PROCESS]
```

## Design

### Compare architecture options
*Roles: DEV. When: Exploring approaches before committing to one.*

```
Act as a senior software architect. For [FEATURE], propose 2-3 design
approaches. For each, give pros, cons, and when to choose it. Note risks
and open questions. Constraints: [STACK / SCALE / SECURITY].
```

### Draft an API contract
*Roles: DEV. When: Turning a description into an endpoint spec.*

```
Draft an API contract for [FEATURE]. For each endpoint, give the method,
path, request and response schema, and error cases. Note any assumptions.
Style: [REST / GraphQL]. Context: [DESCRIBE].
```

### Sequence diagram (Mermaid)
*Roles: DEV, BA. When: Visualizing a flow between components.*

```
Produce a Mermaid sequence diagram for the flow below, showing each actor
and system and the messages between them. After it, note anything you
assumed. Flow: [DESCRIBE THE INTERACTION]
```

## Build

### Scaffold a function from a spec
*Roles: DEV. When: Starting routine or boilerplate code.*

```
You are a senior [LANGUAGE] developer. Write a function that [DOES WHAT].
Inputs: [INPUTS]. Output: [OUTPUT]. Include input validation and clear
comments. Then list edge cases I should test and any assumptions you made.
```

### Explain unfamiliar code
*Roles: DEV. When: Onboarding to a codebase or reviewing another person's work.*

```
Explain what the code below does, step by step, for a developer who is new
to this codebase. Call out inputs, outputs, side effects, and anything
risky. Then suggest one improvement. [PASTE CODE]
```

### Suggest a refactor
*Roles: DEV. When: Improving readability without changing behaviour.*

```
Refactor the code below for readability and maintainability without
changing its behaviour. Explain each change briefly and confirm the public
interface is unchanged. Flag anything you are unsure about. [PASTE CODE]
```

### Debug an error
*Roles: DEV. When: You have an error message and a snippet.*

```
I am getting this error: [ERROR MESSAGE]. Here is the relevant code and
what I expected to happen. List the most likely causes in order of
probability, explain why, and suggest a fix for each. Do not assume
libraries I have not shown. [PASTE CODE + EXPECTED BEHAVIOUR]
```

## Test (QA)

### Generate test cases and edge cases
*Roles: QA. When: Building coverage for a feature.*

```
You are a QA engineer. For the feature below, list test cases as a table:
Scenario | Steps | Expected result. Group into happy path, edge cases,
error handling, and permission checks. Feature: [DESCRIBE FEATURE + RULES]
```

### Draft a unit test
*Roles: QA. When: A starting test you will verify and adapt.*

```
Write [FRAMEWORK] unit tests for the function below. Cover normal inputs,
boundary values, and invalid inputs. Use clear test names that describe
the scenario. Note any behaviour you had to assume. [PASTE FUNCTION]
```

### Create realistic test data
*Roles: QA. When: You need varied, non-sensitive sample data.*

```
Generate [N] rows of realistic but entirely fictional test data for
[ENTITY] with these fields: [FIELDS]. Include a mix of typical, boundary,
and invalid values. Output as CSV. Use no real names or identifiers.
```

## Review & Document

### Draft a help guide from a feature
*Roles: DEV, BA. When: Turning a built feature into user-facing documentation.*

```
You are a technical writer. Write a help-guide section for end users on
how to [USE FEATURE]. Audience: [non-technical]. Include a one-line
purpose, numbered steps, and a short troubleshooting list. Plain language.
```

### Summarize a pull request
*Roles: DEV, QA. When: Reviewing changes or writing release notes.*

```
Summarize the changes in this diff for a reviewer: what changed, why it
likely changed, and what to test. List risks or areas needing closer
review. Keep it under 150 words. [PASTE DIFF OR DESCRIPTION]
```

### Translate technical content for a non-technical reader
*Roles: BA. When: A stakeholder needs the impact, not the internals.*

```
Rewrite the technical explanation below for a non-technical business
stakeholder. Keep it accurate, lead with the impact, and replace jargon
with plain terms. Aim for under 150 words. [PASTE TEXT]
```

## Deploy & Support

### Release notes for two audiences
*Roles: DEV. When: Announcing a change to users and to engineers.*

```
Summarize the changes below into release notes for two audiences: a
one-line summary for end users and a technical bullet list for engineers.
Flag anything needing a migration or downtime note. Changes: [PASTE]
```

### Incident post-mortem skeleton
*Roles: DEV, QA. When: Turning incident notes into a structured write-up.*

```
From the incident notes below, draft a blameless post-mortem skeleton:
summary, impact, timeline, root cause, and follow-up actions. Keep
confidential detail out. Notes: [PASTE NON-CONFIDENTIAL SUMMARY]
```

### Support FAQ from a feature
*Roles: BA. When: Preparing support material for a new feature.*

```
Write a short support FAQ for [FEATURE] aimed at end users: 5-7 common
questions with plain-language answers, plus one "who to contact" line.
Feature details: [DESCRIBE].
```

## Contributing

Add prompts to `prompts.json` (not this file), then run `node build-library.mjs` to regenerate. Keep every example free of real or sensitive data.

---

*Generated from `prompts.json`. Maintained by Aratrika Mukherjee.*
