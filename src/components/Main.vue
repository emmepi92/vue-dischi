<template>
    <div class="bg-fluid">

        <div class="container">

            <div class="row">
                <!-- perchè la chiama è unica all'API -->
                <div v-if="albums.length === 0" class="wait">
                    <h1>...caricamento in corso...</h1> 

                </div>

                <!-- qunado devi usare bootstrap ma vuoi 5 elementi per row -->
                <Album class="custom-col" 
                v-else
                v-for="(album,index) in albums" :key="index" 
                :poster="album.poster" 
                :title="album.title" 
                :author="album.author" 
                :year="album.year" 

                />
                    
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
        padding-bottom: 50px;
        .container {
            .row {
                .wait {
                    height: calc(100vh - 68px);
                    text-align: center;
                }
                .custom-col {
                    width: 20%;
                }
            }
        }
    }

</style>