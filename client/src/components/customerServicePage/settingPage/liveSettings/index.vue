<template>
    <div class="wrapbody">
    <vue-headful
            title="Cài đặt LIVE - Chào mừng đến với iBee"
            description="Dịch vụ của iBee.vn - Chúng tôi luôn Cố gắng vì nụ cười và sự hài lòng của bạn!"
        />
      <Row>
        <Col :xs="{span: 2 }" :sm="{span: 1 }" :md="{span: 1 }" :lg="{span: 1 }" 
         class="divCss">
            <sidebar getActive="liveSettings"/>
        </Col>
        <Col :xs="{span: 22 }" :sm="{span: 23 }" :md="{span: 23 }" :lg="{span: 23 }" style="float: right;">
        <div class="navbarMainRight" style="">
                Ahihi 
            </div>
        </Col>
        <Col :xs="{span: 22 }" :sm="{span: 23 }" :md="{span: 23 }" :lg="{span: 23 }" class="bodyMainRight">
        <!-- ///// MAIN LEFT ////// -->
        <div>
        
        <Col :xs="6" :sm="6" :md="5" :lg="4">
            <div class="taskbarLeft">
            <div style="padding-top:10px;border-bottom: 1px solid #e9eaec;padding-bottom:6px;">
            <p><h2><Icon type="ios-cog"></Icon> CÀI ĐẶT</h2></p>
            </div>
            <!-- //// CHILD SIDEBAR LEFT //// -->
            <ul class="sidebarLeft">
                <router-link :to="{ path: '/app/settings/'}"><li >BẢNG QUẢN TRỊ</li></router-link>
            </ul>
            <ul class="sidebarLeft" style="background: #ffae2a;">
                <router-link :to="{ path: '/app/settings/liveSettings'}"><li style="color:#FFF">CÀI ĐẶT LIVE <status-indicator negative pulse></status-indicator></li></router-link>
            </ul>
             <ul class="sidebarLeft">
                <router-link :to="{ path: '/app/settings/configSettings'}"><li>CÀI ĐẶT CẤU HÌNH </li></router-link>
            </ul>
            </div>
        </Col>
        <Col :xs="18" :sm="18" :md="19" :lg="20">
        <div class="taskbarRight" style="padding:20px 10px">
        <Breadcrumb>
        <BreadcrumbItem to="/app">Trang chủ</BreadcrumbItem>
        <BreadcrumbItem to="/app/settings">Cài đặt</BreadcrumbItem>
        <BreadcrumbItem>Cài đặt LIVE</BreadcrumbItem>
        </Breadcrumb>
        <br/>
        <Col :xs="{ span: 24}" :md="{ span: 22,offset: 1 }" :lg="{ span: 22, offset: 1 }" class="simpleCard">
              
                <Col :xs="{ span: 24}" :md="{ span: 16, offset: 4 }" :lg="{ span: 16, offset: 4 }" style="margin-top:20px">
                <Form  label-position="top">
                    <FormItem>
                        <label class="ivu-label-live">BẠN LIVE BẰNG TÀI KHOẢN NÀO?</label>
                        <Select v-model="typeLiveModel" long size="large">
                            <Option v-for="item in typeLive" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </FormItem>
                     <FormItem v-if="isActiveSelectFanpage">
                        <label class="ivu-label-live">HÃY CHỌN FANPAGE BẠN LIVE?</label>
                        <Select v-model="accountFanpageLiveModel" long size="large">
                            <Option v-for="item in accountFanpageLive" :value="item.id+'|'+item.access_token" :key="item.id">{{ item.name }}</Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        <label class="ivu-label-live">CHỌN MÃ LIVE?</label>
                        <Select v-model="formLive.typeRandomLive" long size="large">
                            <Option v-for="item in typeRandomLive" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                    <label class="ivu-label-live">BẠN BÁN 1 SẢN PHẨM HAY NHIỀU SẢN PHẨM?</label>
                        <Select v-model="formLive.typeQualityLive" long size="large">
                            <Option v-for="item in typeQualityLive" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                    <label class="ivu-label-live">SỐ LƯỢNG NGƯỜI DỰ BỊ?</label>
                        <Input v-model="formLive.substituteLive"  placeholder="Xin nhập số người dự bị" size="large"></Input>
                    </FormItem>
                    <Button @click="onSubmit" :loading="loading" type="primary">
                    <span v-if="!loading"> LƯU CÀI ĐẶT</span>
                    <span v-else>Đang xử lý...</span>
                   </Button>
                </Form>
            </Col>
    </Col>
        </div>
    </Col>
        
        </div>
