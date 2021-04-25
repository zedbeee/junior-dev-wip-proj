// store/index.js

import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

//to handle state
const state = {
    demands: [],
    customers: []
}

//to handle state
const getters = {}

//to handle actions
const actions = {
    getDemands({ commit }) {
        try {
            axios.get('http://localhost:3000/demands')
                .then(response => {
                    commit('SET_DEMANDS', response.data)
                })
        } catch (e) {
            console.error(e)
        }
    },
    getCustomers({ commit }) {
        try {
            axios.get('http://localhost:3000/customers')
                .then(response => {
                    commit('SET_CUSTOMERS', response.data)
                })
        } catch (e) {
            console.error(e)
        }
    }
}

//to handle mutations
const mutations = {
    SET_DEMANDS(state, demands) {
        state.demands = demands
    },
    SET_CUSTOMERS(state, customers){
        state.customers = customers
    }
}

//export store module
export default new Vuex.Store( {
    state,
    getters,
    actions,
    mutations
})