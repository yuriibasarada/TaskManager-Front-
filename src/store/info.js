export default {
  state: {
    info: {}
  },
  mutations: {
    setInfo(state, info) {
      state.info = info
    },
    clearInfo(state) {
      state.info = {}
    }
  },
  actions: {
    async fetchInfo({ dispatch, commit }) {
      try {
        const uid = await dispatch('getUid')
        const info = await axios
          .get(`http://localhost:8000/auth/getinfo/${uid}`)
          .then(function(response) {
            return response.data
          })
        commit('setInfo', info)
      } catch (e) {}
    },
    async updateInfo({ commit, dispatch, getters }, toUpdate) {
      const uid = await dispatch('getUid')
      const updateData = { ...getters.info, ...toUpdate }
      await axios
        .put(`http://localhost:8000/info/${uid}`, updateData)
        .then(function(response) {
          commit('setInfo', updateData)
        })
        .catch(function(e) {
          commit('setError', e)
          throw e
        })
    }
  },
  getters: {
    info: s => s.info
  }
}
