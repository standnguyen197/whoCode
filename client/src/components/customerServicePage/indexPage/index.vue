<template>
    <div class="wrapbody">
    <vue-headful
            title="App - Chào mừng đến với iBee"
            description="Dịch vụ của iBee.vn - Chúng tôi luôn Cố gắng vì nụ cười và sự hài lòng của bạn!"
        />
      <Row>
        <Col :xs="{span: 2 }" :sm="{span: 1 }" :md="{span: 1 }" :lg="{span: 1 }" 
         class="divCss">
          <sidebar/>
        </Col>
        <Col :xs="{span: 22 }" :sm="{span: 23 }" :md="{span: 23 }" :lg="{span: 23 }" style="float: right;">
        <div class="navbarMainRight" style="">
                <Avatar style="background-color: #87d068" icon="person" />
            </div>
        </Col>
        <Col :xs="{span: 22 }" :sm="{span: 23 }" :md="{span: 23 }" :lg="{span: 23 }" class="bodyMainRight">
        <div style="padding: 10px;">
        <div class="simpleCard">
        Hihi <Button type="warning">Hix</Button>
        </div>
        </div>
        </Col>
      </Row>  
    </div>
</template>
<script>
import sidebar from '@/components/layout/customerServicePage/indexPage/sidebar'
    export default {
        name: 'indexPage',
        components: {
            sidebar
        },
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
                this.$Notice.warning({
                    title: 'THÔNG BÁO',
                    desc: '',
                    render: h => {
                        return h('span', [
                            'Để " ',
                            h('b', 'BẮT ĐẦU LIVE'),
                            ' " xin hãy vào "', h('b', 'QUẢN LÝ CÀI ĐẶT > CÀI ĐẶT LIVE'), '". Xin cám ơn!'
                        ])
                    }
                });
            }
        }
    }
</script>
<style>
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