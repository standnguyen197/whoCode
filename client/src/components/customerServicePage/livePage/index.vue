<template>
    <div class="wrapbody">

    <vue-headful
            title="OpenLive - Chào mừng đến với iBee"
            description="Dịch vụ của iBee.vn - Chúng tôi luôn Cố gắng vì nụ cười và sự hài lòng của bạn!"
        />
      <Row id="theEnd">

        <Col :xs="{span: 2 }" :sm="{span: 1 }" :md="{span: 1 }" :lg="{span: 1 }" 
         class="divCss">
          <sidebar/>
        </Col>
        <Col :xs="{span: 22 }" :sm="{span: 23 }" :md="{span: 23 }" 
        :lg="{span: 23 }" style="float: right; 
        border: 1px solid #dddee1;
        border-top:none;
        padding: 8px 10px;
        box-shadow: rgba(0, 0, 0, 0.2) 1px 0px 0px;
        background: #FFF;" >
            <Avatar style="background-color: #87d068" icon="person" />  
        </Col>
        
        </Col>
        <Col :xs="{span: 22 }" :sm="{span: 23 }" :md="{span: 23 }" :lg="{span: 23 }" class="bodyMainRight">
        <div style="">
        <div class="simpleCard">
        <Row>
            <!-- ========== VIDEO LIVE ========= -->
            <Col :sm="{ span: 7}" :md="{ span: 7}" :lg="{ span: 6}" style="background: #FFF;height:100vh">
            <iframe :src="iframeLinkVideoLive" class="iframeCss">
            </iframe>
            </Col>
            <!-- ========== END VIDEO LIVE ========= -->

            <!-- ========== COMMENT LIVE ========= -->
            <Col :sm="{ span: 8}" :md="{ span: 8}" :lg="{ span: 8}" class="scrollCss">
                <div style="background: rgb(255, 255, 255);
                padding: 6px 7.8px;
                border-right: 1px solid #dddee1;
                border-left: 1px solid #dddee1;
                border-bottom: 1px solid #dddee1">
                    <h2><Icon type="chatbubble-working" class="text-live"></Icon> BÌNH LUẬN LIVE</h2>
                </div>
                <div class="scrollCommentLive" id="containerScroll">
                        <div v-for="item in imes" :key="item.idFBSys" class="box" v-if="isActiveNowComment">
                        
                            <article class="media">
                                <div class="media-left">
                                <figure class="image is-64x64">
                                    <img :src="item.avatarFB" alt="Ảnh đại diện">
                                </figure>
                                </div>
                                <div class="media-content">
                                <div class="content">
                                    <p>
                                    <a :href="item.idFB" target="_blank"><strong style="font-size: 17px;
                                color: #365899;">{{item.nameFB}}</strong></a>
                                    <br><span style="font-size: 15px;">
                                    {{item.messageFB}}
                                    </span></p>
                                </div>
                            
                                </div>
                            </article>
                        </div>
                     <div class="box" v-if="!isActiveNowComment">
                            <vue-content-loading  :height="100">
                                    <circle cx="30" cy="30" r="30" />
                                    <rect x="80" y="10" rx="4" ry="4" width="90%" height="20" />
                                    <rect x="80" y="40" rx="3" ry="3" width="90%" height="60" />
                            </vue-content-loading>
                        <vue-content-loading  :height="100">
                                    <circle cx="30" cy="30" r="30" />
                                    <rect x="80" y="10" rx="4" ry="4" width="90%" height="20" />
                                    <rect x="80" y="40" rx="3" ry="3" width="90%" height="60" />
                            </vue-content-loading>
                     </div>
                </div>

                <div style="background: #FFF;border:1px solid #dddee1;">
                    <Tabs>
                        <TabPane label="NOW COMMENT" icon="radio-waves">
                        
                        <article class="media-now" v-if="isActiveNowComment">
                                <figure class="media-left-now">
                                    <p class="image is-64x64">
                                    <img :src="avatarFBNow">
                                    </p>
                                </figure>
                                <div class="media-content-now">
                                    <div class="content-now">
                                    <p>
                                    <strong style="font-size: 17px;
                                        border-radius: 21px;">{{ nameFBNow }}</strong>
                                       <p  style="    font-size: 19px;
                                        background: orange;
                                        font-weight: 500;
                                        color: #000;
                                        padding: 5px;
                                        border-radius: 3px;"> {{ messageFBNow }} </p>
                                    </p>
                                    </div>
                                   
                                </div>

                            </article>
                        <article class="media-now" style="padding-left: 30px;" v-else>
                            <vue-content-loading  :height="120" style="width:100%">
                                    <circle cx="30" cy="30" r="30" />
                                    <rect x="80" y="10" rx="4" ry="4" style="width:80%" height="20" />
                                    <rect x="80" y="40" rx="3" ry="3" style="width:80%" height="80" />
                            </vue-content-loading>
                        </article>
                        
                        </TabPane>
                        
                        <TabPane label="SẢN PHẨM TIẾP" icon="cube" disabled>标签二的内容</TabPane>
                    </Tabs>
                </div>
            </Col>
            <!-- ========== END COMMENT LIVE ========= -->

            <!-- ========== CODE PRODUCT ========== -->
            <Col :sm="{ span: 7}" :md="{ span: 7}" :lg="{ span: 9}" style="background: #FFF;height:100vh">
             <div style="background: rgb(255, 255, 255);
                padding: 6.8px 7.8px;
                border-right: 1px solid #dddee1;
                border-left: none;
                border-bottom: 1px solid #dddee1">
                    <h2><Icon type="at"></Icon> MÃ SẢN PHẨM</h2>
                </div>
            <div class="boxCodeProduct" v-if="isCheck == 1">
                    <h1 style="font-size: 86px;"> {{ codeProduct }} </h1>
            </div>
            <div class="boxCodeProduct" v-else style="padding-top:20px">
             <vue-content-loading  :height="100" style="width:100%">
                                <rect x="80" y="0" rx="3" ry="3" style="width:60%" height="80" />
                            </vue-content-loading>
            </div>
            <div class="boxInfoProduct">
                    <Col :xs="24" :sm="10" :md="10" :lg="10">
                         <div style="background: rgb(255, 255, 255);
                            padding: 6.8px 7.8px;
                            border-right: 1px solid #dddee1;
                            border-left: none;color:#444;
                            border-bottom: 1px solid #dddee1">
                                <h3><Icon type="image"></Icon> ẢNH ĐẠI ĐIỆN </h3>
                            </div>
                        <div v-if="isCheck == 1" style="border:1px solid #dddee1; border-left:none;border-top:none; padding: 8px;min-height:250px;">
                            <img style="width:100%;" src="https://thumbs.dreamstime.com/b/vector-shopping-paper-bags-13346237.jpg"/>
                        </div>
                        <div style="border:1px solid #dddee1; border-left:none;border-top:none; padding: 8px;min-height:250px;" v-else>
                            <vue-content-loading  :height="400" style="width:100%;margin-left:-30px">
                                <rect x="80" y="0" rx="3" ry="3" style="width:80%" height="400" />
                            </vue-content-loading>
                        </div>

                    </Col>
                    <Col :xs="24" :sm="14" :md="14" :lg="14">
                     <div style="background: rgb(255, 255, 255);
                        padding: 6.8px 7.8px;
                        border-right: 1px solid #dddee1;
                        border-left: none;color:#444;
                        border-bottom: 1px solid #dddee1">
                            <h3><Icon type="information-circled"></Icon> THÔNG TIN SẢN PHẨM</h3>
                        </div>
                        <div v-if="isCheck == 1" style="border:1px solid #dddee1;min-height:250px;text-align:left;border-top:none;border-left:none;padding: 8px;">
                            <p><h3><Icon type="android-arrow-dropright"></Icon> TÊN SẢN PHẨM : <p style="font-size:18px;color:#ff9900;text-align:center;">" Váy yếm màu đen đẹp và dễ thương "</p></h3></p>
                            <div style="border-top: 1px solid #dddee1;margin-bottom:5px"></div>
                            <p><h3><Icon type="android-arrow-dropright"></Icon> MÔ TẢ SẢN PHẨM : <p style="color: #ff9900;text-align:center;font-size:16px">" Đẹp và mát Đẹp và mát Đẹp và mát "</p></h3></p>
                            <div style="border-top: 1px solid #dddee1;margin-top:5px;margin-bottom:5px"></div>
                            <p><h3><Icon type="android-arrow-dropright"></Icon> GIÁ SẢN PHẨM : <p style="color: #ff9900;text-align:center;font-size:20px"> 223.000 VND</p></h3></p>

                        </div>
                        <div style="border:1px solid #dddee1;min-height:250px;text-align:left;border-top:none;border-left:none;padding: 8px;" v-else>
                             <vue-content-loading  :height="120" style="width: 110%; margin-left: -40px;">
                                    <rect x="80" y="10" rx="4" ry="4" style="width:80%" height="20" />
                                    <rect x="80" y="40" rx="3" ry="3" style="width:80%" height="80" />
                            </vue-content-loading>
                             <vue-content-loading  :height="120" style="width: 110%; margin-left: -40px;">
                                    <rect x="80" y="10" rx="4" ry="4" style="width:80%" height="20" />
                                    <rect x="80" y="40" rx="3" ry="3" style="width:80%" height="80" />
                            </vue-content-loading>
                        </div>

                    </Col>
            </div>

            </Col>
            <!-- ========== END CODE PRODUCT ========== -->

            <!-- =========== SIDEBAR RIGHT ============= -->
            <Col :sm="{ span: 2}" :md="{ span: 2}" :lg="{ span: 1}" style="padding-top:10px;background: rgb(72, 72, 72);height:100vh">
            <Tooltip placement="left-start" content="ĐƠN HÀNG CỦA BẠN">
            <Badge :count="countNumberOrder">
                <Button type="warning" @click="modal = true" class="sidebarRight"><Icon type="clipboard"></Icon></Button>
            </Badge>
            </Tooltip>

            <Tooltip placement="left-start" content="ĐƠN DỰ BỊ">
            <Button type="warning" @click="modalT = true" class="sidebarRight"><Icon type="clipboard"></Icon></Button>
            </Tooltip>

            <Tooltip placement="left-start" content="KẾT NỐI THU ÂM">
            <Button class="sidebarRight" style="color:#000"><Icon type="ios-mic-off"></Icon></Button>
            </Tooltip>

            <Tooltip placement="left-start" content="CÀI ĐẶT TÙY CHỈNH">
            <Button type="warning" @click="modalOption = true" class="sidebarRight" style="padding: 5px 10px"><Icon type="ios-settings-strong"></Icon></Button>
            </Tooltip>
            </Col>
            <!-- ==========  END SIDEBAR RIGHT ========== -->

            <!-- ============ MODAL SIDEBAR ============= -->
              <Modal v-model="modal" :transition-names="['none']" cancel-text="" ok-text="OK" >
                    <div slot="header">
                        <h1><Icon type="clipboard" class="icon-cicle"></Icon> ĐƠN HÀNG CỦA BẠN</h1>
                    </div>
                    <p>Content of dialog</p>
                    <p>Content of dialog</p>
                    <p>Content of dialog</p>
                </Modal>
            <Modal v-model="modalT" :transition-names="['none']" cancel-text="" ok-text="OK" >
                    <div slot="header">
                        <h1><Icon type="clipboard" class="icon-cicle"></Icon> ĐƠN DỰ BỊ CỦA BẠN</h1>
                    </div>
                    <p>Content of dialog</p>
                    <p>Content of dialog</p>
                    <p>Content of dialog</p>
                </Modal>
            <!-- ============= SETTING OPTION ============ -->
            <Modal v-model="modalOption" :transition-names="['none']" cancel-text="" ok-text="OK" >
                    <div slot="header">
                        <h1><Icon type="ios-settings-strong" class="icon-cicle" 
                        style="padding: 4px 6px;
                        "></Icon> CÀI ĐẶT LIVE TÙY CHỈNH</h1>
                    </div>
                    <p>Content of dialog</p>
                    <p>Content of dialog</p>
                    <p>Content of dialog</p>
                </Modal>
            <!-- ============== MODAL CHECK LIVE ============== -->
            <Modal v-model="modalCheckLive" :styles="{top: '30%'}" class-name="ivu-modal-wrap-custom" :closable="false" :mask-closable="false" :transition-names="['none']"  @on-ok="ok"
                @on-cancel="cancel" >
                    <div slot="header">
                        <h1><Icon type="ios-information"></Icon> THÔNG BÁO </h1>
                    </div>
                    <p style="font-size: 18px;">ĐÃ KẾT THÚC LIVE</p>
                    <p style="font-size: 18px;">BẠN MUỐN ĐẾN MỤC "ĐƠN HÀNG"?</p>

                </Modal>
        </Row>

        </div>
        </div>
        </Col>
      </Row>
      

    </div>
