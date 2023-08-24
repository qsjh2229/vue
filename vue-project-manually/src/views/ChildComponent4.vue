<template lang="">
    <div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:'자식 컴포넌트부터'
        }
        
    },
    mounted(){
        this.$emit('send-message',this.msg)
    }
}
</script>
<style lang="">
    
</style>