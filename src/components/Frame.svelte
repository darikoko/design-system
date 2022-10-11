<script>
    export let title;
    export let size;

    let sizeClasses;

    switch(size){
       case 'sm':
          sizeClasses = 'p-1 rounded-md';
          break;
       case 'md':
          sizeClasses = 'p-3 rounded-md';
          break;
       case 'lg':
          sizeClasses = 'p-4 rounded-lg';
          break;
       case 'xl':
          sizeClasses = 'p-5 rounded-xl';
          break;
       case '2xl':
          sizeClasses = 'p-6 rounded-xl';
          break;
    }
</script>

   <div class="{sizeClasses} bg-white ">
      <slot/>
   </div>