<template lang="">
  <div>
    <div>{{ htmlString }}</div>
    <div v-html="htmlString"></div>
    <input type="text" v-model="valueModel" /> <br />
    <input type="number" v-model.number="numberModel" /> <br />
    <textarea v-model="message"></textarea>
    <select v-model="city">
      <option value="02">서울</option>
      <option value="051">부산</option>
      <option value="031">경기</option>
      <option value="064">제주</option>
    </select>
    <br />
    <label for="">
      <input
        type="checkbox"
        v-model="checked"
        true-value="yes"
        false-value="no"
      />
      {{ checked }}</label
    >
    <div>
      <label for="">
        <input type="radio" :value="radidValue1" v-model="picked" /> 서울
      </label>
      <label for="">
        <input type="radio" :value="radidValue2" v-model="picked" /> 부산
      </label>
      <label for="">
        <input type="radio" :value="radidValue3" v-model="picked" /> 제주
      </label>
      <br />
      <span>선택한 지역: {{ picked }}</span>
    </div>
    <img v-bind:src="imgSrc" alt="" /> <br>
    <input type="text" v-model='textValue'/>
    <button type='button' v-bind:disabled="textValue==''">클릭</button>
    <div class=container v-bind:class="[activeClass,errorClass]">class binding</div>
  </div>
  <div :style='styleObject'>인라인 스타일 바인딩</div>
  <div :style='[addStyle,baseStyle]'>인라인 스타일 바인딩</div>
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
        <tr :key='i' v-for="(product,i) in productList">
            <td>{{product.product_name}}</td>
            <td>{{product.price}}</td>
            <td>{{product.categor}}</td>
            <td>{{product.delivert_price}}</td>
        </tr>
    </tbody>
  </table>
  <h2 v-if='type=="A"'>A</h2>
  <h2 v-else-if=B>B</h2>
  <h2 v-else>C</h2>

  <br>
<br>
<br>
<button type='button' @click='one(),two()'> 클릭 </button>
<!-- <p>카운터는 {{counter}}</p>
 -->

 <br>
 <br>
 <select v-model ='selectValue' @change='changeSelect'>
  <option value="서울">서울</option>
  <option value="부산">부산</option>
  <option value="제주">제주</option>
 </select>
 <input type="text" @keyup.enter='submit'>
 <h3> {{firstName+' '+ lastName}}</h3>
 <h3>{{getFullName()}}</h3>
 <h4>Full Name : {{FullName}}</h4>
 <button @change='changeName' type='button'>변경</button>
</template>

<script>
export default {
  data() {
    return {
      firstName:'chaewook',
      lastName:'yoon',
      FullName:'',
      selectValue:'',
    counter:0,
        type:'A',
        productList:[
            {'product_name':'기계식 키보드' ,"price":250000,"categor":"노트북/태블릿","delivert_price":50000},
            {'product_name':'무선마우스' ,"price":25000,"categor":"노트북/태블릿","delivert_price":50000},
            {'product_name':'아이패드' ,"price":1500000,"categor":"노트북/태블릿","delivert_price":50000},
            {'product_name':'아이폰' ,"price":1700000,"categor":"노트북/태블릿","delivert_price":50000},
            {'product_name':'갤럭시' ,"price":700000,"categor":"노트북/태블릿","delivert_price":50000},
        ],
        baseStyle:'background-color:yellow; width:100%; height:200px;',
        addStyle:'color:red; font-weight:bold;',
        styleObject:{
           color:'red',
           fontSize:'13px'
        },
      htmlString: '<p style="color:red">This is a red string</p>',
      valueModel: "korea",
      numberModel: "3",
      message: "채욱이는 귀엽다",
      city: "064",
      checked: "yes",
      picked: "",
      radidValue1: "서울",
      radidValue2: "부산",
      radidValue3: "제주",
      imgSrc: "https://kr.vuejs.org/images/logo.png",
      textValue:"",
      activeClass:'active',
      errorClass:'text-red',
    };
  },
  methods:{
   one(){
    alert('one')
   },
   two(){
    alert('two')
   },
   changeSelect(){
    alert(this.selectValue)
   },
   getFullName(){
    return this.firstName + " " +this.lastName
   },
   changeName(){
    this.firstName='wookwook';
   },
  
  }, watch:{
    firstName(){
    this.FullName=this.firstName + " " +this.lastName
   },
  lastName(){
    this.FullName=this.firstName + " " +this.lastName
  }
  }
};
</script>
<style lang="scss">
.container{
    width:100%;
    height:200px
   
}
.active{
        background-color:yellow;
        font-weight:bold
    }
    .text-red{
        color: red;
    }
    table{
        border-collapse: collapse;
        width: 80%; margin: 50px auto;
        td,th{
            border: 1px solid #ddd;
            text-align: left;
            padding: 8px;
        }
    }
</style>

<!-- 
https://0338e6ca-b69b-46e3-b2b8-af3e7215c2c6.mock.pstmn.io
 -->