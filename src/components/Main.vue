<template>
    <div class="bg-fluid">

        <div class="container">

            <div class="row">

                <Album class="col-6 col-md-3 " 
                v-for="(album,index) in albums" :key="index" :album="album" />
                    
            </div>
        </div>
    </div>
</template>

<script>
import Album from "../components/Album.vue";

export default {
    name: 'Main',
    components: {
        Album
    },
    props: {
        albums:Array
    }
}
</script>

<style lang="scss" scoped>
    .bg-fluid {
        background-color: rgb(30, 45, 59);
        padding-top: 50px;
    }

</style>