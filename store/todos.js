
export const state = () =>({
    
    proyects:[{nombre:'', autor:'', descripcion:'', urlImagen: ''}]

})

export const getters = {

    getProyect(state) {
        return state.proyects
    },
    getProyect:(state) => (index) => {
        return state.proyects[index]
    }

}

export const mutations = {
    addProyect(state, payload){
        state.proyects.push(payload)
    },

    add(state, text) {
        state.list.push({
          text,
          done: false
        })
      },
      remove(state, { todo }) {
        state.list.splice(state.list.indexOf(todo), 1)
      },
      toggle(state, todo) {
        todo.done = !todo.done
      }
}

export const actions = {
    addProyect(context, payload){
        context.commit('addProyect', payload)
    }
}