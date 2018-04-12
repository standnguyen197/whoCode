<template>
    <div style="background: #EEE;">
     <vue-headful
            title="Bảng quản trị - Chào mừng đến với iBee"
            description="Dịch vụ của iBee.vn - Chúng tôi luôn Cố gắng vì nụ cười và sự hài lòng của bạn!"
        />
        <div class="layout">
        <Row>
       <navbar/>
        </Row>
        <div class="bannerHead">
                <center>
                 <h1 style="text-align:center;margin-top: 60px;font-size: 35px;color:#FFF;font-family: 'Baloo Bhaina', cursive;">IBEE.VN ĐÃ CÓ PHIÊN BẢN TRÊN ĐIỆN THOẠI</h1>
                    <p style="text-align:center;font-size:17px;color:#FFF;margin-bottom:20px">
                    <vue-typer
                    :text='["Chào mừng bạn đã đến với dịch vụ của iBee.vn","Chúng tôi đã có phiên bản iBee trên điện thoại","Bạn có thể tải iBee với các phiên bản tương thích như Android hoặc Ios"]'
                    :repeat='Infinity'
                    :shuffle='false'
                    initial-action='typing'
                    :pre-type-delay='70'
                    :type-delay='70'
                    :pre-erase-delay='2000'
                    :erase-delay='250'
                    erase-style='clear'
                    :erase-on-complete='false'
                    caret-animation='blink' :style="customCss"
                    ></vue-typer>
                    </p>
                <img  style="width:200px;height: 63px;" src="http://www.visitgravesend.co.uk/wp-content/uploads/2016/04/App-Store.png"/> 
                <img style="width:200px;    height: 67px;" src="https://www.mywheelsapp.com.au/wp-content/uploads/2016/08/GooglePlay_appStore.png"/>
                </center>
     </div>
    </div>    

    <Row style="margin-top:20px">
    <Col :xs="{ span: 24 }" :sm="{ span: 6 ,offset: 1 }" :md="{ span: 6, offset: 1 }" :lg="{ span: 6, offset: 1 }" style="margin-bottom:20px;">
        
    <Menu :theme="theme" style="width:100%;border-radius:5px;box-shadow: 0 1px 6px rgba(0,0,0,.2);
    border-color: #eee; " active-name="1">
            <MenuItem name="1"
            style="border-top-left-radius: 5px;
            color: rgb(255, 255, 255);
            border-right: 2px solid rgb(241, 196, 15);
            z-index: 2;
            cursor: default;
            background: rgb(255, 174, 42);
            border-bottom: none;
            font-size: 20px;
            border-top-right-radius: 5px;">
                    BẢNG ĐIỀU KHIỂN
                    </MenuItem>
                <Submenu name="1" class="ivu-menu-menu-ul" style="text-align: left;">
                    <template slot="title" style="text-align:left">
                        <Icon type="android-cart" class="bg-icon"></Icon>
                       QUẢN LÝ GIỎ HÀNG
                    </template>
                    <MenuItem  style="text-align:left"><router-link :to="{ path: 'dashboard/cart'}"><Icon type="android-arrow-dropright"></Icon> Xem giỏ hàng</router-link></MenuItem>
                    <MenuItem  style="text-align:left"><router-link :to="{ path: 'dashboard/cart'}"><Icon type="android-arrow-dropright"></Icon> Thanh toán </router-link></MenuItem>
                    <MenuItem  style="text-align:left"><router-link :to="{ path: 'dashboard/cart'}"><Icon type="android-arrow-dropright"></Icon> Lịch sử giao dịch </router-link></MenuItem>
                </Submenu>
                
                <Submenu name="2" class="ivu-menu-menu-ul" style="text-align: left;">
                    <template slot="title">
                        <Icon type="ios-pricetags" class="bg-icon"></Icon>
                       QUẢN LÝ VOUCHER
                    </template>
                    <MenuItem name="2-1" style="text-align:left" >Nhập voucher</MenuItem>
                    <MenuItem name="2-2" style="text-align:left">Lịch sử voucher</MenuItem>
                </Submenu>
                <Submenu name="3" class="ivu-menu-menu-ul" style="text-align: left;">
                    <template slot="title">
                        <Icon type="help-buoy" class="bg-icon"></Icon>
                        QUẢN LÝ HỖ TRỢ
                    </template>
                        <MenuItem name="3-1" style="text-align:left">Liên hệ với tư vấn</MenuItem>
                        <MenuItem name="3-2" style="text-align:left">Liên hệ để phản hồi</MenuItem>
                        <MenuItem name="3-3" style="text-align:left">Liên hệ với shop</MenuItem>
                </Submenu>
                <Submenu name="4" class="ivu-menu-menu-ul" style="text-align: left;">
                    <template slot="title">
                        <Icon type="android-contact" class="bg-icon"></Icon>
                        QUẢN LÝ TÀI KHOẢN
                    </template>
                        <MenuItem name="4-1" style="text-align:left">Cài đặt tài khoản</MenuItem>
                        <MenuItem name="4-2" style="text-align:left">Nâng cấp tài khoản</MenuItem>
                        <MenuItem name="4-3" style="text-align:left">Đăng xuất</MenuItem>
                </Submenu>
            </Menu>

        </Col>

        <Col :xs="{ span: 24 }" :sm="{ span: 15, offset: 1 }" :md="{ span: 15, offset: 1 }" :lg="{ span: 15, offset: 1 }">
        <Card>
        Col
        </Card>
        

        </Col>
       
    </Row>
    </div>
