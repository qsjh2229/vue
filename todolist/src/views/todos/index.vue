<template lang="ko">
    <div class="container">
        <h2>ToDoList</h2>
        <input type="text" class = "from-control" placeholder="search" v-model="searchText" @keyup.enter="searchTodo" >
       <!--  <button @click="filterdTodos" @click="searchTodo">검색하기</button> -->
        <TodoForm @add-todo="addTodo" />
        <div v-if="!todos.length">
          검색된 문장이 없습니다.
        </div>
       <!--  {{todos}} -->
       <TodoList :todos="todos" @delete-todo="deleteTodo" @toggleTodo="toggleTodo" />

       <hr>

       <div class="page">
          <ul class="pagenation">
            <li class="pageItem"  ><a href="#" class="pageLink" :class="currentPage !==1 ? '':'op'"  @click="getTodos(currentPage - 1)"> &lt </a></li>
            <li class="pageItem" v-for="page in numberOfPages" :key="page" ><a href="#" class="pageLink " :class="currentPage === page ? 'active': ''" @click="getTodos(page)">{{page}}</a></li>
       
            <li class="pageItem"   ><a href="#" class="pageLink"  :class=" numberOfPages !==currentPage ?  '':'op'" @click="getTodos(currentPage + 1)">&gt</a></li>
          </ul>
       </div>
    </div>
  </template>
