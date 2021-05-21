<template>
    <div>
        <Nav></Nav>
        <div class="backgrounds">
            <div class="bakgd">
                <Sidetail></Sidetail>
                <div class="detail">
                    <div class="details">
                        <div>
                            <h2>{{contents.title}}</h2>
                            <div v-html="contents.content"></div>
                        </div>
                    </div>
                </div>
                <div class="aboutauthor">
                    <div class="aboutauthor__about">关于作者</div>
                    <div class="aboutauthor__img">
                        <img :src="url" alt="">
                        <div>
                            <h4>{{loginname}}</h4>
                            <p>{{contents.title}}</p>
                        </div>
                    </div>
                    <div class="aboutauthor__popularity">
                        <img src="../assets/medal.png" alt="">
                        年度人气作者 No.<span>{{length}}</span>
                    </div>
                    <div class="aboutauthor__thumbs">
                        <img src="../assets/like.png" alt="">
                        获得点赞<span>{{contents.reply_count}}</span>
                    </div>
                    <div class="aboutauthor__read">
                        <img src="../assets/look.png" alt="">
                        文章被阅读<span>{{contents.visit_count}}</span>
                    </div>
                    <Sidetil></Sidetil>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from './home/Nav'
import Sidetil from './Sidetil'
import Sidetail from './Sidetail'

export default {
    name:'Detail',
    components:{
        Nav,
        Sidetil,
        Sidetail
    },
     data() {
        return {
            contents:{
                title:null,
                content:null
            },
            url:'',
            loginname:'',
            length:'',

        }
    },
    created(){
        // console.log(this.$route);
        var id = this.$route.params.id
        this.axios.get('https://cnodejs.org/api/v1/topic/'+ id).then(res=>{
            console.log(res.data.data);
            this.contents = res.data.data
            // console.log(res.data.data.author.avatar_url);
            this.url=res.data.data.author.avatar_url
            this.loginname=res.data.data.author.loginname
            this.length=res.data.data.replies.length
        }).catch(err=>{
            console.log(err);
        })
    }
}

</script>

<style lang="scss">
.backgrounds{
        background-color: #E1E1E1;
        .bakgd{
            display: flex;
            justify-content: space-between;
            width: 1000px;
            margin: auto;
            padding-top: 20px;
            padding-bottom: 20px;
        .detail{
            width: 700px;
            padding: 10px;
            background-color: #fff;
            box-sizing: border-box;
            p{
                margin: 15px;
                img{
                    width: 650px;
                    object-fit: contain;

                }
            }
            .prettyprint{
                background: #f7f7f7;
                padding: 20px;
                box-sizing: border-box;
                code{
                    width: 700px;
                    white-space: pre-wrap;
                }
            }
            
            h2{
                margin: 30px;
            }
            h3{
                margin: 20px;
            }
        }
        .aboutauthor{
            width: 240px;
            height: 238px;
            box-sizing: border-box;
            background-color: #fff;
            &__about{
                height: 42px;
                padding: 12px 15px;
                box-sizing: border-box;
                font-size: 14px;
                color: #333;
                border-bottom: 1px solid #F4F4F4;
            }
            &__img{
                padding: 15px;
                box-sizing: border-box;
                display: flex;
                img{
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }
                div{
                    width: 147px;
                    margin-left: 20px;
                    p{
                        color: #72777b;
                        font-size: 15px;
                        margin-top: 10px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
            &__popularity{
                padding: 0 15px;
                height: 28px;
                font-size: 15px;
                margin-bottom: 10px;
                img{
                    width: 25px;
                    height: 25px;
                    position: relative;
                    top: 6px;
                }
            }
            &__thumbs{
                padding: 0 15px;
                height: 28px;
                font-size: 15px;
                margin-bottom: 10px;
                img{
                    width: 25px;
                    height: 25px;
                    position: relative;
                    top: 6px;
                }
            }
            &__read{
                padding: 0 15px;
                height: 28px;
                font-size: 15px;
                margin-bottom: 10px;
                img{
                    width: 25px;
                    height: 25px;
                    position: relative;
                    top: 6px;
                }
            }
        }
    }
}

   
</style>