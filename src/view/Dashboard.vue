<template>
    <div>
        <Sidebar />
        <div class="view">
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
import Sidebar from '../components/Sidebar.vue'
export default {
    components:{
        Sidebar,
    }
}
</script>

<style>

</style>