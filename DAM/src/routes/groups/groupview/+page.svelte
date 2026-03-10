<script>
	import { goto } from '$app/navigation';

	// @ts-nocheck

	import Friendbox from '$lib/components/friendbox.svelte';

	// @ts-nocheck

	import { Get } from '$lib/DataFetcher';
	import { groupIDStore } from '$lib/stores';
	import { onMount } from 'svelte';
	export let groupname = 'Group';
	export let id = '';
	let ready = false;
	/**
	 * @type {string | any[] | null | undefined}
	 */
	// @ts-ignore
	let members = [];
	// @ts-ignore
	groupIDStore.subscribe((value) => (id = value));

	async function getGroupDetails() {
		if (id == '' || id == null) {
			goto('./');
		}
		// @ts-ignore
		const dataArr = await Get('get_group_by_id', { groupID: id });
		groupname = dataArr[0][1];
		for (let i = 0; i < dataArr.length; i++) {
			// @ts-ignore
			members.push(dataArr[i][0]);
		}
		console.log(members);

		ready = true;
	}

	onMount(() => {
		getGroupDetails();
	});
</script>

<div id="wrapper">
	<h1>{groupname}</h1>
    <p>Members</p>
	{#if ready == true && members.length > 0}
		{#each members as member}
			<Friendbox friendname={member}></Friendbox>
		{/each}
	{/if}
</div>

<style>
	#wrapper {
		margin: auto;
		width: 85%;
	}
	h1 {
		width: 100%;
		text-align: center;
		margin: 20% 0 15% 0;
	}
</style>
