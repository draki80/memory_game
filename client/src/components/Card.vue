<template>
    <div class="col-sm-4"
      
      @click="clicked"> 
        <div class="card text-center">
            <div class="card-body">
                <h1 class="card-body" :class="{'overlay': hide && !cardClicked}">{{ value }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
      data () {
        return {
            cardClicked: false,
            gameStarted: false
        }
    },
  props: {
    value: Number,
    hide: Boolean
  },
  methods: {
    clicked () {
      this.$emit('cardClicked', this.value)
    }
  }
}
</script>

<style scoped>
.overlay {
  top: 0;
  left: 0;
  color: red;
  background-color: red;
  z-index: 200;
}
</style>
