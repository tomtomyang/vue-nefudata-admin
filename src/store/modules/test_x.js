import { getTest } from '../../api/test_api.js'

const state = {
    loginState:{},
    test:'haha'
}

const mutations = {
    changeLogin( state, params ) {
        console.log(params)
        state.loginState = params
    }
}

const actions = {
    doChangeLogin( context ) {
        getTest({
            username: 'admin',
            password: '123456'
        })
        .then(res =>{
            console.log(res)
            context.commit('changeLogin',res)
        }) 
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}