</template>

<script>
    import navbar from '@/components/layout/customerPage/navbar';
    import axios from 'axios';
    export default {
        components: {
            navbar
        },
        data(){
            return {
                theme: 'light'
            }
        },
        created(){
             var _this = this;
             var authTic = this.$session.get('authTic');
             if(authTic){
            var authCover = this.$session.get('authTic').cover;
                 var authName = this.$session.get('authTic').name;
                 _this.isActiveLogin = true;
                 _this.coverUser = authCover;
                 _this.nameUser = authName;
             }else{
                 _this.isActiveLogin = false;
                _this.$router.push('/');
             }
        },
        methods:{
            pushToConnect(){
                var authTic = this.$session.get('authTic');
                if(authTic){
                    var authName = this.$session.get('authTic').name;
                    var authID = this.$session.get('authTic')._id;
                    var authRole = this.$session.get('authTic').role_id;
                    if(authRole == 0){
                        this.$router.push('/dashboard');
                    }else if(authRole == 1){
                        this.$router.push('/app');
                    }else{
                        this.$router.push('/cpanel');
                    }
                    
                }else{
                    this.$Notice.warning({
                    title: 'Bạn chưa đăng nhập!',
                    desc: 'Để đăng ký dịch vụ bạn phải đăng nhập trước!'
                    });
                }

            },
            pushToHome(){
                    this.$router.push('/');
            },
            customCss(){
                return `text-align:center;font-size:17px;color:#FFF;`
            }
        },
       

    }
</script>
<style>
body{
    background: #EEE;
}
.ivu-row {
    background: #eeeeee;
}
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    color: #ffffff;
    border-right: 2px solid #f1c40f;
    z-index: 2;
    background: #ffae2a;
    border-bottom: none;
}
.ivu-menu-menu-ul.ivu-menu-submenu{
    border-bottom: 1px solid #EEE;
}
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item {
    border-right: 2px solid transparent;
    background: #303030;
    border-bottom: 1px solid #595958;
    color: #fff;
}
.bg-icon{
    padding: 5px 7px;
    border: 1px solid orange;
    border-radius: 25px;
    background: orange;
    color: #FFF;
}

.columns {
    float: left;
    width: 100%;
    padding: 8px;
}

.price {
    list-style-type: none;
    border: 1px solid #eee;
    margin: 0;
    padding: 0;
    -webkit-transition: 0.3s;
    transition: 0.3s;
}

.price:hover {
    box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2)
}

.price .header {
    background-color: #303030;
    color: white;
    font-size: 25px;
}

.price li {
    border-bottom: 1px solid #eee;
    padding: 20px;
    text-align: center;
    font-size: 14px;
}

.price .grey {
    background-color: #eee;
    font-size: 20px;
}

.button {
    background-color: rgb(255, 174, 42);
    border: none;
    color: white;
    padding: 8px 25px;
    text-align: center;
    cursor:pointer;
    text-decoration: none;
    font-size: 18px;
}

.linkLogin{
    border: 1px solid #FFF;
    padding: 5px 10px;
    border-radius: 25px;
    transition: color 0.2s ease;
}
.linkLogin:hover{
    border: 1px solid #FFF;
    padding: 5px 10px;
    border-radius: 25px;
    transition: color 0.2s ease;
}
.ivu-menu-item a{
    color: #ffffff;
    background: transparent;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    transition: color 0.2s ease;
}
.ivu-menu-item a:hover{
    color: #fff;
    background: transparent;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    transition: color 0.2s ease;
}
.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-horizontal .ivu-menu-submenu {
    float: left;
    padding: 0px 7px;
    position: relative;
    cursor: pointer;
    z-index: 3;
    transition: all 0.2s ease-in-out;
}
.serviceBg{
        background: #ffae2a;
}
.bannerHead{
    height: 250px;
}
.layout{
    background: #303030 url('https://sv1.uphinhnhanh.com/images/2018/04/07/5.png');
    position: relative;
    overflow: hidden;
}
.ivu-menu-horizontal {
    height: 45px;
    line-height: 45px;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 6px;
    left: 20px;
}
.ivu-avatar {
    border: 2px solid #d5d5d5;
    display: inline-block;
    text-align: center;
    background: #ccc;
    color: #fff;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    width: 32px;
    height: 32px;
    line-height: 32px;
    border-radius: 16px;
}
.layout-nav{
    width: 410px;
    margin: 0 auto;
    margin-right: 10px;
}
.layout-nav-mobile{
    width: 290px;
    margin: 0 auto;
    margin-right: 10px;
}
.ivu-layout-header {
    background: #495060;
    padding: 0 0px;
    height: 44px;
    line-height: 44px;
}
.ivu-layout {
    height: 44px;
    display: flex;
    flex-direction: column;
    flex: auto;
    background: #f5f7f9;
}
.layout-footer-center{
    text-align: center;
}
</style>