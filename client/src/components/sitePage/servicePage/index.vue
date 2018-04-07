<template>
    <div>
     <vue-headful
            title="iBee.vn - Dịch vụ của iBee"
            description="Dịch vụ của iBee.vn - Chúng tôi luôn Cố gắng vì nụ cười và sự hài lòng của bạn!"
        />
        <div class="layout">
        <Row>
        <navbar/>
        </Row>
        <div class="bannerHead">
        <h1 style="text-align:center;margin-top: 60px;font-size: 42px;color:#FFF;font-family: 'Baloo Bhaina', cursive;">DỊCH VỤ CỦA IBEE.VN</h1>
        <p style="text-align:center;font-size:17px;color:#FFF;">
        <vue-typer
        :text='["Chào mừng bạn đã đến với dịch vụ của iBee.vn","Chúng tôi luôn Cố gắng vì nụ cười và sự hài lòng của bạn!","Bạn có thể dùng thử miễn phí trong 7 ngày với 1 click bên dưới!","Quá tuyệt với cho một dịch vụ hỗ trợ tốt cho bạn đúng không nào :D"]'
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
        <center>
            <Button type="warning" @click="iBeeTrial" style="margin-top: 27px;font-size:15px;padding: 12px 38px;">DÙNG THỬ 7 NGÀY MIỄN PHÍ</Button>
        </center>
        </div>
    </div>    

    <Row>
        <Col :xs="24" :sm="24" :md="24" style="margin-top:20px">
                <h1 style="font-family: 'Baloo Bhaina', cursive;font-size:38px">BẢNG DỊCH VỤ</h1>

    <Col :xs="24" :sm="24" :md="6" style="margin-top:20px">
    <div class="columns">
  <ul class="price">
    <li class="header">iBee Trial</li>
    <li class="grey"> Dùng thử 7 ngày</li>
    <li>Thời gian: 7 ngày</li>
    <li>Chức năng: đầy đủ</li>
    <li>Đơn hàng: 20 đơn/ngày 
    <Poptip trigger="hover">
    <div slot="title">Chức năng này là gì?</div>
        <div slot="content">
           <p> Đó là ở gói này bạn bị giới hạn số lượng đơn hàng.</p><p> 1 ngày bạn nếu số đơn hàng của </p><p> bạn vượt quá 20 đơn thì sau đơn thứ 21,</p><p> đơn đó của bạn sẽ không được lưu </p> <p> lại trong hệ thống!</p>
        </div>
       <Icon type="help-circled" color="rgb(255, 174, 42)"></Icon>
    </Poptip></li>
    <li>Tạo voucher: không có</li>
    <li>Hỗ trợ: 3 ngày</li>
    <li class="grey"><button class="button" @click="iBeeTrial">Đăng ký</button></li>
  </ul>
</div>
    </Col>


    <Col :xs="24" :sm="24" :md="6" style="margin-top:20px">
        <div class="columns">
        <ul class="price">
            <li class="header" style="background-color:rgb(255, 174, 42)">iBee Basic</li>
            <li class="grey">280.000 VNĐ / 3 tháng</li>
            <li>Thời gian: 90 ngày</li>
            <li>Chức năng: đầy đủ</li>
            <li>Đơn hàng: 80 đơn/ ngày <Poptip trigger="hover">
    <div slot="title">Chức năng này là gì?</div>
        <div slot="content">
           <p> Đó là ở gói này bạn bị giới hạn số lượng đơn hàng.</p><p> 1 ngày bạn nếu số đơn hàng của </p><p> bạn vượt quá 80 đơn thì sau đơn thứ 81,</p><p> đơn đó của bạn sẽ không được lưu </p> <p> lại trong hệ thống!</p>
        </div>
       <Icon type="help-circled" color="rgb(255, 174, 42)"></Icon>
    </Poptip></li>
            <li>Tạo voucher: đầy đủ</li>
            <li>Hỗ trợ: 24/24</li>
            <li class="grey"><button class="button" @click="iBeeBasic">Đăng ký</button></li>
        </ul>
        </div>
    </Col>

    <Col :xs="24" :sm="24" :md="6" style="margin-top:20px">
        <div class="columns">
        <ul class="price">
            <li class="header">iBee Pro</li>
            <li class="grey">550.000 VNĐ / 6 tháng</li>
            <li>Thời gian: 180 ngày</li>
            <li>Chức năng: đầy đủ</li>
            <li>Đơn hàng: không giới hạn</li>
            <li>Tạo voucher: đầy đủ</li>
            <li>Hỗ trợ: 24/24</li>
            <li class="grey"><button class="button" @click="iBeePro">Đăng ký</button></li>
        </ul>
        </div>
    </Col>

    <Col :xs="24" :sm="24" :md="6" style="margin-top:20px">
        <div class="columns">
        <ul class="price">
            <li class="header">iBee MemberShip</li>
            <li class="grey">800.000 VNĐ / 12 tháng</li>
            <li>Thời gian: 350 ngày</li>
            <li>Chức năng: đầy đủ</li>
            <li>Đơn hàng: không giới hạn</li>
            <li>Tạo voucher: đầy đủ</li>
            <li>Hỗ trợ: 24/24</li>
            <li class="grey"><button class="button" @click="iBeeMemberShip">Đăng ký</button></li>
        </ul>
        </div>
    </Col>

        </Col>
    </Row>
    </div>
