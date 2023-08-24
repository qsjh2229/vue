<template lang="vue">
    <div>
        <h2>{{title}}</h2>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type: String,
            default:"페이지 제목입니다."
        }
    }
}
</script>
<style lang="scss">
    
</style>