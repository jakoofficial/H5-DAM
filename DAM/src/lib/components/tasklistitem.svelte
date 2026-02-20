<script>
    // export let TaskObj = null;
</script>
<div id="overview">
    <div id="top">
        <p id="tasktitle">Title</p>
        <p id="createddate">00-00-0000</p>
    </div>
</div>

<style>
    #overview {
        border-radius: 5px;
        width: 100%;
        height:80px;
        background-color: #2C2C2C;
        margin: 0 0 2% 0;
        filter: drop-shadow( 0px 2px 1px #00000050);
	    border-image-source: linear-gradient(0deg, rgba(37, 37, 37, 0.62) 0%, rgba(31, 31, 31, 0) 25%);
        display: flex;
    }
    p{
        background-color: transparent;
    }
    #top{
        margin-top: 5px;
        display: flex;
        width: 100%;
        height: 25%;
        align-items: center;
        padding: 0 5px;
        background-color: transparent;
    }
    #tasktitle {
        font-size: 18px;
        width: 80%;
    }
    #createddate {
        width: 30%;
        text-align: right;
        font-size: 12px;
        color: #d9d9d950;
    }
</style>