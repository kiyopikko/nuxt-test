export const state = () => ({
  films: []
})

export const getters = {
  films(state) {
    return state.films
  }
}

export const mutations = {
  setFilms(state, films) {
    // ここに非同期処理は書かない
    state.films = films // state を更新
  }
}

export const actions = {
  async fetchFilms({ commit }) {
    const res = await this.$axios('https://ghibliapi.herokuapp.com/films')
    const films = res.data
    commit('setFilms', films)
  }
}
