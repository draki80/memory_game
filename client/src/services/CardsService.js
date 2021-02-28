import axios from 'axios'

const url = 'http://localhost:5000/api/cards/'

class CardsService {
    static async getCards(cardNumber) {
    try{
        const res = await axios.get(`${url}${cardNumber}`)
        return res.data
        } catch(err) {
            return err
        }
    }
}

export default CardsService