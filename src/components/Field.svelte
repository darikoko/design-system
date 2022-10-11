<script>
    console.log("Salut")
    export let value;
    export let label;
    export let placeholder;
    export let type;
    export let minLength;
    export let maxLength;
    export let minValue;
    export let maxValue;
    export let radioList;
    export let required = true;
    export let rows;


    const CardNumberType = {name : 'card-number', maxlength : 19}
    const CardExpiresType = {name: 'card-exp', minlength: 5, maxlength:5}

    function typeAction(node){
        if ([CardNumberType.name, CardExpiresType.name].includes(type)){
            node.type = 'text'
            if (type === CardNumberType.name){
                maxLength = CardNumberType.maxlength
            }
            else if (type === CardExpiresType.name){
                minLength = CardExpiresType.minlength
                maxLength = CardExpiresType.maxlength
            }
        }
        else{
            node.type = type;
        }
    }

    function handleInput(event){
        if (type === CardNumberType.name){
            formatCardNumber(event);
        }
        else if (type === CardExpiresType.name){
            formatCardExpires(event);
        }
    }

    function formatCardNumber(event){
        if (event.inputType!=='deleteContentBackward'){

            let inputValue = event.target.value.replaceAll(/\s/g,'').split('');
            let spaces = Math.trunc(inputValue.length / 4);

            for (let i=0; i<spaces && i<3;i++ ){
                if(inputValue[4*(i+1)+i] !== ' '){
                    inputValue.splice(4*(i+1)+i,0, ' ')
                }
            }
            inputValue = inputValue.join('');
            value = inputValue;
        }
    }

    function formatCardExpires(event){
        let inputValue = event.target.value
        console.log(maxLength, minLength)
        if(event.data && inputValue.length==2){
            value += '/'
        }
        else if(event.data && inputValue.length==3 && !inputValue.includes('/')){
            value = value.substring(0,2) + '/' + value.substring(2)
        }
        else if(!event.data && inputValue.length==3){
            value = value.slice(0,-1)
        }
    }




</script>

<div class="mb-3 text-ink font-one">

    <label  class="block font-[500]  mb-1" for="">{label}</label>
    {#if type ==='radio'}
        {#each radioList as choice}
            <div>
                <label class="text-lg inline-flex cursor-pointer items-center ml-3 my-2">
                    <input class="peer invisible" type="radio" bind:group={value} name="scoops" value={choice.radioValue}>
                    <div class="w-4 h-4 mr-2 transition border-2 border-white inline-block rounded-full bg-white peer-checked:bg-one p-2">

                    </div>
                    {choice.radioLabel}
                </label>
            </div>
        {/each}
    {:else if type === 'file'}
        <label class="block my-2">
            <input type="file" class="text-sm text-grey-500
            file:transition
            file:mr-5 file:py-2 file:px-6
            file:rounded-lg file:border-0
            file:text-sm file:font-medium
            file:bg-one file:text-ink-light
            hover:file:cursor-pointer hover:file:bg-opacity-80
          " />
        </label>
        {:else if type === 'textarea'}
        <textarea rows="{rows}" class="transition p-2 border-2 w-full focus:border-one rounded outline-none resize-none" bind:value></textarea>
    {:else}
    <input  use:typeAction
            bind:value
            on:input={(event) => handleInput(event)}
            class="transition p-2 border-2 w-full  focus:border-one rounded outline-none"
            minlength="{minLength}"
            maxlength="{maxLength}"
            min="{minValue}"
            max="{maxValue}"
            placeholder="{placeholder}"
            required={required}
    >
    {/if}
</div>