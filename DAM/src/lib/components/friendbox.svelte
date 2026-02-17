<script>
    export let friendname = ""
    import iconRemove from '$lib/assets/remove.svg'
</script>

<div id="box">
    <button>{friendname}</button>
    <button>
        <img src={iconRemove} alt="">
    </button>
</div>

<style>
    #box{
        width: 100%;
        height: 46px;
        margin:auto;
        margin-bottom: 10px;
    }
    button {
        height: 46px;
        text-shadow: 0px 1px 1px #00000050;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    button:first-of-type {
        padding-right: 5px;
        text-indent: 2px;
        width: 84.5%;
        float:left;
        text-align: left;
        border-radius: 5px 0px 0px 5px;
    }
    button:last-of-type {
        width: 15%;
        float: right;
        border-radius: 0px 5px 5px 0px;
    }
    button img {
        background-color: transparent;
        padding-top: 8px;
        filter: drop-shadow( 0px 2px 1px #00000050);
    }
</style>