<!-- ///// END MAIN LEFT ////// -->
        </Col>
      </Row>  
    </div>
</template>
<script>
import axios from 'axios';
import StatusIndicator from 'vue-status-indicator';
import baseURI from '../../../../services/baseURI';
import sidebar from '@/components/layout/customerServicePage/indexPage/sidebar'
    export default {
        name: 'indexPage',
        components: {
            sidebar,
            StatusIndicator
        },
        data(){
            return {
                formLive: {
                   typeRandomLive: 'random',
                   typeQualityLive: 'onlyProduct',
                   substituteLive: '2'
                },
                loading: false,
                typeLiveModel: 'profile',
                accountFanpageLiveModel: null,
                isActiveSelectFanpage: false,
                coverUser: '',
                nameUser: '',
                typeLive: [
                    {
                        value: 'profile',
                        label: 'Trang cá nhân'
                    },
                    {
                        value: 'fanpage',
                        label: 'Trang Fanpage'
                    },
                ],
                typeRandomLive: [
                    {
                        value: 'random',
                        label: 'Ngẫu nhiên (Công nghệ auto Sản Phẩm)'
                    },
                    {
                        value: 'product',
                        label: 'Sản phẩm sẵn'
                    },
                ],
                typeQualityLive: [
                    {
                        value: 'onlyProduct',
                        label: 'Một loại sản phẩm'
                    },
                    {
                        value: 'manyProduct',
                        label: 'Nhiều loại sản phẩm'
                    },
                ],
                accountFanpageLive: []
                
            }
        },
        watch: {
                typeLiveModel: function(val) {
                this.isActiveSelectFanpage = (val === 'fanpage');
                },
                isActiveSelectFanpage: function(val) {
                    const _this = this;
                    const access_token = _this.$session.get('longAccessTokenUser');
                        if (val) {
                        FB.api(`me/accounts?access_token=${access_token}`, (response) => {
                                const dataFanpage = response.data;
                                 if(dataFanpage.length == 0){
                                    _this.isActiveSelectFanpage = false;
                                     _this.typeLiveModel = 'profile'
                                   
                                        _this.$Notice.error({
                                            title: 'THÔNG BÁO',
                                            desc: 'Bạn không có Fanpage nào cả!'
                                        });

                                }else{
                                    
                                     _this.accountFanpageLive = response.data;

                                 }
                            })
                        }
        }
    },
    created(){
            var authTic = this.$session.get('authTic');
            var authRole = this.$session.get('authTic').role_id;
            var _this = this;
            if(!authTic){
                _this.$router.push('/');
            }else{
                if(authRole == 0){
                    _this.$router.push('/dashboard');
                }
            }
        },
        methods:{
            onSubmit(event){
                var _this = this;
                event.preventDefault();
                this.loading = true;
                var tokenJWT = _this.$session.get('tokenJWT');
            
                // ==== CONTENT SETTING ==== //
                var _idUser = _this.$session.get('authTic')._id;
                var typeRandomLive = _this.formLive.typeRandomLive;
                var typeQualityLive = _this.formLive.typeQualityLive;
                var substituteLive = _this.formLive.substituteLive;
                var typeLiveModel = _this.typeLiveModel;
                var created_date = new Date();
                var accountFanpageLiveModel = _this.accountFanpageLiveModel;

                if(typeLiveModel == 'fanpage'){
                    var idFanpageLive = accountFanpageLiveModel.split('|')[0];
                    var accessTokenPage = accountFanpageLiveModel.split('|')[1];
                    _this.$localStorage.set('accessTokenPage', accessTokenPage);
                }else{
                    var idFanpageLive = null;
                }

                 axios.post(`${baseURI}/api/appSettings/liveSettings`,
                { _idUser,typeRandomLive,typeQualityLive,typeLiveModel,idFanpageLive,substituteLive},{ 
                        headers: { Authorization: `Bearer ${tokenJWT}` } 
                    }).then((response) => {
                        console.log(response.data);
                        _this.loading = false;
                                _this.$Notice.success({
                                            title: 'THÔNG BÁO',
                                            desc: 'Lưu thành công! Chúc mừng bạn. Bạn có thể sử dụng "BẮT ĐẦU LIVE" ngay bây giờ!'
                                        });
                    })
                    .catch(function (error) {
                            _this.$Notice.error({
                                    title: 'THÔNG BÁO',
                                    desc: error
                           });
                });
            }
        }
    }
