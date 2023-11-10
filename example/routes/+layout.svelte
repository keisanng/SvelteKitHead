<script lang="ts">
	import { page } from "$app/stores"
	import { onMount } from "svelte"

	import Head from "$lib/Head.svelte"
</script>

<Head meta={$page.data.meta} />
