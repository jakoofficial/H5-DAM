<script>
    import { Get, GetSessionToken } from "$lib/DataFetcher";
	import { onMount } from "svelte";

    export let username = "";
    export let isReady = false;
    async function getuser() {
        // @ts-ignore
        const dataArr = await Get('get_user', {'session-token': GetSessionToken()});
        username = dataArr;
    }

    onMount(()=>{
        if(GetSessionToken()){
            getuser();
            isReady = true;
        }
        else{username = ""}
    })
</script>

{#if username && isReady}
<p>Welcome <span style="text-transform: capitalize;">{username}</span></p>
{:else}
<h1>DAM</h1>
{/if}

