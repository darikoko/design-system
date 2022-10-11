<script>
    import Field from '/src/components/Field.svelte';
    import Frame from "../components/Frame.svelte";
    import Table from "../components/Table.svelte";
    import Title from "../components/Title.svelte";
    import Alert from "../components/Alert.svelte";
    import CreditCard from "../components/CreditCard.svelte";
    import Subscription from "../components/Subscription.svelte";
    import Button from "../components/Button.svelte";

    let cardNumber;
    let cardExp;

    let publicPost= 'non';
    let audioFile;

    let tableData = [{"first_name": "Mark", "last_name": "Otto", "pseudo":"MTO"},
        {"first_name": "Goerge", "last_name": "Dubois", "pseudo":"Lefou"}
    ]
    let tableTitles = {"last_name":"Nom", "first_name": "Prénom",  "pseudo":"Surnom"};

    let description;
</script>

<div class="p-4 bg-[#f9f9f9] mx-auto max-w-5xl">
    <p class="text-5xl my-4 text-center ">Design System</p>

    <p class="text-3xl  mt-8 mb-4 font-bold ">Colors</p>
        <div class="asp grid grid-cols-4 gap-4">
            <div>
                <div class="aspect-square bg-one mb-2"></div>
                <p>one</p>
            </div>
            <div>
                <div class="aspect-square bg-two mb-2"></div>
                <p>two</p>
            </div>
            <div>
                <div class="aspect-square bg-danger mb-2"></div>
                <p>danger</p>
            </div>
            <div>
                <div class="aspect-square bg-warning mb-2"></div>
                <p>warning</p>
            </div>
            <div>
                <div class="aspect-square bg-success mb-2"></div>
                <p>success</p>
            </div>
            <div>
                <div class="aspect-square bg-info mb-2"></div>
                <p>info</p>
            </div>
            <div>
                <div class="aspect-square bg-ink mb-2"></div>
                <p>ink</p>
            </div>
            <div>
                <div class="aspect-square bg-ink-light mb-2"></div>
                <p>ink-light</p>
            </div>

        </div>

    <p class="text-3xl  mt-8 mb-4 font-bold ">Fonts</p>
    <div class="grid grid-cols-2 gap-4 text-ink">
        <div>
            <p class="font-one text-7xl my-2">Lorem ipsum</p>
            <p class="font-one text-6xl my-2">Lorem ipsum</p>
            <p class="font-one text-5xl my-2">Lorem ipsum</p>
            <p class="font-one text-4xl my-2">Lorem ipsum</p>
            <p class="font-one text-3xl my-2">Lorem ipsum</p>
            <p class="font-one text-2xl my-2">Lorem ipsum</p>
            <p class="font-one text-xl my-2">Lorem ipsum</p>
            <p class="font-one text-lg my-2">Lorem ipsum</p>
        </div>
        <div>
            <p class="font-one text-xl my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet architecto consectetur, dolorem dolores eius error et eveniet illum molestias, officia, optio pariatur tempore. Aut commodi expedita qui sapiente voluptas.</p>
            <p class="font-one text-lg my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet architecto consectetur, dolorem dolores eius error et eveniet illum molestias, officia, optio pariatur tempore. Aut commodi expedita qui sapiente voluptas.</p>
            <p class="font-one text-md my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet architecto consectetur, dolorem dolores eius error et eveniet illum molestias, officia, optio pariatur tempore. Aut commodi expedita qui sapiente voluptas.</p>
            <p class="font-one text-sm my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet architecto consectetur, dolorem dolores eius error et eveniet illum molestias, officia, optio pariatur tempore. Aut commodi expedita qui sapiente voluptas.</p>
            <p class="font-one text-xs my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet architecto consectetur, dolorem dolores eius error et eveniet illum molestias, officia, optio pariatur tempore. Aut commodi expedita qui sapiente voluptas.</p>
        </div>

    </div>


    <p class="text-3xl  mt-8 mb-4 font-bold ">Buttons</p>
    <div class="grid grid-cols-3 gap-2">
        <div>
                <div>
                <Button label="Button sm" theme="one" size="sm"/>
                <Button  label="Button md" theme="one" />
                <Button label="Button lg" theme="one" size="lg"/>
            </div>
            <div>
                <Button label="Button sm" theme="success" size="sm"/>
                <Button  label="Button md" theme="success" />
                <Button label="Button lg" theme="success" size="lg"/>
            </div>
            <div>
                <Button label="Button sm" theme="warning" size="sm"/>
                <Button  label="Button md" theme="warning" />
                <Button label="Button lg" theme="warning" size="lg"/>
            </div>
            <div>
                <Button label="Button sm" theme="danger" size="sm"/>
                <Button  label="Button md" theme="danger" />
                <Button label="Button lg" theme="danger" size="lg"/>
            </div>
        </div>

        <div>

            <div class="pb-2">
                <Button full={true} label="Button sm" theme="one" size="sm"/>
                <Button full={true}   label="Button md" theme="one" />
                <Button full={true}  label="Button lg" theme="one" size="lg"/>
            </div>
            <div class="pb-2">
                <Button full={true} label="Button sm" theme="success" size="sm"/>
                <Button full={true}   label="Button md" theme="success" />
                <Button full={true}  label="Button lg" theme="success" size="lg"/>
            </div>
            <div class="pb-2">
                <Button full={true} label="Button sm" theme="warning" size="sm"/>
                <Button full={true}   label="Button md" theme="warning" />
                <Button full={true}  label="Button lg" theme="warning" size="lg"/>
            </div>
            <div class="pb-2">
                <Button full={true} label="Button sm" theme="danger" size="sm"/>
                <Button full={true}   label="Button md" theme="danger" />
                <Button full={true}  label="Button lg" theme="danger" size="lg"/>
            </div>
        </div>
