import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sex: null,
    birthday: null,
    question1: null,
    question2: null,
    question3: null,
    consultation: null,
  },
  mutations: {
    setSex(state, sexData) {
      state.sex = sexData
    },
    setBirthDay(state, birthDay) {
      state.birthday = birthDay
    },
    setQuestion1(state, answer) {
      state.question1 = answer
    },
    setQuestion2(state, answer) {
      state.question2 = answer
    },
    setQuestion3(state, answer) {
      state.question3 = answer
    },
    setConsult(state, consultContent) {
      state.consultation = consultContent
    },
  },
  getters: {
    getSex(state) {
      return state.sex
    },
    getBirthDay(state) {
      return state.birthday
    },
    getQuestion1(state) {
      return state.question1
    },
    getQuestion2(state) {
      return state.question2
    },
    getQuestion3(state) {
      return state.question3
    },
    getConsult(state) {
      return state.consultation
    },
  },
  actions: {
    commitSex({commit}, value) {
      commit('setSex', value)
    },
    commitBirthDay({commit}, value) {
      commit('setBirthDay', value)
    },
    commitQuestion1({commit}, value) {
      commit('setQuestion1', value)
    },
    commitQuestion2({commit}, value) {
      commit('setQuestion2', value)
    },
    commitQuestion3({commit}, value) {
      commit('setQuestion3', value)
    },
    commitConsult({commit}, value) {
      commit('setConsult', value)
    },
  },
  modules: {
  }
})
