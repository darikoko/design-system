<script>
    import Button from "../../../components/Button.svelte";
    import Frame from "../../../components/Frame.svelte";
    import Field from "../../../components/Field.svelte";
    import Title from "../../../components/Title.svelte";
    import Alert from "../../../components/Alert.svelte";
    import {urlBuilder, requestBuilder} from "../../../utils/requester.js";
    import {authToken} from "../../../stores.js";
    import { goto } from "$app/navigation";

    let loginForm = {
        username: "",
        password: ""
    }

    let error = false;

    function ask_token(){
        fetch(urlBuilder('/auth/login'), requestBuilder('POST', loginForm))
            .then(
                function(response){
                    console.log(response.status)
                    if (response.status != 200){
                        error = true
                    }
                    else{
                        console.log("Ca marche")
                    }
                    return response.json()
                }
            )
            .then(data => {
                if (data.token){
                    console.log(data.token)
                    authToken.set(data.token)
                    goto('/')
                }
            })
    }
</script>

<Frame size="xl">
    <img src="/ship.png" class="w-20 h-20 mx-auto mb-4" alt="">
    <Title align="center">Connexion</Title>
    {#if error}
        <Alert theme="danger" label="Identifiants incorrects" message="Mot de passe ou pseudo faux" />
    {/if}
    <form on:submit|preventDefault={()=> ask_token()}>
        <Field bind:value={loginForm.username} type="text" placeholder="john_doe" label="Pseudo"/>
        <Field bind:value={loginForm.password}  type="password" placeholder="sercret213" label="Mot de passe"/>
        <Button type="submit" full={true} label="Connexion" theme="one"/>
    </form>
</Frame>
