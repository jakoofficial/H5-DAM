<h1>Sign in</h1>

<div id="loginform">
    <input type="text" placeholder="Username">
    <input type="password" placeholder="Password">
    <p id="errormsg">Error</p>
    <div id="buttons">
        <button>Sign up</button>
        <button>Sign in</button>
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