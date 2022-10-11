<script>
    export let data;
    export let titles;
</script>

<div class="flex flex-col font-one">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
                <table class="min-w-full">
                    <thead class="border-b">
                    <tr>
                        {#each Object.entries(titles) as [key, value], index(key)}
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                {value}
                            </th>
                        {/each}
                    </tr>
                    </thead>
                    <tbody>
                    {#each data as row}
                    <tr class="bg-white border-b">
                        {#each Object.entries(titles) as [key, value], index(key)}
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {row[key]}
                            </td>
                            {/each}
                    </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>