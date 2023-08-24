<template lang="">
    <!-- <div>
       <button type="button" @click="clildFunc">click</button> 
       div
    </div> -->
   
  <div    @click="callFromParent">
  누르면 콘솔나옴
  </div>
   
</template>
<script>
export default {
    methods : {
      callFromParent(){
        console.log('부모 컴포넌트에서 직접 호출한 함수')
      }
    }   
}
</script>
<style lang="">
    
</style>