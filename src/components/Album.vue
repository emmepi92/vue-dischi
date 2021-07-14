<template>
    <div class="album-container">
        <div class="album-content">
            <img :src="poster" alt="">
            <h3>{{ title }}</h3>
            <div class="info">{{ author }}</div>  
            <div class="info">{{ year}}</div>     
        </div>
    </div>
</template>

<script>
export default {
    name: 'Album',
    props: {
        poster: String,
        title: String,
        author: String,
        year: String
    }
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