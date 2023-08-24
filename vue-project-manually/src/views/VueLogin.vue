<template>
   <div>
     <a id="custom-login-btn" @click="kakaoLogin()">
       <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222"/>
     </a>
     <button type="button" @click="kakaoLogout">카카오 로그아웃</button>
   </div>
 </template>
 
 <script>
 export default {
   methods: {
     kakaoLogin() {
       window.Kakao.Auth.login({
         scope: "profile_nickname, account_email",
         success: this.getKakaoAccount
       });
     },
     getKakaoAccount() {
       window.Kakao.API.request({
         url: "/v2/user/me",
         success: (response) => {
           const kakao_account = response.kakao_account;
           const nickname = kakao_account.profile.nickname;
           const email = kakao_account.email;
           console.log("nickname", nickname);
           console.log("email", email);
           console.log(kakao_account);
          /*  alert("로그인 성공"); */
         },
         fail: (error) => {
           console.log(error);
         }
       });
     },
     kakaoLogout() {
       if (!window.Kakao.Auth.getAccessToken()) {
         console.log("로그인 실패");
         return;
       }
       window.Kakao.Auth.logout((response) => {
         console.log("access token", window.Kakao.Auth.getAccessToken());
         console.log("logout", response);
       });
     }
   }
 };
 </script>