# Agent guide

## Project

`pi-whimsical-toronto` is a dependency-free Pi extension that replaces the working indicator with a random Toronto-inspired status line.

## Entry points

- `src/index.ts` — extension factory, phrase list, and random selection
- `test/index.test.ts` — lifecycle behavior tests
- `package.json#pi.extensions` — Pi package discovery manifest

## Working rules

- Keep runtime code dependency-free.
- Keep phrases short enough for a terminal status area.
- Preserve behavior in non-interactive Pi modes; UI calls must remain safe no-ops there.
- Use the current `@earendil-works/pi-coding-agent` extension API.
- Do not add build output; Pi loads TypeScript directly.

## Validation

Run `pnpm check` before committing. It covers formatting, linting, type checking, and tests.

## Changelog and releases

- Maintain `CHANGELOG.md` as the source of truth for user-visible changes.
- Add upcoming changes under the existing `## [Unreleased]` headings: Added, Changed, or Fixed.
- Do not duplicate subsections.
- For a release, move entries into an immutable version section and recreate an empty Unreleased section.
- Use the released section as the starting point for GitHub release notes.

## Commits

Use Conventional Commits: `<type>[scope]: <description>`.
