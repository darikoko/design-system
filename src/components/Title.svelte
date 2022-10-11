<script>
    export let size = 'lg';
    export let align = 'left';
    let sizeClasses;

    switch (size){
        case 'md':
            sizeClasses = 'text-3xl mb-2'
            break
        case 'lg':
            sizeClasses = 'text-4xl mb-3'
            break
        case 'xl':
            sizeClasses = 'text-5xl mb-6'
            break
    }
</script>

<p class="{sizeClasses} text-{align}  font-one font-medium"><slot/></p>

