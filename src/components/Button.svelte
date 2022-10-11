<script>
    export let size = "md";
    export let theme;
    export let bold = false;
    export let label;
    export let full = false;
    export let weight = "normal";
    export let type = "button";

    let sizeClasses;
    let themeClasses;

   switch (size){
        case 'sm':
            sizeClasses = "text-xs p-2"
            break;
       case 'md':
           sizeClasses = "text-lg p-2"
           break;
        case 'lg':
            sizeClasses = "text-2xl p-3"
            break;
   }

   switch (theme){
       case 'one':
           themeClasses = "bg-one text-ink-light"
           break;

       case 'danger':
           themeClasses = "bg-danger text-ink-light"
           break;

       case 'success':
           themeClasses = "bg-success text-ink-light"
           break;

       case 'warning':
           themeClasses = "bg-warning text-ink"
           break;

       case 'info':
           themeClasses = "bg-info text-ink-light"
           break;

       case 'success':
           themeClasses = "bg-success text-ink-light"
           break;
   }


</script>

<button
        class="{sizeClasses} {themeClasses} font-{weight} transition hover:bg-opacity-80 rounded-md my-1 text-ink-light "
        type="{type}"
        class:w-full={full}
>{label}</button>