<template>
    <div>
    <fb-signin-button
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Đăng nhập Facebook
  </fb-signin-button>
  <Button type="warning" @click="logOut">Warning</Button>
    </div>
</template>
<script>
import axios from 'axios'
import sha256 from 'sha256'
import baseURI from '../../services/baseURI';
export default {
  name: "authFacebook",
  data() {
    return {
      fbSignInParams: {
        scope: 'email,user_videos',
        return_scopes: true
      },
      authInfo:{
          type: Object
      }
    };
  },
  methods: {
    onSignInSuccess(response) {
     var _this = this;
     _this.$session.start();
     // ============= getLongAccessTokenUser ================ //
     var shortLivedToken = response.authResponse.accessToken;
      FB.api(
        '/oauth/access_token',
        'GET',
        {"grant_type":"fb_exchange_token","client_id":"126856184657575","client_secret":"f69f3f7d510fc2a421208e8e276e5b76","fb_exchange_token":`${shortLivedToken}`},
        function(responseToken) {
            var longAccessTokenUser = responseToken.access_token;
            _this.$session.set("longAccessTokenUser", longAccessTokenUser);
        }
    );

    // ============= getInfoUser ================ //
      FB.api("/me?fields=id,name,email", dude => {
        let _id = dude.id;
        let name = dude.name;
        let email = dude.email;
        var role_id = '';
        let cover = `https://graph.facebook.com/${_id}/picture?type=large`;
        if(_id == '374440739664862'){
          role_id += 2;
        }else{
          role_id += 0;
        }
        axios.post(`${baseURI}/api/authLocal`, {_id, name, email,cover,role_id})
        .then(function (response) {
          const tokenJWT = response.data.token;
          const authInfo = response.data.userData;
          const userID = response.data.userData._id;
          const serviceStatus = response.data.userData.serviceStatus;
          _this.$session.set('authTic', authInfo);
          _this.$session.set('tokenJWT', tokenJWT);

          if(serviceStatus == 0){
            _this.$router.push('/dich-vu');

           axios.post(`${baseURI}/api/PriceUser/createDefault`, {userID},{ 
              headers: { Authorization: `Bearer ${tokenJWT}` } 
            }).then((dataResult) => {  
                console.log(dataResult);
              }).catch((e) => {
                console.log(e);
              });

            }else{

             _this.$router.push('/welcome');
              
          }


        })
        .catch(function (error) {
          console.log(error);
          _this.pushLoginError(error);
        });

      });
    // ============= END getInfoUser ============ //
    },
    onSignInError(error) {
      var _this = this;
      _this.pushLoginError('Đăng nhập không thành công! Bạn hãy thử lại sau 10 giây nhé!');
    },
    pushLoginError(value) {
            this.$Notice.error({
            title: 'Thông báo',
            desc: value
        });
    },
    pushLoginSuccess() {
            this.$Notice.success({
            title: 'Thông báo',
            desc: 'Đăng nhập thành công!',
        });
    },
    logOut(){
      this.$session.destroy();
      this.$router.push('/');
    }
  }
};
</script>
<style>
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  font-family: 'Nunito', sans-serif;
  padding: 8px 15px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
  cursor: pointer;
  font-size: 14px
}
</style>
