<script>
    export let icon;
    export let buttonText = "hello";
</script>
<button class="overviewItem">
    <img src={icon} alt={buttonText}>
    <p>{buttonText}</p>
</button>

<style>
    button{
        width: 125px;
        height: 150px;
    }
    img {
        background-color: transparent;
        height: 75%;
        width: 55%;
    }
    p {
        background-color: transparent;
        text-align: center;
        vertical-align: bottom;
    }
</style>