<template lang="">
    <div>
        <div>{{ htmlString }}</div>
        <div v-html="htmlString"></div>
        <input type="text" v-model="valueModel" /> <br />
        <br />
        <input type="number" v-model.number="numberModel" /> <br />
        <textarea v-model="message"></textarea>
        <select v-model="city">
            <option value="02">서울</option>
            <option value="051">부산</option>
            <option value="064">제주</option>
        </select>
        <label for="">
            <input
                type="checkbox"
                v-model="checked"
                true-value="yes"
                false-value="no"
            />{{ checked }}
        </label>
        <div>
            <label
                ><input
                    type="radio"
                    v-bind:value="radioValue1"
                    v-model="picked"
                />서울</label
            >
            <label
                ><input
                    type="radio"
                    v-bind:value="radioValue2"
                    v-model="picked"
                />부산</label
            >
            <label
                ><input
                    type="radio"
                    v-bind:value="radioValue3"
                    v-model="picked"
                />제주</label
            >
            <br />
            <span>선택한 지역: {{ picked }}</span>
        </div>
        <img v-bind:src="imgSrc" /> <br />
        <input type="text" v-model="textValue" />
        <button type="button" :disabled="textValue == ''">click</button>

        <div class="container" :class="[activeClass, errorClass]">
            class binding
        </div>
        <div :style="styleObject">인라인 스타일 바인딩</div>
        <div :style="[baseStyle, addStyle]">인라인 스타일 바인딩</div>
    </div>
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
                <td>{{ product.product_name }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.category }}</td>
                <td>{{ product.delivery_price }}</td>
            </tr>
        </tbody>
    </table>
    <h2 v-if="type == 'A'">A</h2>
    <h2 v-else-if="type == 'B'">B</h2>
    <h2 v-else>C</h2>
    <br />
    <br />
    <button type="button" @click="one(), two()">click</button>
    <p>The Counter is : {{ counter }}</p>
    <br />
    <br />
    <select v-model="selectValue" @change="changeSelect">
        <option value="서울">서울</option>
        <option value="부산">부산</option>
        <option value="제주">제주</option>
    </select>
    <br />
    <br />
    <input type="text" value="submit" @keyup.enter="submit" />
    <br />
    <br />
    <h3>{{ firstName + " " + lastName }}</h3>
    <h3>{{ getFullName() }}</h3>
    <br />
    <br />
    <h4>Full name : {{ fullName }}</h4>
    <button @click = "changeName" type="button">변경</button>
</template>
<script>
export default {
    data() {
        return {
            firstName: "John",
            lastName: "Smith",
            fullName: "",
            selectValue: "",
            counter: 0,
            type: "A",
            productList: [
                {
                    product_name: "기계식 키보드",
                    price: 25000,
                    category: "노트북/태블릿",
                    delivery_price: "5000",
                },
                {
                    product_name: "무선 마우스",
                    price: 12000,
                    category: "노트북/태블릿",
                    delivery_price: "5000",
                },
                {
                    product_name: "아이패드",
                    price: 725000,
                    category: "노트북/태블릿",
                    delivery_price: "5000",
                },
                {
                    product_name: "태블릿 거치대",
                    price: 32000,
                    category: "노트북/태블릿",
                    delivery_price: "5000",
                },
                {
                    product_name: "무선 충전기",
                    price: 42000,
                    category: "노트북/태블릿",
                    delivery_price: "5000",
                },
            ],
            baseStyle: "background-color: yellow; width: 100%; height: 200px;",
            addStyle: "color:red; font-weight: bold;",
            styleObject: {
                color: "red",
                fontSize: "13px",
            },
            htmlString: '<p style="color:red">This is a red string</p>',
            valueModel: "south korea",
            numberModel: "3",
            message: "채욱이가 오늘은 얼마나 열심히 할까요?",
            city: "064",
            checked: "yes",
            picked: "",
            radioValue1: "서울",
            radioValue2: "부산",
            radioValue3: "제주",
            imgSrc: "https://kr.vuejs.org/images/logo.png",
            textValue: "",
            activeClass: "active",
            errorClass: "text-red",
        };
    },
    watch: {
        firstName() {
            this.fullName = this.firstName + " " + this.lastName;
        },
        lastName() {
            this.fullName = this.firstName + " " + this.lastName;
        },
    },
    methods: {
        one() {
            alert("One");
        },
        two() {
            alert("Two");
        },
        changeSelect() {
            alert(this.selectValue);
        },
        getFullName() {
            return this.firstName + " " + this.lastName;
        },
        changeName() {
            this.firstName = "Alex";
        },
    },

};
</script>
<style lang="scss">
.container {
    width: 100%;
    height: 200px;
}
.active {
    background-color: yellow;
    font-weight: bold;
}
.text-red {
    color: red;
}
table {
    border-collapse: collapse;
    width: 100%;
    td,
    th {
        border: 1px solid black;
    }
}
</style>
