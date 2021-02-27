const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

router.get('/:cardNumber', (req, res) => {
    let response = []
    for (let step = 0; step < req.params.cardNumber; step++) {
        let randomNumber = Math.floor(Math.random() * Math.floor(1000))
        response.push(randomNumber)
      }
      res.send(response)
})



module.exports = router;
