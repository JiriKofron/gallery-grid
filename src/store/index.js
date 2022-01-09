import {createStore } from 'vuex'
import pictures from '@/data.json';

const store = createStore({
   state () {
       return {
        pictures: pictures,
        currentPicture: {}
       }
   },
   mutations: {
       setCurrentPicture (state, image) {
           state.currentPicture = image
       },
       setNewCurrentPicture (state, imageId ) {
           const newCurrentPicture = state.pictures.data.find(picture => picture.id === imageId)
           state.currentPicture = newCurrentPicture
       }
   }
})

export default store
