<template>
    <section class="view">
        <h2>View</h2>
        <div class="view__wrapper">
            <div class="current"> {{this.$store.state.currentPicture.id}}</div>
            <img class="view__image" :src="this.$store.state.currentPicture.src" />
            <span>
            <button @click="prev">Prev</button><button @click="next">Next</button></span>
        </div>
    </section>
</template>
<script>
import { mapMutations } from 'vuex' 
export default {
    name: 'View',
    data () {
        return {

        }
    },
    // props: {
    //     image: {
    //         type: Object,
    //         default: ()=>{}
    //     }
    // },
    methods: {
        ...mapMutations(['setNewCurrentPicture', 'setCurrentPicture']),
        prev () {
            console.log(this.$store.state.currentPicture.id)
            if (this.$store.state.currentPicture.id === 1 || !this.$store.state.currentPicture) {
                this.setNewCurrentPicture(9)
            } 
            this.setNewCurrentPicture(this.$store.state.currentPicture.id - 1)
            
        },
        next () {
            if (this.$store.state.currentPicture.id === 9) {
                this.setNewCurrentPicture(1)
            }
            this.setNewCurrentPicture(this.$store.state.currentPicture.id + 1)
        }
    },
    computed: {

    },
}
</script>
<style lang="scss" scoped>
    .view {

        &__wrapper {
            height: 90%;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        &__image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    
    
</style>