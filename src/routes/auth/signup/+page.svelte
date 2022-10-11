<script>
    import Button from "../../../components/Button.svelte";
    import Frame from "../../../components/Frame.svelte";
    import Field from "../../../components/Field.svelte";
    import Title from "../../../components/Title.svelte";
    import Alert from "../../../components/Alert.svelte";

    let signupForm = {
        email: "",
        username: "",
        password1: "",
        password2: "",
    }

    function checkSubmit(event){
        alert(event)
        console.log(event)
    }
</script>

<Frame size="xl">
    <img src="/ship.png" class="w-20 h-20 mx-auto mb-4" alt="">
    <Title align="center">Inscription</Title>
    <form on:submit={()=>checkSubmit()}>
        <Alert theme="danger" label="Pseudo pris" message="Ce pseudo est déjà utilisé"/>
        <Field bind:value={signupForm.email} type="text" placeholder="john_doe" label="Pseudo"/>
        <Field bind:value={signupForm.username} type="email" placeholder="john@doe.com" label="Email"/>
        <Field bind:value={signupForm.password1}  type="password" placeholder="sercret213" label="Mot de passe"/>
        <Field bind:value={signupForm.password2}  type="password" placeholder="" label="Confirmation Mot de passe"/>
        <Button type="submit" full={true} label="Inscription" theme="one"/>
    </form>
</Frame>