</template>
<script>
import { VclFacebook, VclInstagram } from 'vue-content-loading';
import VueContentLoading from 'vue-content-loading';
import sidebar from '@/components/layout/customerServicePage/indexPage/sidebar'
    export default {
        name: 'indexPage',
        components: {
            sidebar,
            VueContentLoading,
            VclFacebook
        },
        data(){
            return {
                viewMenu: false,
                top: `0px`,
                left: '0px',
                typeLive: '',
                idLive: '',
                nameUser: '',
                iframeLinkVideoLive: '',
                imes: [],
                messageFBNow: '',
                nameFBNow: '',
                idFBNow: '',
                avatarFBNow: '',
                codeProduct: '',
                isActiveNowComment: false,
                isCheck: 0,
                modal: false,
                modalT: false,
                modalOption: false,
                modalCheckLive: false,
                countNumberOrder: 0
            }
        },
         sockets:{
            connect: () => {
                this.isConnected = true;
                console.log('Client Connected!');
            },
            disconnect() {
                this.isConnected = false;
                console.log('Dis Connected!');
                },
            randomNumber(value){
                console.log(value);
                this.isCheck = 1;
                this.codeProduct = value.randomNumber;
            },
            replyPingMessage(value){
                this.nameFBNow = value.nameFB;
                this.idFBNow = value.idFB;
                this.messageFBNow = value.messageFB;
                this.avatarFBNow = value.avatarFB;
                this.isActiveNowComment = true;
            },
            replyGetNumberOrder(value){
                this.countNumberOrder = value.totalNumberOrder;
            }
        },
        created(){
            var _this = this;
            var typeLive = this.$route.params.typeLive;
            var idLive = this.$route.params.id;
            this.typeLive = typeLive;
            this.idLive = idLive;
            if(idLive == 'undefined'){
                _this.$router.push('/welcome');
            }


            
            _this.iframeLinkVideoLive = this.$localStorage.get('linkVideoLive');

        },
        methods:{

            getLive(){
                    var _this = this;
                    var typeLive = this.$route.params.typeLive;
                    var idLive = this.$route.params.id;
                    this.typeLive = typeLive;
                    this.idLive = idLive;
                    var idUser = this.$session.get('authTic')._id;
                    var accessTokenPage = _this.$localStorage.get("accessTokenPage");
                    var accessTokenUser = _this.$session.get("longAccessTokenUser");

                    if(typeLive == 'f'){
                        var accessToken = accessTokenPage;
                    }else{
                        var accessToken = accessTokenUser;
                    }


                //============================= GET COMMENT SSE TỪ FB ===============================//
                var LiveComments = new EventSource(`https://streaming-graph.facebook.com/${idLive}/live_comments?access_token=${accessToken}&comment_rate=one_per_two_seconds&fields=from{name,id},message`);
                
                //============================= NHẬN DATA LIVE ===============================//
               
                LiveComments.addEventListener('open', function(event) {
                    
                    console.log('Connected SSE');

                    //============================= NHẬN DATA BÌNH LUẬN ===============================//
                        LiveComments.addEventListener('message', function(event) {
                        console.log(event.data);
                        var data = JSON.parse(event.data); // NHẬN DATA

                        var messageFB = data.message; // GÁN TIN NHẮN
                        var nameFB = data.from.name; // GÁN TÊN
                        var idFB = `https://facebook.com/${data.from.id}`; // GÁN ID
                        var idFBSys = data.from.id; // GÁN ID
                        var avatarFB = `https://graph.facebook.com/${data.from.id}/picture?type=small`;// GÁN ID LẤY ẢNH

                        // GỬI BÌNH LUẬN HIỂN THỊ CLIENT //
                        _this.imes.push({messageFB,nameFB,avatarFB,idFB,idFBSys});
                        console.log(_this.imes);
                         // Lấy Comment Hiện tại
                        _this.$socket.emit('pingMessage', {messageFB,nameFB,avatarFB,idFB})

                        // GỬI COMMENT CHECK ĐƠN HÀNG -- EMIT "replyRandom" //
                        _this.$socket.emit('replyRandom', {messageFB,nameFB,avatarFB,idFB , idUser , idFBSys})
                        
                        // HIỂN THỊ TIN NHẮN VÀ TÊN RA NGOÀI

                        //  console.log(`Tin nhắn: ${data.message} - Từ: ${data.from.name}`);

                        });
                   
                });
                
                LiveComments.onerror = function() {
                    console.log("EventSource 404.");
                         _this.modalCheckLive = true;
                        
                    };  
              //============================= KIỂM TRA KẾT NỐI OPENLIVE ===============================//

            },// Kết thúc getLive
            ok(){
                this.$router.push('/app/don-hang');
            },
            cancel(){
                this.$router.push('/app');
            },
            scrollToEnd() {    	
                var container = document.querySelector("#containerScroll");
                var scrollHeight = container.scrollHeight;
                container.scrollTop = scrollHeight;
            },
        },
        updated() { 
            this.scrollToEnd();
            },
        mounted(){
            var _this = this;
             window.setTimeout(function(){ 
                 var checkConnection = _this.isCheck;
                 if(checkConnection == 0){
                      location.reload();
                 }
             }, 1000);
            this.getLive();
        this.scrollToEnd();
           
        }
    }
