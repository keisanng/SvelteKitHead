# SvelteKitHead

An objectively good `<svelte:head>` component.

Allows you to assign page metadata via simple JSON format inside of `+page.ts` accessable via `$page.data.meta` instead of writing HTML inside of `<svelte:head>` for every `+page.svelte` when placed inside of `+layout.svelte`.

Inside of `/example`, there's all the relevant files for using this component in SvelteKit development.

## Documentation

### Usage

This component is literally just meant to be a component in your existing SvelteKit project, and it's expected that it'll be modified for your use case.

### Scopes

Page specific metadata should be specified in `+page.ts` as page load data, and global metadata is up to you, the two ways I can think of doing it are with `+layout.ts` at the top-level of `/src` or directly inside of the head component.
