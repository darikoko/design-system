<script>
    export let brand;
    export let lastFour;
    export let active;
</script>

<div class="rounded-xl shadow-md p-3 rounded-lg my-2">
    <div class="flex">
        <div class="flex flex-grow">
            <p class="text-xl flex-grow">Carte Bleue {lastFour}</p>
        </div>
        <a class="text-danger text-sm " href="/">Supprimer</a>
    </div>
    <div class="my-2">
        <p class="text-success font-bold text-lg">Par défaut</p>
    </div>
</div>