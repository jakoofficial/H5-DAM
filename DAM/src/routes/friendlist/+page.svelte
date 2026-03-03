<script>
// @ts-nocheck
	import Friendbox from '$lib/components/friendbox.svelte';
	import iconAddFriend from '$lib/assets/addfriend.svg';
    import { Get } from '$lib/DataFetcher';
	import { onMount } from 'svelte';
    /**
	 * @type {string | any[] | null | undefined}
	 */
    let data = [];
    let ready = false;
    async function getFriendsList(){
        const dataArr = await Get("getfriends", {"sessionToken":localStorage.getItem("session_token")})
        data = dataArr
        ready = true
    }

	

    onMount(() => {getFriendsList()})

</script>

<h1>Friends</h1>
<div id="searchbox">
	<input type="text" placeholder="Search" />
	<button><img alt="" src={iconAddFriend} /></button>
</div>
<p>20 / 100</p>
<div id="friendlist">
    {#if ready==true && data.length > 0}
        {#each data as item}
        <Friendbox friendname={item}></Friendbox>
        {/each}
    {/if}
</div>

<style>
	h1 {
		width: 100%;
		text-align: center;
		margin: 20% 0 10% 0;
	}
	#searchbox {
		width: 85%;
		margin: auto;
		margin-bottom: 10%;
		height: 37px;
	}
	#searchbox input {
		width: 79%;
		height: 100%;
		font-size: 16px;
		text-indent: 5px;
	}
	#searchbox button {
		width: 18%;
		height: 110%;
		float: right;
		text-shadow: 0px 1px 1px #00000050;
	}
	#searchbox button img {
		width: 85%;
		height: 85%;
		background-color: transparent;
		filter: drop-shadow(0px 2px 1px #00000050);
		padding: 2px 0 0 5px;
	}
	p {
		width: 85%;
		margin: auto;
		text-align: right;
		color: #d9d9d950;
		text-shadow: 0px 1px 1px #00000050;
	}
	#friendlist {
		width: 85%;
		height: 59%;
		overflow-y: auto;
		margin: auto;
	}
</style>
