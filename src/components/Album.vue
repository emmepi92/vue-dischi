<template>
    <div class="album-container">
        <div class="album-content">
            <img :src="album.poster" alt="">
            <h3>{{ album.title }}</h3>
            <div class="info">{{ album.author }}</div>  
            <div class="info">{{ album.year}}</div>     
        </div>
    </div>
</template>

<script>
export default {
    name: 'Album',
    props: [
        'album'
    ]
}
</script>

<style lang="scss" scoped>
    .album-container {
        text-align: center;

        .album-content {
            margin: 15px 10px;
            background-color: rgb(46, 58, 70);
            padding: 20px;
            height: 430px;

            img {
                width: 100%;
            }

            h3 {
                text-transform: uppercase;
                padding: 15px 0;
            }

            div.info {
                color: #888;
                font-weight: bolder;
            }
        }
    }

</style>