</template>

<script>
    import navbar from '@/components/layout/sitePage/navbar';
    import axios from 'axios';
    import base_URI from '../../../services/baseURI';
    export default {
        components: {
            navbar
        },
        data(){
            return {
                // isActiveLogin : false,
                // coverUser: '',
                // nameUser: '',
                // isActiveMenuToggle: false
            }
        },
        created(){
            // var _this = this;
            // var authTic = this.$session.get('authTic');
            // if(authTic){
            //     var authCover = this.$session.get('authTic').cover;
            //      var authName = this.$session.get('authTic').name;
            //     _this.isActiveLogin = true;
            //     _this.coverUser = authCover;
            //     _this.nameUser = authName;
            // }else{
            //     _this.isActiveLogin = false;
            // }
        },
        methods:{
            iBeeTrial(){
                var authTic = this.$session.get('authTic');
                if(authTic){
                    var authName = this.$session.get('authTic').name;
                    var authID = this.$session.get('authTic')._id;

                    // Start Register Serivce //
                    var onTimer = this.$moment(new Date()).format();
                    var startTimer = this.$moment(onTimer).format('X');

                    // End Register Serivce //
                    var _7dayTimer = this.$moment(new Date()).add(7, 'days').calendar(null, {
                        lastWeek: 'YYYY-MM-DD HH:mm:ss',
                        sameElse: 'YYYY-MM-DD HH:mm:ss'
                    });

                    var _onTimer = this.$moment(_7dayTimer).format();
                    var endTimer = this.$moment(_onTimer).format('X');

                    var userID = authID;
                    var priceService = '0';
                    var endTimeService = endTimer;
                    var startTimeService = startTimer;
                    var statusService = '1'; // 1 là bắt đầu sử dụng dịch vụ! 0 là hết dịch vụ
                    var typeService = '1' // Tức trial

                    var serviceData = {
                        userID,
                        priceService,
                        startTimeService,
                        endTimeService,
                        statusService,
                        typeService
                    };
                     axios.post(`${base_URI}/api/registerService`, serviceData).then((result) => {
                         console.log(result.data);
                     }).catch((e) => {
                         console.log(e);
                     })

                }else{
                    this.$Notice.warning({
                    title: 'Bạn chưa đăng nhập!',
                    desc: 'Để đăng ký dịch vụ bạn phải đăng nhập trước!'
                    });
                }
            },
            iBeeBasic(){

                var authTic = this.$session.get('authTic');
                if(authTic){
                    var authName = this.$session.get('authTic').name;
                    var authID = this.$session.get('authTic')._id;
                   
                }else{
                    this.$Notice.warning({
                    title: 'Bạn chưa đăng nhập!',
                    desc: 'Để đăng ký dịch vụ bạn phải đăng nhập trước!'
                    });
                }

            },
            iBeePro(){
                var authTic = this.$session.get('authTic');
                if(authTic){
                    var authName = this.$session.get('authTic').name;
                    var authID = this.$session.get('authTic')._id;
                   
                }else{
                    this.$Notice.warning({
                    title: 'Bạn chưa đăng nhập!',
                    desc: 'Để đăng ký dịch vụ bạn phải đăng nhập trước!'
                    });
                }
            },
            iBeeMemberShip(){
                var authTic = this.$session.get('authTic');
                if(authTic){
                    var authName = this.$session.get('authTic').name;
                    var authID = this.$session.get('authTic')._id;
                   
                }else{
                    this.$Notice.warning({
                    title: 'Bạn chưa đăng nhập!',
                    desc: 'Để đăng ký dịch vụ bạn phải đăng nhập trước!'
                    });
                }
            },
            
            customCss(){
                return `text-align:center;font-size:17px;color:#FFF;`
            }
        },
    }
</script>
<style scoped>
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