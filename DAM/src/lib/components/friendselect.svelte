<script>
    import checkbox from '$lib/assets/checkbox.svg';
    import checkedbox from '$lib/assets/checkedbox.svg';

    export let name = "";
    export let selected = false;

    function check() {
        selected = !selected
    }
</script>
<div>
    <button on:click={check}>
    <p>{name}</p>
    <img src={selected?checkedbox:checkbox} alt="Check"></button>
</div>

<style>
    div {
        width: 95%;
        height: 40px;
        margin: 5px auto;
        border-radius: 5px;
        display: flex;
    }
    p{
        width: 88%;
        font-size: 18px;
        position: relative;
        top:62%;
        transform: translateY(-50%);
        text-align: left;
        background-color: transparent;
        text-indent: 5px;
    }
    button{
        width:100%;
        background-color: transparent;
        border: none;
        display: flex;
    }
    img{
        width: 25px;
        float: right;
    }
</style>