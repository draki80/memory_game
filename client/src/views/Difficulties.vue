<template>    
<div class="center">
    <div class="card text-center">
        <div class="card-header">
            Select game dificulty
        </div>
        <div class="card-body">
            <h5 class="card-title">Choose one of the difficulties</h5>
            <p class="card-text">Game will start when you select on one of the difficulties below</p>
                <button class="btn btn-primary" @click="getNumbers(4)"><h1>4</h1></button>
                <button class="btn btn-primary ml-2" @click="getNumbers(8)"><h1>8</h1></button>
                <button class="btn btn-primary ml-2" @click="getNumbers(12)"><h1>12</h1></button>
        </div>
        <div class="card-footer text-muted">
            Good luck ...
        </div>
    </div>
</div>

</template>

<script>
import CardsService from '../services/CardsService'

export default {
  name: 'Difficulties',
  methods: {
    async getNumbers (number) {
        let cards = await CardsService.getCards(number)
        this.$router.push({ name: 'cards', params: { cards: cards} })
    }
  }
}
</script>

<style scoped>
.center {
  margin: auto;
  align-content: center;
  width: 80%;
  padding: 10px;
}
</style>