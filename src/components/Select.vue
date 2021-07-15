<template>
    <div>
        <label  for="gener">Scegli un genere </label>
        <select @change="$emit('filter', inputGener)" v-model="inputGener">
            <option value="">Tutti</option>
            <option value="Pop">Pop</option>
            <option value="Rock">Rock</option>
            <option value="Metal">Metal</option>
            <option value="Jazz">Jazz</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'Select',
    data () {
        return {
            inputGener: ''
        }
    }
}
</script>

<style lang="scss" scoped>
div {
    label {
        margin-right: 10px;
    }
}

</style>