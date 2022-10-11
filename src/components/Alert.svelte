<script>
    export let theme;
    export let size;
    export let label;
    export let message;

    export let themeClasses;

    switch (theme){
        case "one":
            themeClasses = 'text-one border-one'
            break;
        case 'two':
            themeClasses = 'text-two border-two'
            break;
        case 'success':
            themeClasses = 'text-success border-success'
            break;
        case 'warning':
            themeClasses = 'text-warning border-warning'
            break;
        case 'danger':
            themeClasses = 'text-danger border-danger'
            break;
        case 'info':
            themeClasses = 'text-info border-info';
    }
</script>

<div class="rounded-lg border-2 {themeClasses} ">
    <div class="rounded-lg bg-opacity-90 p-1">
        <p class="text-center font-medium text-lg">{label}</p>
        <p class="text-center">{message}</p>
    </div>
</div>
