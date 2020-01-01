import Vuex from 'vuex'
import Vue from 'vue'
import autosave from 'vuex-persistedstate'

// set up vue to use vuex
Vue.use(Vuex)

// This is probably the most important part of the entire tool
// We're creating a localstorage savespot for the names in the
// cart so users can close the window and open it again and 
// find their previous cart still in place

export default new Vuex.Store({
    plugins: [
        // autosave instantly saves changes to localstorage
        autosave()
    ],
    // states are our objects to use
    state: {
        nameCart: [],
        availableNames: [
            'Kain',
            'Abel',
            'Peter',
            'Paul',
            'Mary',
            'Sage'
        ],
        offeredNames: [],
        openSales: []
    },
    // getters are used to retrieve states
    getters: {
        getNameCart: state => {
            return state.nameCart
        },
        getNames: state => {
            return state.availableNames
        },
        getOffers: state => {
            return state.offeredNames
        },
        getSales: state => {
            return state.openSales
        }
    },
    // mutations modify states
    mutations: {
        // obviously a lot of anti-dry and using the payload you could create a
        // more refined and refactored version but fuck it lmao
        mutNameCart: (state, payload) => {
            // to make it simple to remove items, we just check
            // if that item already exists and delete it if this
            // is true, otherwise we'll add a new array entry
            if(state.nameCart.includes(payload)){
                state.nameCart.splice(state.nameCart.indexOf(payload), 1)
            } else {
                state.nameCart.push(payload)
            }
        },
        mutNames: (state, payload) => {
            if(state.availableNames.includes(payload)){
                state.availableNames.splice(state.availableNames.indexOf(payload), 1)
            } else {
                state.availableNames.push(payload)
            }
        },
        mutOffers: (state, payload) => {
            if(state.offeredNames.includes(payload)){
                state.offeredNames.splice(state.offeredNames.indexOf(payload), 1)
            } else { 
                state.offeredNames.push(payload) 
            }
        },
        mutSales: (state, payload) => {
            if(state.openSales.includes(payload)){
                state.openSales.splice(state.openSales.indexOf(payload), 1)
            } else {
                state.openSales.push(payload)
            }
        }
    },
    // actions call mutations to prevent unclean runtimes
    // one action can call multiple mutations and doesn't have to carry a payload
    actions: {
        setNameCart: (context, payload) => {
            context.commit('mutNameCart', payload)
        },
        setNames: (context, payload) => {
            context.commit('mutNames', payload)
        },
        setOffers: (context, payload) => {
            context.commit('mutOffers', payload)
        },
        setSales: (context, payload) => {
            context.commit('mutSales', payload)
        }
    }
})