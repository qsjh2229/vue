<template lang="">
    <div>
       <button type="button" @click="clildFunc">click</button> 
    </div>
</template>
<script>
export default {
    methods : {
        clildFunc(){
            console.log('부모 컴포넌트에서 직접 발생시킨 이벤트')
        }
    }   
}
</script>
<style lang="">
    
</style>