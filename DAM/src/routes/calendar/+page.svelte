<script>
	import addnew from '$lib/assets/addnew.svg';
	import Tasklistitem from '$lib/components/tasklistitem.svelte';
	import { goto } from '$app/navigation';

	let date = '00';
	function createTask() {
		goto('./taskcreate?date=' + date);
	}

    let setDatePickerVisible = false
    function DatepickerShow(show = false){
        setDatePickerVisible = show;
    }
</script>

<div id="container">
	<h1>Calendar</h1>
	<button id="addnewbtn" on:click={createTask}>
		<img src={addnew} alt="Create new task" />
	</button>
	<div id="calendartasks">
		<Tasklistitem></Tasklistitem>
		<Tasklistitem></Tasklistitem>
		<Tasklistitem></Tasklistitem>
		<Tasklistitem></Tasklistitem>
		<Tasklistitem></Tasklistitem>
		<Tasklistitem></Tasklistitem>
		<Tasklistitem></Tasklistitem>
		<Tasklistitem></Tasklistitem>
	</div>
	<div id="dateselect">
		<button id="dateback" class="datebtn">&lt;</button>
		<button id="datebutton" on:click={() => DatepickerShow(true)}>00-00-0000</button>
		<button id="dateforward" class="datebtn">&gt;</button>
		
        <div id="datepickerBack" style:visibility={setDatePickerVisible ? 'visible':'hidden'}>
			<div id="datepicker">
				<select name="startdate-day" id="date-day">
					<option value="00">00</option>
				</select>
				<select name="startdate-month" id="date-month">
					<option value="00">January</option>
				</select>
				<select name="startdate-year" id="date-year">
					<option value="00">0000</option>
				</select>
            </div>
            <div id="buttons">
                <button on:click={() => DatepickerShow(false)}>Cancel</button>
                <button on:click={() => DatepickerShow(false)}>Confirm</button>
            </div>
		</div>
	</div>
</div>

<style>
	#container {
		width: 85%;
		height: 90%;
		margin: auto;
	}
	h1 {
		width: 100%;
		text-align: center;
		margin: 25% 0 8% 0;
	}
	#datepickerBack {
		background-color: #000000a8;
		width: 100%;
		height: 100%;
		top: 0%;
		left: 0%;
		position: fixed;
	}
	#datepicker {
		position: absolute;
		display: flex;
		width: 80%;
		top: 70%;
		left: 50%;
        background-color: transparent;
		transform: translateX(-50%);
	}
	#datepicker select {
        height: 50px;
		width: 100%;
        margin: 0px;
		border-radius: 0px;
	}
	#datepicker select:nth-child(1) {
        border-radius: 5px 0px 0px 5px;
	}
	#datepicker select:nth-child(3) {
        border-radius: 0px 5px 5px 0px;
	}
    #buttons {
        background-color: transparent;
		width: 80%;
        position: fixed;
        top: 80%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
    }
    #buttons button {
        width: 100%;
        height: 50px;
        margin: 0 5px;
    }
	button {
		width: 60px;
		height: 36px;
	}
	#addnewbtn {
		float: right;
		margin-bottom: 5%;
	}
	button img {
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}
	#calendartasks {
		width: 100%;
		height: 64%;
		overflow-x: hidden;
		overflow-y: auto;
		margin-bottom: 5%;
		display: flexbox;
	}
	#dateselect {
		width: 100%;
		height: 40px;
		display: flex;
		align-items: center;
	}
	#dateselect .datebtn {
		width: 25%;
	}
	#datebutton {
		width: 80%;
		margin: 0px 2%;
		font-size: 16px;
	}
</style>