<script>
import { ref, computed ,watch} from "vue"
import TodoForm from "../../components/TodoForm.vue"
import TodoList from "../../components/TodoList.vue"
import axios from "axios"
export default {
   components: {
      TodoForm,
      TodoList,
   },
   setup() {
      const limit = 5
      const currentPage = ref(1)
      const page = ref(1)
      const numberOfPages =computed(()=>{
         return Math.ceil(numberOftodos.value/limit )
      });
      const numberOftodos = ref(0)
      const toggleTodo = async (index) => {
         const id = todos.value[index].id
         try {
            await axios.patch("http://localhost:3000/todos/" + id, {
               completed: !todos.value[index].completed,
            })
            todos.value[index].completed = !todos.value[index].completed
         } catch (err) {
            console.log(err)
            error.value = "찾는 문장이 엇습니다"
         }
      }
      const searchText = ref("")

      const error = ref("")
  /*     const filterdTodos = computed(() => {
         if (searchText.value) {
            return todos.value.filter((todo) => {
               return todo.subject.includes(searchText.value)
            })
         }
         return todos.value
      }) */
      const getTodos = async (page=currentPage.value) => {
        currentPage.value=page
         try {
            const res = await axios.get(
               `http://localhost:3000/todos?_sort=id&_order=desc&subject_like=${searchText.value}&_page=${page}&_limit=${limit}`
            )
            console.log(res.headers)
            numberOftodos.value = res.headers["x-total-count"]
            todos.value = res.data
         } catch (err) {
            console.log(err)
            error.value = "찾는 문장이 엇습니다"
         }
      }
      getTodos()
      const todos = ref([])
      const addTodo = async (todo) => {
         try {
           await axios.post("http://localhost:3000/todos", {
               subject: todo.subject,
               completed: todo.completed,
            })
            getTodos(1)
            console.log(res)
            todos.value.push(res.data)
         } catch (err) {
            console.log(err)
            error.value = "잘못된 입력 입니다."
         }
      }

      const deleteTodo = async (index) => {
         /*    if (index >= 0 && index < todos.value.length) {
              todos.value.splice(index, 1);
            } */

         const id = todos.value[index].id
         try {
            await axios.delete("http://localhost:3000/todos/" + id)
        getTodos(1)
         }
          catch (err) {
            console.log(err)
            error.value = "잘못됨"
         }
      }
 let timeOut=null
 const searchTodo=(()=>{
  clearTimeout(timeOut)
  getTodos(1)
 })
     //watch 어떠한 변화가 일어날때만 실행
      watch(searchText,(current,prev)=>{  
        clearTimeout(timeOut)
        timeOut=setTimeout(()=>{
          getTodos(1)
        },2000)                                
        


      })

      return {
        searchTodo,
         todos,
         addTodo,
         deleteTodo,
         searchText,
       /*   filterdTodos, */
         toggleTodo,
         numberOfPages,
         currentPage,
         getTodos,

         

      }
   },
}
</script>
<style lang="scss">
.container {
   width: 100%;
   max-width: 1000px;
   margin: 30px auto;
   h2 {
      color: #f28383;
   }
   .from-control {
      width: 100%;
      padding: 5px 10px;
      box-sizing: border-box;
   }
   .form {
      .flex {
         display: flex;
         .flex-grow {
            flex-grow: 1;
            margin-right: 10px;
            .from-control {
               width: 100%;
               padding: 5px 10px;
               box-sizing: border-box;
            }
         }
         div {
            .btn {
               padding: 5px 10px;
               background: #f28383;
               border: none;
               color: #fff;
            }
         }
      }
   }
   .card {
      margin: 10px 0;
      .card-body {
         border: 1px solid #ddd;
         padding: 5px 20px;
         box-sizing: border-box;
         width: 100%;
         display: flex;
         justify-content: space-between;
         align-items: center;
         .btn-delete {
            padding: 5px 10px;
            background: #f28383;
            border: none;
            color: #fff;
         }
      }
   }
}
.page {
   margin-bottom: 50px;
   .pagenation {
      display: flex;
      justify-content: center;
      .pageItem {
         list-style: none;
         width: 25px;
         height: 20px;
         text-align: center;

         .pageLink {
            text-decoration: none;
            &.active {
               opacity: 0.5;
            }
         }
      }
   }
}
.checkbox-wrapper-11 {
   --text: #414856;
   --check: #4f29f0;
   --disabled: #c3c8de;
   --border-radius: 10px;
   border-radius: var(--border-radius);
   position: relative;
   padding: 5px;
   display: grid;
   grid-template-columns: 30px auto;
   align-items: center;
}
.checkbox-wrapper-11 label {
   color: var(--text);
   position: relative;
   cursor: pointer;
   display: grid;
   align-items: center;
   width: -webkit-fit-content;
   width: -moz-fit-content;
   width: fit-content;
   transition: color 0.3s ease;
}
.checkbox-wrapper-11 label::before,
.checkbox-wrapper-11 label::after {
   content: "";
   position: absolute;
}
.checkbox-wrapper-11 label::before {
   height: 2px;
   width: 8px;
   left: -27px;
   background: var(--check);
   border-radius: 2px;
   transition: background 0.3s ease;
}
.checkbox-wrapper-11 label:after {
   height: 4px;
   width: 4px;
   top: 8px;
   left: -25px;
   border-radius: 50%;
}
.checkbox-wrapper-11 input[type="checkbox"] {
   -webkit-appearance: none;
   -moz-appearance: none;
   position: relative;
   height: 15px;
   width: 15px;
   outline: none;
   border: 0;
   margin: 0 15px 0 0;
   cursor: pointer;
   background: var(--background);
   display: grid;
   align-items: center;
}
.checkbox-wrapper-11 input[type="checkbox"]::before,
.checkbox-wrapper-11 input[type="checkbox"]::after {
   content: "";
   position: absolute;
   height: 2px;
   top: auto;
   background: var(--check);
   border-radius: 2px;
}
.checkbox-wrapper-11 input[type="checkbox"]::before {
   width: 0px;
   right: 60%;
   transform-origin: right bottom;
}
.checkbox-wrapper-11 input[type="checkbox"]::after {
   width: 0px;
   left: 40%;
   transform-origin: left bottom;
}
.checkbox-wrapper-11 input[type="checkbox"]:checked::before {
   -webkit-animation: check-01-11 0.4s ease forwards;
   animation: check-01-11 0.4s ease forwards;
}
.checkbox-wrapper-11 input[type="checkbox"]:checked::after {
   -webkit-animation: check-02-11 0.4s ease forwards;
   animation: check-02-11 0.4s ease forwards;
}
.checkbox-wrapper-11 input[type="checkbox"]:checked + label {
   color: var(--disabled);
   -webkit-animation: move-11 0.3s ease 0.1s forwards;
   animation: move-11 0.3s ease 0.1s forwards;
}
.checkbox-wrapper-11 input[type="checkbox"]:checked + label::before {
   background: var(--disabled);
   -webkit-animation: slice-11 0.4s ease forwards;
   animation: slice-11 0.4s ease forwards;
}
.checkbox-wrapper-11 input[type="checkbox"]:checked + label::after {
   -webkit-animation: firework-11 0.5s ease forwards 0.1s;
   animation: firework-11 0.5s ease forwards 0.1s;
}

