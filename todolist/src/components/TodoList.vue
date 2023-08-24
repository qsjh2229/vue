<template lang="ko">
   <div class="card" v-for="(todo, index) in todos" :key="todo.id">
       <div class="card-body" @click="moveToPage(todo.id)" >
           <div class="checkbox-wrapper-11">
               <input :id="todo.id" type="checkbox" name="r" :checked="todo.completed" @change="toggleTodo(index , $event)" @click.stop>
               <label :for="todo.id">{{todo.subject}}</label>
           </div>
           <div>
               <button class="btn-delete" @click.stop="deleteTodo(index)">삭제</button>
           </div>
       </div>
    </div>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
   props: {
       todos: {
           type: Array,
           required:true
       }
   },
   emits:['delete-todo' ,'toggleTodo'],
   setup(props, {emit}){
       const router=useRouter()
       const moveToPage=(todoId)=>{
        router.push('/todos/' + todoId)
       }

       const deleteTodo = (index) =>{
          emit('delete-todo', index)
       }
       const toggleTodo =(index)=>{
        emit('toggleTodo', index , event.target.checkd)
       }

       return{
           deleteTodo,
           toggleTodo,
           moveToPage,
       }
      
   }
}
</script>
<style lang="scss">
   
</style>