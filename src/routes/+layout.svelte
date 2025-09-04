<script>
	import logo from '$lib/assets/pictures/logo.svg';
	import stylesheet from '$lib/css/stylesheet.css'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logo} />
</svelte:head>

{@render children?.()}
