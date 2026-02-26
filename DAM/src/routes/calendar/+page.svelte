<script>
	import addnew from '$lib/assets/addnew.svg';
	import Tasklistitem from '$lib/components/tasklistitem.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let date = new Date();

	onMount(() => {
		const d = getDaysInMonth(date.getMonth(), date.getFullYear());
		const m = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];
		const y = getYears()
        console.log(y)
		const daypick = document.getElementById('date-day');
		const monthpick = document.getElementById('date-month');
		const yearpick = document.getElementById('date-year');
		for (let i = 0; i < d.length; i++) {
			const opt = document.createElement('option');
			const day = i + 1;
			opt.value = day.toString();
			opt.innerHTML = day.toString();
			daypick?.appendChild(opt);
		}
		for (let i = 0; i < m.length; i++) {
			const opt = document.createElement('option');
			const month = m[i];
			opt.value = month;
			opt.innerHTML = month;
			monthpick?.appendChild(opt);
		}
		for (let i = 0; 1 < y.length; i++) {
			const opt = document.createElement('option');
			const year = y[i];
			opt.value = year.toString();
			opt.innerHTML = year.toString();
			yearpick?.appendChild(opt);
		}
	});

	function getYears() {
		var max = new Date().getFullYear();
		var min = 2025;
		var years = [];

		for (var i = max; i >= min; i--) {
			years.push(i);
		}
		return years;
	}
	// @ts-ignore
	function getDaysInMonth(month, year) {
		var date = new Date(year, month, 1);
		var days = [];
		while (date.getMonth() === month) {
			days.push(new Date(date));
			date.setDate(date.getDate() + 1);
		}
		return days;
	}

	const taskDate = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
	function createTask() {
		goto('./taskcreate?date=' + taskDate);
	}

	let setDatePickerVisible = false;
	function DatepickerShow(show = false) {
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
		<button id="datebutton" on:click={() => DatepickerShow(true)}>{taskDate}</button>
		<button id="dateforward" class="datebtn">&gt;</button>

		<div id="datepickerBack" style:visibility={setDatePickerVisible ? 'visible' : 'hidden'}>
			<div id="datepicker">
				<select name="startdate-day" id="date-day"> </select>
				<select name="startdate-month" id="date-month"> </select>
				<select name="startdate-year" id="date-year"> </select>
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
