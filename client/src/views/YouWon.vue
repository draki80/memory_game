<template>
<div class="container">   
    <div class="row justify-content-center bg-success">
        <h1>You Won Congratulations !!!!!!!! :D :D :D</h1><br>
    </div>
    <div class="row justify-content-center mt-5">
        <button class="btn btn-success" @click="startNewGame">
            <h1>START NEW GAME</h1>
        </button>
    </div>
</div>
</template>

<script>
export default {
    name: 'YouWon',
    methods: {
        startNewGame() {
            this.$router.push({ name: 'start' })
        }
    }
}
</script>

<style scoped>

</style>
