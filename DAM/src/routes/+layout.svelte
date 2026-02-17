<script>
	import favicon from '$lib/assets/favicon.svg';
	import '../lib/css/style.css';
	import iconHome from '$lib/assets/home.svg';
	import iconChecklist from '$lib/assets/checklist.svg';
	import iconOverview from '$lib/assets/dashboard.svg';
	import iconLogin from '$lib/assets/login.svg';
	import iconLogout from '$lib/assets/logout.svg';
	import { onMount } from 'svelte';

	let { children } = $props();

	let signedIn = true;
	let onMobile = true;

	onMount(() => {
		if (window.screen.width <= 420) {
			onMobile = true;
		} else {
			onMobile = false;
		}
		setMenuType();
	});

	/**
	 * @type {HTMLElement}
	 */
	let mobileSignedIn;
	/**
	 * @type {HTMLElement}
	 */
	let mobileMenuSignedOut;

	function setMenuType() {
		if (signedIn) {
			mobileSignedIn?.classList.replace('hidden', 'visible');
			mobileMenuSignedOut?.classList.replace('visible', 'hidden');
		} else {
			mobileMenuSignedOut?.classList.replace('hidden', 'visible');
			mobileSignedIn?.classList.replace('visible', 'hidden');
		}
	}

	function isSignedIn() {
		signedIn = true;
		if (onMobile) {
		}
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>DAM</title>
</svelte:head>

<section>
	<div id="content">
		{@render children()}
	</div>
	<nav class="visible" id="mobile-signedout" bind:this={mobileMenuSignedOut}>
		<a href="./"><img src={iconHome} alt="Home" /></a>
		<a href="./signin"><img src={iconLogin} alt="Sign in" /></a>
	</nav>
	<nav class="hidden" id="mobile-signedin" style="width: 500px;" bind:this={mobileSignedIn}>
		<a href="./"><img src={iconHome} alt="Home" /></a>
		<a href="./"><img src={iconChecklist} alt="Home" /></a>
		<a href="./"><img src={iconOverview} alt="Home" /></a>
		<a href="./?signedout"><img src={iconLogout} alt="Sign out"/></a>
	</nav>
</section>

<style>
	.hidden {
		visibility: hidden;
	}
	.visible {
		visibility: visible;
	}
</style>
