<template>
     <div class="sidebarCss">
            <span >
            <router-link :to="{ path: '/app' }">
                <Avatar :src="coverUser" class="imenu" />
            </router-link>
            </span>
            <hr style="border-color: #555"/>
            <!-- //////////////////////// SIDEBAR ////////////////////// -->
            
            <div  class="imenu">
            <Tooltip placement="right-end" content="BẮT ĐẦU LIVE">
                <Button type="text" @click="testSubmit"><Icon  type="radio-waves" class="cicle-icon-menu-openlive"></Icon></Button>
            </Tooltip>
            </div>
            <div class="imenu">
            <Tooltip placement="right-end" content="TRANG CHỦ">
                <router-link :to="{ path: '/app' }"><Icon type="home" style=" padding: 0.48em 0.6em;" class="cicle-icon-menu"></Icon></router-link>
            </Tooltip>
            </div>
            <div class="imenu">
            <Tooltip placement="right-end" content="QUẢN LÝ SẢN PHẨM">
                <Icon type="cube" style="padding: 9px 10px;" class="cicle-icon-menu"></Icon>
            </Tooltip>
            </div>
            <div class="imenu">
            <Tooltip placement="right-end" content="QUẢN LÝ ĐƠN HÀNG">
                <Icon type="clipboard" style=" padding: 8px 11px"  class="cicle-icon-menu"></Icon>
            </Tooltip>
            </div>
            <div class="imenu">
            <Tooltip placement="right-end" content="QUẢN LÝ VOUCHER">
                <Icon type="ios-pricetags" style="padding: 0.51em 0.55em;" class="cicle-icon-menu"></Icon>
            </Tooltip>
            </div>
            <div class="imenu">
            <Tooltip placement="right-end" content="QUẢN LÝ THỐNG KÊ">
                <router-link :to="{ path: '/app/analytics' }"><Icon type="ios-pie" class="cicle-icon-menu"></Icon></router-link>
            </Tooltip>
            </div>
             <div class="imenu">
                <Tooltip placement="right-end" content="NẠP TIỀN">
                    <Icon type="social-usd" style="padding: 8px 11px;" class="cicle-icon-menu"></Icon>
                </Tooltip>
            </div>
             <div class="imenu">
                <Tooltip placement="right-end" content="QUẢN LÝ TIỆN ÍCH">
                    <Icon type="wand" style="padding: 0.49em 0.56em;" class="cicle-icon-menu"></Icon>
                </Tooltip>
            </div>
            <div class="imenu">
                <Tooltip placement="right-end" content="QUẢN LÝ TÀI KHOẢN">
                    <Icon type="lock-combination" style="padding: 8px 10px;" class="cicle-icon-menu"></Icon>
                   
                </Tooltip>
            </div>
            <div class="imenu">
                <Tooltip placement="right-end" content="QUẢN LÝ CÀI ĐẶT">
                   <router-link :to="{ path: '/app/settings' }"> <Icon type="ios-cog" style="padding: 8px 10px;" class="cicle-icon-menu"></Icon></router-link>
                </Tooltip>
            </div>
            <hr style="border-color: #555"/>
            <div class="imenu">
                <Tooltip placement="right-end" content="HỖ TRỢ 24/24">
                    <Icon type="chatbubbles" style="padding: 8px 10px;background: #84550f;color: #ffffff;" class="cicle-icon-menu"></Icon>

                </Tooltip>
            </div>
            <div class="imenu">
                <Tooltip placement="right-end" content="ĐĂNG XUẤT THIẾT BỊ">
                    <Button type="text" @click="logOut"><Icon type="power"  style="padding: 8px 9px;background: #380b00;color: rgb(255, 255, 255);" class="cicle-icon-menu"></Icon></Button>
                </Tooltip>
            </div>

        </div>
</template>
<script>
import axios from 'axios';
import baseURI from '../../../../services/baseURI';
     export default {
        name: 'indexPage',
        data(){
            return {
                coverUser: '',
                nameUser: ''
            }
        },
        created(){
            this.coverUser = this.$session.get('authTic').cover;
        },
        methods:{
            testSubmit(){
            var _this = this;
            var tokenJWT = _this.$session.get('tokenJWT');
            var _idUser = _this.$session.get('authTic')._id;
            axios.post(`${baseURI}/api/appSettings/getLiveSettings`,
                { _idUser},{ 
                        headers: { Authorization: `Bearer ${tokenJWT}` } 
                    }).then((response) => {
                    var checkData = response.data;
                    var checkDataResult = checkData.resultStatus;
                    var typeAccountLive = checkData.resultData.typeLiveModel;
                    var idFanpage = checkData.resultData.idFanpageLive;
                    var idUser = checkData.resultData._idUser;
                    var accessTokenPage = _this.$localStorage.get("accessTokenPage");
                    var accessTokenUser = _this.$session.get("longAccessTokenUser");

                    if(typeAccountLive == 'fanpage'){
                        var accessToken = accessTokenPage;
                        var idAccess = idFanpage;
                    }else{
                        var accessToken = accessTokenUser;
                        var idAccess = idUser;
                    }

                   FB.api( `/${idAccess}/live_videos?access_token=${accessToken}`, 'GET', {},
                          (response) => {
                       
                        var items = response.data;
                        var checkError = response.error;
                        if(checkError){
                            var newItems = [];
                        }else if(items.lenghth == 0){
                            var newItems = [];
                        }else{
                            var newItems = response.data;
                        }
                        // Tìm những giá trị đang là VIDEO LIVE
                          var itemsVideo = newItems.filter((item) => {
                                return item.status === "LIVE";
                            });
                          var itemsVideoClient = itemsVideo;

                          if(itemsVideoClient.length >= 1){
                          // Tách lấy giá trị embedHTML
                          const htmlLiveVideo = itemsVideoClient[0].embed_html;
                          const getLiveVideo = htmlLiveVideo.split('src="')[1].split('&width=')[0];
                          const getLinkVideo = getLiveVideo+"&width=360";
                         
                          _this.$localStorage.set('linkVideoLive' , getLinkVideo);
                          var idVideoLiveFB = itemsVideoClient[0].id;

                             if(typeAccountLive == 'fanpage'){
                                 _this.$router.push(`/app/OpenLive/f/${idVideoLiveFB}/`);
                             }else{
                                 _this.$router.push(`/app/OpenLive/p/${idVideoLiveFB}/`);
                             }

                          }else{
                             this.$Notice.warning({
                                            title: 'THÔNG BÁO',
                                            desc: 'Xin lỗi không tìm thấy được video LIVE của bạn! Lỗi : 102',
                                });
                            
                            this.$router.push('/app');
                            }
                        });

                        if(checkDataResult !== 'success'){
                                this.$Notice.warning({
                                        title: 'THÔNG BÁO',
                                        desc: '',
                                        render: h => {
                                            return h('span', [
                                                'Để " ',
                                                h('b', 'BẮT ĐẦU LIVE'),
                                                ' " xin hãy vào "', h('b', 'CÀI ĐẶT TÀI KHOẢN > CÀI ĐẶT LIVE'), '". Xin cám ơn!'
                                          ])
                                      }
                                });
                        }
                         

                    }).catch(function (error) {
                            _this.$Notice.error({
                                    title: 'THÔNG BÁO',
                                    desc: error
                        });
                });
            },
            logOut(){
                this.$session.destroy();
                this.$router.push('/');
            }
        }
    }
</script>