<template lang="ko">
    <div>
        <h2>Calclator</h2>
        <div>
            <input type="text" v-model="num1" >
            <span>+</span>
            <input type="text" v-model="num2" >
            <span>=</span>
            <span>{{result}}</span>
        </div>
    </div>
</template>
<script>
import {plusCalcultor}  from '../commom'
import { onMounted } from 'vue';
export default {
    name: 'Calclator',
    setup(){
        let {num1, num2, result} = plusCalcultor();
        onMounted(()=>{
            console.log('컴포넌트 베비입')
        })
        return{
            num1, num2, result
        }
    }
}
</script>
<style lang="">
    
</style>