</script>
<style>
.ivu-modal-wrap-custom{
    position: fixed;
    overflow: auto;
    top: 0;
    right: 0;
    background: #1d2129f7;
    bottom: 0;
    left: 0;
    z-index: 1000;
    -webkit-overflow-scrolling: touch;
    outline: 0;
}
.icon-cicle{
    border: 1px solid #515867;
    padding: 3px 7px;
    border-radius: 50%;
}
.ivu-modal-content {
    position: relative;
    background-color: #fff;
    border: 0;
    background-clip: padding-box;
    border-radius: 0px;
}
.ivu-modal-footer button + button {
    margin-left: 8px;
    margin-bottom: 0;
    border-radius: 0px;
}

.ivu-badge-count {
    position: absolute;
    transform: translateX(50%);
    top: 1px;
    right: 45px;
    height: 20px;
    border-radius: 10px;
    min-width: 20px;
    background: #ed3f14;
    border: 1px solid transparent;
    color: #fff;
    line-height: 18px;
    text-align: center;
    padding: 0 6px;
    font-size: 12px;
    white-space: nowrap;
    transform-origin: -10% center;
    z-index: 10;
    box-shadow: 0 0 0 1px #fff;
}
.sidebarRight{
    padding: 5px 12px;
    border-radius: 25px;
    margin: 6px;
    font-size: 16px;
    border: 1px solid #FFF;
}

