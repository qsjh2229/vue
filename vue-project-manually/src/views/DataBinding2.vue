<template lang="ko">
    <div>
        <table>
        <thead>
            <tr>
                <th>제품명</th>
                <th>가격</th>
                <th>카테고리</th>
                <th>배송료</th>
                
            </tr>
        </thead>
        <tbody>
            <tr :key="i" v-for="(product, i) in productList">
                <td>{{product.product_name}}</td>
                <td>{{product.price}}</td>
                <td>{{product.category}}</td>
                <td>{{product.delivery_price}}</td>
            </tr>
        </tbody>
    </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            productList:[]
        }
    },
    created() {
        this.getList();
    },
    methods:{
        async getList() {
            this.productList= await this.$api("https://0338e6ca-b69b-46e3-b2b8-af3e7215c2c6.mock.pstmn.io/list", "get")
        }
    }

}
</script>
<style lang="scss">
    table{
        border-collapse: collapse;
        width: 80%;
        margin: 0 auto;
        td, th{
            border:1px solid #ddd;
            text-align: left;
            padding: 8px;
        }
    }
</style>