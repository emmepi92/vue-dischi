<template>
    <div>
        <label  for="genre">Scegli un genere </label>
        <select @change="$emit('filter', inputGenre)" v-model="inputGenre">
            <option value="">Tutti</option>
            <option v-for="(genre,index) in genreList" :key="index"  :value="genre">{{ genre }}</option>

            <!-- versione non dinamica 
            <option value="Pop">Pop</option>
            <option value="Rock">Rock</option>
            <option value="Metal">Metal</option>
            <option value="Jazz">Jazz</option> -->

        </select>
    </div>
</template>

<script>
export default {
    name: 'Select',
    props: {
        genreList:Array
    },
    data () {
        return {
            inputGenre: ''
        }
    }
}
</script>

<style lang="scss" scoped>
div {
    text-align: center;
    padding-bottom: 30px;
    font-size: 20px;
    label {
        margin-right: 10px;
    }
}

</style>