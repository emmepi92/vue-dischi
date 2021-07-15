<template>
    <div>
        <span>Cerca l'Album per il titolo </span>        
        <input type="text" placeholder="Inserisci il titolo..." v-model="inputText">
        <button @click="$emit('searchTitle', inputText)">Cerca</button>
    </div>
</template>

<script>
export default {
    name:'SearchSong',
    data() {
        return {
            inputText:''
        }
    }
}
</script>

<style lang="scss" scoped>
div {
    text-align: center;
    padding-bottom: 30px;
    font-size: 20px;
}

</style>