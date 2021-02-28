<template>
<div class="container">   
    <div class="row justify-content-center bg-danger">
        <h1>You lose loooooooser!!!!!!</h1><br>
    </div>
    <div class="row justify-content-center">
        <button class="btn btn-success mt-5" @click="startNewGame">
            <h1>START NEW GAME</h1>
        </button>
    </div>
</div>
</template>

<script>
export default {
    name: 'YouLoose',
    methods: {
        startNewGame() {
            this.$router.push({ name: 'start' })
        }
    }
}
</script>

<style scoped>

</style>
