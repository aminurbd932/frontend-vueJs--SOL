import { 
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS, 
    PRODUCT_UNSUCCESS,
    PRODUCT_ERROR,
    PRODUCT_DESTROY } from './actions';
const axios = require('axios');
//initial state

const state = {
    status: '',
    products: {},
}

// getters
const getters = {
    status: state => state.status,
    productInfo: state => state.products,
}

//actions
const actions = {
    getProducts(context) {
        return new Promise((resolve, reject) => {
            context.commit('PRODUCT_REQUEST');
            axios.get("http://localhost:3000/product/all?page=1&limit=25")
                .then((res) => {
                    if(res.status == 200) {
                        let items = res.data.items;
                        context.commit('PRODUCT_SUCCESS', items);
                    } else {
                        context.commit('PRODUCT_UNSUCCESS');
                    }
                    resolve(res);
                }).catch((err) => {
                    context.commit('PRODUCT_ERROR');
                    reject(err);
            })
        }) 
    },
    destroy(context) {
        return new Promise((resolve, reject) => {
            context.commit('PRODUCT_DESTROY');
            resolve('');
        })
    }
}

//mutations
const mutations = {
    [PRODUCT_REQUEST]:(state) => {
        state.status = 'loading';
    },
    [PRODUCT_SUCCESS]: (state, records) => {
        state.status = 'success';
        state.productInfo = records;
    },
    [PRODUCT_UNSUCCESS]: (state) => {
        state.status = 'unsucess';
    },
    [PRODUCT_ERROR]: (state) => {
        state.status = 'error';
    },
    [PRODUCT_DESTROY]: (state) => {
        state.productInfo = {};
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }