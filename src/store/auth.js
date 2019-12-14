import axios from 'axios'
axios.defaults.headers['Content-Type'] = 'application/json'

export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      await axios
        .post(process.env.VUE_APP_SERVER + '/login', { email, password })
        .then(function(response) {
          commit('setToken', response.data.token)
        })
        .catch(function(e) {
          commit('setError', e.response.data.error)
          throw e
        })
    },
    async register({ dispatch, commit }, { email, password, name }) {
      await axios
        .post(process.env.VUE_APP_SERVER + '/register', {
          email,
          password,
          name
        })
        .then(function(response) {
          commit('setToken', response.data.token)
        })
        .catch(function(e) {
          commit('setError', e.response.data.errors[0])
          throw e
        })
    },

    async getUid({ commit }) {
      let token = localStorage.token
      return await axios
        .post('http://localhost:8000/auth/getid', { token })
        .then(function(response) {
          return response.data.id
        })
        .catch(function(e) {
          commit('clearToken')
          commit('setError', e.response)
          throw e
        })
    },

    async logout({ commit, dispatch }) {
      commit('clearToken')
      commit('clearInfo')
    }
  }
}
