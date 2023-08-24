<template lang="">
    <div>
        <CompositionAPIInject/>
    </div>
</template>
<script>
import { provide } from 'vue';
import CompositionAPIInject from './CompositionAPIInject.vue';

export default {
    components: {
        CompositionAPIInject
    },
    setup(){
        provide('title', '신철이 졸지마')
    }
}
</script>
<style lang="">
    
</style>