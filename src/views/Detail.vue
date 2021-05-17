<template>
    <div>
        <Nav></Nav>
        <div class="bakgd">
            <div class="detail">
                <div class="details">
                    <div>
                        <h2>{{contents.title}}</h2>
                        <div v-html="contents.content"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from './home/Nav'

export default {
    name:'Detail',
    components:{
        Nav
    },
     data() {
        return {
            contents: {
                title: null,
                content: null
            }
        }
    },
    created(){
        // console.log(this.$route);
        var id = this.$route.params.id
        this.axios.get('https://cnodejs.org/api/v1/topic/'+ id).then(res=>{
            console.log(res);
            this.contents = res.data.data
        }).catch(err=>{
            console.log(err);
        })
    }
}

</script>

<style lang="scss">
.bakgd{
    background-color: #E1E1E1;
    padding-top: 20px;
    padding-bottom: 20px;
     .detail{
            width: 700px;
            margin: auto;
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
}
   
</style>