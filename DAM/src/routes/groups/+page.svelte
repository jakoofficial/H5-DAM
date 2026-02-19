<script>
	import Groupbox from '$lib/components/groupbox.svelte';
	import addnew from '$lib/assets/addnew.svg';

	function createnew() {
        window.location.href = "./groupcreate"
    }
</script>

<h1>Groups</h1>
<div id="searchbox">
	<input type="text" placeholder="Search" />
	<button on:click={createnew}><img alt="" src={addnew} /></button>
</div>
<div id="overview">
	<Groupbox groupname="Test"></Groupbox>
</div>

<style>
	h1 {
		width: 100%;
		text-align: center;
		margin: 20% 0 15% 0;
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
		padding: 3px 0 0 0px;
	}
	#overview {
		height: 59%;
		overflow-y: auto;
		width: 85%;
		margin: auto;
	}
</style>
