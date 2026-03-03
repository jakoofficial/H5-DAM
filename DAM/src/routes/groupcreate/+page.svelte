<script>
	// @ts-nocheck

	import Friendselect from '$lib/components/friendselect.svelte';
	import { Get } from '$lib/DataFetcher';
	import { onMount } from 'svelte';
	/**
	 * @type {string | any[] | null | undefined}
	 */
	let data = [];
	let ready = false;
	async function getFriendsList() {
		const dataArr = await Get('getfriends', {
			sessionToken: localStorage.getItem('session_token')
		});
		data = dataArr;
		ready = true;
	}

    let groupName = ""
    let members = data.map(()=>false);
    $: groupMemebers = data.filter((_, i) => members[i]);
    function CreateGroup() {
        console.log(groupMemebers)
    }

	onMount(() => {
		getFriendsList();
	});

    let test = [];
</script>

<h1>Group Creation</h1>
<div id="overview">
	<input bind:value={groupName} id="groupnameInput" type="text" placeholder="Group Name" />
	<div id="friendlist">
		{#if ready == true && data.length > 0}
			{#each data as item, i}
				<Friendselect bind:selected={members[i]} name={item}></Friendselect>
			{/each}
		{/if}
	</div>
	<button on:click={CreateGroup}>Create</button>
</div>

<style>
	h1 {
		width: 100%;
		text-align: center;
		margin: 20% 0 15% 0;
	}
	#overview {
		width: 85%;
		height: 70%;
		margin: auto;
	}
	input {
		width: 98%;
		height: 46px;
		font-size: 18px;
		text-indent: 5px;
		margin-bottom: 10%;
	}
	#friendlist {
		width: 100%;
		height: 65%;
		overflow-y: auto;
		background-color: #2c2c2c;
		border-radius: 5px;
		box-shadow: 0px 2px 1px #00000050 inset;
		border-image-source: linear-gradient(0deg, rgba(37, 37, 37, 0.62) 0%, rgba(31, 31, 31, 0) 50%);
		margin-bottom: 5%;
	}
	button {
		float: right;
		height: 46px;
		width: 45%;
	}
</style>
