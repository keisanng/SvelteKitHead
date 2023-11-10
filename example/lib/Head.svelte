<script lang="ts">
	import { page } from "$app/stores"
	import { onMount } from "svelte"

	export let meta: PageMeta

	onMount(() => {
		meta.title.page = meta.title.page ? meta.title.page : (meta.title.page = $page.url.pathname)

		if (!meta.title.strict) meta.title.page += ` - ${$page.url.hostname}`

		meta.description = meta.description ? meta.description : (meta.description = meta.title.page)
	})
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	{#if meta.robots}
		<meta name="robots" content={meta.robots} />
	{/if}
	<!-- "index, follow" -->
	<title>{meta.title.page}</title>
	<meta name="description" content={meta.description} />
	<link rel="canonical" href={$page.url.href} />

	<link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

	<meta property="og:site_name" content={meta.title.site ? meta.title.site : $page.url.hostname} />
	{#if meta.locales}
		<meta property="og:locale" content={meta.locales[0]} />
		{#each meta.locales as locale}
			<meta property="og:locale_alternative" content={locale} />
		{/each}
	{/if}
	<meta property="og:type" content={meta.type.og ? meta.type.og : "website"} />
	<meta property="og:title" content={meta.title.page} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:url" content={$page.url.href} />

	<meta name="twitter:card" content={meta.type.tw ? meta.type.tw : "summary"} />
	<meta name="twitter:title" content={meta.title.page} />
</svelte:head>
