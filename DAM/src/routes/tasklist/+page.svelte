<script>
	import addnew from '$lib/assets/addnew.svg';
    import Tasklistitem from '$lib/components/tasklistitem.svelte';

    function createnew() {
        window.location.href="./taskcreate";
    }
</script>

<div id="container">
	<h1>Tasks</h1>
	<div id="search">
		<input placeholder="Search" type="text" />
		<button on:click={createnew}>
			<img src={addnew} alt="" />
		</button>
	</div>
    <div id="filter">
        <select name="" id="">
            <option value="My tasks">My tasks</option>
            <option value="My tasks">Group tasks</option>
        </select>
    </div>
    <div id="tasklist">
        <Tasklistitem></Tasklistitem>
        <Tasklistitem></Tasklistitem>
        <Tasklistitem></Tasklistitem>
        <Tasklistitem></Tasklistitem>
        <Tasklistitem></Tasklistitem>
        <Tasklistitem></Tasklistitem>
        <Tasklistitem></Tasklistitem>
        <Tasklistitem></Tasklistitem>
        <Tasklistitem></Tasklistitem>
    </div>
</div>

<style>
	#container {
		width: 85%;
        height: 75%;
		margin: auto;
	}
	h1 {
		text-align: center;
		margin-top: 60px;
        margin-bottom: 35px;
	}
	#search {
		width: 100%;
		margin: auto;
		margin-bottom: 10%;
		height: 37px;
	}
	#search input {
		width: 79%;
		height: 100%;
		font-size: 16px;
		text-indent: 5px;
	}
	#search button {
		width: 18%;
		height: 110%;
		float: right;
		text-shadow: 0px 1px 1px #00000050;
	}
	#search button img {
		width: 85%;
		height: 85%;
		background-color: transparent;
		filter: drop-shadow(0px 2px 1px #00000050);
		padding: 3px 0 0 0px;
	}
    #filter{
        width: 100%;
        height: 48px;
        margin-bottom: 20px;
    }
    #filter select {
        font-size: 16px;
        width: 40%;
        height: 48px;
        float: right;
    }
    #tasklist {
        width: 100%;
        height: 70%;
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>
