<template>
   <div>
     <a id="custom-login-btn" @click="kakaoLogin()">
       <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222"/>
     </a>
     <button type="button" @click="kakaoLogout">카카오 로그아웃</button>
   </div>
 </template>

<script>
import axios from "axios"

const naverAPI = process.env.VUE_APP_APP
export default {
   data() {
      return {
         naverLogin: null,
      }
   },
   mounted() {
      this.naverLogin = new window.naver.LoginWithNaverId({
         clientId: "tMJRnG4__gImGzIseziH",
         callbackUrl: "http://localhost:8081/naverlogin",
         isPopup: false,
         loginButton: { color: "green", type: 3, height: 60 },
      })
      this.naverLogin.init()
      this.naverLogin.getLoginStatus((status) => {
         if (status) {
            console.log(status)
            console.log(this.naverLogin.user)
            var email = this.naverLogin.user.getEmail()
            if (email == undefined || email == null) {
               alert("이메일은 필수정보입니다.\n정보제공을 동의해주세요.")
               this.naverLogin.reprompt()
               return
            }
         } else {
            console.log("callback 처리 실패")
         }
      })
   },
   methods: {
      logout() {
         const accessToken = this.naverLogin.accessToken.accessToken
         const url = `/oauth2.0/token?grant_type=delete&client_id=tMJRnG4__gImGzIseziH&client_secret=eO7RUHstW8&access_token=${accessToken}&service_provider=NAVER`
         axios.get(url).then((res) => {
            console.log(res.data)
         })
      },
      kakaoLogin() {
         window.Kakao.Auth.login({
            scope: "profile_nickname, profile_image, account_email , birthday" ,
            success: this.getKakaoAccount,
         })
      },
      getKakaoAccount() {
         window.Kakao.API.request({
            url: "/v2/user/me",
            success: (response) => {
               const kakao_account = response.kakao_account
               const nickname = kakao_account.profile.nickname
               const email = kakao_account.email
               const birthday = kakao_account.birthday
               const pimage = kakao_account.image
               console.log("nickname", nickname)
               console.log("email", email)
               console.log("birthday", birthday)
               console.log("pimage", pimage)
               console.log(kakao_account)
               this.$store.commit("user", kakao_account)
               alert("로그인 성공")
            },
            fail: (error) => {
               console.log(error)
            },
         })
      },
      kakaoLogout() {
         if (!window.Kakao.Auth.getAccessToken()) {
            console.log("로그인 실패")
            return
         }
         window.Kakao.Auth.logout((response) => {
            console.log("access token", window.Kakao.Auth.getAccessToken())
            console.log("logout", response)
         })
      },
   },
}
</script>

