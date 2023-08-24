<template lang="">
    <ChildComponet @send-message="sendMessage" ref="child_component" />
</template>
<script>
import ChildComponet from './ChildComponent2.vue'
export default {
    components: {ChildComponet},
    mounted() {
        this.$refs.child_component.callFromParent()
    },
}
</script>
<style lang="">
    
</style>