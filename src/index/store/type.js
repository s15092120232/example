import axios from 'axios';
export default {
    namespaced:true,
    state:{
        data:null
    },
    getters:{},
    mutations:{
        _updateType(state,payload){
            state.data = payload;
        }
    },
    actions:{
        getTypes(context){
            axios.get('http://localhost:3000/types')
                .then(result => context.commit('_updateType',result.data))
                .catch(err => console.log(err));
        }
    }
}