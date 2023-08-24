<template lang="">
    <div>
        <button @click='childFunc' ref='btn'>자식 컴포넌트 변경</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:'메세지'
        }
    },
    methods:{
        childFunc(){
            this.msg='변경된 메세지'
        }
    }
    
}
</script>
<style lang="">
    
</style>