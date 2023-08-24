<template lang="">
    <div>
        <ChildComponent2 @send-message="sendMessage" ref="child_component"/>
    </div>
</template>
<script>
import ChildComponent2 from "./ChildComponent2.vue";

export default {
    components: { ChildComponent2 },
    mounted() {
        this.$refs.child_component.callFromParent();
    },
};
</script>
<style lang=""></style>
