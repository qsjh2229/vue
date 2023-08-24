<template lang="en">
    <div>
        <h2>{{title}}</h2>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type: String,
            default:"페이지 제목 입니다"
        }
    }
}
</script>
<style lang="">
    
</style>