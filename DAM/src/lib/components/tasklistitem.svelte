<script>
	export let TaskObj = {
        title: "Task",
        desc: "s",
    };
	import checkbox from '$lib/assets/checkbox.svg';
</script>

<div id="overview">
	<p id="tasktitle">{TaskObj.title}</p>
	<p id="createddate">00-00-0000</p>
	<p id="shortdesc">{TaskObj.desc}</p>
	<div id="completed">
		<img src={checkbox} alt="" />
    </div>
	<div id="taskdate">
		<p>00-00-0000 00-00-0000</p>
	</div>
	<p id="owner">group</p>
</div>

<style>
	#overview {
		border-radius: 5px;
		width: 98%;
		height: 85px;
		background-color: #2c2c2c;
		margin: 0 0 2% 0;
		filter: drop-shadow(0px 2px 1px #00000050);
		border-image-source: linear-gradient(0deg, rgba(37, 37, 37, 0.62) 0%, rgba(31, 31, 31, 0) 25%);
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 1fr);
		gap: 0px;
        text-indent: 5px;
	}
    #overview:hover {
        cursor: pointer;
		background-color: #464646;
    }
	p {
		background-color: transparent;
	}
	#tasktitle {
		font-size: 18px;
		grid-column: span 3 / span 3;
        margin-top: 2px;
	}
	#createddate {
		text-align: right;
		font-size: 12px;
		color: #d9d9d950;
		grid-column-start: 4;
        padding-right: 5px;
        margin-top: 2px;
	}
	#shortdesc {
		grid-column: span 3 / span 3;
		grid-row: span 2 / span 2;
		grid-row-start: 2;
        font-size: 14px;
        text-indent: 0px;
        padding-left: 5px;
        overflow-x: hidden;
	}
	#completed {
		grid-row: span 2 / span 2;
		grid-column-start: 4;
		grid-row-start: 2;
        border: none;
        padding-top: 3px;
        padding-right: 0px;
        filter: none;
        opacity: 0.5;
        background-color: transparent;
	}
    #completed img {
        margin-left: 50%;
        margin-right: 50%;
        vertical-align: middle;
        transform: translateX(-50%);
    }
	#taskdate {
		grid-column: span 2 / span 2;
		grid-row-start: 4;
        font-size: 12px;
        background-color: transparent;
	}
    #taskdate p{
		color: #d9d9d950;
    }
	#owner {
		grid-column: span 2 / span 2;
		grid-column-start: 3;
		grid-row-start: 4;
        text-align: right;
        padding-right: 10px;
		color: #d9d9d950;
        font-size: 12px;
	}
</style>
