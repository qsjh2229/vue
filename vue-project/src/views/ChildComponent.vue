<template lang="">
    <div>
        <button type="button" @click="childFunc()" ref="btn">click</button>
    </div>
</template>
<script>
export default {
    methods:{
        childFunc(){
            console.log("부모 컴포넌트에서 발생시킨 이벤트")
        }
    }
}
</script>
<style lang="">
    
</style>