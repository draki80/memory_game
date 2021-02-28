import Vue from 'vue'
import VueRouter from 'vue-router'

import Container from '../components/Container.vue'
import Cards from '../views/Cards.vue'
import Difficoulties from '../views/Difficulties.vue'
import YouLoose from '../views/YouLoose.vue'
import YouWon from '../views/YouWon.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/start',
            name: 'home',
            component: Container,
            children: [
                {
                    path: 'cards',
                    name: 'cards',
                    component: Cards,
                    props: true
                },
                {
                    path: 'start',
                    name: 'start',
                    component: Difficoulties
                },
                {
                    path: 'lost',
                    name: 'lost',
                    component: YouLoose
                },
                {
                    path: 'won',
                    name: 'won',
                    component: YouWon
                }
            ]
        },
       
    ]
})

