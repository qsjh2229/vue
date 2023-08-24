<template lang="">
    <div>
        <ChildComponent4 @send-message="sendMessage"/>
    </div>
</template>
<script>
import ChildComponent4 from './ChildComponent4.vue';
export default {
    components: {ChildComponent4},
    methods:{
        sendMessage(data){
            console.log(data)
        }
    }
}
</script>
<style lang="">
    
</style>