<script>
    export let username = "";
    export let password = "";
    export let err_msg = "";
    async function signin() {
        const res = await fetch("http://localhost:8000/api/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                given_password: password
            })
        });
        const data = await res.json();
        err_msg = data.token;
    }
</script>

<h1>Sign in</h1>

<div id="loginform">
    <input type="text" bind:value={username} placeholder="Username">
    <input type="password" bind:value={password} placeholder="Password">
    <p id="errormsg">{err_msg}</p>
    <div id="buttons">
        <button>Sign up</button>
        <button onclick={signin}>Sign in</button>
    </div>
</div>

<style>
@media screen and (max-width: 420px) {
    h1 {
        width: 100%;
        text-align: center;
        margin-top: 98px;
    }
    #loginform {
        display: block;
        width: 270px;
        margin: auto;
    }
    #loginform input {
        width: 270px;
        height: 40px;
        font-size: 18px;
        text-indent: 5px;
    }
    #loginform input:first-of-type {
        margin-top: 50px;
        margin-bottom: 20px;
    }
    #loginform input:last-of-type {
        margin-bottom: 5px;
    }
    #loginform #errormsg {
        margin-bottom: 10px;
        min-height: 50px;
        font-size: 16px;
    }
    #loginform #buttons button {
        width:130px;
        height: 46px;
    }
}
@media screen and (min-width: 421px) {
}
</style>