<template>
<div class="container"> 
    <div v-if="!gameStarted" class="row justify-content-center mb-3">
        <h4>Memorise cards in ascending order</h4>
    </div>
    <div v-if="gameStarted" class="row justify-content-center mb-3">
        <h4>Click on cards in ascending order</h4>
    </div> 
    <div class="row">
        <Card 
            v-for="(cardValue, index) in cards"
            :key="index"
            :value="cardValue"
            :hide="gameStarted"
            :ref="cardValue"
            @cardClicked="checkNumber"
        />
    </div>
    <div class="row justify-content-center" v-if="!gameStarted">
        <button class="btn btn-danger" @click="startGame"><h1>START</h1></button>
    </div>
</div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
    components: { Card },
    name: 'Cards',
    data () {
        return {
            ascendingNumbers: [],
            gameStarted: false
        }
    },
    props: {
        cards: Array
    },

    methods: {
        startGame () {
            let numbersCopy = JSON.parse(JSON.stringify(this.cards))
            this.ascendingNumbers = numbersCopy.sort(function (a, b) {
                return a - b
            })
            this.gameStarted = true
        },
        checkNumber (numberValue) {
            if (!this.gameStarted) return
            let firstNumber = this.ascendingNumbers.shift()
            if (numberValue !== firstNumber) this.$router.push({ name: 'lost' })
            this.$refs[numberValue][0].cardClicked = true
            if (!this.ascendingNumbers.length) this.$router.push({ name: 'won' })
        }
    }
}
</script>

<style scoped>

</style>