.sidebarRight:hover{
    padding: 5px 12px;
    border-radius: 25px;
    margin: 6px;
    background:#FFF;
    font-size: 16px;
    color: orange;
    border: 1px solid orange;
}

.boxCodeProduct{
    border: 1px solid #f1f1f1;
    border-top: none;
    padding: 10px;
}
.media-now {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: left;
    padding: 0px 10px;
    min-height: 172px;
    max-height: 172px;
}
.media-now img{
   border: 2px solid #f1caa3;
    width: 60px;
    border-radius: 50%;
}
.media-left-now {
    margin-right: 1rem;
}
.media-left-now, .media-right-now {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.media-content-now {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    text-align: left;
}

.box {
    border-radius: 5px;
    color: #4a4a4a;
    display: block;
    padding: 8px;
    margin-bottom: 5px;
}
.box img{
    width: 40px;
    border-radius: 50%;
}
.media-content{
    background-color: #fff;
    border-radius: 5px;
    box-shadow: -1 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    color: #4a4a4a;
    display: block;
    padding: 8px;
}
.media {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: left;
}
.media-left {
    margin-right: 1rem;
}
.media-left, .media-right {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.media-content {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    text-align: left;
}

.scrollCommentLive {
    background: #f0f0f0;
    width: 100%;
    border: 1px solid #dddee1;
    border-top: none;
    border-bottom: none;
    height: 330px;
    overflow-y: scroll;
    overflow-x: hidden;
}

/* width */
.scrollCss ::-webkit-scrollbar {
    width: 5px;
}

/* Track */
.scrollCss ::-webkit-scrollbar-track {
    background: #f1f1f1; 
}
 
/* Handle */
.scrollCss ::-webkit-scrollbar-thumb {
    background: #dddee1; 
}

/* Handle on hover */
.scrollCss ::-webkit-scrollbar-thumb:hover {
    background: orange; 
}

 .text-live {
    border: 2px solid #1b1b1b;
    padding: 3px 4.5px;
    border-radius: 50%;
    background: #ffffff;     
    color: #ffae2a;
      -webkit-animation: colorchange 10s infinite alternate;
    }

    @-webkit-keyframes colorchange {
       0% {
        
        color: #b74343;
      }
      
      10% {
        
        color: #ffae2a;
      }
      
      20% {
        
        color: #b74343;
      }
      
      30% {
        
        color: #ffae2a;
      }
      
      40% {
        
        color: #b74343;
      }
      
      50% {
        
        color: #ffae2a;
      }
      
      60% {
        
        color: #b74343;
      }
      
      70% {
        
        color: #ffae2a;
      }
      80% {
     
        color: #b74343;
      }
      
      90% {
     
        color: #ffae2a;
      }
      
      100% {
        
        color: #b74343;
      }
}
.iframeCss{
    width: 100%;
    border: 0px;
    min-height: 400px;
    height: 100vh;
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