</script>
<style>
.ivu-label-live {
    float: none;
    display: inline-block;
    color: #ffae2a;
    background: #FFF;
    font-size: 16px;
}
.sidebarLeft li{
    border-bottom: 1px solid #EEE;
    color: #444;
    font-size: 13px;
    padding: 8px 15px;
    text-align: left;
    list-style: none;
    -webkit-transition: 0.3s;
    transition: 0.3s;
}
.sidebarLeft li:hover{
    border-bottom: 1px solid #EEE;
    color: #ffffff;
    font-size: 13px;
    padding: 8px 15px;
    text-align: left;
    background: #ffae2a;
    list-style: none;
    -webkit-transition: 0.3s;
    transition: 0.3s;
}
.taskbarLeft{
    border-right: 1px solid #dddee1;
    height: 100vh;
    background: #ffffff;
}
.taskbarRight{
    text-align:left;
    height: 100vh;

    padding:10px;
}
.simpleCard {
    border-radius: 2px;
    background-color: #fff;
    padding: 10px;
    -webkit-box-shadow: 0px 2px 4px rgba(126,142,177,0.12);
    box-shadow: 0px 2px 4px rgba(126,142,177,0.12);
}
.ivu-row{
        background: #1b1b1b;
}
.bodyMainRight{
    float: right;
    height:100vh;
    background: #f2f4f8;
}
.navbarMainRight{
    border: 1px solid rgb(238, 238, 238);
    padding: 8px 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 0px 0px;
    background: #FFF;
}
.ivu-notice span {
    line-height: 18px;
}
.ivu-btn-text:focus {
    box-shadow: none;
}
.imenu .ivu-btn{
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: none;
    white-space: nowrap;
    line-height: 0px;
    user-select: none;
    padding: 0px;
    font-size: 0px;
    border-radius: 0px;
}
.imenu{
    margin-top:10px;margin-bottom:10px
}
.cicle-icon-menu-openlive {
    display: inline-block;
    border-radius: 60px;
    border: 1px solid;
    -webkit-box-shadow: rgb(255, 255, 255) 0px 0px 2px;
    box-shadow: #f90 0px 0px 2px;
    background: rgb(255, 174, 42);
    padding: 0.5em 0.6em;
    color: #ffffff;
    font-size: 17px;
    cursor: pointer;
}
.cicle-icon-menu-openlive:hover {
    display: inline-block;
    border-radius: 60px;
    font-weight: 700;
    -webkit-box-shadow: rgb(255, 255, 255) 0px 0px 2px;
    box-shadow: #f90 0px 0px 2px;
    background: rgb(255, 174, 42);
    padding: 0.5em 0.6em;
    color: #ed3f14;
    font-size: 17px;
    cursor: pointer;
     -webkit-transition: 0.3s;
    transition: 0.3s;
}
.cicle-icon-menu{
    display: inline-block;
    border-radius: 60px;
    box-shadow: rgb(255, 255, 255) 0px 0px 2px;
    padding: 0.5em 0.6em;
    color: #999;
    border: 1px solid;
    font-size: 17px;
    cursor:pointer;
    
}
.cicle-icon-menu:hover{
    display: inline-block;
    border-radius: 60px;
    box-shadow: rgb(255, 255, 255) 0px 0px 2px;
    padding: 0.5em 0.6em;
    color: #EEE;
    border: 1px solid;
    font-size: 17px;
    cursor:pointer;
     -webkit-transition: 0.3s;
    transition: 0.3s;
}
.divCss{
    background: #1b1b1b;
    height: 100vh;
    position: relative;
    top:0;
    left:0;
}
.sidebarCss {
  background: #1b1b1b;
  width: 100%;
  height: auto;
  color:#FFF;
  padding-bottom:10px;
}
.wrapbody{
  height: 100%;

}
</style>