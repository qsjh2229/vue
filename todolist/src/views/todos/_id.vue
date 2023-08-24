<template lang="">
   <div class="wrap">
      <h1>Todo-page</h1>
      <div v-if="loading">로딩</div>
      <form v-else @submit.prevent="onSave">
         <div class="row">
            <div class="form-group">
               <label> Todo subject</label>
               <input type="text" v-model="todo.subject" />
            </div>
            <div class="form-group">
               <label class="display"> status</label>
               <div class="position">
                  <button
                     class="btn"
                     type="button"
                     @click="toggleTodoStatus"
                     :class="todo.completed ? 'btnG' : 'btnR'"
                  >
                     {{ todo.completed ? "완료" : "미완료" }}
                  </button>
               </div>
            </div>
         </div>

         <button @click="onSave" class="btn " :class="[todoUpdated ? 'btnR' : '']" type="submit" :disabled="!todoUpdated">저장</button>
         <button class="btn" @click="moveToTodolsit">취소</button>
      </form>
   </div>
</template>
<script>
import { useRoute, useRouter } from "vue-router"
import axios from "axios"
import { ref ,computed} from "vue" //computed  계산된 값만 나타나는 느낌 
import _ from'lodash'

export default {
   setup() {
      const router = useRouter()
      const route = useRoute()
      const originalTodo=ref(null)
      
      const todoUpdated=computed(()=>{
         return !_.isEqual(todo.value,originalTodo.value)  //lodash
      })
     /*  console.log(route.params.id) */
     const todoId=route.params.id;
      const todo = ref(null)
      const onSave=async()=>{
         const res=await axios.put(`http://localhost:3000/todos/${todoId}`,{
            subject:todo.value.subject,
            completed:todo.value.completed,
         })
      }
      const loading = ref(true)
      const getTodo = async () => {
         const res = await axios.get(`http://localhost:3000/todos/${todoId}`)
         todo.value = {...res.data}
         originalTodo.value={...res.data}
         loading.value = false
      }
      const moveToTodolsit = () => [
         router.push({
            name: "todos",
         }),
         originalTodo.value={...res.data}
      ]
      const toggleTodoStatus = () => {
         todo.value.completed = !todo.value.completed
      }
      
      getTodo()
      return {
         todo,
         loading,
         toggleTodoStatus,
         moveToTodolsit,
         onSave,todoUpdated
      }
   },
}
</script>
<style lang="scss">
.wrap {
   width: 1000px;
   margin: 0 auto;
   h1 {
      text-align: center;
   }
   > div {
   }
   > form {
      .row {
         .form-group { display: flex; flex-direction: column; position: relative; widows: 
            label {
               margin-bottom: 10px;
            }
            .display{
               display: none;
            }
            input {
               padding: 5px 10px; box-sizing: border-box; margin-bottom: 10px;
            }
            .position{ position: absolute; right: 10px; top :-44.3px}
         }
      }
      .btn {
         border: none; margin: 10px;
      }
     .btnR {
         background: red;
         color: white;
      }
      .btnG {
         background: green;
         color: white;
      }
   }
}
</style>
