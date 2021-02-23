import { createStore } from 'vuex'

export default createStore({
    state: {
        name: '高俊东'
    },
    actions: {
        changeName({commit}, name) {
            commit('CHANGE_NAME', name)
        }
    },
    mutations: {
        CHANGE_NAME(state, name) {
            state.name = name
        }
    },
    getters: {
        name: state => state.name
    },
    modules: {
    }
})
