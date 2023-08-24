<template lang="">
    <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model="num1"/>
            <span>+</span>
            <input type="text" v-model="num2"/>
            <span>=</span>
            <span>{{ result }}</span>
        </div>
    </div>
</template>
<script>
import { onMounted } from 'vue';
import {plusCalcultor} from '../common'

export default {
    name: "calculatorPlus",
    setup() {
        let { num1, num2, result } = plusCalcultor();
        onMounted(() => {
            console.log('Component is mounted')
        })
        return {
            num1,
            num2,
            result,
        }
    }
};
</script>
<style lang=""></style>
