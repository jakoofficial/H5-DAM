<script>
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

    onMount(() => {
        signout()
    })

    async function signout() {
        const token = localStorage.getItem("session_token")
        if (token){
            const res = await fetch("http://localhost:8000/api/signout", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "session-token": token
                }
            });
            localStorage.removeItem("session_token")
        }
        window.location.href= "./";
    }
</script>