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

	let signedIn = false;
	let onMobile = true;

	onMount(() => {
		if (window.screen.width <= 420) {
			onMobile = true;
		} else {
			onMobile = false;
		}
		if (localStorage.getItem("session_token")){
			signedIn = true
		}
		else {
			signedIn = false
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
		<a href="./tasklist"><img src={iconChecklist} alt="tasks" /></a>
		<a href="./overview"><img src={iconOverview} alt="Overview" /></a>
		<a href="./signout"><img src={iconLogout} alt="Sign out"/></a>
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
