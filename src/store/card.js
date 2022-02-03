import { CARD_ADD, CARD_UPDATE, CARD_DELETE, CARD_DESTROY } from './actions';

//initial state

const state = {
    cards: [],
    totalCard:0,
    totalAmount:0
}

// getters
const getters = {
    status: state => state.status,
    cardInfo: state => state.cards,
    totalCard: state => state.totalCard,
    totalAmount: state => state.totalAmount,
}

//actions
const actions = {
    cardAdd(context, card) {
        context.commit('CARD_ADD', card);
    },
    cardUpdate(context) {
        context.commit('CARD_UPDATE');
    },
    cardDelete(context, key) {
        context.commit('CARD_DELETE', key);
    },
    cardDestroy(context) {
        context.commit('CARD_DESTROY');
    }
}

//mutations
const mutations = {
    [CARD_ADD]: (state, card) => {
        state.cards.push(card);
    },
    [CARD_UPDATE]: (state) => {
        let cards = state.cards;
        state.totalAmount = 0;
        for(let key in cards) {
            state.totalAmount += cards[key]['qty'] * cards[key]['currentSalePrice']
          }
          state.totalCard = cards.length;
    },
    [CARD_DELETE]: (state, key) => {
        state.cards.pop(key);
    },
    [CARD_DESTROY]: (state) => {
        state.cards = [];
        state.totalCard = 0;
        state.totalAmount = 0;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }