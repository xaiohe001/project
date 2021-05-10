<template>
  <div>Detail</div>
</template>

<script>
export default {
    created(){
        this.axios.post('https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed',{
            client_type: 2608,
            cursor: "0",
            id_type: 2,
            limit: 20,
            sort_type: 200
        }).then(res=>{

            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    }
}



</script>

<style>

</style>