import { 
    ORDER_REQUEST,
    ORDER_SUCCESS, 
    ORDER_UNSUCCESS,
    ORDER_ERROR,
    ORDER_DESTROY } from './actions';
const axios = require('axios');
//initial state

const state = {
    status: '',
    products: {},
}

// getters
const getters = {
    status: state => state.status,
    orderInfo: state => state.products,
}

//actions
const actions = {
    getProducts(context) {
        return new Promise((resolve, reject) => {
            context.commit('ORDER_REQUEST');
            axios.get("http://localhost:3000/product/all?page=1&limit=25")
                .then((resp) => {
                    if(res.status == 200) {
                        context.commit('ORDER_SUCCESS', resp.data.items);
                    } else {
                        context.commit('ORDER_UNSUCCESS');
                    }
                    resolve(resp);
                }).catch((err) => {
                    context.commit('ORDER_ERROR');
                    reject(err);
            })
        }) 
    },
    destroy(context) {
        return new Promise((resolve, reject) => {
            context.commit('ORDER_DESTROY');
            resolve('');
        })
    }
}

//mutations
const mutations = {
    [ORDER_REQUEST]:(state) => {
        state.status = 'loading';
    },
    [ORDER_SUCCESS]: (state, records) => {
        state.status = 'success';
        state.orderInfo = records;
    },
    [ORDER_UNSUCCESS]: (state) => {
        state.status = 'unsucess';
    },
    [ORDER_ERROR]: (state) => {
        state.status = 'error';
    },
    [ORDER_DESTROY]: (state) => {
        state.orderInfo = {};
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }