<template lang="ko">
   <form  class="form" @submit.prevent="onSubmit">
           <div class="flex">
               <div class="flex-grow">
                   <input class="from-control" type="text" placeholder="오늘 할일" v-model="todo" />
               </div>
               <div>
                   <button class="btn" type="submit">추가</button>
               </div>
           </div> 
           <div style="color: red; fontSize:12px;" v-show="hasError">
               내용이 비어있습니다.
           </div>           
     </form>
</template>
<script>
import {ref} from 'vue'
export default {
   emits:['add-todo'],
   setup(props, {emit}) {
       const todo= ref('');
       const hasError=ref(false); 
       const onSubmit= () =>{

           if(todo.value===""){
               hasError.value=true;
           }else{
              emit('add-todo', {
                   id: new Date(), 
                   subject:todo.value,
                   completed: false,
               })
               hasError.value=false;
               todo.value='';
           }

       }
       return{
           todo,
           hasError,
           onSubmit
       }
   }
}
</script>
<style lang="scss">
   
</style>