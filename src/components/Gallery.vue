<template>
    <section class="gallery">
        <h2>Gallery</h2>
        <div class="gallery__wrapper">
            <div class="gallery__wrapper__card" v-for="image of pictureGal" v-bind:key="image.id">
            <img class="gallery__wrapper__images" :src="image.src" @click="selectImage(image)"/>
            </div>
        </div>
    </section>
</template>
<!--$emit('imageSelected', image)-->
<script>
import {mapMutations} from 'vuex'

export default {
    name: 'Gallery',
    data () {
        return {
            pictureGal: ''
        }
    },
    emits: ['imageSelected'],
    methods: {
        ...mapMutations(['setCurrentPicture']),
        selectImage(image) {
            this.setCurrentPicture(image)
        }
    },
    mounted() {
        this.pictureGal = this.$store.state.pictures.data
    }
}
</script>
<style lang="scss" scoped>
    .gallery {

        display: flex;
        justify-content: center;
        flex-direction: column;

        h2 {
            flex: 1 1 100%;
        }

        &__wrapper {

            display: flex;
            align-items: flex-start;
            flex-wrap: wrap;
            
            &__card {
                max-width: 30%; 
                width: 13rem;
                height: 13rem;
                overflow: hidden;
                margin: 0.3rem;
            }

            &__images {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
</style>