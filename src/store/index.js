import {createStore } from 'vuex'
import pictures from '@/data.json';

const store = createStore({
   state () {
       return {
        name: "Vue",
        pictures: pictures
       }
   }
})

export default store
