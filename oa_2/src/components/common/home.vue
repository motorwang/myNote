<template>
    <div class="wrapper"> 
        <v-header></v-header>
        <v-sidebar></v-sidebar>
         <div class="content">
            <transition name="move" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script> 
    import vHeader from './header.vue';
    import vSidebar from './asider.vue';
    export default {
        components:{
            vSidebar,
            vHeader
        }
    }
</script>

<style>
    .content{
        background: none repeat scroll 0 0 #fff;
        position: absolute;
        left: 250px;
        right: 0;
        top: 70px;
        bottom:0;
        width: auto;
        padding: 10px 30px 50px 30px;
        box-sizing: border-box;
        overflow-y: scroll;
    }
</style>