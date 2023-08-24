<template lang="">
    <div>
        <button type="button" @click="checkChild">자식 컴포넌트 데이터 조회</button>
        <ChildComponent5 ref="child_component"/>
        
    </div>
</template>
<script>
import ChildComponent5 from './ChildComponent5.vue';
export default {
    components: {ChildComponent5},
    computed: {
      msg(){
        return this.$refs.child_component.msg
      }  
    },
    methods:{
        checkChild(){
            alert(this.msg)
        }
    }
}
</script>
<style lang="">
    
</style>