<template>
    <div  id="mydiv" ref="prev">
            <Layout>
            <Header>
                <Menu mode="horizontal" class="serviceBg" theme="dark" active-name="1" >
                    <div class="layout-logo"></div>
                    <div class="layout-nav" v-if="isActiveMenuToggle">
                        <MenuItem name="1">
                            <router-link :to="{ path: `/` }">Trang chủ</router-link>
                        </MenuItem>
                        <MenuItem  name="2">
                            <router-link :to="{ path: `/gioi-thieu` }">Giới thiệu</router-link>
                        </MenuItem>
                        <MenuItem name="3">
                            <router-link :to="{ path: '/huong-dan' }">Hướng dẫn</router-link>
                        </MenuItem>
                        <MenuItem name="4">
                            <router-link :to="{ path: '/lien-he' }">Liên hệ</router-link>
                        </MenuItem>
                        <MenuItem name="4" style="float: right;" v-if="isActiveLogin">
                                <Dropdown trigger="click" style="margin-left: 20px">
                                    <a href="javascript:void(0)">
                                       <Avatar :src="coverUser" />
                                        <Icon type="arrow-down-b"></Icon>
                                    </a>
                                    <DropdownMenu slot="list" style="text-align:left">
                                        <DropdownItem><span style="    color: #ffae2a;"><Icon type="social-usd-outline"  color="#ff9900"></Icon> Tài khoản : 0 VNĐ</span></DropdownItem>
                                        <DropdownItem><Icon type="arrow-right-b"></Icon> Trang cá nhân</DropdownItem>
                                        <DropdownItem><Icon type="arrow-right-b"></Icon> Truy cập Dashboard <Icon type="radio-waves" color="#ed3f14"></Icon></DropdownItem>
                                        <DropdownItem><Icon type="arrow-right-b"></Icon> Nâng cấp tài khoản</DropdownItem>
                                        <DropdownItem><Icon type="arrow-right-b"></Icon> Cài đặt tài khoản</DropdownItem>
                                        <DropdownItem><Button v-on:click="logOut" type="primary" size="small" long>Đăng xuất </Button></DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                        </MenuItem>
                        <MenuItem name="4" v-else>
                            <router-link :to="{ path: '/dang-nhap' }" class="linkLogin">Đăng nhập</router-link>
                        </MenuItem>
                    </div>
                    <div class="layout-nav-mobile" v-if="!isActiveMenuToggle">
                        <MenuItem name="4"  style="float: right;">
                                 <Dropdown trigger="click" style="margin-left: 20px;margin-top:3px;">
                                    <a href="javascript:void(0)">
                                      <Icon style="font-size: 21px;" type="ios-keypad"></Icon>
                                    </a>
                                    <DropdownMenu slot="list">
                                        <DropdownItem>Trang chủ</DropdownItem>
                                        <DropdownItem>Giới thiệu</DropdownItem>
                                        <DropdownItem>Hướng dẫn</DropdownItem>
                                        <DropdownItem>Liên hệ</DropdownItem>
                                        <Dropdown  placement="right-start" v-if="isActiveLogin">
                                            <DropdownItem divided>
                                                <Avatar :src="coverUser" /> TÀI KHOẢN
                                                <Icon type="ios-arrow-left"></Icon>
                                            </DropdownItem>
                                           <DropdownMenu slot="list" style="text-align:left">
                                            <DropdownItem><span style="    color: #ffae2a;">Tài khoản : 0 VNĐ</span></DropdownItem>
                                            <DropdownItem>Trang cá nhân</DropdownItem>
                                            <DropdownItem>Truy cập Dashboard <Icon type="radio-waves" color="#ed3f14"></Icon></DropdownItem>
                                            <DropdownItem>Nâng cấp tài khoản</DropdownItem>
                                            <DropdownItem>Cài đặt tài khoản</DropdownItem>
                                            <DropdownItem><Button v-on:click="logOut" type="primary" size="small" long>Đăng xuất </Button></DropdownItem>
                                        </DropdownMenu>
                                        </Dropdown>
                                        <DropdownItem v-else>
                                            <router-link :to="{ path: '/dang-nhap' }" style="color:#495060;
                                            border: 1px solid #495060;
                                             padding: 5px 10px;
                                            border-radius: 25px;
                                            ">Đăng nhập</router-link>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
        </Layout>
    </div>
</template>
<script>
    export default {
        name: 'navbar',
        data(){
        return {
                isActiveLogin : false,
                coverUser: '',
                nameUser: '',
                isActiveMenuToggle: false
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
            }
        },
        methods: {
        getWindowWidth() {
                const _this = this;
                    var getWidth = document.getElementById("mydiv").offsetWidth;
                    if(getWidth >= 600){
                        _this.isActiveMenuToggle = true;
                    }else{
                        _this.isActiveMenuToggle = false;
                    }
            },
            logOut(){
                    this.$session.destroy();
                    this.$router.push('/');
            }
        },
        mounted(){
            const _this = this;
            this.getWindowWidth();
            window.addEventListener('resize', () =>{
                _this.getWindowWidth();
            });
           
        }
    }
</script>
<style scoped>


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