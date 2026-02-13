<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
	<a href="./">Home</a>
	<a href="./signin">Signin</a>
</nav>
{@render children()}

<style>
	@import '../lib/css/style.css';
</style>
