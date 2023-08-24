<template lang="">
    <div>
       <h1> {{title}} 안영</h1>
      <span>dks</span>
    </div>
</template>
<script>
import { inject } from 'vue';
export default {
    setup(){
        const title = inject('title');
    return{
        title
    }
    }
   

}
</script>
<style lang="">
    
</style>