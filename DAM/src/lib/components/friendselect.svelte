<script>
    import checkbox from '$lib/assets/checkbox.svg';
    import checkedbox from '$lib/assets/checkedbox.svg';
</script>
<div>
    <p>Name</p>
    <img src={checkedbox} alt="">
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
        height: 100%;
        font-size: 18px;
        display: flex;
        align-items: center;
        background-color: transparent;
        text-indent: 5px;
    }
    img{
        width: 25px;

        float: right;
    }
</style>