<div>

            <div class="pb-2">
                <Button full={true} weight="medium" label="Button sm" theme="one" size="sm"/>
                <Button full={true} weight="medium"  label="Button md" theme="one" />
                <Button full={true}  weight="medium"   label="Button lg" theme="one" size="lg"/>
            </div>
            <div class="pb-2">
                <Button full={true} weight="medium"  label="Button sm" theme="success" size="sm"/>
                <Button full={true}  weight="medium"   label="Button md" theme="success" />
                <Button full={true}  weight="medium"  label="Button lg" theme="success" size="lg"/>
            </div>
            <div class="pb-2">
                <Button full={true} weight="medium"  label="Button sm" theme="warning" size="sm"/>
                <Button full={true}  weight="medium"   label="Button md" theme="warning" />
                <Button full={true}  weight="medium"  label="Button lg" theme="warning" size="lg"/>
            </div>
            <div class="pb-2">
                <Button full={true} weight="medium"  label="Button sm" theme="danger" size="sm"/>
                <Button full={true}  weight="medium"   label="Button md" theme="danger" />
                <Button full={true}  weight="medium"  label="Button lg" theme="danger" size="lg"/>
            </div>
        </div>

    </div>

    <p class="text-3xl  mt-8 mb-4 font-bold ">Forms</p>
    <div class="grid grid-cols-2 gap-4">
       <div>
           <Field type="email" label="E-mail" placeholder="john@doe.com"/>
           <Field bind:value={cardNumber} type="card-number" label="Numéro de Carte" placeholder="4242 4242 4242 4242"/>
           <Field bind:value={cardExp} type="card-exp" label="Date d'expiration (MM/AA)" placeholder="12/22"/>
           <Field type="password" label="Mot de Passe" placeholder="sercret123"/>
           <Field type="number" minValue="5" maxValue="100" label="Prix" placeholder="14"/>
       </div>
        <div>
            <Field bind:value={publicPost} radioList={[{"radioLabel":"Public", "radioValue": "oui"}, {"radioLabel": "Privé", "radioValue": "non"}]} type="radio" label="Choisissez votre Sport" placeholder="john@doe.com"/>
            <Field bind:value={audioFile} type="file" label="Choisissez votre Fichier audio" />
            <Field bind:value={description} type="textarea" label="Description" rows="3"/>
        </div>
    </div>


    <p class="text-3xl  mt-8 mb-4 font-bold ">Tables</p>
    <Table data={tableData} titles={tableTitles} />

    <p class="text-3xl  mt-8 mb-4 font-bold ">Frames</p>
    <div  class="bg-one p-3 font-one grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
        <Frame size="md">
            <h1 class="text-3xl font-medium">md</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus consequatur distinctio eius ex laudantium obcaecati odit officia placeat soluta! Doloribus iure officia placeat rerum? Asperiores et perferendis quas sunt.
        </Frame>
        <Frame size="lg">
            <h1 class="text-3xl font-medium">lg</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi deserunt dignissimos dolorum error libero officiis perspiciatis, quia rerum soluta, sunt voluptates. Aperiam dolorem eaque est id inventore labore nisi.
        </Frame>
        <Frame size="xl">
            <h1 class="text-3xl font-medium">xl</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi deserunt dignissimos dolorum error libero officiis perspiciatis, quia rerum soluta, sunt voluptates. Aperiam dolorem eaque est id inventore labore nisi.
        </Frame>
        <Frame size="2xl">
            <h1 class="text-3xl font-medium">2xl</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi deserunt dignissimos dolorum error libero officiis perspiciatis, quia rerum soluta, sunt voluptates. Aperiam dolorem eaque est id inventore labore nisi.
        </Frame>



    </div>
    <p class="text-3xl  mt-8 mb-4 font-bold ">Titles</p>
    <div class="mb-4">
        <Title size="md">Titre md</Title>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, fugit ipsa itaque labore provident totam velit voluptatem. Deserunt eos fuga illo nostrum optio quam repellat sapiente, voluptates? Aut, beatae, eligendi!</p>
    </div>
    <div class="mb-4">
        <Title size="lg">Titre lg</Title>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, fugit ipsa itaque labore provident totam velit voluptatem. Deserunt eos fuga illo nostrum optio quam repellat sapiente, voluptates? Aut, beatae, eligendi!</p>
    </div>
    <div class="mb-4">
        <Title size="xl">Titre xl</Title>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, fugit ipsa itaque labore provident totam velit voluptatem. Deserunt eos fuga illo nostrum optio quam repellat sapiente, voluptates? Aut, beatae, eligendi!</p>
    </div>

    <p class="text-3xl  mt-8 mb-4 font-bold ">Alerts</p>
    <div class="grid grid-cols-3 gap-4">
        <Alert theme="success" label="Paiement réussi" message="Votre paiement a bien été effectué" />
        <Alert theme="danger" label="Paiement refusé" message="Votre paiement a été rejeté"/>
        <Alert theme="warning" label="Il vous reste 50€" message="Dépensez votre solde" />
        <Alert theme="one" label="Bonne nouvelle" message="La Gamecube vient de sortir"/>
        <Alert theme="two" label="Nouveau Podcast" message="Un podcast vient de sortir" />
        <Alert theme="info" label="Nouvel Abonné" message="Un nouvel abonné est là!" />
    </div>
</div>
<style>
 #wallpaper{
     background-image: url("https://products.ls.graphics/mesh-gradients/images/92.-Sunset_1.jpg");
     background-size: cover;
 }
</style>