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
  actions: {
  },
  modules: {
  }
})
