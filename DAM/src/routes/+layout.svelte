<script>
	import favicon from '$lib/assets/favicon.svg';
	import '../lib/css/style.css'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<section>
	<div id="content">
		{@render children()}
	</div>
	<nav>
		<a href="./">Home</a>
		<a href="./signin">Signin</a>
	</nav>
</section>