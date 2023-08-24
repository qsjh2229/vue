<template>
    <div>
        <div id="naverIdLogin"></div>
        <button type="button" @click="logout">로그아웃</button>
    </div>
    <KakaoLogin/>
</template>
<script>
import axios from "axios";
import KakaoLogin from "./KakaoLogin.vue";

const NAVER_ID = process.env.VUE_APP_NAVER_ID;
const CLIENT_SECRET = process.env.VUE_APP_NAVER_CLIENT_SECRET;

export default {
    components:{KakaoLogin},
    data() {
        return {
            naverLogin: null,
            // naver_id: NAVER_ID,
            // client_secret: CLIENT_SECRET,
        };
    },
    mounted() {
        this.naverLogin = new window.naver.LoginWithNaverId({
            clientId: NAVER_ID,
            callbackUrl: "http://localhost:8080/naverlogin",
            isPopup: false,
            loginButton: { color: "green", type: 3, height: 60 },
        });
        this.naverLogin.init();
        this.naverLogin.getLoginStatus((status) => {
            if (status) {
                console.log(status);
                console.log(this.naverLogin.user);
                var email = this.naverLogin.user.getEmail();
                if (email == undefined || email == null) {
                    alert("이메일은 필수정보입니다.\n정보제공을 동의해주세요.");
                    this.naverLogin.reprompt();
                    return;
                }
            } else {
                console.log("callback 처리 실패");
            }
        });
    },
    methods: {
        logout() {
            const accessToken = this.naverLogin.accessToken.accessToken;
            const url = `/oauth2.0/token?grant_type=delete&client_id=${NAVER_ID}&client_secret=${CLIENT_SECRET}&access_token=${accessToken}&service_provider=NAVER`;
            axios.get(url).then((res) => {
                console.log(res.data);
            });
        },
    },
};
</script>