@-webkit-keyframes move-11 {
   50% {
      padding-left: 8px;
      padding-right: 0px;
   }
   100% {
      padding-right: 4px;
   }
}

@keyframes move-11 {
   50% {
      padding-left: 8px;
      padding-right: 0px;
   }
   100% {
      padding-right: 4px;
   }
}
@-webkit-keyframes slice-11 {
   60% {
      width: 100%;
      left: 4px;
   }
   100% {
      width: 100%;
      left: -2px;
      padding-left: 0;
   }
}
@keyframes slice-11 {
   60% {
      width: 100%;
      left: 4px;
   }
   100% {
      width: 100%;
      left: -2px;
      padding-left: 0;
   }
}
@-webkit-keyframes check-01-11 {
   0% {
      width: 4px;
      top: auto;
      transform: rotate(0);
   }
   50% {
      width: 0px;
      top: auto;
      transform: rotate(0);
   }
   51% {
      width: 0px;
      top: 8px;
      transform: rotate(45deg);
   }
   100% {
      width: 5px;
      top: 8px;
      transform: rotate(45deg);
   }
}
@keyframes check-01-11 {
   0% {
      width: 4px;
      top: auto;
      transform: rotate(0);
   }
   50% {
      width: 0px;
      top: auto;
      transform: rotate(0);
   }
   51% {
      width: 0px;
      top: 8px;
      transform: rotate(45deg);
   }
   100% {
      width: 5px;
      top: 8px;
      transform: rotate(45deg);
   }
}
@-webkit-keyframes check-02-11 {
   0% {
      width: 4px;
      top: auto;
      transform: rotate(0);
   }
   50% {
      width: 0px;
      top: auto;
      transform: rotate(0);
   }
   51% {
      width: 0px;
      top: 8px;
      transform: rotate(-45deg);
   }
   100% {
      width: 10px;
      top: 8px;
      transform: rotate(-45deg);
   }
}
@keyframes check-02-11 {
   0% {
      width: 4px;
      top: auto;
      transform: rotate(0);
   }
   50% {
      width: 0px;
      top: auto;
      transform: rotate(0);
   }
   51% {
      width: 0px;
      top: 8px;
      transform: rotate(-45deg);
   }
   100% {
      width: 10px;
      top: 8px;
      transform: rotate(-45deg);
   }
}
@-webkit-keyframes firework-11 {
   0% {
      opacity: 1;
      box-shadow: 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0,
         0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0;
   }
   30% {
      opacity: 1;
   }
   100% {
      opacity: 0;
      box-shadow: 0 -15px 0 0px #4f29f0, 14px -8px 0 0px #4f29f0,
         14px 8px 0 0px #4f29f0, 0 15px 0 0px #4f29f0, -14px 8px 0 0px #4f29f0,
         -14px -8px 0 0px #4f29f0;
   }
}
@keyframes firework-11 {
   0% {
      opacity: 1;
      box-shadow: 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0,
         0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0;
   }
   30% {
      opacity: 1;
   }
   100% {
      opacity: 0;
      box-shadow: 0 -15px 0 0px #4f29f0, 14px -8px 0 0px #4f29f0,
         14px 8px 0 0px #4f29f0, 0 15px 0 0px #4f29f0, -14px 8px 0 0px #4f29f0,
         -14px -8px 0 0px #4f29f0;
   }
}
.op{ opacity: 0; pointer-events: none;}
</style>
