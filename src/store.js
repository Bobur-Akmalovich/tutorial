import axios from "axios";
import { createStore } from "vuex";



const store = createStore({
    state(){
        return {
          coun:[]
        }
    },
    mutations:{
      best(state,data){
        state.coun = data
      }
       
    },
    getters:{
      ref(state){
        return state.coun
      }
    },
    actions:{
async test({commit}){
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    commit("best",res)
}
    }
})


export default store;