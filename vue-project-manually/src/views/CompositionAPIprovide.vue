<template lang="">
    <div>
        <CompositionAPIInject/>
    </div>
</template>
<script>
import { provide } from 'vue';
import CompositionAPIInject from './CompositionAPIInject.vue'
export default {
    components:{CompositionAPIInject},
    setup(){
        provide('title','헬로 sgsgds[ㄹ로]')
    }
}
</script>
<style lang="">
    
</style>